import { globalCss } from './index';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    boxSizing: 'border-box',
    color: '$gray700',
  },

  'body, input, textarea, button': {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
  },

  'h1, h2, h3, h4, h5, h6, strong': {
    fontWeight: 600,
  },

  html: {
    '@laptop': {
      fontSize: '93.75%',
    },
    '@tablet': {
      fontSize: '87.5%',
    },
  },

  button: {
    cursor: 'pointer',
  },

  '[disabled]': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
});
