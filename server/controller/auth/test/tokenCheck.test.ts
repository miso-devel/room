import { assertEquals } from "../../../deps.ts";
import { app } from "../../../main.ts";
import { TEST } from "../../../testUtil/constants.ts";

Deno.test("/token/check", async (t) => {
  const res = await app.request(TEST.URL + "/token/check");

  await t.step("正常系", () => assertEquals(res.status, 200));
  await t.step("異常系", () => assertEquals(res.status, 401));
});
