import { SECRET } from "../../constants/secret.ts";
import { Buffer, crypto } from "../../deps.ts";
import { TAccessToken, TEncryptedData, TRequiredAccessToken } from "./type.ts";

const ALGO = "aes-128-cbc";
const PASSWORD = SECRET.CRYPTO_PASSWORD;
const SALT = SECRET.CRYPTO_SALT;

/**
 * トークンを取得して返す
 */
export const getAccessToken = async (code: string): Promise<TAccessToken> => {
  const accessToken = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: SECRET.DISCORD_CLIENT_ID,
      client_secret: SECRET.DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      code,
      redirect_uri: SECRET.SERVER_URL + "/auth/token",
      scope: "identify guilds",
    }),
  })
    .then((res) => res.json());
  return accessToken;
};

/**
 * トークンが有効かどうかをユーザーが返ってくるかどうかを見て確認している
 */
export const checkToken = async (accessToken: string): Promise<boolean> => {
  const res = await fetch("https://discord.com/api/users/@me", {
    headers: { Authorization: `Bearer ${accessToken}` },
  }).then((res) => res.json());
  return res.id ? true : false;
};

/**
 * トークンを無効化する
 * https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-token-revocation-example
 */
export const revokeAccessToken = async (
  accessToken: string,
): Promise<TAccessToken> => {
  const isTokenRevoked = await fetch(
    "https://discord.com/api/oauth2/token/revoke",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        token: accessToken,
        token_type_hint: "access_token",
      }),
    },
  ).then((res) => res.json());

  return isTokenRevoked;
};

/**
 * cookieに保存するときに暗号化するための関数
 * 暗語化したデータとivをbase64に変換して返している
 */
export const encrypt = (data: string): string => {
  const bufferData = Buffer.from(data);
  const key = crypto.scryptSync(PASSWORD, SALT, 16);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGO, key, iv);

  let encryptedData = cipher.update(bufferData);
  encryptedData = Buffer.concat([encryptedData, cipher.final()]);

  return btoa(
    JSON.stringify({
      iv: iv.toString("base64"),
      encryptedData: encryptedData.toString("base64"),
    }),
  );
};

/**
 * cookieから取り出したデータを復号化するための関数
 * cookieに保存するときに暗号化したデータとivをbase64化しているので、parseしてivと暗号化したデータを取り出している
 */
export const decrypt = (data: string): string => {
  const { iv, encryptedData }: TEncryptedData = JSON.parse(atob(data));
  const decodedIv = Buffer.from(iv, "base64");
  const decodedEncryptedData = Buffer.from(encryptedData, "base64");
  const key = crypto.scryptSync(PASSWORD, SALT, 16);
  const decipher = crypto.createDecipheriv(ALGO, key, decodedIv);

  let decryptedData = decipher.update(decodedEncryptedData);
  decryptedData = Buffer.concat([decryptedData, decipher.final()]);
  return decryptedData.toString("utf-8");
};

export const stringifyTokenData = (accessToken: TAccessToken): string => {
  return JSON.stringify({
    access_token: accessToken.access_token,
    refresh_token: accessToken.refresh_token,
  });
};

export const parseTokenData = (tokenData: string): TRequiredAccessToken => {
  return JSON.parse(tokenData);
};
