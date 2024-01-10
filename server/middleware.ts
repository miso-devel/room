import { SECRET } from "./constants/secret.ts";
import { Context, getCookie, Next } from "./deps.ts";
import { checkToken, decrypt, parseTokenData } from "./service/auth/index.ts";
import { throwAPIError } from "./util/throwError.ts";

export const authMiddleware = async (c: Context, next: Next) => {
  const accessToken = getCookie(c, "accessToken");
  if (!accessToken) throwAPIError(403, "Not Found");
  const decryptedAccessToken = decrypt(accessToken as string);
  const requiredTokenData = parseTokenData(decryptedAccessToken);
  const isValidToken = await checkToken(requiredTokenData.access_token);

  if (isValidToken) {
    await next();
  } else {
    return c.redirect(SECRET.CLIENT_URL as string);
  }
};
