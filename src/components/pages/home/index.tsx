import React from 'react';
import useStyles from './styles';
import Title from 'components/astoms/title/DefaultTitle';
import DefaultButon from 'components/astoms/button/DefaultButton';
import { isConnect } from 'data/db';
const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.container}`}>
        <ul className={`${classes.face}`}>
          <li><img src="assets/top/face01.png" alt="face01" /></li>
          <li><img src="assets/top/face02.png" alt="face02" /></li>
        </ul>
        <div className={`${classes.content}`}>
          <Title text={['We start', <br/>,'the next Lottery',<br/>, 'generation']}></Title>
          <p className={`${classes.text}`}>The first crosschain Lottery ever<br className="sp-768" /> powered by Solana</p>
          <DefaultButon text={'Connect Wallet'} small="small" connect={isConnect}></DefaultButon>
        </div>
      </div>
    </div>
  )
}

export default Home