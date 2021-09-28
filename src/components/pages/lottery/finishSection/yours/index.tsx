import React, { useEffect, useState } from 'react';
import useStyles from './styles';
const Yours: React.FC = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:3000/round_history')
    .then(res => res.json())
    .then(data => setData(data.reverse()))
  }, [])
  

  const handleRenderRoundItems = (el: any) => {
    const date = new Date(el.date);
    const formatTime = (time: number) => {
      return time < 10 ?  '0' + time : time;
    }
    return (
      <li key={el.id}>
        <p>{el.id}</p>
        <p>
          <span>{`${formatTime(date.getDate())} thg ${date.getMonth()}, ${date.getFullYear()}`}</span>
          <span>{`${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`}</span>
        </p>
        <p>
          <span>{el.your_tickets.length}</span>
          <span><img src="assets/common/icon_arrow_circle.svg" alt="arrow circle" /></span>
        </p>
      </li>
    )
  }
  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.header}`}>
        <p className="title">Round</p>
      </div>
      <div className={`${classes.body}`}>
        <ul className="listLabel">
          <li>#</li>
          <li>Date</li>
          <li>Your<br className="sp-425"/> tickets</li>
        </ul>
        <ul className="listRound">
          {data.map((el) => (handleRenderRoundItems(el)))}
        </ul>
      </div>
    </div>
  )
}

export default Yours