import { Bot } from "../bot/bot.ts";
import { SECRET } from "../constants/secret.ts";
import { schema } from "../types/common.ts";

export const workshopCreateQueueHandler = async (
  data: { workshop: schema["Workshop"]; user: schema["User"] },
) => {
  await Bot.helpers.sendMessage(SECRET.MY_CHANNEL_ID, {
    content:
      `${data.user.name}によって「${data.workshop.title}」が作成されました`,
  });
};

export const eventCreateQueueHandler = async (
  data: { event: schema["EventOutput"]; user: schema["User"] },
) => {
  await Bot.helpers.sendMessage(SECRET.MY_CHANNEL_ID, {
    content: `${data.user.name}によって「${data.event.theme}」が作成されました`,
  });
};

export const eventAnnouncementQueueHandler = async (
  data: schema["EventOutput"],
) => {
  const inlineSpeakers = data.speakers.map((s) => `@${s.name}`).join(" ");
  await Bot.helpers.sendMessage(SECRET.MY_CHANNEL_ID, {
    content: `
    ${inlineSpeakers}\n
    30分後に「${data.theme}」が開始されます。
    `,
  });
};

export const eventStartQueueHandler = async (e: schema["EventOutput"]) => {
  const inlineSpeakers = e.speakers.map((s) => `@${s.name}`).join(" ");
  await Bot.helpers.sendMessage(SECRET.MY_CHANNEL_ID, {
    content: `
    ${inlineSpeakers}\n
    「${e.theme}」が開始されます。
    `,
  });
};
