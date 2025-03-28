import React from 'react'
import { useState } from 'react';
import { genTicket, sum } from './helper';
import Ticket  from './Ticket';


const LotteryTicket = ({n=3, winnigSum=15}) => {

  // function getNumber (n) {
  //  return [...Array(3)].map(()=> Math.floor(Math.random() * 10));
  // }

  let [ticket, setTicket] = useState(genTicket(n));
  // let [ticket, setTicket] = useState(getNumber(3));
  
  let isWinning = sum(ticket) === winnigSum;
  
  
  let buyTicket = () => {
    setTicket(genTicket(n));
  }

  return (
    <div>
        <h1>Lottery Ticket</h1>
        <Ticket ticket={ticket}/>
        <button onClick={buyTicket}>Buy new ticket</button>
        <h3>{isWinning && "congratulations, you won"}</h3>
    </div>
  )
}

export default LotteryTicket