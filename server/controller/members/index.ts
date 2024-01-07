import { toMember } from "./util.ts";
import { SECRET } from "../../constants/secret.ts";
import { Bot } from "../../bot/bot.ts";
import {
  Collection,
  Context,
  getCookie,
  Hono,
  type Member,
} from "../../deps.ts";
import { throwAPIError } from "../../util/throwError.ts";
import { schema } from "../../types/common.ts";
import { decrypt, parseTokenData } from "../../service/auth/index.ts";
import { getUserByAccessToken } from "../../service/member/index.ts";

type TMember = schema["User"];

const app = new Hono();

// index
app.get("/", async (c: Context) => {
  const members: TMember[] = await Bot.helpers.getMembers(SECRET.GUILD_ID, {
    limit: 10,
  })
    .then((data: Collection<bigint, Member>) =>
      data.map((member: Member) => toMember(member))
    )
    .catch(throwAPIError(401, "discord user error"));

  return c.json(members);
});

/**
 * ユーザーのcookieからユーザー情報を取得する
 */
app.get("/me", async (c: Context) => {
  const accessToken = getCookie(c, "accessToken");
  if (!accessToken) return throwAPIError(401, "accessToken is not found")();
  const decryptedAccessToken = decrypt(accessToken);
  const requiredTokenData = parseTokenData(decryptedAccessToken);
  const user = await getUserByAccessToken(requiredTokenData.access_token);

  return c.json(user);
});

export default app;
