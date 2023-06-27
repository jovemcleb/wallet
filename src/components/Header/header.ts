import { styled } from '../../styles/index';

export const Header = styled('header', {
  alignItems: 'flex-start',
  backgroundColor: '$purple500',
  display: 'flex',
  justifyContent: 'space-between',
  height: '12.5rem',
  padding: '2rem 15rem',

  div: {
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
    width: '10rem',
  },
});
