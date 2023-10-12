import { NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

type TGuild = {
  features: string[];
  icon: string;
  id: string;
  name: string;
  owner: boolean;
  permissions: number;
  permissions_new: string;
};

const isJoinGuild = async (accessToken: string): Promise<boolean> => {
  const res: Response = await fetch('https://discordapp.com/api/users/@me/guilds', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (res.ok) {
    const guilds: TGuild[] = await res.json();
    return guilds.some((guild: TGuild) => guild.id === process.env.DISCORD_GUILD_ID);
  }
  return false;
};

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    signIn: async ({ account }) => {
      if (account == null || account.access_token == null) return false;
      return await isJoinGuild(account.access_token);
    },

    session: async ({ session, token }) => {
      session.accessToken = token.accessToken;
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },

    jwt: async ({ token, account, profile }) => {
      if (account && account.access_token) {
        token.accessToken = account.access_token;
      }
      if (profile) {
        token.id = profile.id;
      }
      return token;
    },
  },
};
