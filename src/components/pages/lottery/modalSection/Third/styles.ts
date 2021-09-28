import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => createStyles({
  body: {
    padding: '1.5rem',
    '@media screen and (max-width: 768px)': {
      padding: '1.25rem',
    }
  },
  footer: {
    padding: '2.5rem 1.5rem 2rem',
    '@media screen and (max-width: 768px)': {
      padding: '1.25rem',
    }
  },
  description: {
    fontSize: 14,
    color: '#fff',
    lineHeight: '1.2rem',
    marginBottom: '1.75rem',
    fontWeight: 500,
    '@media screen and (max-width: 768px)': {
      fontSize: 12,
      marginBottom: '1rem',
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
    }
  },
  totalPay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2.5rem',
    '& .price': {
      fontSize: 24,
      fontWeight: 700,
      color: '#D47DFF',
    }
  },
  listButton: {
    '& li': {
      fontWeight: 700,
      display: 'block',
      padding: '0.8rem',
      borderRadius: 5,
      background: '#17F0FF',
      border: '1px solid transparent',
      color: '#0B7880',
      transition: 'all 0.2s ease',
      textAlign: 'center',
      cursor: 'pointer',
      fontSize: 22,
      '&.random': {
        background: 'transparent',
        fontSize: 20,
        color: '#17F0FF',
        border: '1px solid #17F0FF',
      },
      '&.goback': {
        background: 'transparent',
        fontSize: 20,
        color: '#D47DFF',
        marginTop: '1rem',
        '& span': {
          display: 'inline-flex',
          marginRight: '0.75rem',
          '@media screen and (max-width: 768px)': {
            marginRight: '0.5rem',
            maxWidth: 15,
            position: 'relative',
            top: 2,
          },
        }
      },
      '@media screen and (max-width: 768px)': {
        fontSize: 16,
        padding: '0.6rem',
        '&.random': {
          fontSize: 16,
        },
        '&.goback': {
          fontSize: 16,
          marginTop: '1rem',
        },
      },
      '&:hover': {
        opacity: 0.6,
      }
    }
  },
  listTickets: {
    marginTop: '2.25rem',
    maxHeight: 200,
    overflowY: 'auto',
    marginBottom: '1.25rem',
    '& dl + dl': {
      marginTop: '1.5rem',
    },
    '& dt': {
      fontSize: 20,
      marginBottom: '1rem',
    },
    '& ul': {
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      background: 'rgba(168, 25, 250, 0.2)',
      boxShadow: 'inset 0 4px 4px rgb(0 0 0 / 25%)',
      border: '1px solid #A819FA',
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      fontWeight: 600,
      color: '#fff',
      '&:hover': {
        opacity: 0.8,
      }
    },
    '@media screen and (max-width: 768px)': {
      maxHeight: 160,
      marginTop: '1.5rem',
      marginBottom: 0,
      '& dl + dl': {
        marginTop: '1rem',
      },
      '& dt': {
        fontSize: 16,
        marginBottom: '0.5rem',
      },
      '& ul': {
        padding: '0.75rem 1rem',
      },
    }
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