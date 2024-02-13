import { SECRET } from "../../../constants/secret.ts";
import { assertEquals, stub } from "../../../deps.ts";
import { app } from "../../../main.ts";
import * as authService from "../../../service/auth/index.ts";
import { TAccessToken } from "../../../service/auth/type.ts";
import { TEST } from "../../../testUtil/constants.ts";

Deno.test("/token", async (t) => {
  const requests = {
    noCode: await app.request(TEST.URL + "/auth/token"),
    inValidCode: await app.request(TEST.URL + "/auth/token?code=123"),
    validCode: await app.request(TEST.URL + "/auth/token?code=123456"),
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
    const accessTokenMock = new Promise((resolve) => {
      return resolve({
        access_token: "access_token",
        refresh_token: "refresh_token",
        expires_in: 100,
        token_type: "token_type",
        scope: "scope",
      });
    }).then((data) => data as TAccessToken);

    stub(authService, "getAccessToken", () => accessTokenMock);

    const data = await requests.validCode.json();

    await t.step(
      "適切なレスポンスが返ってくる",
      () => {
        assertEquals(data.redirectUrl, SECRET.AUTH_ENDPOINT);
      },
    );
  });
});
