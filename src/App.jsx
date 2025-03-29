import './App.css'
import TodoList from './TodoList'
import LotteryTicket from './LotteryTicket'
import React from 'react'
// import Ticket from './Ticket'
// import { sum } from './helper'

const App = () => {

  let winCondition = (ticket) =>{
    // return sum(ticket) === 15; // isme ki total number ka sum 15 hona chahiye
    // return ticket.every((num) => num === ticket[0]); // isme sabhi numbe starting ke number se match hone chahiye

    return ticket[0] === 0;
    
  };

  return (
    <div>
      {/* <TodoList /> */}
      {/* <LotteryTicket /> */}
      {/* <Ticket ticket={[0, 1, 3]}/>
      <Ticket ticket={[0, 1, 3, 6, 4]}/> */}
      <LotteryTicket n={3} winCondition={winCondition}/>
    </div>
  )
}

export default App
