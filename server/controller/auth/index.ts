import { SECRET } from "../../constants/secret.ts";
import { Context, getCookie, Hono, setCookie } from "../../deps.ts";
import { checkToken, getAccessToken } from "../../service/auth/index.ts";
import { throwAPIError } from "../../util/throwError.ts";

const app = new Hono();

/**
 * OAuth2.0の認可エンドポイント
 * Discordの認可画面にリダイレクトするようにする
 */
app.get("/", (c: Context) => {
  return c.redirect(SECRET.AUTH_ENDPOINT);
});

/**
 * トークンを返すエンドポイント
 * /authで認可した後に、このエンドポイントにリダイレクトされる
 * このエンドポイントでは、認可コードを使ってトークンを取得する
 * トークンは、access_token, refresh_token, expires_in, token_type, scopeの5つの情報を持つ
 */
app.get("/token", async (c: Context) => {
  const accessToken = await getAccessToken(c.req.param("code"));

  // TODO:トークンを暗号化してからcookieにセットする

  setCookie(c, "accessToken", accessToken.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
    maxAge: accessToken.expires_in,
  });

  return c.redirect(SECRET.CLIENT_URL + "/home");
});

/**
 * トークンを検証するエンドポイント
 * ユーザーが返ってくるかどうかで見ている。もう少し良い見方はありそう
 */
app.get("/token/check", async (c: Context) => {
  const accessToken = getCookie(c, "accessToken");
  if (!accessToken) return throwAPIError(401, "accessToken is not found")();
  const isValidToken = await checkToken(accessToken);
  return isValidToken
    ? c.json({ hasValidToken: true })
    : c.json({ hasValidToken: false });
});

/**
 * トークンをリフレッシュするエンドポイント
 */
app.get("/token/refresh", async (c: Context) => {
});

export default app;
