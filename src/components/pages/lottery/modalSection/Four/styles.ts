import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => createStyles({
  body: {
    padding: '1.5rem',
    '@media screen and (max-width: 768px)': {
      padding: '1.25rem 1.25rem 0.5rem 1.25rem',
    }
  },
  footer: {
    padding: '2rem 1.5rem',
    '@media screen and (max-width: 768px)': {
      padding: '1.25rem',
    }
  },
  chooseNumber: {
    display: 'flex',
    // columnGap: '1.08rem',
    // rowGap: '0.75rem',
    flexWrap: 'wrap',
    '& li': {
      width: '38px',
      height: '38px',
      borderRadius: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      marginRight: '1.08rem',
      marginBottom: '0.6rem',
      fontSize: 20,
      color: '#fff',
      '&:nth-child(7n)': {
        marginRight: 0,
      },
      '&.active': {
        background: '#A819FA',
      },
      '&:not(.active):hover': {
        color: '#B2FAFF',
      },
      '@media screen and (max-width: 768px)': {
        fontSize: 14,
        width: '28px',
        height: '28px',
      }
    }
  },

  listButton: {
    '& li': {
      fontWeight: 700,
      display: 'block',
      padding: '0.8rem',
      borderRadius: 5,
      background: '#17F0FF',
      color: '#0B7880',
      transition: 'all 0.2s ease',
      textAlign: 'center',
      cursor: 'pointer',
      border: '1px solid transparent',
      fontSize: 24,
      '&:hover': {
        opacity: 0.6,
      },
      '@media screen and (max-width: 768px)': {
        fontSize: 16,
        padding: '0.6rem',
      },
    }
  },
  listNumber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',
    padding: '1.5rem',
    background: 'rgba(28, 25, 25, 0.8)',
    '& li': {
      color: '#17F0FF',
      width: 52,
      height: 52,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: '1px solid #1CE6F3',
      fontWeight: 700,
      cursor: 'pointer',
      fontSize: 24,
      '&:hover, &.active': {
        background: '#0B7880',
        boxShadow: 'inset 0 2px 4px rgb(0 0 0 / 50%)',
        color: '#fff',
      }
    },

    '@media screen and (max-width: 768px)': {
      justifyContent: 'center',
      padding: '1.25rem',
      gap: 0,
      '& li': {
        color: '#17F0FF',
        width: 40,
        height: 40,
        fontSize: 18,
        '& + li': {
          marginLeft: '0.8rem'
        }
      }
    }
  },
}));

export default useStyles;