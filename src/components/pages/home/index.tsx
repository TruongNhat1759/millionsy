import React, { useState } from 'react';
import useStyles from './styles';
import Title from 'components/astoms/title/DefaultTitle';
import DefaultButon from 'components/astoms/button/DefaultButton';
import { isConnect } from 'data/db';
import Star from 'components/astoms/star';
import Header from 'components/astoms/header';
import Footer from 'components/astoms/footer';
import ModalContent from 'components/astoms/modalSection';
const Home: React.FC = () => {
  const classes = useStyles();
  const [dataModal, setDataModal] = useState({
    data: {
      is_connect: isConnect,
      show: false,
      first: false,
      second: false,
      third: false,
      four: false,
      view_ticket: false,
      view_your: false,
      submit: false,
      flag_submit: false,
      your_ticket: [],
      next_round: {
        next_id: -1,
        your_ticket: []
      },
    }
  });
  const dataGiveFromModal = (getDataModalTolottery: any) => {
    setDataModal({
      data: getDataModalTolottery,
    })
  }
  const dataGiveFromHeader = (getDataHeader: any) => {
    setDataModal({
      data: {
        ...dataModal.data,
        show: true,
      }
    })
  }
  return (
    <>
      <Star></Star>
      <Header dataGiveFromHeader={dataGiveFromHeader}></Header>
      <div className={`${classes.root}`}>
        <div className={`${classes.container}`}>
          <ul className={`${classes.face}`}>
            <li><img src="/assets/top/face01.png" alt="face01" /></li>
            <li><img src="/assets/top/face02.png" alt="face02" /></li>
          </ul>
          <div className={`${classes.content}`}>
            <Title text={['We start', <br/>,'the next Lottery',<br/>, 'generation']}></Title>
            <p className={`${classes.text}`}>The first crosschain Lottery ever<br className="sp-768" /> powered by Solana</p>
            <DefaultButon text={'Connect Wallet'} small="small" connect={isConnect} onClick={() => !isConnect ? setDataModal({data:{...dataModal.data, show: true}}) : ''}></DefaultButon>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <ModalContent dataModal={dataModal.data} dataGiveFromModal={dataGiveFromModal}></ModalContent>
    </>
  )
}

export default Home