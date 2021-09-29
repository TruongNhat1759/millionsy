import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    fontSize: 18,
    color: '#F4E0FF',
  },
  backgroundModal: {
    background: 'rgba(142, 142, 142, 0.5)',
    height: '100vh',
    position: 'absolute',
    width: '100%',
    zIndex: 100,
  },
  content: {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '95%',
    zIndex: 1000,
    background: '#303030',
    borderRadius: 20,
    border: '1px solid #17F0FF',
    width: 420,
    overflow: 'hidden',
    '@media screen and (max-width: 768px)': {
      width: '100%',
      maxWidth: 'calc(375px - 6%)',
      fontSize: 16,
    }
  },
  header: {
    padding: '2rem 1.5rem',
    borderBottom: '1px solid #616161',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '&.hasID': {
      borderBottom: 0,
      padding: '1.25rem 1.5rem',
      '& span': {
        background: 'rgba(140, 36, 191, 0.5)',
        display: 'inline-block',
        fontSize: 20,
        cursor: 'default',
        margin: '0 0 0 0.5rem',
        borderRadius: 10,
        padding: '0.75rem 1.5rem',
        '&:hover': {
          opacity: 1
        },
        '@media screen and (max-width: 768px)': {
          fontSize: 16,
          padding: '0.5rem 1.25rem',
        }
      }
    },

    '& .title': {
      fontSize: 20,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      '& span': {
        display: 'inline-block',
        marginRight: '0.75rem',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        '&:hover': {
          opacity: 0.6
        }
      }
    },
    '& .close': {
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      '&:hover': {
        opacity: 0.8,
      }
    },
    '@media screen and (max-width: 768px)': {
      padding: '1.5rem 1.25rem',
      '& .close': {
        display: 'flex',
        maxWidth: 18
      },
    }
  },
}));

export default useStyles;