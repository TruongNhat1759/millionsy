import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { keyframes } from 'styled-components';
var faceAnimate = keyframes`
    0% { 
      transform: translate(-10px, -10px); 
    }
    100% {
      transform: translate(0, 0); 
    }
`;
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '16rem 0',
    transition: 'all 0.2s ease',
    '@media screen and (max-width: 768px)': {
      padding: '5rem 0',
    },
  },
  container: {
    maxWidth: 1640,
    width: '100%',
    margin: '0 auto',
    position: 'relative',
    transition: 'all 0.2s ease',
    '@media screen and (max-width: 1024px)': {
      padding: '0 3%',
    },
  },
  content: {
    maxWidth: '50%',
    '@media screen and (max-width: 1640px)': {
      padding: '0 3%',
      maxWidth: '100%',
    },
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
    margin: '0.5rem 0 3.25rem',
    transition: 'all 0.2s ease',
    // '@media screen and (max-width: 1640px)': {
    //   fontSize: '1.5vw',
    //   margin: '0.25vw 0 2.5vw',
    // },

    '@media screen and (max-width: 768px)': {
      fontSize: 14,
      lineHeight: '1.4rem',
      margin: '0.5rem 0',
    },
  },
  face: {
    position: 'absolute',
    right: 0,
    top: '-10%',
    zIndex: -1,
    maxWidth: 600,
    transition: 'all 0.2s ease',
    '& li:nth-child(2)': {
      position: 'absolute',
      left: 0,
      top: 0,
      animation: `${faceAnimate} 2.5s ease-in-out infinite alternate-reverse`
    },
    '@media screen and (max-width: 1280px)': {
      maxWidth: 400,
    },
    '@media screen and (max-width: 768px)': {
      position: 'relative',
      top: 0,
      right: 0,
      marginLeft: 'auto',
      width: 320,
      marginBottom: '1rem',
    },
  }
}));

export default useStyles;