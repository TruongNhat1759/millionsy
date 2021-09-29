import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => createStyles({
  body: {
    padding: '1.5rem',
    background: '#201E1E',
    '@media screen and (max-width: 768px)': {
      padding: '1.25rem',
    },
    '& .title': {
      fontSize: 20,
      fontWeight: 700,
    }
  },
  footer: {
    padding: '1.25rem 1.5rem',
    '@media screen and (max-width: 768px)': {
      padding: '1.25rem',
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
      width: 180,
      margin: '0 auto',
      '@media screen and (max-width: 768px)': {
        fontSize: 16,
        width: 140,
        padding: '0.6rem',
      },
      '&:hover': {
        opacity: 0.6,
      }
    }
  },
  listTickets: {
    marginTop: '1.5rem',
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
      background: 'rgba(168, 25, 250, 0.2)',
      boxShadow: 'inset 0 4px 4px rgb(0 0 0 / 25%)',
      border: '1px solid #A819FA',
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      fontWeight: 600,
      color: '#fff',
    },
    '@media screen and (max-width: 768px)': {
      maxHeight: 160,
      marginTop: '1rem',
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
}));

export default useStyles;