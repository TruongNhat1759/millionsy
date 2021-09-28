import React, { useEffect, useRef } from 'react';
import useStyles from './styles';
import DefaultButon from '../button/DefaultButton';

const Header: React.FC = () => {
  const classes = useStyles();
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if (headerRef && headerRef.current) {
      const height = headerRef.current.offsetHeight;
      console.log(height)
    }
  }, [headerRef])
  const hanldeonClick = (e: React.MouseEvent) =>{
    console.log('ab')
  }
  return (
    <header className={`${classes.root}`} ref={headerRef} onClick={hanldeonClick}>
      <div className={`${classes.container}`}>
        <a href="/" className={`${classes.headerLeft}`}><img src="assets/common/logo.png" alt="Millionsy" /><span>Millionsy</span></a>
        <div className={`${classes.headerRight}`}>
          <ul>
            <li><a href="/"><span><img src="assets/common/icon_lottery.svg" alt="Lottery" /></span>Lottery</a></li>
            <li><a href="/"><span><img src="assets/common/icon_millipad.svg" alt="Millipad" /></span>Millipad</a></li>
            <li><a href="/"><span><img src="assets/common/icon_ticket.svg" alt="NFT Tickets" /></span>NFT Tickets</a></li>
          </ul>
          <DefaultButon text="Connect Wallet" onClick={hanldeonClick}></DefaultButon>
        </div>
      </div>
    </header>
  )
}

export default Header