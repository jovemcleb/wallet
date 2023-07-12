import { styled } from '../../styles/index';

export const FormContainer = styled('form', {
  h2: {
    color: '$gray700',
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },

  input: {
    width: '100%',
    maxWidth: '23rem',
    padding: '0 1.5rem',
    height: '4rem',
    borderRadius: '0.25rem',
    background: '#e7e9ee',
    border: '1px solid #d7d7d7',
    fontSize: '1rem',
    fontWeight: 400,

    '&::placeholder': {
      color: '$gray300',
    },

    '& + input': {
      marginTop: '1rem',
    },
  },

  'button[type="submit"]': {
    width: '100%',
    padding: '0 1.5rem',
    height: '4rem',
    backgroundColor: '$green',
    color: '$white',
    borderRadius: '0.25rem',
    border: '0',
    fontSize: '1rem',
    marginTop: '1.5rem',
    transition: 'filter 0.2s',

    '&:hover': {
      filter: 'brightness(0.9)',
    },
  },
});

export const TransactionTypeContainer = styled('div', {
  margin: '1rem 0',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: ' 0.5rem',
});

export const ButtonCategory = styled('button', {
  variants: {
    isActive: {
      red: {
        backgroundColor: '#f4abb7',
      },
      green: {
        backgroundColor: '#a0daba',
      },
      false: {},
    },
  },

  height: '4rem',
  border: '1px solid #d7d7d7',
  borderRadius: '0.25rem',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.4rem',
  transition: 'border-color 0.2s',

  img: {
    width: '20px',
    height: '20px',
  },

  span: {
    fontSize: '1rem',
    color: '$gray700',
  },

  '&:hover': {
    borderColor: '#aaa',
  },
});
