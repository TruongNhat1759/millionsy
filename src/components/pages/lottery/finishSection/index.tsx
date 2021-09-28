import React, { useState } from 'react';
import All from './all';
import Jackpots from './jackpots';
import Yours from './yours';
import useStyles from './styles';
const FinishedSection: React.FC = () => {
  const [component, setComponent] = useState('all');
  const classes = useStyles();
  const handleSetComponent = (item: string) => {
    try {
      setComponent(item);
    } finally {
      handerRenderComponent(component);
    }
  }
  const handerRenderComponent = (item: string) => {
    switch (component) {
      case 'jackpots':
        return (<Jackpots></Jackpots>);
      case 'yours':
        return (<Yours></Yours>);
      default:
        return (<All></All>)
    }
  }
  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.container}`}>
        <h3>Millionsy airboard</h3>
        <ul className={`${classes.listButton}`}>
          <li className={component === 'jackpots' ? 'active' : ''} onClick={() => handleSetComponent('jackpots')}>Jackpots</li>
          <li className="slash">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="7.31585" y1="1.85437" x2="1.8543" y2="20.9698" stroke="#A819FA" strokeWidth="3" strokeLinecap="round"/>
              <line x1="13.6015" y1="1.85437" x2="8.13994" y2="20.9698" stroke="#A819FA" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </li>
          <li className={component === 'all' ? 'active' : ''} onClick={() => handleSetComponent('all')}>All History</li>
          <li className="slash">
            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="7.31585" y1="1.85437" x2="1.8543" y2="20.9698" stroke="#A819FA" strokeWidth="3" strokeLinecap="round"/>
              <line x1="13.6015" y1="1.85437" x2="8.13994" y2="20.9698" stroke="#A819FA" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </li>
          <li className={component === 'yours' ? 'active' : ''} onClick={() => handleSetComponent('yours')}>Yours</li>
        </ul>
        <div>
          {(handerRenderComponent(''))}
        </div>
      </div>
    </div>
  )
}

export default FinishedSection