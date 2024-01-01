import { SECRET } from "../../constants/secret.ts";

type TAccessToken = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
};

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
      code: code,
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
  return res.user ? true : false;
};
