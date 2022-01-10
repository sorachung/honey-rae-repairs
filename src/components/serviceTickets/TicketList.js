import React, { useEffect, useState } from "react"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)
                })
        },
        []
    )

    return (
        <>
            {tickets.map(ticket => {
                return <div key={`ticket--${ticket.id}`}>
                        <p>{ticket.description}. Submitted by {ticket.customer.name} and assigned to {ticket.employee.name}</p>
                    </div> 
            })
            }
            
        </>
    )
}