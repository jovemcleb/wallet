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

  // 'input::-webkit-outer-spin-button,input::-webkit-inner-spin-button': {
  //   '-webkit-appearance': 'none',
  // },

  // 'input[type=number]': {
  //   '-moz-appearance': 'textfield',
  // },

  '.react-modal-overlay': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '.react-modal-content': {
    width: '100%',
    maxWidth: '26rem',
    backgroundColor: '$gray100',
    padding: '3rem',
    position: 'relative',
    borderRadius: '0.25rem',
  },

  '.react-modal-close': {
    position: 'absolute',
    right: '1.5rem',
    top: '1.5rem',
    border: '0',
    backgroundColor: 'transparent',
    transition: 'filter 0.2s',

    '&:hover': {
      filter: 'brightness(0.8)',
    },
  },
});
