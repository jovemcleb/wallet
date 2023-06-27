import { styled } from '../../styles/index';

export const SummaryContainer = styled('section', {
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(3, 1fr)',
  marginTop: '-10rem',
});

export const Card = styled('div', {
  variants: {
    background: {
      green: {
        backgroundColor: '$green',
        color: '$white',
      },
    },
  },

  backgroundColor: '$white',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
  height: '8rem',
  padding: '1.5rem 2rem',

  div: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    span: {
      fontSize: '1.2rem',
    },
  },

  strong: {
    fontSize: '2.4rem',
    fontWeight: 500,
  },
});
