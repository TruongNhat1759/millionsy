import React from 'react';
import useStyles from './styles';
type Props = {
  sendDataNextToLottery: (getDataNextTolottery: boolean) => void,
}
const NextSection: React.FC<Props> = ({sendDataNextToLottery}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.container}`}>
        <h3>12<sup>h</sup> 12<sup>m</sup><span>till the party</span></h3>
        <div className={`${classes.content}`}>
          <div className={`${classes.header}`}>
            <p className="title">Next Party</p>
            <p className={`${classes.infoRound}`}><span>#15</span>Aug 18, 2021, 11:00 AM</p>
          </div>
          <div className={`${classes.footer}`}>
            <div className="yourticket">
              <p>Your Ticket</p>
              <p>You have <span>0 ticket</span> to enter this party.</p>
            </div>
            <p className="getticket" onClick={() => sendDataNextToLottery(true)}>Get it now {`>`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NextSection