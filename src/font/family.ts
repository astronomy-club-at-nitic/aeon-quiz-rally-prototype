import { Noto_Sans_JP } from 'next/font/google';

const notoSansJp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export const fontFamily = [notoSansJp].map((font) => font.variable).join(' ');
