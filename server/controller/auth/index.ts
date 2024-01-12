import { SECRET } from "../../constants/secret.ts";
import {
  Context,
  deleteCookie,
  getCookie,
  Hono,
  setCookie,
} from "../../deps.ts";
import {
  checkToken,
  decrypt,
  encrypt,
  getAccessToken,
  parseTokenData,
  revokeAccessToken,
  stringifyTokenData,
} from "../../service/auth/index.ts";
import { throwAPIError } from "../../util/throwError.ts";

const app = new Hono();

/**
 * OAuth2.0の認可エンドポイント
 * Discordの認可画面にリダイレクトするようにする
 */
app.get("/signin", (c: Context) => {
  return c.json({ redirectUrl: SECRET.AUTH_ENDPOINT });
});

/**
 * トークンを返すエンドポイント
 * /authで認可した後に、このエンドポイントにリダイレクトされる
 * このエンドポイントでは、認可コードを使ってトークンを取得する
 * トークンは、access_token, refresh_token, expires_in, token_type, scopeの5つの情報を持つ
 */
app.get("/token", async (c: Context) => {
  const code = c.req.query("code");
  if (!code) return throwAPIError(401, "code is not found")();
  const accessToken = await getAccessToken(code);
  if (!accessToken) return throwAPIError(401, "accessToken is not found")();
  const requiredTokenData = stringifyTokenData(accessToken);

  setCookie(c, "accessToken", encrypt(requiredTokenData), {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
    maxAge: accessToken.expires_in,
  });

  // TODO: これ別に動いてないので、他の手段を使う必要がありそう
  return c.redirect(SECRET.CLIENT_URL + "/home");
});

/**
 * トークンを検証するエンドポイント
 * ユーザーが返ってくるかどうかで見ている。もう少し良い見方はありそう
 */
app.get("/token/check", async (c: Context) => {
  const accessToken = getCookie(c, "accessToken");
  if (!accessToken) return c.json({ hasValidToken: false });
  const decryptedAccessToken = decrypt(accessToken);
  const requiredTokenData = parseTokenData(decryptedAccessToken);

  // TODO: トークンの有効期限が切れているかどうかも見る処理も追加する
  const isValidToken = await checkToken(requiredTokenData.access_token);
  return isValidToken
    ? c.json({ hasValidToken: true })
    : c.json({ hasValidToken: false });
});

/**
 * アクセストークンを無効化し、cookieに入っているアクセストークンを破棄するエンドポイント
 */
app.post("/signout", async (c: Context) => {
  const accessToken = getCookie(c, "accessToken");
  if (!accessToken) return c.json({ isRevoked: false });
  const decryptedAccessToken = decrypt(accessToken);
  const requiredTokenData = parseTokenData(decryptedAccessToken);
  const revoked = await revokeAccessToken(requiredTokenData.access_token);
  deleteCookie(c, "accessToken");
  return c.json(revoked);
});

export default app;
