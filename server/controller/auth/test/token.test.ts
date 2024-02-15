import { returnsNext } from "https://deno.land/std@0.215.0/testing/mock.ts";
import { SECRET } from "../../../constants/secret.ts";
import { assertEquals, assertSpyCallArgs, stub } from "../../../deps.ts";
import { app } from "../../../main.ts";
import * as authService from "../../../service/auth/index.ts";
import { TAccessToken } from "../../../service/auth/type.ts";
import { TEST } from "../../../testUtil/constants.ts";

Deno.test("/token", async (t) => {
  const requests = {
    noCode: await app.request(TEST.URL + "/auth/token"),
    inValidCode: await app.request(TEST.URL + "/auth/token?code=123"),
  };

  await t.step(
    "異常系",
    async (t) => {
      await t.step(
        "そもそもcodeがない場合",
        () => assertEquals(requests.noCode.status, 401),
      );

      await t.step(
        "codeが正常なものでない場合",
        () => assertEquals(requests.inValidCode.status, 401),
      );
    },
  );

  await t.step("正常系", async () => {
    const accessTokenMock: TAccessToken = {
      access_token: "access_token",
      refresh_token: "refresh_token",
      expires_in: 100,
      token_type: "token_type",
      scope: "scope",
    };
    const mockFetchText = JSON.stringify(accessTokenMock);
    const fetchStub = stub(
      globalThis,
      "fetch",
      () =>
        Promise.resolve(
          new Response(mockFetchText, {
            headers: { "Content-Type": "application/json" },
          }),
        ),
    );
    const data = await app.request(TEST.URL + "/auth/token?code=123456");
    try {
      t.step(
        "適切なレスポンスが返ってくる",
        () => assertEquals(data.status, 302),
      );
    } finally {
      fetchStub.restore();
    }
  });
});
