import React from 'react';
import useStyles from './styles';



const Footer: React.FC = () => {
  const classes = useStyles();
  const DataFooterColumns = [
    {
      title: 'Platform',
      link: [
        'Apply for IDO',
        'How to buy ticket',
        'Documents',
        'Whitepaper',
        'Support',
      ]
    },
    {
      title: 'Token',
      link: [
        'Roadmap',
        'Token contract',
        'Tokenomics',
        'View on Coingecko',
        'View on CoinMarketCap',
      ]
    },
    {
      title: 'Social links',
      link: [
        'Twitter',
        'Telegram',
        'Telegram Channel',
        'Youtube',
        'Instagram',
        'Medium',
      ]
    },
  ]
  return (
    <footer className={`${classes.root}`}>
      <div className={`${classes.container}`}>
        <div className={`${classes.footerTop}`}>
          {
            DataFooterColumns.map((item, index) => (
              <div key={index}>
                <p className="title">{item.title}</p>
                <ul>
                  {
                    item.link.map((itemLink, index) => (
                      <li key={index}><a href="/">{itemLink}</a></li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
        <div className={`${classes.footerBottom}`}>
          <p><a href="/" className="logo">Millionsy</a></p>
          <p className="copyright">Copyright 2021 | MILLIONSY Limited</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer