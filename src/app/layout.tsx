import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Header } from '@/component/layout/header';
import { PageTransitionAnimationProvider } from '@/component/layout/page-transition-animation-provider';
import { ThemeProvider } from '@/component/layout/theme-provider';
import { colors } from '@/style/token';
import { getBaseUrl } from '@/util/get-base-url';
import { cn } from '@/util/tailwind';
import '@/style/global.css';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): ReactNode => (
  <html lang="ja" suppressHydrationWarning>
    <head />
    <body
      className={cn(
        'bg-purple-1 font-sans',
        'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-mauve-6 scrollbar-thumb-rounded-full hover:scrollbar-thumb-mauve-7',
      )}
    >
      <ThemeProvider attribute="data-theme" enableSystem defaultTheme="system">
        <Header className="fixed left-0 top-0 z-10 h-20" />
        <PageTransitionAnimationProvider>
          <main className="mt-20 min-h-full grow">{children}</main>
        </PageTransitionAnimationProvider>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;

export const generateMetadata = (): Metadata => {
  const title = 'aeon-quiz-rally-prototype';
  const description = 'Prototype of aeon-quiz-rally.';

  return {
    metadataBase: getBaseUrl(),
    title: {
      default: title,
      template: '%s | aeon-quiz-rally-prototype',
    },
    description,
    openGraph: {
      title,
      description,
      locale: 'ja_JP',
      url: getBaseUrl(),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@nitic_astronomy',
      creator: '@nitic_astronomy',
    },
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: colors.light.purple['7'] },
      { media: '(prefers-color-scheme: dark)', color: colors.dark.purple['7'] },
    ],
  };
};
