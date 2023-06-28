import { styled } from '../../styles/index';

export const TransactionsTableContainer = styled('section', {
  marginTop: '4rem',

  table: {
    width: '100%',
    borderSpacing: '0 0.5rem',

    th: {
      color: '$gray300',
      fontWeight: 400,
      padding: '1rem 2rem',
      textAlign: 'left',
    },

    td: {
      padding: '1rem 2rem',
      border: 0,
      background: '$white',
      color: '$gray300',

      '&:first-child': {
        color: '$gray700',
      },
      '&.deposit': {
        color: '$green',
      },
      '&.withdraw': {
        color: '$red',
      },
    },
  },
});
