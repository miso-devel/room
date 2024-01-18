import { SECRET } from "./constants/secret.ts";
import { Context, getCookie, MiddlewareHandler, Next } from "./deps.ts";
import { checkToken, decrypt, parseTokenData } from "./service/auth/index.ts";
import { throwAPIError } from "./util/throwError.ts";
import { cors, logger, poweredBy } from "./deps.ts";

export const authMiddleware = async (c: Context, next: Next) => {
  // middlewareを通すときにaccessToken=xxxxxという形で渡ってこないのでない時はheaderからとってきている
  const accessToken = getCookie(c, "accessToken") ?? c.req.header()["cookie"];
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

export const middlewareBaseOptions = [
  cors({
    origin: [SECRET.CLIENT_URL as string],
    allowHeaders: [
      "Origin",
      "Content-Type",
      "Authorization",
      "X-Custom-Header",
      "Access-Control-Allow-Origin",
    ],
    allowMethods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
  }),
  logger(),
  poweredBy(),
];

export const middlewareOptions = (
  { auth }: { auth: boolean },
): MiddlewareHandler[] => [
  ...middlewareBaseOptions,
  ...(auth ? [authMiddleware] : []),
];
