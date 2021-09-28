import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    maxWidth: 975,
    margin: '0 auto',
    background: '#303030',
    borderRadius: 20,
    border: '1px solid #17F0FF',
    overflow: 'hidden',
  },
  header: {
    padding: '1.75rem 3rem',
    '& .top': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
      '& .title': {
        fontSize: 28,
        fontWeight: 700,
        color: '#F4E0FF',
      },
      '& ul': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        '& li': {
          cursor: 'pointer',
          '&:hover path': {
            fill: '#fff',
          },
          '&:hover line': {
            stroke: '#fff',
          }
        }
      },
      '@media screen and (max-width: 768px)': {
        marginBottom: '0.75rem',
        '& .title': {
          fontSize: 20,
        },
        '& ul': {
          gap: '0',
          '& li': {
            padding: '0 0.6rem',
            '& svg': {
              maxWidth: 18
            },
          }
        },
      },
    },
    '@media screen and (max-width: 768px)': {
      padding: '1.25rem 1rem 1.25rem',
    },

  },
  infoRound: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 24,
    color: '#F4E0FF',
    background: 'rgba(255, 255, 255, 0.25)',
    paddingRight: '1rem',
    borderRadius: 10,
    overflow: 'hidden',
    '& span': {
      display: 'inline-block',
      fontWeight: 700,
      background: 'rgba(140, 36, 191, 0.5)',
      borderRadius: 10,
      width: 175,
      padding: '1rem 0',
      textAlign: 'center',
    },
    '@media screen and (max-width: 768px)': {
      fontSize: 16,
      paddingRight: '0.75rem',
      '& span': {
        width: 72,
      },
    },
  },
  body: {},
  infoPrize: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    padding: '2rem 3rem',
    background: 'rgba(28, 25, 25, 0.8)',
    '& .text': {
      fontSize: 28,
      fontWeight: 700,
      color: '#F4E0FF',
      alignSelf: 'center',
      width: '26%',
    },
    '& .total': {
      fontSize: 60,
      fontFamily: '\'Bungee\', cursive',
      color: '#17F0FF',
    },
    '& .unit': {
      fontSize: 36,
      fontFamily: '\'Bungee\', cursive',
      color: '#D47DFF',
      paddingBottom: 4,
    },
    '@media screen and (max-width: 768px)': {
      display: 'block',
      marginBottom: '0',
      padding: '1.25rem 1rem',
      '& .text': {
        fontSize: 20,
        width: '100%',
      },
      '& .total': {
        fontSize: 32,
        margin: '1rem 0 0.5rem'
      },
      '& .unit': {
        fontSize: 24,
        paddingBottom: 0,
      },
    },
  },
  footer: {
    textAlign: 'center',
    padding: '1.5rem',
    fontWeight: 500,
    fontSize: 24,
    wordBreak: 'break-word',
    '@media screen and (max-width: 768px)': {
      padding: '1.25rem 1rem',
      fontSize: 20,
      lineHeight: '1.7rem',
    },
  },
}));

export default useStyles;