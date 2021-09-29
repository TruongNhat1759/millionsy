import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: '10rem 0 8.5rem',
    background: 'url(assets/lottery/bg_finished.svg) center top no-repeat',
    backgroundSize: 'cover',
    marginTop: '10rem',
    '& h3': {
      color: '#D47DFF',
      fontSize: 62,
      fontWeight: 700,
      marginBottom: '3rem',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    '@media screen and (max-width: 1640px)': {
      padding: '10vw 0 8vw',
      marginTop: '10vw',
      '& h3': {
        fontSize: '4vw',
        marginBottom: '2vw',
      },
    },
    '@media screen and (max-width: 768px)': {
      padding: '4rem 0',
      marginTop: '4rem',
      '& h3': {
        fontSize: 26,
        marginBottom: '1.5rem',
      },
    },
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
  listButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '3rem',
    '& li:not(.slash)': {
      border: '1px solid #A819FA',
      borderRadius: 10,
      fontWeight: 700,
      width: 135,
      textAlign: 'center',
      padding: '0.8rem 0',
      boxSizing: 'border-box',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    '& li.active, & li:not(.slash):hover': {
      background: '#A819FA',
    },
    '@media screen and (max-width: 1640px)': {
      marginBottom: '3vw',
      '& li.active, & li:not(.slash)': {
        padding: '1vw 0',
      },
    },
    '@media screen and (max-width: 768px)': {
      gap: '0',
      marginBottom: '2rem',
      '& li.active, & li:not(.slash)': {
        padding: '0.5rem 0',
      },
      '& li.slash': {
        margin: '0 0.25rem',
        '& svg': {
          maxWidth: 10,
        }
      }
    },
  },
}));

export default useStyles;