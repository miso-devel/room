import { toMember } from "./util.ts";
import { components } from "../../types/schema.ts";
import { SECRET } from "../../constants/secret.ts";
import { Bot } from "../../bot/bot.ts";
import { Collection, Context, Hono, type Member } from "../../deps.ts";
import { throwAPIError } from "../../util/throwError.ts";

type TMember = components["schemas"]["User"];

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

// show
app.get("/:id", async (c: Context) => {
  const id = c.req.param("id");

  const member: Member = await Bot.helpers.getMember(SECRET.GUILD_ID, id)
    .then((data: Member) => data)
    .catch(throwAPIError(401, "user not found"));

  return c.json(toMember(member));
});

export default app;
