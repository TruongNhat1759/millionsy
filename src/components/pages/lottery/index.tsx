import React, { useState } from 'react';
import FinishedSection from './finishSection';
import GetSection from './getSection';
import NextSection from './nextSection';
import PartySection from './partySection';
import ModalContent from './modalSection';
import useStyles from './styles';
const Lottery: React.FC = () => {
  const classes = useStyles();
  const [dataModal, setDataModal] = useState({
    data: {
      show: false,
      first: false,
      second: false,
      third: false,
      four: false,
    }
  });
  const sendDataPartyToLottery = (getDataPartyTolottery: boolean) => {
    setDataModal({
      data: {
        ...dataModal.data,
        show: getDataPartyTolottery,
        first: getDataPartyTolottery,
      }
    })
  }
  const sendDataNextToLottery = (getDataNextTolottery: boolean) => {
    setDataModal({
      data: {
        ...dataModal.data,
        show: getDataNextTolottery,
        first: getDataNextTolottery,
      }
    })
  }

  const dataGiveFromModal = (getDataModalTolottery: any) => {
    setDataModal({
      data: getDataModalTolottery,
    })
  }


  return (
    <div className={`${classes.root}`}>
        <PartySection sendDataPartyToLottery={sendDataPartyToLottery}></PartySection>
        <NextSection sendDataNextToLottery={sendDataNextToLottery}></NextSection>
        <FinishedSection></FinishedSection>
        <GetSection></GetSection>
        <ModalContent dataModal={dataModal.data} dataGiveFromModal={dataGiveFromModal}></ModalContent>
    </div>
  )
}

export default Lottery