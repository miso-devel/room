import { SECRET } from "../../../constants/secret.ts";
import { assertEquals } from "../../../deps.ts";
import { app } from "../../../main.ts";
import { TEST } from "../../../testUtil/constants.ts";

Deno.test("/signin", async (t) => {
  const res = await app.request(TEST.URL + "/auth/signin");

  await t.step("200で返ってくる", () => assertEquals(res.status, 200));

  await t.step(
    "適切なレスポンスが返ってくる",
    async () => {
      const data = await res.json();
      assertEquals(data.redirectUrl, SECRET.AUTH_ENDPOINT);
    },
  );
});
