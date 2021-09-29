import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => createStyles({
  body: {
    padding: '0.5rem 1.5rem',
    background: '#201E1E',
    '@media screen and (max-width: 768px)': {
      padding: '0.5rem 1.25rem',
    },
    '& li': {
      fontSize: 20,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      borderBottom: '1px solid #616161',
      padding: '1rem 0',
      '& p': {
        display: 'flex',
        alignItems: 'center',
        '& span': {
          display: 'inline-flex',
          marginRight: '1rem',
          '@media screen and (max-width: 768px)': {
            marginRight: '0.75rem',
          },
        }
      },
      '@media screen and (max-width: 768px)': {
        padding: '0.75rem 0',
        fontSize: 18,
        '& svg': {
          maxWidth: 20,
        }
      },
      '&:last-child': {
        borderBottom: 0,
      },
      '&:hover': {
        opacity: 0.6
      }
    }
  },

}));

export default useStyles;