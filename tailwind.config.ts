import tailwindScrollbar from 'tailwind-scrollbar';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import { createThemes } from 'tw-colors';
import { breakpoints, colors } from './src/style/token';

const config: Config = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    colors,
    fontFamily: {
      sans: ['var(--font-noto-sans-jp)', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      mobile: `${breakpoints.mobile.minWidth}px`,
      tablet: `${breakpoints.tablet.minWidth}px`,
      laptop: `${breakpoints.laptop.minWidth}px`,
      desktop: `${breakpoints.desktop.minWidth}px`,
    },
  },
  plugins: [
    createThemes({
      light: colors.light,
      dark: colors.dark,
    }),
    tailwindScrollbar({ nocompatible: true }),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
};

export default config;
