import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import "./Tickets.css";

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory();

    const getEmployees = () => {
        return fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)
                })
    }

    useEffect(
        () => {getEmployees()},[]
    )

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        }).then( () => getEmployees())
    }

    return (
        <>
            <div>
                <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            </div>
            <div className="tickets__list">
                {tickets.map(ticket => {
                    return <p key={`ticket--${ticket.id}`} className={`ticket--${ticket.id} ${ticket.emergency ? `emergency` : ``}`}>
                            {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                            <button onClick={() => {deleteTicket(ticket.id)}}>Delete</button>
                        </p>
                    })
                }
            </div>
            
        </>
    )
}