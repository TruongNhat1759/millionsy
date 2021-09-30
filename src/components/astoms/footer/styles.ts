import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    background: '#071526',
    padding: '5.25rem 0 0',
    borderTop: '1px solid #0B7880',


    '@media screen and (max-width: 1640px)': {
      padding: '5.25rem 3% 0',
    },
    '@media screen and (max-width: 768px)': {
      padding: '3em 3% 7rem',
    },
  },
  container: {
    maxWidth: 1110,
    margin: '0 auto',
    transition: 'all 0.2s ease',
  },
  footerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '& > div': {
      width: '32.5%',
    },
    '& .title': {
      fontSize: 24,
      color: '#FFAC0A',
      marginBottom: '1.5rem',
      fontWeight: '700',
      '@media screen and (max-width: 768px)': {
        fontSize: '14px',
        marginBottom: '0.5rem',
      },
    },
    '& a': {
      color: '#B2FAFF',
      textDecoration: 'none',
      display: 'inline-block',
      lineHeight: '2.35rem',
      fontSize: 20,
      '&:hover': {
        textDecoration: 'underline'
      },
      // '@media screen and (max-width: 1640px)': {
      //   fontSize: '1.5vw',
      //   lineHeight: '2em',
      // },
      '@media screen and (max-width: 768px)': {
        fontSize: '14px',
        lineHeight: '1.72em',
      },
    },
    '@media screen and (max-width: 768px)': {
      '& > div': {
        width: 'auto',
      },
    },
    '@media screen and (max-width: 640px)': {
      display: 'block',
      '& > div + div': {
        marginTop: '2rem',
      },
    },
  },
  footerBottom: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '2.25rem',
    '& .logo': {
      display: 'inline-block',
      textDecoration: 'none',
      fontSize: 56,
      color: '#B2FAFF',
      fontFamily: '\'Bungee\', cursive',
      fontWeight: 400,
    },
    '& .copyright': {
      fontSize: 14,
      paddingBottom: '0.75rem',
      color: '#F4E0FF',
    },
    // '@media screen and (max-width: 1640px)': {
    //   marginTop: '2em',
    //   '& .logo': {
    //     fontSize: '3vw',
    //   },
    //   '& .copyright': {
    //     fontSize: '1.25vw',
    //   },
    // },

    '@media screen and (max-width: 768px)': {
      '& .logo': {
        fontSize: '36px',
      },
      '& .copyright': {
        fontSize: '12px',
        paddingBottom: '4px',
        color: '#C5C5C5',
      },
    },

    '@media screen and (max-width: 640px)': {
      marginTop: '3.5em',
      display: 'block',
      '& .copyright': {
        marginTop: '0.5rem',
        paddingBottom: '0',
      },
    },
  },
  footerSticky: {
    display: 'none',
    '@media screen and (max-width: 768px)': {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      left: 0,
      justifyContent: 'space-evenly',
      padding: '0.55rem 0',
      borderTop: '1px solid #0B7880',
      background: '#071526',
      zIndex: 99,
      display: 'flex',
      '& a.active': {
        color: '#B2FAFF',
        fontWeight: 700,
        '& path': {
          fill: '#B2FAFF'
        }
      },
      '& span': {
        color: '#F4E0FF',
        display: 'block',
        textAlign: 'center',
        paddingBottom: '0.25rem',
      },
    }
  },
}));

export default useStyles;