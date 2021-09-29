import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    background: '#070514',
    padding: '7.5rem 0 8.5rem',
    '& h3': {
      color: '#D47DFF',
      fontSize: 62,
      fontWeight: 700,
      marginBottom: '4rem',
      textAlign: 'center',
      textTransform: 'uppercase',
      '@media screen and (max-width: 1640px)': {
        fontSize: '4vw',
        marginBottom: '2vw',
      },
      '@media screen and (max-width: 768px)': {
        fontSize: 30,
        marginBottom: '2.5rem',
      },
    },
    '@media screen and (max-width: 1640px)': {
      padding: '7vw 0 8vw',
    },
    '@media screen and (max-width: 768px)': {
      padding: '3rem 0 6rem',
    },
  },
  container: {
    maxWidth: 1556,
    margin: '0 auto',
    transition: 'all 0.2s ease',
    '@media screen and (max-width: 1640px)': {
      padding: '0 3%',
    },

    '@media screen and (max-width: 768px)': {
      maxWidth: 425,
    }
  },
  listCard: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: '2.5rem',
    '@media screen and (max-width: 1236px)': {
      rowGap: '1.25rem',
    },
    '@media screen and (max-width: 768px)': {
      rowGap: '0',
    },
  },
  item: {
    padding: '1.75rem',
    borderRadius: 20,
    background: '#0E0E0E',
    border: '1px solid #3B6294',
    width: '32%',
    boxSizing: 'border-box',
    position: 'relative',
    '& a': {
      display: 'block',
      position: 'absolute',
      right: 0,
      bottom: 0,
      padding: '1.25rem 1.75rem',
      transition: 'all 0.2s ease',
      '&:hover': {
        opacity: 0.8,
      }
    },

    '@media screen and (max-width: 1640px)': {
      padding: '1.5rem',
    },
    '@media screen and (max-width: 1236px)': {
      width: '49%',
    },
    '@media screen and (max-width: 768px)': {
      width: '100%',
      border: 'none',
      padding: 0,
      textAlign: 'center',
      background: 'transparent',
      '& + &': {
        marginTop: '3.25rem'
      },
      '& a': {
        display: 'none',
        padding: 0,
      },

      '&:last-child a': {
        display: 'block',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: '-3rem',
        '& svg': {
          height: 20
        }
      },
    },
  },
  title: {
    display: 'block',
    color: '#D47DFF',
    fontSize: 36,
    fontWeight: 700,
    marginBottom: '1.5rem',
    '@media screen and (max-width: 1640px)': {
      fontSize: '2.1vw',
      marginBottom: '1vw',
    },
    '@media screen and (max-width: 768px)': {
      fontSize: 24,
      marginBottom: '0.5rem',
    },
  },
  content: {
    display: 'block',
    lineHeight: '1.4rem',
    '@media screen and (max-width: 1640px)': {
      fontSize: '16px',
    },
    '@media screen and (max-width: 768px)': {
      fontSize: 14,
      lineHeight: '1.2rem',
    },
  },
}));

export default useStyles;