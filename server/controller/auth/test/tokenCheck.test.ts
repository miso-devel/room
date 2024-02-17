import app from "../index.ts";
import { assertEquals, stub } from "../../../deps.ts";
import { TEST } from "../../../testUtil/constants.ts";
import { encrypt } from "../../../service/auth/index.ts";

Deno.test("/token/check", async (t) => {
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

    const res = await app.request(TEST.URL + "/token/check", {
      headers: { cookie: `accessToken=${token}` },
    });

    try {
      await t.step("200番で返ってくる", () => {
        assertEquals(res.status, 200);
      });

      await t.step("適切なオブジェクトが返ってくる", async () => {
        const data = await res.json();
        assertEquals(data, { hasValidToken: false });
      });
    } finally {
      fetchStub.restore();
    }
  });
  await t.step("異常系", async (t) => {
    await t.step("accessTokenがないと401", async () => {
      const res = await app.request(TEST.URL + "/token/check");
      assertEquals(res.status, 401);
    });

    await t.step("accessTokenがあっても401", async () => {
      const res = await app.request(TEST.URL + "/token/check", {
        headers: { cookie: "accessToken=invalid" },
      });
      assertEquals(res.status, 401);
    });

    await t.step("トークンが有効でないならfalseで返ってくる", async (t) => {
      const mockResData = JSON.stringify({ tekitou: "test" });
      // 処理中でdiscordのOAuth2.0の認可エンドポイントにアクセスしてるのだが、テストではアクセスしたくないため、fetchをstubしている
      const fetchStub = stub(
        globalThis,
        "fetch",
        () =>
          Promise.resolve(
            new Response(mockResData, {
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

      const res = await app.request(TEST.URL + "/token/check", {
        headers: { cookie: `accessToken=${token}` },
      });

      try {
        await t.step("200番で返ってくる", () => {
          assertEquals(res.status, 200);
        });

        await t.step("適切なオブジェクトが返ってくる", async () => {
          const data = await res.json();
          assertEquals(data, { hasValidToken: false });
        });
      } finally {
        fetchStub.restore();
      }
    });
  });
});
