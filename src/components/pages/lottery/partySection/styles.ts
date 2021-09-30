import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: '10rem 0',
    marginBottom: '5rem',
    background: 'url(assets/lottery/bg_left.png) top 40% left 15% no-repeat, url(assets/lottery/bg_right.png) top 40% right 15% no-repeat',
    backgroundSize: '15vw 25vw, 15vw 14vw',
    '& h3': {
      fontWeight: 400,
      marginBottom: '2rem',
      textAlign: 'center',
      fontSize: 76,
      fontFamily: '\'Bungee\', cursive',
      color: '#17F0FF',
      textShadow: '0 10px 10px rgba(23, 240, 255, 0.43), 0 15px 15px rgba(212, 125, 255, 0.25)',

      '& span': {
        display: 'block',
        textShadow: 'none',
        fontWeight: 700,
        fontSize: 24,
        fontFamily: '\'Lexend\', sans-serif',
        color: '#F4E0FF',
        lineHeight: '3.5rem',
      },
      '@media screen and (max-width: 1640px)': {
        // fontSize: '7.5vw',
        // marginBottom: '2vw',
        // '& span': {
        //   fontSize: '2.75vw',
        //   lineHeight: '7vw',
        // },
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
    // '@media screen and (max-width: 1640px)': {
    //   padding: '8vw 0 16vw',
    // },
    '@media screen and (max-width: 768px)': {
      padding: '3rem 0 8rem',
      marginBottom: '0',
      background: 'url(assets/lottery/bg_left_sp.png) top 40% left 12% no-repeat, url(assets/lottery/bg_right_sp.png) top 40% right 12% no-repeat',
      backgroundSize: '30px 208px, 18px 228px',
    },
  },
  container: {
    maxWidth: 1640,
    margin: '0 auto',
    transition: 'all 0.2s ease',
    '@media screen and (max-width: 1024px)': {
      padding: '0 3%',
    },
  },
  buyticket: {
    position: 'relative',
    width: 250,
    margin: '0 auto',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    '& span': {
      display: 'inline-block',
      fontSize: 20,
      fontWeight: 700,
      textAlign: 'center',
      width: 180,
      padding: '0.75rem 0',
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
    // '@media screen and (max-width: 1640px)': {
    //   width: '25vw',
    //   '& span': {
    //     fontSize: '2.5vw',
    //     padding: '1.2vw 0',
    //     borderRadius: '1vw',
    //     width: '18vw',
    //   },
    // },
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