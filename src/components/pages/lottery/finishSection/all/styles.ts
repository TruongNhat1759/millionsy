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

  body: {
    borderTop: '1px solid #616161',
    borderBottom: '1px solid #616161',
    '& .content': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2rem 3rem',
      gap: '3rem',
      '& .text': {
        fontSize: 28,
        fontWeight: 700,
        flexShrink: 0,
        color: '#F4E0FF',
      },
      '& .number': {
        display: 'flex',
        gap: '0.8rem',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        '& li': {
          color: '#17F0FF',
          width: 82,
          height: 82,
          border: '1px solid #17F0FF',
          background: 'rgba(4, 26, 41, 0.3)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 36,
          fontFamily: '\'Bungee\', cursive',
        },
        '@media screen and (max-width: 768px)': {
          justifyContent: 'center',
          gap: '0',
          '& li': {
            width: 40,
            height: 40,
            justifyContent: 'center',
            fontSize: 18,
            fontFamily: '\'Bungee\', cursive',
            '& + li': {
              marginLeft: '0.9rem'
            }
          }
        },
      },
      '@media screen and (max-width: 768px)': {
        display: 'block',
        padding: '1.25rem 1rem',
        '& .text': {
          fontSize: 20,
          marginBottom: '1rem',
        },
      },
    },
    '& .slideToggle': {
      transition: 'height 0.2s ease',
      overflow: 'hidden',
      // height: 316,
      '&.active': {
        height: 0,
      }
    }
  },
  infoPrize: {
    background: 'rgba(28, 25, 25, 0.8)',
    padding: '2.5rem 3rem',
    '& .prizeTop': {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: '2rem',
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
        marginBottom: '1.5rem',
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
    '& .prizeMatch': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '2rem',
      '& li': {
        lineHeight: '2.25rem',
      },
      '& span': {
        display: 'block',
        textAlign: 'center',
        '&:nth-child(1)': {
          fontSize: 22,
          fontWeight: 400,
          color: '#F4E0FF',
        },
        '&:nth-child(2)': {
          fontSize: 28,
          fontWeight: 700,
          color: '#D47DFF',
        },
        '&:nth-child(3)': {
          lineHeight: '1.25rem',
        },
        '@media screen and (max-width: 768px)': {
          textAlign: 'left',
          '&:nth-child(1)': {
            fontSize: 18,
          },
          '&:nth-child(2)': {
            fontSize: 24,
          },
        },
      },
      '@media screen and (max-width: 768px)': {
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        '& li': {
          width: '155px',
          lineHeight: '1.7rem',
          marginBottom: '1.4rem',
        },
      },
    },
    '& .totalMatch': {
      textAlign: 'right',
      '& span': {
        fontSize: 20,
        fontWeight: 700,
      }
    },
    '@media screen and (max-width: 768px)': {
      padding: '1.25rem 1rem',
      '& .totalMatch': {
        marginTop: '-6.25rem',
        lineHeight: '1.5rem',
        '& span': {
          display: 'block',
          fontSize: 18,
        }
      },
    },
  },
  footer: {
    textAlign: 'center',
    padding: '1.5rem 2rem',
    fontWeight: 700,
    fontSize: 24,
    color: '#17F0FF',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '& span': {
      display: 'inline-block',
      marginLeft: '0.5rem',
      position: 'relative',
      bottom: 3,
    },
    '&:hover': {
      opacity: 0.6,
    },
    '@media screen and (max-width: 768px)': {
      padding: '1rem',
      fontSize: 16,
      '& span': {
        bottom: 0,
      },
    },
  },
}));

export default useStyles;