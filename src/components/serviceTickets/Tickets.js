import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Ticket = () => {
    const [ticket, set] = useState({});
    const {ticketId } = useParams();

    useEffect(
        () => {
            fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
                .then(res => res.json())
                .then(set);
        },
        [ticketId]
    )

    return (
        <>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to {ticket.employee?.name}</div>
            </section>
        </>
    )
}