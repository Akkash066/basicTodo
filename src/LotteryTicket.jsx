import React from 'react'
import { useState } from 'react';
import "./Lottery.css";
import { genTicket, sum } from './helper';


const LotteryTicket = () => {

  // function getNumber (n) {
  //  return [...Array(3)].map(()=> Math.floor(Math.random() * 10));
  // }

  let [ticket, setTicket] = useState(genTicket(3));
  // let [ticket, setTicket] = useState(getNumber(3));
  
  let isWinning = sum(ticket) === 15;
  
  
  let buyTicket = () => {
    setTicket(genTicket(3));
  }

  return (
    <div>
        <h1>Lottery Ticket</h1>
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <button onClick={buyTicket}>Buy new ticket</button>
        <h3>{isWinning && "congratulations, you won"}</h3>
    </div>
  )
}

export default LotteryTicket