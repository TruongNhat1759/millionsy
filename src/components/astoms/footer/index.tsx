import React from 'react';
import useStyles from './styles';



const Footer: React.FC = () => {
  const classes = useStyles();
  const DataFooterColumns = [
    {
      title: 'Platform',
      link: [
        {
          path: '/',
          text: 'Apply for IDO'
        },
        {
          path: 'https://docs.millionsy.io/lottery/how-to-buy-a-ticket-from-a-very-first-step',
          text: 'How to buy ticket'
        },
        {
          path: 'https://docs.millionsy.io',
          text: 'Documents'
        },
        {
          path: 'https://www.millionsy.io/whitepaper/',
          text: 'Whitepaper'
        },
        {
          path: 'https://t.me/MILLIONSYio',
          text: 'Support'
        },
      ]
    },
    {
      title: 'Token',
      link: [
        {
          path: 'https://docs.millionsy.io/roadmap',
          text: 'Roadmap'
        },
        {
          path: 'https://docs.millionsy.io/milli',
          text: 'Token contract'
        },
        {
          path: 'asbsd',
          text: 'Tokenomics'
        },
        {
          path: 'asbsd',
          text: 'View on Coingecko'
        },
        {
          path: 'asbsd',
          text: 'View on CoinMarketCap'
        },
      ]
    },
    {
      title: 'Social links',
      link: [
        {
          path: 'https://twitter.com/MILLIONSYio',
          text: 'Twitter'
        },
        {
          path: 'https://t.me/MILLIONSYio',
          text: 'Telegram'
        },
        {
          path: 'https://t.me/MILLIONSYchannel',
          text: 'Telegram Channel'
        },
        {
          path: 'https://www.youtube.com/channel/UCjVsmNhXvonLIoE4mMyUiaw',
          text: 'Youtube'
        },
        {
          path: 'https://www.instagram.com/millionsyio/',
          text: 'Instagram'
        },
        {
          path: 'http://millionsyio.medium.com',
          text: 'Medium'
        },
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
                      <li key={index}><a href={itemLink.path} target="_blank">{itemLink.text}</a></li>
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