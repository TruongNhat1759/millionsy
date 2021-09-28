import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import First from './First/indext';
import Second from './Second/indext';
import Third from './Third/indext';
import Four from './Four/indext';
import Five from './Five/indext';
type Props = {
  dataModal: any,
  dataGiveFromModal: (getDataModalTolottery: any) => void,
}

const ModalContent: React.FC<Props> = ({dataModal, dataGiveFromModal}) => {
  const classes = useStyles();
  const [dataSendLottery, setDataSendLottery] = useState({
    data: {
      show: false,
      first: false,
      second: false,
      third: false,
      four: false,
      five: false,
    }
  });

  const [dataTicketModal, setDataTicketModal] = useState({
    data: {}
  })

  const dataGiveFirst = (getDataFirst: any) => {
    setDataSendLottery({
      data: {
        show: true,
        first: false,
        second: true,
        third: false,
        four: false,
        five: false,
      }
    })
    
    setDataTicketModal({
      data: {
        ...dataTicketModal.data,
        ticketCount: getDataFirst.ticketCount,
        price: getDataFirst.price,
        unit: getDataFirst.unit,
        tickets: getDataFirst.tickets,
      }
    })
  }
  const dataGiveSecond = (getDataSecond: any) => {
    setDataSendLottery({
      data: {
        show: true,
        first: false,
        second: false,
        third: getDataSecond.third,
        four: false,
        five: getDataSecond.five,
      }
    })
    
    setDataTicketModal({
      data: {
        ...dataTicketModal.data,
        ticketCount: getDataSecond.ticketCount,
        price: getDataSecond.price,
        unit: getDataSecond.unit,
        tickets: getDataSecond.tickets
      }
    })
  }
  const dataGiveThird = (getDataThird: any) => {
    setDataSendLottery({
      data: {
        show: true,
        first: false,
        second: getDataThird.second,
        third: false,
        four: getDataThird.four,
        five: getDataThird.five,
      }
    })
    
    setDataTicketModal({
      data: {
        ...dataTicketModal.data,
        tickets: getDataThird.tickets,
        ticketChanges: getDataThird.ticketChanges
      }
    })
  }
  const dataGiveFour = (getDataFour: any) => {
    setDataSendLottery({
      data: {
        show: true,
        first: false,
        second: false,
        third: true,
        four: false,
        five: false,
      }
    })
    setDataTicketModal({
      data: {
        ...dataTicketModal.data,
        tickets: getDataFour.tickets,
        ticketChanges: getDataFour.ticketChanges
      }
    })
  }
  
  const dataGiveFive = (getDataFive: any) => {
    setDataSendLottery({
      data: {
        show: true,
        first: false,
        second: false,
        third: getDataFive.third,
        four: false,
        five: false,
      }
    })
  }
  useEffect(() => {
    dataGiveFromModal(dataSendLottery.data);
  }, [dataSendLottery])

  return (
    <>
      {dataModal.show ? (
        <div className={`${classes.root}`}>
          <div className={`${classes.backgroundModal}`} onClick={() => dataGiveFromModal({data: { show: false, first: false, second: false, third: false, four: false}})}></div>
          <div className={`${classes.content}`}>
            <div className={`${classes.header}`}>
              {dataModal.first ? (<p className="title">Buy Tickets</p>) : ''}
              {dataModal.second ? (<p className="title">Buy Tickets</p>) : ''}
              {dataModal.third ? (
                <p className="title">
                  <span 
                    onClick={() => setDataSendLottery({
                      data: {
                        show: true,
                        first: false,
                        second: true,
                        third: false,
                        four: false,
                        five: false,
                      }
                    })}
                  >
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 9C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7V9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM17 7L1 7V9L17 9V7Z" fill="#F4E0FF"/>
                    </svg>
                  </span>
                  Edit numbers
                </p>
              ) : ''}
              {dataModal.four ? (
                <p className="title">
                  <span 
                    onClick={() => setDataSendLottery({
                      data: {
                        show: true,
                        first: false,
                        second: false,
                        third: true,
                        four: false,
                        five: false,
                      }
                    })}
                  >
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 9C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7V9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM17 7L1 7V9L17 9V7Z" fill="#F4E0FF"/>
                    </svg>
                  </span>
                  Edit numbers
                </p>
              ) : ''}
              {dataModal.five ? (
                <p className="title">
                  <span 
                    onClick={() => setDataSendLottery({
                      data: {
                        show: true,
                        first: false,
                        second: true,
                        third: false,
                        four: false,
                        five: false,
                      }
                    })}
                  >
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 9C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7V9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM17 7L1 7V9L17 9V7Z" fill="#F4E0FF"/>
                    </svg>
                  </span>
                  Edit numbers
                </p>
              ) : ''}
              <p className="close" onClick={() => dataGiveFromModal({data: { show: false, first: false, second: false, third: false, four: false}})}><img src="assets/common/icon_close.svg" alt="close"/></p>
            </div>
            {dataModal.first ? (<First dataGiveFirst={dataGiveFirst}></First>) : ''}
            {dataModal.second ? (<Second dataGiveSecond={dataGiveSecond} dataSendSecond={dataTicketModal}></Second>) : ''}
            {dataModal.third ? (<Third dataGiveThird={dataGiveThird} dataSendThird={dataTicketModal}></Third>) : ''}
            {dataModal.four ? (<Four dataGiveFour={dataGiveFour} dataSendFour={dataTicketModal}></Four>) : ''}
            {dataModal.five ? (<Five dataGiveFive={dataGiveFive} dataSendFive={dataTicketModal}></Five>) : ''}
          </div>
        </div>
      ) : ''}
    </>
  )
}

export default ModalContent