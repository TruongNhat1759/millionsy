import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: 180,
    color: '#0B7880',
    background: '#17F0FF',
    fontSize: 14,
    fontWeight: 700,
    textAlign: 'center',
    borderRadius: 5,
    padding: '0.75rem 0',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&.connected': {
      color: '#fff',
      background: '#A819FA',
      cursor: 'default',
      '&:hover': {
        opacity: 1,
      },
    },
    // '@media screen and (max-width: 1640px)': {
    //   fontSize: '1em',
    //   padding: '1vw 0',
    //   width: 160,
    //   borderRadius: '1vw',
    // },
    '@media screen and (max-width: 768px)': {
      fontSize: '13px',
      padding: '0.5rem 0',
      width: 120,
      '&.small': {
        fontSize: '14px',
        borderRadius: '10px',
        width: 140,
      },
    },

    '&:hover': {
      opacity: 0.8,
    },
  },
}));

export default useStyles;