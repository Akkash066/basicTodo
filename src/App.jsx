import './App.css'
import TodoList from './TodoList'
import LotteryTicket from './LotteryTicket'
import React from 'react'
// import Ticket from './Ticket'

const App = () => {
  return (
    <div>
      {/* <TodoList /> */}
      {/* <LotteryTicket /> */}
      {/* <Ticket ticket={[0, 1, 3]}/>
      <Ticket ticket={[0, 1, 3, 6, 4]}/> */}
      <LotteryTicket n={3} winnigSum={15}/>
    </div>
  )
}

export default App
