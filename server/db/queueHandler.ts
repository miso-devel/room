import { Bot } from "../bot/bot.ts";
import { SECRET } from "../constants/secret.ts";
import { speakersByEventId } from "../service/speaker/index.ts";
import { schema } from "../types/common.ts";

export const workshopCreateQueueHandler = async (
  data: { workshop: schema["Workshop"]; user: schema["User"] },
) => {
  await Bot.helpers.sendMessage(SECRET.MY_CHANNEL_ID, {
    content: `
      <@!${data.user.id}>によって「${data.workshop.title}」が作成されました
      URL: ${SECRET.CLIENT_URL}/workshops/${data.workshop.id}
      `,
  });
};

export const eventCreateQueueHandler = async (
  data: { event: schema["EventOutput"]; user: schema["User"] },
) => {
  await Bot.helpers.sendMessage(SECRET.MY_CHANNEL_ID, {
    content: `
    <@!${data.user.id}>によって「${data.event.theme}」が作成されました
    URL: ${SECRET.CLIENT_URL}/workshops/${data.event.workshopId}
    `,
  });
};

export const eventAnnouncementQueueHandler = async (data: schema["Event"]) => {
  const speakers = await speakersByEventId(data.id);
  const inlineSpeakers = speakers.map((s) => `<@!${s.discordId}>`).join(" ");
  await Bot.helpers.sendMessage(SECRET.MY_CHANNEL_ID, {
    content: `
    ${inlineSpeakers}
    30分後に「${data.theme}」が開始されます。
    URL: ${SECRET.CLIENT_URL}/workshops/${data.workshopId}
    `,
  });
};

export const eventStartQueueHandler = async (data: schema["Event"]) => {
  const speakers = await speakersByEventId(data.id);
  const inlineSpeakers = speakers.map((s) => `<@!${s.discordId}>`).join(" ");
  await Bot.helpers.sendMessage(SECRET.MY_CHANNEL_ID, {
    content: `
    ${inlineSpeakers}
    「${data.theme}」が開始されます。
    URL: ${SECRET.CLIENT_URL}/workshops/${data.workshopId}
    `,
  });
};
