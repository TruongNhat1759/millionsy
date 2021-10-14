import Footer from 'components/astoms/footer';
import Header from 'components/astoms/header';
import ModalContent from 'components/astoms/modalSection';
import { isConnect } from 'data/db';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const MillipadConnected: React.FC = () => {
  const [selectedTickets, setSelectedTickets] = useState('telegram');
  const [showModalTicket, setShowModalTicket] = useState(false);
  const [timeCountDown, setTimeCountDown] = useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  })
  const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
  const countDown = new Date('Oct 20, 2021 00:00:00').getTime();
  const timer = setInterval(function() {    
		const now = new Date().getTime();
		const distance = countDown - now;
    setTimeCountDown({
      days: Math.floor(distance / (day)).toString(),
      hours: Math.floor((distance % (day)) / (hour)) < 10 ? '0' + Math.floor((distance % (day)) / (hour)) : Math.floor((distance % (day)) / (hour)).toString(),
      minutes: Math.floor((distance % (hour)) / (minute)) < 10 ? '0' + Math.floor((distance % (hour)) / (minute)) : Math.floor((distance % (hour)) / (minute)).toString(),
      seconds: Math.floor((distance % (minute)) / second) < 10 ? '0' + Math.floor((distance % (minute)) / second) : Math.floor((distance % (minute)) / second).toString(),
    })
		if (distance < 0) {
			clearInterval(timer);
		}
	}, 0);
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
      <Header dataGiveFromHeader={dataGiveFromHeader}></Header>
      <section className='px-3/100 mb-7 md:mb-10'>
        <div className='max-w-900 mx-auto relative mt-54 md:mt-57'>
          <p className='absolute top-2 md:top-4 left-2 md:left-4 transition-all hover:opacity-70 w-5 md:w-auto'><Link to="/millipad"><img src="/assets/millipad/arrow_back.svg" alt="arrow_back"/></Link></p>
          <p><img src="/assets/millipad/banner.png" alt="banner"/></p>
          <h3 className='text-35 md:text-42 text-blue-0 text-center uppercase font-bungee mt-3 md:mt-5 md:mb-1'>MILLIONSY</h3>
          <p className='text-pink-50 text-center text-12 md:text-14 leading-5'>MILLIONSY is the first Solana-based cross-chain<br className='block md:hidden' /> platform, which has 3 main products: The Lottery<br className='block md:hidden' /> platform; the NFT ticket and the IDO platform for new<br className='block md:hidden' /> games - NFT projects called MILLIPAD.</p>
        </div>
      </section>
      <section className='px-3/100 mb-8 md:mb-10'>
        <div className='max-w-900 mx-auto'>
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='rounded-10 bg-gray-150 flex-shrink-0'>
              <p className='flex items-center justify-between md:block text-14 text-pink-0 pl-4 md:pl-6 tablet992:pl-8 pr-6 tablet992:pr-12 py-3 md:py-2'>Followers<span className='text-26 md:text-20 block font-bungee'>250,000</span></p>
              <ul className='bg-gray-200 px-8 md:px-6 tablet992:px-12 py-6 md:pt-12 md:pb-13'>
                <li className='mb-4'><a href="/" target='_blank' className='flex items-center text-pink-50 text-14 hover:opacity-70 gap-4'><span><img src="/assets/millipad/icon_website.svg" alt="icon_website" /></span>Website</a></li>
                <li className='mb-4'><a href="/" target='_blank' className='flex items-center text-pink-50 text-14 hover:opacity-70 gap-4'><span><img src="/assets/millipad/icon_telegram.svg" alt="icon_telegram" /></span>Telegram</a></li>
                <li><a href="/" target='_blank' className='flex items-center text-pink-50 text-14 hover:opacity-70 gap-4'><span><img src="/assets/millipad/icon_twitter.svg" alt="icon_twitter" /></span>Twitter</a></li>
              </ul>
              <p className='flex md:block justify-between items-center text-14 text-pink-0 pl-4 md:pl-6 tablet992:pl-8 pr-6 tablet992:pr-12 py-4 leading-none'>Total raise:<span className='text-20 block font-bold'>200,000 USDT</span></p>
            </div>
            <div className='rounded-10 bg-gray-150 w-full'>
              <h4 className='text-14 md:text-20 text-pink-50 font-bold py-3 px-4 md:px-6 tablet992:px-12 flex flex-col md:flex-row justify-between md:items-center'>Will start in<span className='font-bungee text-blue-0 text-28'>{timeCountDown.days} <span className='text-20'>days</span> : {timeCountDown.hours}<span className='text-20'>h</span> : {timeCountDown.minutes}<span className='text-20'>m</span> : {timeCountDown.seconds}<span className='text-20'>s</span></span></h4>
              <ul className='bg-gray-300'>
                <li className='px-4 md:px-6 tablet992:px-12 py-3 text-12 md:text-14 text-pink-50 border-b border-gray-250 border-solid bg-purple-100'><span className='text-16 font-bold block md:inline-block'>Whitelist<span className='hidden md:inline'>:</span></span> Register for the sale round and do tasks to claim slots.</li>
                <li className='px-4 md:px-6 tablet992:px-12 py-3 text-12 md:text-14 text-pink-50 border-b border-gray-250 border-solid'><span className='text-16 font-bold block md:inline-block'>Lottery<span className='hidden md:inline'>:</span></span> Choosing randomly the winners among participants.</li>
                <li className='px-4 md:px-6 tablet992:px-12 py-3 text-12 md:text-14 text-pink-50 border-b border-gray-250 border-solid'><span className='text-16 font-bold block md:inline-block'>Sale round<span className='hidden md:inline'>:</span></span> Only winners can participate in this round.</li>
                <li className='px-4 md:px-6 tablet992:px-12 py-3 text-12 md:text-14 text-pink-50'><span className='text-16 font-bold block md:inline-block'>Distribution<span className='hidden md:inline'>:</span></span> The tokens will be automatically sent to wallets.</li>
              </ul>
              <div className='flex items-center justify-between px-4 md:px-6 tablet992:px-12 py-6 md:py-3'>
                <p className='text-14 cursor-pointer transition-all bg-gray-0 hover:bg-pink-50 hover:text-gray-0 border border-solid border-pink-50 rounded-5 py-1 px-5 text-pink-50 font-bold'>Solana</p>
                <p className='text-14 md:text-16 px-13 pt-2 pb-2.5 rounded-5 font-bold bg-pink-150 text-pink-50 pointer-events-none'>Connected</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='px-3/100 mb-9 md:mb-14'>
        <div className='max-w-900 mx-auto bg-gray-350 rounded-15 pt-5 pb-7 md:pt-8 md:pb-12'>
          <div className='px-4 md:px-8'>
            <h4 className='text-18 md:text-20 mb-2 md:mb-4 text-pink-0'>NFT ticket pool</h4>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>Each NFT you own will be added a certain number of slots. These slots are calculated independently in the IDO pools of different projects. </p>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>For example, when you have 100 slots from NFT, then you all have 100 slots in all different pools whether used or not, when you use one pool, other pools will not be deducted. The NFT tickets you own will stay there and receive benefits for life until you sell them. We do not limit the number of NFTs you buy, the more you buy, the more slots you will have for potential projects.</p>
            <p className='block md:hidden h-px bg-gray-250 mt-4 mb-2'></p>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-4 md:mb-8 flex justify-between items-end md:block'><span className='pb-0.5 md:pb-0'>You have</span><span><span className='text-pink-0 font-bold text-18 inline-block ml-8 mr-2 text-right'>3 slots</span>from your NFT tickets</span></p>
          </div>
          <div className='bg-gray-200 px-4 md:px-8 md:flex items-center justify-between pt-4 pb-6 md:py-4'>
            <p className='text-pink-50 text-14 tablet992:text-16 font-normal md:text-left mb-4 md:mb-0'>Buy NFT tickets for more slots and better chance to win Lottery lifetime.</p>
            <p className='text-14 md:text-16 cursor-pointer transition-all hover:opacity-70 px-16 pt-2 pb-2.5 rounded-5 font-bold bg-blue-0 text-blue-50 flex-shrink-0 text-center'>Buy NFT</p>
          </div>
          <p className='h-px bg-gray-250 mt-7 mb-5 md:mt-12 md:mb-9'></p>
          <div className='px-4 md:px-8'>
            <h4 className='text-18 md:text-20 mb-2 md:mb-4 text-pink-0'>Social Pool</h4>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>The more slots you have, the more chance for you to win the whitelist (not the chance to purchase the whitelist). Each wallet address can only have a maximum of 1 ticket to buy whitelist in each pool/ project.</p>
            <p className='block md:hidden h-px bg-gray-250 mt-4 mb-2'></p>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-4 md:mb-8 flex justify-between items-end md:block'><span className='pb-0.5 md:pb-0'>You have</span><span><span className='text-pink-0 font-bold text-18 inline-block ml-8 mr-2'>2 slots</span>from Social tasks</span></p>
          </div>
          <div className='bg-gray-200 pt-5 md:pt-6'>
            <h5 className='text-16 mb-5 md:mb-6 text-pink-0 font-bold px-4 md:px-8'>Social Tasks</h5>
            <ul>
              <li className={`flex items-center text-12 cursor-pointer transition-all px-4 md:px-8 py-3 leading-7 ${selectedTickets === 'telegram' ? 'bg-blue-100' : 'opacity-50 hover:bg-blue-100 hover:opacity-100'}`}
                onClick={() => {
                  setSelectedTickets('telegram');
                  setShowModalTicket(true);
                }}
              >
                <span className='mr-3'><img src="/assets/millipad/icon_telegram.svg" alt="icon_telegram" /></span>
                <span className='font-bold text-14 w-40 text-blue-0'>Telegram Tasks</span>
                <span className='text-blue-200 ml-auto md:ml-0'>0/1 slots collected</span>
              </li> 
              <li className={`flex items-center text-12 cursor-pointer transition-all px-4 md:px-8 py-3 leading-7 ${selectedTickets === 'twitter' ? 'bg-blue-100' : 'opacity-50 hover:bg-blue-100 hover:opacity-100'}`}
                onClick={() => {
                  setSelectedTickets('twitter');
                  setShowModalTicket(true);
                }}
              >
                <span className='mr-3'><img src="/assets/millipad/icon_twitter.svg" alt="icon_twitter" /></span>
                <span className='font-bold text-14 w-40 text-blue-0'>Twitter Tasks</span>
                <span className='text-blue-200 ml-auto md:ml-0'>0/3 slots collected</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='px-3/100 mb-12 md:mb-16'>
        <div className='max-w-900 mx-auto rounded-15 bg-gray-150 pt-6 md:pt-8 pb-10 md:pb-14'>
          <div className='px-4 md:px-6 tablet992:px-12'>
            <h4 className='text-pink-0 underline text-18 md:text-20 font-bold mb-10 md:mb-12'>Project Detail</h4>
            <div>
              <h5 className='text-blue-0 text-16 font-bold mb-4'>Features</h5>
              <p className='text-pink-50 text-12 md:text-14 text-justify md:text-left mb-2'>MILLIONSY is the first Solana-based cross-chain platform, which has 3 main products: The Lottery platform; the NFT ticket and the IDO platform for new games - NFT projects called MILLIPAD.</p>
              <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>By transferring the Lottery to the blockchain platform, we  want to reach international participants and give them the opportunity to establish the largest PRIZE POOL in history and really win it. More to that, when the cross-chain platform begins, MILLIONSY will allow you to own  essential tickets for the specific chain you want. </p>
              <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>Not only do its creators aim for it to be the largest lottery platform in history in the blockchain system, MILLIONSY also want to launch MILLIPAD. The platform that leverages a lottery PRIZE POOL to become an IDO model and collaborate with future projects is their significant goal. </p>
              <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>There is no need to say that Lottery has really become a part of mankind's culture. Many people think of it as a gaming product, but it is actually a high-volume industry that may also be referred to as a commodity.</p>
              <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>The psychology of the lottery is that people will be happy to spend $2 for a hope and for the pleasure of thinking about what might happen if they win millions of dollars. The need for buying Lottery is so huge that this industry has never died in real life.</p>
              <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>Now with Blockchain technology every transaction, whether a ticket sale, a jackpot win, commissions, or investment, passes via the blockchain. Because each block in the chain has a record of the transactions, a hacker would have to modify every single block in order to manipulate or compromise the lottery number, which is impossible.</p>
              <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>As a result, a blockchain lottery platform assures that there are no foul plays or lottery scandals in the ecosystem. This is a guarantee for an ever-expanding lottery industry.</p>
              <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>You are more than welcome to participate in the greatest blockchain celebration, as long as you have a wallet and at the price of just 2$ per ticket, you now have a chance to join the millionaire-club. Tickets will be available on their website and can be purchased by SOL and  MILLI. In the near future, you will be able to buy lottery tickets via Visa, PayPal, and other payment methods. </p>
            </div>
            <h5 className='text-blue-0 text-16 font-bold mb-3 md:mb-4 pt-3 md:pt-8'>Tokenomic</h5>
          </div>
          <p className='mb-4'><img src="/assets/millipad/chart.png" alt="chart"/></p>
          <div className='px-4 md:px-6 tablet992:px-12'>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-1.5'>Total max supply: 300,000,000</p>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-1.5'>Team: Lock 12 months.</p>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-1.5'>Advisor: Unlock from the 6th month.</p>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-1.5'>Dev &amp; marketing: Unlock 1% per month after launching.</p>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-1.5'>All unused tokens will be transferred to the BURN POOL</p>
            <h5 className='text-blue-0 text-16 font-bold mb-3 md:mb-4 pt-3 md:pt-8'>Roadmap</h5>
          </div>
          <p className='mb-4'><img src="/assets/millipad/list.png" alt="list"/></p>
          <div className='px-4 md:px-6 tablet992:px-12'>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>Between September and October: Conducting Sale Rounds to fuel the initial development and growth. We appreciate the strong support from the community as well as  many funds that reached out to us. </p>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>Especially, in October, Lottery platform and contract will be audited.</p>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>Next, MILLIPAD and NFTs Ticket will be launched in November. Then in December, promoting social activities to keep building a community that shares our long term vision, also opening Live Drawing at this stage. </p>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>From January to March 2020, cross-chain will be availabe in Millionsy platform. Users will be enable to buy ticket from other blockchains seamlessly. </p>
            <p className='text-pink-50 text-12 md:text-14 font-normal text-justify md:text-left mb-2'>From April to the end of 2022, completing Fiat Ticket Purchase feature. MILLIONSY will definately lead the next chapter of lottery industry with those unique and promising features.</p>
            <h5 className='text-blue-0 text-16 font-bold mb-3 md:mb-4 pt-3 md:pt-8'>Team</h5>
          </div>
          <p><img src="/assets/millipad/teams.png" alt="face"/></p>
        </div>
      </section>
      <section className={`fixed h-100vh w-full top-0 left-0 z-100 ${showModalTicket ? 'block' : 'hidden'}`}>
        <div className='h-full absolute w-full top-0 left-0 bg-gray-400' onClick={() => setShowModalTicket(false)}></div>
        <div className={`${selectedTickets === 'twitter' ? 'block' : 'hidden'} bg-gray-450 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-full z-1000 overflow-hidden border border-solid border-blue-0 rounded-20 max-w-320 w-full`}>
          <div className='flex justify-between items-center px-5 py-6 bg-gray-0'>
            <p className='text-14 font-bold text-pink-50'>Twitter tasks</p>
            <p className='cursor-pointer transition-all hover:opacity-70 py-1.5 pl-4' onClick={() => setShowModalTicket(false)}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.75592 1.42259C10.0814 1.09715 10.0814 0.569515 9.75592 0.244078C9.43049 -0.0813592 8.90285 -0.0813592 8.57741 0.244078L5 3.82149L1.42259 0.244078C1.09715 -0.0813584 0.569515 -0.0813584 0.244078 0.244079C-0.0813592 0.569515 -0.0813592 1.09715 0.244078 1.42259L3.82149 5L0.244078 8.57741C-0.0813592 8.90285 -0.0813592 9.43048 0.244078 9.75592C0.569515 10.0814 1.09715 10.0814 1.42259 9.75592L5 6.17851L8.57741 9.75592C8.90285 10.0814 9.43049 10.0814 9.75592 9.75592C10.0814 9.43049 10.0814 8.90285 9.75592 8.57741L6.17851 5L9.75592 1.42259Z" fill="#fff"/>
              </svg>
            </p>
          </div>
          <div className='px-5 pt-1 pb-5'>
            <ul>
              <li className='flex justify-between items-center py-3.5 border-b border-solid border-gray-550'>
                <p className='leading-5'>
                  <span className='text-16 text-pink-0 font-bold'><span className='mr-2'>1.</span>Waggle Network</span>
                  <span className='text-14 text-pink-50 block pl-6'>Twitter Follow</span>
                </p>
                <p className='leading-4 flex items-center flex-col'>
                  <span>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.8457 0.230774C8.769 0.230774 6.73893 0.846588 5.01222 2.00034C3.2855 3.1541 1.93969 4.79397 1.14497 6.7126C0.350253 8.63122 0.142318 10.7424 0.547462 12.7792C0.952607 14.816 1.95263 16.6869 3.42109 18.1554C4.88954 19.6238 6.76046 20.6239 8.79726 21.029C10.8341 21.4342 12.9453 21.2262 14.8639 20.4315C16.7825 19.6368 18.4224 18.291 19.5761 16.5643C20.7299 14.8375 21.3457 12.8075 21.3457 10.7308C21.3457 7.946 20.2395 5.27528 18.2703 3.30615C16.3012 1.33702 13.6305 0.230774 10.8457 0.230774ZM16.1346 8.58982L16.1419 8.91112C16.1419 12.1924 13.5684 15.9776 8.86121 15.9776C7.4749 15.9801 6.11574 15.5934 4.93841 14.8615C5.14128 14.8847 5.34531 14.8963 5.54951 14.8961C6.69691 14.8996 7.81366 14.5259 8.72786 13.8325C8.1999 13.8279 7.68638 13.6596 7.25814 13.3508C6.8299 13.042 6.50805 12.6079 6.33701 12.1084C6.49558 12.1381 6.65658 12.1528 6.81791 12.1525C7.04542 12.1526 7.272 12.1233 7.49201 12.0653C6.9205 11.9606 6.40319 11.6604 6.0287 11.2162C5.6542 10.772 5.44582 10.2114 5.43926 9.63037V9.59887C5.79441 9.79255 6.18995 9.90042 6.59426 9.91387C6.24686 9.69142 5.96094 9.38522 5.76279 9.02341C5.56464 8.6616 5.46061 8.25579 5.46026 7.84327C5.45957 7.40343 5.57902 6.97175 5.80571 6.59482C6.45851 7.36747 7.26401 7.9968 8.17163 8.44329C9.07925 8.88978 10.0694 9.14379 11.0799 9.18937C11.0353 9.00403 11.0131 8.81403 11.0137 8.62342C11.0137 7.25212 12.1593 6.14122 13.5715 6.14122C13.9195 6.13991 14.2641 6.20858 14.585 6.34314C14.9059 6.4777 15.1965 6.67542 15.4395 6.92452C16.0116 6.81582 16.5614 6.61172 17.0659 6.32077C16.8717 6.90157 16.4712 7.39097 15.9403 7.69627C16.4468 7.63796 16.942 7.50602 17.4103 7.30462C17.0648 7.80547 16.6328 8.24068 16.1346 8.58982Z" fill="#17F0FF"/>
                    </svg>
                  </span>
                  <span className='text-10 text-blue-200'>1 slot</span>
                </p>
              </li>
              <li className='flex justify-between items-center py-3.5 border-b border-solid border-gray-550'>
                <p className='leading-5 opacity-50'>
                  <span className='text-16 text-pink-0 font-bold'><span className='mr-2'>2.</span>MILLIONSY</span>
                  <span className='text-14 text-pink-50 block pl-6'>Twitter Follow</span>
                </p>
                <p className='leading-4 flex items-center flex-col'>
                  <span>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.8457 0.230774C8.769 0.230774 6.73893 0.846588 5.01222 2.00034C3.2855 3.1541 1.93969 4.79397 1.14497 6.7126C0.350253 8.63122 0.142318 10.7424 0.547462 12.7792C0.952607 14.816 1.95263 16.6869 3.42109 18.1554C4.88954 19.6238 6.76046 20.6239 8.79726 21.029C10.8341 21.4342 12.9453 21.2262 14.8639 20.4315C16.7825 19.6368 18.4224 18.291 19.5761 16.5643C20.7299 14.8375 21.3457 12.8075 21.3457 10.7308C21.3457 7.946 20.2395 5.27528 18.2703 3.30615C16.3012 1.33702 13.6305 0.230774 10.8457 0.230774ZM16.1346 8.58982L16.1419 8.91112C16.1419 12.1924 13.5684 15.9776 8.86121 15.9776C7.4749 15.9801 6.11574 15.5934 4.93841 14.8615C5.14128 14.8847 5.34531 14.8963 5.54951 14.8961C6.69691 14.8996 7.81366 14.5259 8.72786 13.8325C8.1999 13.8279 7.68638 13.6596 7.25814 13.3508C6.8299 13.042 6.50805 12.6079 6.33701 12.1084C6.49558 12.1381 6.65658 12.1528 6.81791 12.1525C7.04542 12.1526 7.272 12.1233 7.49201 12.0653C6.9205 11.9606 6.40319 11.6604 6.0287 11.2162C5.6542 10.772 5.44582 10.2114 5.43926 9.63037V9.59887C5.79441 9.79255 6.18995 9.90042 6.59426 9.91387C6.24686 9.69142 5.96094 9.38522 5.76279 9.02341C5.56464 8.6616 5.46061 8.25579 5.46026 7.84327C5.45957 7.40343 5.57902 6.97175 5.80571 6.59482C6.45851 7.36747 7.26401 7.9968 8.17163 8.44329C9.07925 8.88978 10.0694 9.14379 11.0799 9.18937C11.0353 9.00403 11.0131 8.81403 11.0137 8.62342C11.0137 7.25212 12.1593 6.14122 13.5715 6.14122C13.9195 6.13991 14.2641 6.20858 14.585 6.34314C14.9059 6.4777 15.1965 6.67542 15.4395 6.92452C16.0116 6.81582 16.5614 6.61172 17.0659 6.32077C16.8717 6.90157 16.4712 7.39097 15.9403 7.69627C16.4468 7.63796 16.942 7.50602 17.4103 7.30462C17.0648 7.80547 16.6328 8.24068 16.1346 8.58982Z" fill="#878787"/>
                    </svg>
                  </span>
                  <span className='text-10 text-gray-500'>1 slot</span>
                </p>
              </li>
              <li className='flex justify-between items-center py-3.5 border-b border-solid border-gray-550'>
                <p className='leading-5 opacity-50'>
                  <span className='text-16 text-pink-0 font-bold'><span className='mr-2'>3.</span>Retweet</span>
                  <span className='text-14 text-pink-50 block pl-6'>Claim tickets</span>
                </p>
                <p className='leading-4 flex items-center flex-col'>
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM16.116 9.30987L16.544 10.4858C16.6179 10.6889 16.6061 10.9089 16.5108 11.1053C16.4155 11.3017 16.248 11.4509 16.0393 11.5254L14.5134 12.0702L14.599 12.4407C14.6995 12.8754 14.4184 13.3129 13.9724 13.4159L12.1987 13.8259L5.25855 15.43C4.81257 15.5331 4.36804 15.2634 4.26757 14.8287L3.98587 13.6099C3.95559 13.4789 4.03867 13.3472 4.17254 13.314C4.66311 13.192 4.97196 12.7022 4.86101 12.2222C4.75006 11.7422 4.25762 11.4376 3.76328 11.5433C3.62839 11.5721 3.49592 11.4902 3.46564 11.3592L3.18394 10.1404C3.08347 9.70577 3.36455 9.26831 3.81051 9.16518L4.9513 8.9015C5.04712 8.70808 5.21318 8.56106 5.41982 8.48728L13.8396 5.48079C14.0484 5.40629 14.2734 5.41531 14.4733 5.50624C14.6731 5.59721 14.8239 5.75918 14.8979 5.96233L15.3258 7.13826C15.3718 7.26466 15.3052 7.4049 15.1761 7.45342C14.7031 7.63118 14.4554 8.15261 14.624 8.61575C14.7925 9.07889 15.3191 9.3239 15.7978 9.16181C15.9284 9.1176 16.07 9.18348 16.116 9.30987ZM14.0339 12.2414L13.9222 11.7578L13.9222 11.7578L13.8745 11.5516C13.5858 11.5639 13.3011 11.4908 13.0534 11.3378C12.7343 11.1408 12.5127 10.8336 12.4293 10.4729C12.3459 10.1121 12.4102 9.73888 12.6105 9.42185C12.766 9.17565 12.9897 8.98499 13.2546 8.86937L13.0227 7.86634C12.9835 7.69645 12.8097 7.59103 12.6354 7.63131L11.108 7.98435L11.7838 10.908C11.8144 11.0406 11.729 11.1735 11.5929 11.205C11.4569 11.2364 11.3217 11.1544 11.2911 11.0218L10.6153 8.0982L5.37825 9.30868L4.88518 9.42265L3.9215 9.64539C3.7472 9.68568 3.63735 9.85667 3.67661 10.0265L3.90845 11.0296C4.19715 11.0172 4.48181 11.0904 4.72959 11.2434C5.04867 11.4404 5.2703 11.7475 5.35368 12.1083C5.43706 12.469 5.3727 12.8423 5.17244 13.1593C5.01694 13.4055 4.79323 13.5962 4.52841 13.7118L4.76024 14.7148C4.79951 14.8847 4.97327 14.9901 5.14755 14.9498L7.01438 14.5183L8.83746 14.097L11.8414 13.4026L11.7606 13.0532L11.7373 12.9525C11.7067 12.8199 11.7921 12.6869 11.9282 12.6555C12.0642 12.624 12.1993 12.706 12.23 12.8386L12.24 12.882L12.334 13.2888L13.8614 12.9358C14.0357 12.8955 14.1456 12.7245 14.1063 12.5546L14.0339 12.2414ZM15.8707 11.0621C15.9523 11.033 16.0177 10.9747 16.055 10.8979C16.0922 10.8212 16.0968 10.7352 16.0679 10.6558L15.7157 9.68802C15.4302 9.73366 15.1383 9.69413 14.8734 9.57111C14.5322 9.41271 14.2746 9.13378 14.1479 8.78572C14.0213 8.43767 14.04 8.06008 14.2006 7.72251C14.3254 7.46038 14.5247 7.24541 14.774 7.10008L14.4218 6.1323C14.3929 6.05291 14.334 5.98959 14.2559 5.95406C14.1777 5.91852 14.0897 5.91499 14.0082 5.94412L7.1475 8.39385L10.7506 7.56104L12.5244 7.15106C12.9704 7.04798 13.4149 7.31773 13.5154 7.7524L13.7971 8.97118C13.8273 9.1022 13.7443 9.23392 13.6104 9.26722C13.1198 9.38918 12.811 9.87892 12.9219 10.359C13.0329 10.839 13.5253 11.1436 14.0197 11.0379C14.1546 11.009 14.287 11.091 14.3173 11.222L14.4016 11.5867L15.8707 11.0621Z" fill="#878787"/>
                    </svg>
                  </span>
                  <span className='text-10 text-gray-500'>1 slot</span>
                </p>
              </li>
            </ul>
            <p className='mt-3 w-140 text-pink-50 bg-pink-150 mx-auto text-center text-16 py-2 font-bold rounded-5 cursor-pointer transition-all hover:opacity-70'><a href="/" target="_blank">Next step</a></p>
          </div>
        </div>
        <div className={`${selectedTickets === 'telegram' ? 'block' : 'hidden'} bg-gray-450 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-full z-1000 overflow-hidden border border-solid border-blue-0 rounded-20 max-w-320 w-full`}>
          <div className='flex justify-between items-center px-5 py-6 bg-gray-0'>
            <p className='text-14 font-bold text-pink-50'>Telegram tasks</p>
            <p className='cursor-pointer transition-all hover:opacity-70 py-1.5 pl-4' onClick={() => setShowModalTicket(false)}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.75592 1.42259C10.0814 1.09715 10.0814 0.569515 9.75592 0.244078C9.43049 -0.0813592 8.90285 -0.0813592 8.57741 0.244078L5 3.82149L1.42259 0.244078C1.09715 -0.0813584 0.569515 -0.0813584 0.244078 0.244079C-0.0813592 0.569515 -0.0813592 1.09715 0.244078 1.42259L3.82149 5L0.244078 8.57741C-0.0813592 8.90285 -0.0813592 9.43048 0.244078 9.75592C0.569515 10.0814 1.09715 10.0814 1.42259 9.75592L5 6.17851L8.57741 9.75592C8.90285 10.0814 9.43049 10.0814 9.75592 9.75592C10.0814 9.43049 10.0814 8.90285 9.75592 8.57741L6.17851 5L9.75592 1.42259Z" fill="#fff"/>
              </svg>
            </p>
          </div>
          <div className='px-5 pt-1 pb-5'>
            <ul>
              <li className='flex justify-between items-center py-3.5 border-b border-solid border-gray-550'>
                <p className='leading-5'>
                  <span className='text-16 text-pink-0 font-bold'><span className='mr-2'>1.</span>Waggle Network</span>
                  <span className='text-14 text-pink-50 block pl-6'>Twitter Follow</span>
                </p>
                <p className='leading-4 flex items-center flex-col'>
                  <span>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.8457 0.230774C8.769 0.230774 6.73893 0.846588 5.01222 2.00034C3.2855 3.1541 1.93969 4.79397 1.14497 6.7126C0.350253 8.63122 0.142318 10.7424 0.547462 12.7792C0.952607 14.816 1.95263 16.6869 3.42109 18.1554C4.88954 19.6238 6.76046 20.6239 8.79726 21.029C10.8341 21.4342 12.9453 21.2262 14.8639 20.4315C16.7825 19.6368 18.4224 18.291 19.5761 16.5643C20.7299 14.8375 21.3457 12.8075 21.3457 10.7308C21.3457 7.946 20.2395 5.27528 18.2703 3.30615C16.3012 1.33702 13.6305 0.230774 10.8457 0.230774ZM16.1346 8.58982L16.1419 8.91112C16.1419 12.1924 13.5684 15.9776 8.86121 15.9776C7.4749 15.9801 6.11574 15.5934 4.93841 14.8615C5.14128 14.8847 5.34531 14.8963 5.54951 14.8961C6.69691 14.8996 7.81366 14.5259 8.72786 13.8325C8.1999 13.8279 7.68638 13.6596 7.25814 13.3508C6.8299 13.042 6.50805 12.6079 6.33701 12.1084C6.49558 12.1381 6.65658 12.1528 6.81791 12.1525C7.04542 12.1526 7.272 12.1233 7.49201 12.0653C6.9205 11.9606 6.40319 11.6604 6.0287 11.2162C5.6542 10.772 5.44582 10.2114 5.43926 9.63037V9.59887C5.79441 9.79255 6.18995 9.90042 6.59426 9.91387C6.24686 9.69142 5.96094 9.38522 5.76279 9.02341C5.56464 8.6616 5.46061 8.25579 5.46026 7.84327C5.45957 7.40343 5.57902 6.97175 5.80571 6.59482C6.45851 7.36747 7.26401 7.9968 8.17163 8.44329C9.07925 8.88978 10.0694 9.14379 11.0799 9.18937C11.0353 9.00403 11.0131 8.81403 11.0137 8.62342C11.0137 7.25212 12.1593 6.14122 13.5715 6.14122C13.9195 6.13991 14.2641 6.20858 14.585 6.34314C14.9059 6.4777 15.1965 6.67542 15.4395 6.92452C16.0116 6.81582 16.5614 6.61172 17.0659 6.32077C16.8717 6.90157 16.4712 7.39097 15.9403 7.69627C16.4468 7.63796 16.942 7.50602 17.4103 7.30462C17.0648 7.80547 16.6328 8.24068 16.1346 8.58982Z" fill="#17F0FF"/>
                    </svg>
                  </span>
                  <span className='text-10 text-blue-200'>1 slot</span>
                </p>
              </li>
              <li className='flex justify-between items-center py-3.5 border-b border-solid border-gray-550'>
                <p className='leading-5'>
                  <span className='text-16 text-pink-0 font-bold'><span className='mr-2'>2.</span>MILLIONSY</span>
                  <span className='text-14 text-pink-50 block pl-6'>Twitter Follow</span>
                </p>
                <p className='leading-4 flex items-center flex-col'>
                  <span>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.8457 0.230774C8.769 0.230774 6.73893 0.846588 5.01222 2.00034C3.2855 3.1541 1.93969 4.79397 1.14497 6.7126C0.350253 8.63122 0.142318 10.7424 0.547462 12.7792C0.952607 14.816 1.95263 16.6869 3.42109 18.1554C4.88954 19.6238 6.76046 20.6239 8.79726 21.029C10.8341 21.4342 12.9453 21.2262 14.8639 20.4315C16.7825 19.6368 18.4224 18.291 19.5761 16.5643C20.7299 14.8375 21.3457 12.8075 21.3457 10.7308C21.3457 7.946 20.2395 5.27528 18.2703 3.30615C16.3012 1.33702 13.6305 0.230774 10.8457 0.230774ZM16.1346 8.58982L16.1419 8.91112C16.1419 12.1924 13.5684 15.9776 8.86121 15.9776C7.4749 15.9801 6.11574 15.5934 4.93841 14.8615C5.14128 14.8847 5.34531 14.8963 5.54951 14.8961C6.69691 14.8996 7.81366 14.5259 8.72786 13.8325C8.1999 13.8279 7.68638 13.6596 7.25814 13.3508C6.8299 13.042 6.50805 12.6079 6.33701 12.1084C6.49558 12.1381 6.65658 12.1528 6.81791 12.1525C7.04542 12.1526 7.272 12.1233 7.49201 12.0653C6.9205 11.9606 6.40319 11.6604 6.0287 11.2162C5.6542 10.772 5.44582 10.2114 5.43926 9.63037V9.59887C5.79441 9.79255 6.18995 9.90042 6.59426 9.91387C6.24686 9.69142 5.96094 9.38522 5.76279 9.02341C5.56464 8.6616 5.46061 8.25579 5.46026 7.84327C5.45957 7.40343 5.57902 6.97175 5.80571 6.59482C6.45851 7.36747 7.26401 7.9968 8.17163 8.44329C9.07925 8.88978 10.0694 9.14379 11.0799 9.18937C11.0353 9.00403 11.0131 8.81403 11.0137 8.62342C11.0137 7.25212 12.1593 6.14122 13.5715 6.14122C13.9195 6.13991 14.2641 6.20858 14.585 6.34314C14.9059 6.4777 15.1965 6.67542 15.4395 6.92452C16.0116 6.81582 16.5614 6.61172 17.0659 6.32077C16.8717 6.90157 16.4712 7.39097 15.9403 7.69627C16.4468 7.63796 16.942 7.50602 17.4103 7.30462C17.0648 7.80547 16.6328 8.24068 16.1346 8.58982Z" fill="#17F0FF"/>
                    </svg>
                  </span>
                  <span className='text-10 text-blue-200'>1 slot</span>
                </p>
              </li>
              <li className='flex justify-between items-center py-3.5 border-b border-solid border-gray-550'>
                <p className='leading-5'>
                  <span className='text-16 text-pink-0 font-bold'><span className='mr-2'>3.</span>Retweet</span>
                  <span className='text-14 text-pink-50 block pl-6'>Claim tickets</span>
                </p>
                <p className='leading-4 flex items-center flex-col'>
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM16.116 9.30987L16.544 10.4858C16.6179 10.6889 16.6061 10.9089 16.5108 11.1053C16.4155 11.3017 16.248 11.4509 16.0393 11.5254L14.5134 12.0702L14.599 12.4407C14.6995 12.8754 14.4184 13.3129 13.9724 13.4159L12.1987 13.8259L5.25855 15.43C4.81257 15.5331 4.36804 15.2634 4.26757 14.8287L3.98587 13.6099C3.95559 13.4789 4.03867 13.3472 4.17254 13.314C4.66311 13.192 4.97196 12.7022 4.86101 12.2222C4.75006 11.7422 4.25762 11.4376 3.76328 11.5433C3.62839 11.5721 3.49592 11.4902 3.46564 11.3592L3.18394 10.1404C3.08347 9.70577 3.36455 9.26831 3.81051 9.16518L4.9513 8.9015C5.04712 8.70808 5.21318 8.56106 5.41982 8.48728L13.8396 5.48079C14.0484 5.40629 14.2734 5.41531 14.4733 5.50624C14.6731 5.59721 14.8239 5.75918 14.8979 5.96233L15.3258 7.13826C15.3718 7.26466 15.3052 7.4049 15.1761 7.45342C14.7031 7.63118 14.4554 8.15261 14.624 8.61575C14.7925 9.07889 15.3191 9.3239 15.7978 9.16181C15.9284 9.1176 16.07 9.18348 16.116 9.30987ZM14.0339 12.2414L13.9222 11.7578L13.9222 11.7578L13.8745 11.5516C13.5858 11.5639 13.3011 11.4908 13.0534 11.3378C12.7343 11.1408 12.5127 10.8336 12.4293 10.4729C12.3459 10.1121 12.4102 9.73888 12.6105 9.42185C12.766 9.17565 12.9897 8.98499 13.2546 8.86937L13.0227 7.86634C12.9835 7.69645 12.8097 7.59103 12.6354 7.63131L11.108 7.98435L11.7838 10.908C11.8144 11.0406 11.729 11.1735 11.5929 11.205C11.4569 11.2364 11.3217 11.1544 11.2911 11.0218L10.6153 8.0982L5.37825 9.30868L4.88518 9.42265L3.9215 9.64539C3.7472 9.68568 3.63735 9.85667 3.67661 10.0265L3.90845 11.0296C4.19715 11.0172 4.48181 11.0904 4.72959 11.2434C5.04867 11.4404 5.2703 11.7475 5.35368 12.1083C5.43706 12.469 5.3727 12.8423 5.17244 13.1593C5.01694 13.4055 4.79323 13.5962 4.52841 13.7118L4.76024 14.7148C4.79951 14.8847 4.97327 14.9901 5.14755 14.9498L7.01438 14.5183L8.83746 14.097L11.8414 13.4026L11.7606 13.0532L11.7373 12.9525C11.7067 12.8199 11.7921 12.6869 11.9282 12.6555C12.0642 12.624 12.1993 12.706 12.23 12.8386L12.24 12.882L12.334 13.2888L13.8614 12.9358C14.0357 12.8955 14.1456 12.7245 14.1063 12.5546L14.0339 12.2414ZM15.8707 11.0621C15.9523 11.033 16.0177 10.9747 16.055 10.8979C16.0922 10.8212 16.0968 10.7352 16.0679 10.6558L15.7157 9.68802C15.4302 9.73366 15.1383 9.69413 14.8734 9.57111C14.5322 9.41271 14.2746 9.13378 14.1479 8.78572C14.0213 8.43767 14.04 8.06008 14.2006 7.72251C14.3254 7.46038 14.5247 7.24541 14.774 7.10008L14.4218 6.1323C14.3929 6.05291 14.334 5.98959 14.2559 5.95406C14.1777 5.91852 14.0897 5.91499 14.0082 5.94412L7.1475 8.39385L10.7506 7.56104L12.5244 7.15106C12.9704 7.04798 13.4149 7.31773 13.5154 7.7524L13.7971 8.97118C13.8273 9.1022 13.7443 9.23392 13.6104 9.26722C13.1198 9.38918 12.811 9.87892 12.9219 10.359C13.0329 10.839 13.5253 11.1436 14.0197 11.0379C14.1546 11.009 14.287 11.091 14.3173 11.222L14.4016 11.5867L15.8707 11.0621Z" fill="#17F0FF"/>
                    </svg>
                  </span>
                  <span className='text-10 text-blue-200'>1 slot</span>
                </p>
              </li>
            </ul>
            <p className='mt-3 w-140 text-blue-50 bg-blue-0 mx-auto text-center text-16 py-2 font-bold rounded-5 cursor-pointer transition-all hover:opacity-70'><a href="/" target="_blank">Claim tickets</a></p>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <ModalContent dataModal={dataModal.data} dataGiveFromModal={dataGiveFromModal}></ModalContent>
    </>
  )
}
export default MillipadConnected;