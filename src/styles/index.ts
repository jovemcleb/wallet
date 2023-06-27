import { createStitches } from '@stitches/react';

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      gray100: '#F0F2F5',
      gray300: '#969CB2',
      gray700: '#363F5F',
      white: '#FFFFFF',
      purple300: '#6933FF',
      purple500: '#5429CC',
      green: '#33CC95',
      red: '#E52E4D',
    },
  },
  media: {
    mobile: '(max-width: 376px)',
    largeMobile: '(max-width: 500px)',
    tablet: '(max-width: 720px)',
    laptopTab: '(max-width: 975px)',
    laptop: '(max-width: 1080px)',
    largeLaptop: '(max-width: 1440px)',
  },
});
