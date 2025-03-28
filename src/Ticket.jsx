import TicketNum from "./TicketNum";
import "./Ticket.css";

const Ticket = ({ticket}) => {
  return (
    <div className="Ticket">
        <p>Ticket</p>
        {/* <TicketNum num={ticket[0]}/>
        <TicketNum num={ticket[1]}/>
        <TicketNum num={ticket[2]}/> */}
        {ticket.map((num, idx) => (
            <TicketNum num={num} key={idx}/>
        ))}
    </div>
  )
}

export default Ticket