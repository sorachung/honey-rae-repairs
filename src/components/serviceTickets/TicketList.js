import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { deleteTicket, getAllTickets } from "../ApiManager";
import "./Tickets.css";

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory();

    const getTickets = () => {
        return getAllTickets()
                .then((data) => {
                    updateTickets(data)
                })
    }

    useEffect(
        () => {getTickets()},[]
    )

    const removeTicket = (id) => {
        return deleteTicket(id).then( () => getTickets())
    }

    return (
        <>
            <div>
                <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            </div>
            <div className="tickets__list">
                <p>There are {tickets.length} open tickets</p>
                {tickets.map(ticket => {
                    return <p key={`ticket--${ticket.id}`} className={`ticket--${ticket.id} ${ticket.emergency ? `emergency` : ``}`}>
                            {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                            <button onClick={() => {removeTicket(ticket.id)}}>Delete</button>
                        </p>
                    })
                }
            </div>
            
        </>
    )
}