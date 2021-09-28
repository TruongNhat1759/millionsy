import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginTop: '-5rem',
    '& h3': {
      fontWeight: 400,
      marginBottom: '4rem',
      textAlign: 'center',
      fontSize: 120,
      fontFamily: '\'Bungee\', cursive',
      color: '#D47DFF',
      textShadow: '0 10px 10px rgba(212, 125, 255, 0.25), 0 15px 15px rgba(212, 125, 255, 0.25)',
      '& sup': {
        fontSize: 80,
      },
      '& span': {
        display: 'block',
        textShadow: 'none',
        fontWeight: 700,
        fontSize: 32,
        fontFamily: '\'Lexend\', sans-serif',
        color: '#FFE0FD',
        marginTop: '1rem',
      },
      '@media screen and (max-width: 768px)': {
        marginBottom: '2rem',
        fontSize: 56,
        '& sup': {
          fontSize: 40,
        },
        '& span': {
          display: 'block',
          textShadow: 'none',
          fontWeight: 700,
          fontSize: 20,
          fontFamily: '\'Lexend\', sans-serif',
          color: '#FFE0FD',
          marginTop: '1rem',
        },
      },
    },
    '@media screen and (max-width: 768px)': {
      marginTop: '-2rem',
    }
  },
  container: {
    maxWidth: 1640,
    margin: '0 auto',
    transition: 'all 0.2s ease',
    '@media screen and (max-width: 1640px)': {
      padding: '0 3%',
    },

    '@media screen and (max-width: 768px)': {
      maxWidth: 425,
    }
  },
  content: {
    maxWidth: 900,
    margin: '0 auto',
    background: '#303030',
    borderRadius: 20,
    border: '1px solid #17F0FF',
    overflow: 'hidden',
  },
  header: {
    padding: '2rem 3rem',
    '& .title': {
      fontSize: 28,
      fontWeight: 700,
      color: '#F4E0FF',
      marginBottom: '2rem',
    },
    '@media screen and (max-width: 768px)': {
      padding: '1.25rem 1rem 1.75rem',
      '& .title': {
        fontSize: 20,
        marginBottom: '0.75rem',
      },
    },
  },
  infoRound: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 24,
    color: '#F4E0FF',
    background: 'rgba(255, 255, 255, 0.25)',
    paddingRight: '1rem',
    borderRadius: 10,
    overflow: 'hidden',
    '& span': {
      display: 'inline-block',
      fontWeight: 700,
      background: 'rgba(140, 36, 191, 0.5)',
      borderRadius: 10,
      width: 175,
      padding: '1rem 0',
      textAlign: 'center',
    },
    '@media screen and (max-width: 768px)': {
      fontSize: 16,
      paddingRight: '0.75rem',
      '& span': {
        width: 72,
      },
    },
  },
  footer: {
    borderTop: '1px solid #616161',
    padding: '2rem 2rem 3rem',
    color: '#F4E0FF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    '& .yourticket': {
      '& p:nth-child(1)': {
        fontSize: 28,
        fontWeight: 700,
        marginBottom: '1.5rem',
        color: '#F4E0FF',
      },
      '& p:nth-child(2)': {
        fontSize: 24,
        '& span': {
          fontWeight: 700,
          cursor: 'pointer',
        }
      },
      '@media screen and (max-width: 768px)': {
        marginBottom: '1.5rem',
        '& p:nth-child(1)': {
          fontSize: 20,
          marginBottom: '0.25rem',
        },
        '& p:nth-child(2)': {
          fontSize: 16,
        }
      }
    },
    '& .getticket': {
      background: '#17F0FF',
      textAlign: 'center',
      width: 240,
      color: '#0B7880',
      borderRadius: 10,
      padding: '1rem 0',
      fontSize: 24,
      fontWeight: 700,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      '&:hover': {
        opacity: 0.8,
      }
    },
    '@media screen and (max-width: 768px)': {
      padding: '1.5rem 1rem 2rem',
      display: 'block',
      '& .getticket': {
        width: 150,
        padding: '1rem 0',
        fontSize: 16,
        margin: '0 auto'
      }
    },
  },
}));

export default useStyles;