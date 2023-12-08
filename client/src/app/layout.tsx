import './globals.css';
import type { Metadata } from 'next';
import { BIZ_UDGothic, Inter, M_PLUS_1 } from 'next/font/google';

const inter = M_PLUS_1({ subsets: ['latin'], display: 'swap', weight: '700' });

export const metadata: Metadata = {
  title: 'Doer room',
  description: 'Doerの管理サイト',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} text-bright`}>{children}</body>
    </html>
  );
}
