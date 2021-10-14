import React, { useState } from 'react';
import useStyles from './styles';
type Props = {
  sendDataPartyToLottery: (getDataPartyTolottery: boolean) => void,
}
const PartySection: React.FC<Props> = ({sendDataPartyToLottery}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.container}`}>
        <h3><span>Pump the party</span>$156,728<span>~ 270 SOL</span></h3>
        <p className={`${classes.buyticket}`} onClick={() => sendDataPartyToLottery(true)}>
          <img src="/assets/lottery/ticket.svg" alt="ticket" />
          <span>Buy Ticket</span>
        </p>
      </div>
    </div>
  )
}

export default PartySection