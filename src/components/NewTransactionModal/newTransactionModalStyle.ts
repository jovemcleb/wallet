import { styled } from '../../styles/index';

export const FormContainer = styled('form', {
  h2: {
    color: '$gray700',
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },

  input: {
    width: '91.3%',
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
