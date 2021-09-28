import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    // position: 'fixed',
    // top: 0,
    // left: 0,
    background: '#071526',
    padding: '1.25rem 0',
    borderBottom: '1px solid #0B7880',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 100,
    '& ul': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '6rem',
      '& a': {
        display: 'inline-block',
        fontSize: 20,
        color: '#fff',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        '&:hover': {
          color: '#B2FAFF',
        },
        '& span': {
          display: 'none',
          '@media screen and (max-width: 768px)': {
            display: 'block',
            textAlign: 'center',
            paddingBottom: '0.25rem',
          }
        },
        '@media screen and (max-width: 1640px)': {
          fontSize: '1.5vw',
        },
        '@media screen and (max-width: 768px)': {
          fontSize: '10px',
        }
      },
      '@media screen and (max-width: 768px)': {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        left: 0,
        justifyContent: 'space-evenly',
        padding: '0.75rem 0',
        borderTop: '1px solid #0B7880',
        background: '#071526',
        zIndex: 99,
      }
    },

    '@media screen and (max-width: 1640px)': {
      padding: '1em 0',
      '& ul': {
        gap: '3.5vw',
      },
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1640,
    width: '100%',
    margin: '0 auto',
    transition: 'all 0.2s ease',
    '@media screen and (max-width: 1640px)': {
      padding: '0 3%',
    }
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    textDecoration: 'none',
    color: '#fff',
    cursor: 'pointer',
    '& img': {
      maxWidth: 60,
      transition: 'all 0.2s ease',
    },
    '& span': {
      display: 'inline-block',
      fontSize: 30,
      fontFamily: '\'Bungee\', cursive',
      fontWeight: 400,
      transition: 'all 0.2s ease',
    },

    '@media screen and (max-width: 1640px)': {
      gap: '1.75vw',
      '& img': {
        maxWidth: '3.25vw',
      },
      '& span': {
        fontSize: '1.6vw',
      },
    },
    '@media screen and (max-width: 768px)': {
      '& img': {
        maxWidth: '37px',
      },
      '& span': {
        display: 'none',
      },
    }
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4.5rem',
    '@media screen and (max-width: 1640px)': {
      gap: '3.5vw',
    },
  },
}));

export default useStyles;