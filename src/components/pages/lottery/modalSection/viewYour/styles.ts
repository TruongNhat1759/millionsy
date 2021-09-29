import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => createStyles({
  winingNumber: {
    borderTop: '1px solid #616161',
    padding: '1.5rem',
    '@media screen and (max-width: 768px)': {
      padding: '1.25rem',
    },
    '& p': {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: '1.25rem',
    },
    '& ul': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.5rem',
      '& li': {
        color: '#17F0FF',
        width: 52,
        height: 52,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        border: '1px solid #1CE6F3',
        fontWeight: 700,
        fontSize: 24,
      },

      '@media screen and (max-width: 768px)': {
        '& li': {
          color: '#17F0FF',
          width: 40,
          height: 40,
          fontSize: 18,
        }
      }
    }
  },
  listTickets: {
    padding: '0 1.5rem 0',
    maxHeight: 200,
    overflowY: 'auto',
    marginBottom: '1.5rem',
    '& dl + dl': {
      marginTop: '1.5rem',
    },
    '& dt': {
      fontSize: 20,
      marginBottom: '1rem',
    },
    '& ul': {
      background: 'rgba(168, 25, 250, 0.2)',
      boxShadow: 'inset 0 4px 4px rgb(0 0 0 / 25%)',
      border: '1px solid #A819FA',
      borderRadius: 10,
      display: 'flex',
      width: 'fit-content',
      padding: '1rem 0',
      fontWeight: 600,
      color: '#fff',
      '& li': {
        width: 61,
        textAlign: 'center',
        '@media screen and (max-width: 768px)': {
          width: 48,
        }
      }
    },
    '@media screen and (max-width: 768px)': {
      padding: '0 1.25rem',
      maxHeight: 150,
      marginTop: '1rem',
      marginBottom: '1.25rem',
      '& dl + dl': {
        marginTop: '1rem',
      },
      '& dt': {
        fontSize: 16,
        marginBottom: '0.5rem',
      },
      '& ul': {
        padding: '0.75rem 0',
      },
    }
  },
  countTicket: {
    background: 'rgba(28, 25, 25, 0.8)',
    padding: '1.5rem 1.5rem 1rem',
    marginBottom: '1.5rem',
    '@media screen and (max-width: 768px)': {
      padding: '1.25rem 1.25rem 0.5rem',
      marginBottom: '1rem',
    },
    '& >p': {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: '0.5rem',
    },
    '& li': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 22,
      color: '#D47DFF',
      fontWeight: 700,
      paddingRight: '0.5rem',
      height: 60,
      '& p': {
        fontSize: 18,
        color: '#f4e0ff',
        fontWeight: 300,
        display: 'flex',
        alignItems: 'center',
        '& span:first-child': {
          width: 50,
          textAlign: 'center',
        },
        '& span:last-child': {
          display: 'inline-flex',
          marginLeft: '1rem',
        },
        '@media screen and (max-width: 768px)': {
          fontSize: 14,
          '& span:first-child': {
            width: 28,
          },
          '& span:last-child': {
            marginLeft: '0.75rem',
          }
        },
      },
      '@media screen and (max-width: 768px)': {
        fontSize: 20,
        paddingRight: 0,
        height: 40,
      },
    }
  },
}));

export default useStyles;