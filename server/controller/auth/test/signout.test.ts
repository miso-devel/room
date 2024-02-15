import { assertEquals } from "../../../deps.ts";
import { app } from "../../../main.ts";
import { TEST } from "../../../testUtil/constants.ts";

Deno.test("/signout", async (t) => {
  const res = await app.request(TEST.URL + "/signout");

  await t.step("正常系", () => assertEquals(res.status, 200));
  await t.step("異常系", () => assertEquals(res.status, 401));
});
