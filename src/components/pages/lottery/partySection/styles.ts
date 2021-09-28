import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: '12rem 0 24rem',
    marginBottom: '5rem',
    background: 'url(assets/lottery/bg_party.svg) center top no-repeat',
    backgroundSize: 'cover',
    '& h3': {
      fontWeight: 400,
      marginBottom: '2rem',
      textAlign: 'center',
      fontSize: 120,
      fontFamily: '\'Bungee\', cursive',
      color: '#17F0FF',
      textShadow: '0 10px 10px rgba(23, 240, 255, 0.43), 0 15px 15px rgba(212, 125, 255, 0.25)',

      '& span': {
        display: 'block',
        textShadow: 'none',
        fontWeight: 700,
        fontSize: 36,
        fontFamily: '\'Lexend\', sans-serif',
        color: '#F4E0FF',
        lineHeight: '7rem',
      },
      '@media screen and (max-width: 768px)': {
        fontSize: 56,
        marginBottom: '0.5rem',
        '& span': {
          fontSize: 24,
          lineHeight: '5rem',
        },
      }
    },
    '@media screen and (max-width: 768px)': {
      padding: '3rem 0 8rem',
      marginBottom: '0',
    },
  },
  container: {
    maxWidth: 1640,
    margin: '0 auto',
    transition: 'all 0.2s ease',
    '@media screen and (max-width: 1640px)': {
      padding: '0 3%',
    },
  },
  buyticket: {
    position: 'relative',
    width: 'fit-content',
    margin: '0 auto',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    '& span': {
      display: 'inline-block',
      fontSize: 42,
      fontWeight: 700,
      textAlign: 'center',
      width: 280,
      padding: '1.15rem 0',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -60%)',
      background: '#A819FA',
      boxShadow: '0 1px 0px #FA00FF',
      borderRadius: 20,
    },
    '&:hover': {
      opacity: 0.8,
    },
    '@media screen and (max-width: 768px)': {
      width: 200,
      '& span': {
        fontSize: 20,
        padding: '0.6rem 0',
        borderRadius: 10,
        width: 135,
      },
    },
  }
}));

export default useStyles;