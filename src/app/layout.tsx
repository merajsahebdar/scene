import type { Metadata } from 'next';
import { Ysabeau } from 'next/font/google';

const fontFamily = Ysabeau({ weight: 'variable', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meraj Sahebdar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>{children}</body>
    </html>
  );
}
