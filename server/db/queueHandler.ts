import { Bot } from "../bot/bot.ts";
import { SECRET } from "../constants/secret.ts";
import { schema } from "../types/common.ts";

export const workshopQueueHandler = async (workshop: schema["Workshop"]) => {
  await Bot.helpers.sendMessage(SECRET.MY_CHANNEL_ID, {
    content: `「${workshop.title}」が作成されました`,
  });
};

export const eventQueueHandler = async (event: schema["Event"]) => {
  await Bot.helpers.sendMessage(SECRET.MY_CHANNEL_ID, {
    content: `「${event.theme}」が作成されました`,
  });
};

export const eventStartQueueHandler = async (event: schema["Event"]) => {
  // TODO: ここでeventの開始時間を取得して、その時間になったら通知するようにする
  await Bot.helpers.sendMessage(SECRET.MY_CHANNEL_ID, {
    content: `まもなく「${event.theme}」が開始されます`,
  });
};
