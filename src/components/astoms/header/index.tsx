import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import DefaultButon from '../button/DefaultButton';
import { useHistory } from "react-router-dom";
import { isConnect } from 'data/db';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

type Props = {
  dataGiveFromHeader: (dataGiveFromHeader: any) => void,
}
type urlParams = {
  nameProject: string,
};
const Header: React.FC<Props> = ({dataGiveFromHeader}) => {
  const classes = useStyles();
  const history = useHistory();
  const {nameProject} = useParams<urlParams>();
  const [offset, setOffset] = useState(false);
  const [location, setLocation] = useState(typeof nameProject !== 'undefined' ? '/millipad' : history.location.pathname);
  
  let curScroll = 0;
  useEffect(() => {
    window.onscroll = () => {
      if(window.pageYOffset > 0) {
        window.pageYOffset - curScroll > 0 ? setOffset(true) : setOffset(false); 
        curScroll = window.pageYOffset;
      } else {
        setOffset(false)
      }
    }
  }, []);
  return (
    <header className={`${classes.root} ${offset ? 'active' : ''}`}>
      <div className={`${classes.container}`}>
        <Link to="/" className={`${classes.headerLeft}`}><img src="/assets/common/logo.png" alt="Millionsy" /><span>Millionsy</span></Link>
        <div className={`${classes.headerRight}`}>
          <ul>
            <li><Link to="/lottery" className={location === '/lottery' ? 'active ': '' }>Lottery</Link></li>
            <li><Link to="/millipad" className={location === '/millipad' ? 'active ': ''}>Millipad</Link></li>
            <li><Link to="/tickets" className={location === '/tickets' ? 'active ': ''}>NFT Tickets</Link></li>
          </ul>
          <DefaultButon text="Connect Wallet" connect={isConnect} onClick={() => !isConnect ? dataGiveFromHeader(true) : ''}></DefaultButon>
        </div>
      </div>
    </header>
  )
}

export default Header