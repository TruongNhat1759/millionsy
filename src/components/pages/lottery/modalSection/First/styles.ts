import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => createStyles({
  body: {
    padding: '1.5rem',
    '@media screen and (max-width: 768px)': {
      padding: '1.25rem',
    }
  },
  footer: {
    padding: '1.5rem 1.5rem 2.5rem',
    '@media screen and (max-width: 768px)': {
      padding: '1.25rem',
    }
  },
  buy: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    '& .icon': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontWeight: 700,
      gap: '0.5rem',
      '@media screen and (max-width: 768px)': {
        '& span': {
          maxWidth: 35,
        }
      }
    },
  },
  inputNumber: {
    color: '#D47DFF',
    position: 'relative',
    marginBottom: '0.5rem',
    '& input': {
      padding: '1rem 1rem 3rem',
      borderRadius: 10,
      outline: 'none',
      border: '1px solid #A819FA',
      background: 'rgba(168, 25, 250, 0.1)',
      width: '100%',
      textAlign: 'right',
      fontWeight: 700,
      fontSize: 28,
      color: '#D47DFF',
      '&::placeholder': {
        fontSize: 28,
        color: '#D47DFF',
      },

      '@media screen and (max-width: 768px)': {
        padding: '0.75rem 1rem 2.25rem',
        fontSize: 22,
        '&::placeholder': {
          fontSize: 22,
        },
      }
    }
  },
  payunit: {
    position: 'absolute',
    width: '100%',
    bottom: '0.75rem',
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem',
    '& .name': {
      fontWeight: 700,
      fontSize: 22,
    },
    '@media screen and (max-width: 768px)': {
      '& .name': {
        fontSize: 16,
      },
    }
  },
  insuff: {
    textAlign: 'right',
    color: '#D47DFF',
    fontSize: 14,
    fontWeight: 600,
    marginBottom: '1.25rem',
    '@media screen and (max-width: 768px)': {
      fontSize: 12,
      marginBottom: '0.75rem',
    }
  },
  balance: {
    textAlign: 'right',
    fontWeight: 700,
    fontSize: 18,

    '@media screen and (max-width: 768px)': {
      fontSize: 14,
    }
  },
  totalPay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '3rem',
    '& .price': {
      fontSize: 24,
      fontWeight: 700,
      color: '#D47DFF',
    },
    '@media screen and (max-width: 768px)': {
      marginBottom: '1.5rem',
      '& .price': {
        fontSize: 18,
      }
    }
  },
  listButton: {
    '& li': {
      fontWeight: 700,
      display: 'block',
      padding: '0.8rem',
      borderRadius: 5,
      background: '#17F0FF',
      color: '#0B7880',
      transition: 'all 0.2s ease',
      textAlign: 'center',
      cursor: 'pointer',
      border: '1px solid transparent',
      fontSize: 24,
      '&:hover': {
        opacity: 0.6,
      },
      '@media screen and (max-width: 768px)': {
        fontSize: 16,
        padding: '0.6rem',
      }
    },
  },
  lineGray: {
    padding: '0 1.5rem',
    '& span': {
      display: 'block',
      height: 1,
      background: '#616161',
    },
    '@media screen and (max-width: 768px)': {
      padding: '0 1.25rem',
    }
  },
}));

export default useStyles;