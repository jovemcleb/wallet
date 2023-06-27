import { styled } from '../../styles/index';

export const HeaderContainer = styled('header', {
  backgroundColor: '$purple500',

  '.content': {
    display: 'flex',
    justifyContent: 'space-between',
    height: '12.5rem',
    margin: '0 auto',
    maxWidth: '1120px',
    padding: '2rem 15rem',
  },

  '.logo': {
    display: 'flex',
    gap: '0.5rem',

    img: {
      width: '3rem',
      height: '3rem',
    },

    h1: {
      color: '$white',
      fontWeight: 600,
    },
  },

  button: {
    backgroundColor: '$purple300',
    border: 'none',
    borderRadius: '5px',
    color: '$white',
    fontSize: '1rem',
    fontWeight: 'bold',
    height: '2.5rem',
    transition: 'filter 0.1s',
    width: '10rem',

    '&:hover': {
      filter: 'brightness(0.9)',
    },
  },
});
