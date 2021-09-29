import React, { useEffect, useRef } from 'react';
import useStyles from './styles';
import DefaultButon from '../button/DefaultButton';
import { isConnect } from 'data/db';
import { Link } from 'react-router-dom';

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
    // console.log('ab')
  }
  return (
    <header className={`${classes.root}`} ref={headerRef} onClick={hanldeonClick}>
      <div className={`${classes.container}`}>
        <Link to="/" className={`${classes.headerLeft}`}><img src="assets/common/logo.png" alt="Millionsy" /><span>Millionsy</span></Link>
        <div className={`${classes.headerRight}`}>
          <ul>
            <li><Link to="/lottery"><span><img src="assets/common/icon_lottery.svg" alt="Lottery" /></span>Lottery</Link></li>
            <li><Link to="/"><span><img src="assets/common/icon_millipad.svg" alt="Millipad" /></span>Millipad</Link></li>
            <li><Link to="/"><span><img src="assets/common/icon_ticket.svg" alt="NFT Tickets" /></span>NFT Tickets</Link></li>
          </ul>
          <DefaultButon text="Connect Wallet" connect={isConnect} onClick={hanldeonClick}></DefaultButon>
        </div>
      </div>
    </header>
  )
}

export default Header