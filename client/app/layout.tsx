import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Doer room',
  description: 'Doerの管理サイト',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex justify-center font-sans font-semibold">{children}</body>
    </html>
  );
}
