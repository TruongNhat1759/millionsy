import React, { ChangeEvent, useState } from 'react';
import useStyles from './styles';

type Props = {
  dataGiveFirst: (getDataFirst: any) => void,
}
const First: React.FC<Props> = ({dataGiveFirst}) => {
  
  
  const classes = useStyles();
  const [data, setData] = useState({
    data: {
      ticketCount: 0,
      price: 0,
      unit: 0.35,
      tickets: [Array()]
    }
  });
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      data: {
        ...data.data,
        ticketCount: event.target.value !== '' ? parseInt(event.target.value) : 0,
        price: event.target.value !== '' ? data.data.unit * parseInt(event.target.value) : 0,
        tickets: Array(parseInt(event.target.value)).fill(0).map(() => Array(6).fill(0).map(() => Math.floor(Math.random() * 45) + 1))
      }
    })
  };
  const handleSendData = () => {
    if (data.data.ticketCount > 0) {
      dataGiveFirst(data.data)
    }
  }
  return (
    <>
      <div className={`${classes.body}`}>
        <div className={`${classes.buy}`}>
          <p className="title">Buy</p>
          <p className="icon">Tickets<span><img src="/assets/common/icon_ticket_modal.svg" alt="ticket"/></span></p>
        </div>
        <div className={`${classes.inputNumber}`}>
          <input
            placeholder="0"
            maxLength={2}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={handleChangeInput}
          />
          <div className={`${classes.payunit}`}>
            <p className="name">SOL</p>
            <p>~{data.data.unit}</p>
          </div>
        </div>
        <p className={`${classes.insuff}`}>Insufficient SOL balance</p>
        <p className={`${classes.balance}`}>SOL Balance: 0.00</p>
      </div>
      <p className={`${classes.lineGray}`}><span></span></p>
      <div className={`${classes.footer}`}>
          <div className={`${classes.totalPay}`}>
            <p className="text">You pay</p>
            <p className="price">~ {data.data.price.toFixed(2)} SOL</p>
          </div>
          <ul className={`${classes.listButton}`}>
            <li onClick={handleSendData}>Approve</li>
          </ul>
        </div>
    </>
  )
}

export default First