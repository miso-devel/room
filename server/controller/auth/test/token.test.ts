import { assertEquals, stub } from "../../../deps.ts";
import { app } from "../../../main.ts";
import { TAccessToken } from "../../../service/auth/type.ts";
import { TEST } from "../../../testUtil/constants.ts";

Deno.test("/token", async (t) => {
  await t.step(
    "異常系",
    async (t) => {
      await t.step(
        "そもそもcodeがない場合",
        async () => {
          const res = await app.request(TEST.URL + "/auth/token");
          assertEquals(res.status, 401);
        },
      );

      await t.step(
        "codeが正常なものでない場合",
        async () => {
          const res = await app.request(TEST.URL + "/auth/token?code=123");
          assertEquals(res.status, 401);
        },
      );
    },
  );

  await t.step("正常系", async (t) => {
    const accessTokenMock: TAccessToken = {
      access_token: "access_token",
      refresh_token: "refresh_token",
      expires_in: 100,
      token_type: "token_type",
      scope: "scope",
    };
    const mockFetchRes = JSON.stringify(accessTokenMock);
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
    const res = await app.request(TEST.URL + "/auth/token?code=123456");

    try {
      await t.step(
        "適切なレスポンスが返ってくる",
        () => assertEquals(res.status, 302),
      );

      await t.step(
        "意図したcookieがセットされている",
        async (t) => {
          const [accessToken, maxAge, path, httpOnly, secure, sameSite] = res
            .headers.get("set-cookie")?.split(";")
            .map((f) => f.trim()) as string[];
          await t.step(
            "accessTokenがある",
            () => assertEquals(accessToken?.split("=")[0], "accessToken"),
          );
          await t.step(
            "maxAgeがある",
            () => assertEquals(maxAge?.split("="), ["Max-Age", "100"]),
          );
          await t.step(
            "pathがある",
            () => assertEquals(path?.split("="), ["Path", "/"]),
          );
          await t.step(
            "httpOnlyがある",
            () => assertEquals(httpOnly, "HttpOnly"),
          );
          await t.step(
            "secureがある",
            () => assertEquals(secure, "Secure"),
          );
          await t.step(
            "sameSiteがある",
            () =>
              assertEquals(
                sameSite?.split("="),
                ["SameSite", "Lax"],
                "sameSiteがLaxになっている",
              ),
          );
        },
      );
    } finally {
      fetchStub.restore();
    }
  });
});
