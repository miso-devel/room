import { assertEquals, stub } from "../../../deps.ts";
import { encrypt } from "../../../service/auth/index.ts";
import { TEST } from "../../../testUtil/constants.ts";
import { app } from "../index.ts";

Deno.test("/signout", async (t) => {
  await t.step("正常系", async (t) => {
    const mockResData = JSON.stringify({ id: "test" });
    const mockFetchRes = JSON.stringify(mockResData);
    // 処理中でdiscordのOAuth2.0の認可エンドポイントにアクセスしてるのだが、テストではアクセスしたくないため、fetchをstubしている
    const fetchStub = stub(
      globalThis,
      "fetch",
      () =>
        Promise.resolve(
          new Response(mockFetchRes, {
            headers: { "Content-Type": "application/json" },
          }),
        ),
    );

    const testAccessToken = {
      access_token: "testAccessToken",
      refresh_token: "testRefreshToken",
    };
    const stringifyTokenData = JSON.stringify(testAccessToken);
    const token = encrypt(stringifyTokenData);
    const res = await app.request(TEST.URL + "/signout", {
      method: "POST",
      headers: { cookie: `accessToken=${token}` },
    });
    try {
      await t.step("200番で返ってくる", () => {
        assertEquals(res.status, 200);
      });

      await t.step("適切なオブジェクトが返ってくる", async () => {
        const data = await res.json();
        assertEquals(data, { revoked: true });
      });

      await t.step("cookieが削除されている", async (t) => {
        const [accessToken, maxAge, path] = res
          .headers.get("set-cookie")?.split(";")
          .map((f) => f.trim()) as string[];
        await t.step(
          "accessTokenがない",
          () => assertEquals(accessToken?.split("=")[0], "accessToken"),
        );
        await t.step(
          "maxAgeが0",
          () => assertEquals(maxAge?.split("="), ["Max-Age", "0"]),
        );
        await t.step(
          "pathが/",
          () => assertEquals(path?.split("="), ["Path", "/"]),
        );
      });
    } finally {
      fetchStub.restore();
    }
  });

  await t.step("異常系", async (t) => {
    await t.step(
      "cookieがない場合はrevokeがそもそも失敗する",
      async () => {
        const res = await app.request(TEST.URL + "/signout", {
          method: "POST",
        });
        assertEquals(res.status, 401);
      },
    );

    await t.step(
      "cookieがあってもdecryptが失敗すると401を返す",
      async () => {
        const res = await app.request(TEST.URL + "/signout", {
          method: "POST",
          headers: { cookie: "accessToken=invalid" },
        });
        assertEquals(res.status, 401);
      },
    );
  });
});
