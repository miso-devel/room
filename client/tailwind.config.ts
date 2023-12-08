import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#293CA6',
        secondary: '#3854A6',
        accent: '#F2E205',
        bright: '#F2F2F2',
        dark: '#0D0D0D',
      },
      textColor: {
        primary: '#293CA6',
        secondary: '#3854A6',
        accent: '#F2E205',
        bright: '#F2F2F2',
        dark: '#0D0D0D',
      },
      borderColor: {
        primary: '#293CA6',
        secondary: '#3854A6',
        accent: '#F2E205',
        bright: '#F2F2F2',
        dark: '#0D0D0D',
      },
      fill: {
        bright: '#F2F2F2',
        dark: '#0D0D0D',
      },
      accentColor: {
        accent: '#F2E205',
      },
    },
  },
};
export default config;
