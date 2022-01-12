import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Ticket = () => {
    const [ticket, setTicket] = useState({});
    const [employees, syncEmployees] = useState([]);
    const {ticketId } = useParams();
    const history = useHistory();

    useEffect(
        () => {
            fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
                .then(res => res.json())
                .then(data => setTicket(data));
        },
        [ticketId]
    );

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees`)
                .then(res => res.json())
                .then((data) => syncEmployees(data));
        }, 
        []
    )

    // Function to invoke when an employee is chosen from <select> element
    const assignEmployee = (event) => {
        // Construct a new object to replace the existing one in the API
        const updateTicket = {
            customerId: ticket.customerId,
            employeeId: parseInt(event.target.value),
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: ticket.dateCompleted
        }

        // Perform the PUT HTTP request to replace the resource
        fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateTicket)
        }).then( () => history.push("/tickets"))
    }

    return (
        <>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to
                    <select
                        value={ ticket.employeeId }
                        onChange={ assignEmployee }>
                        {
                            employees.map(e => <option key={`employee--${e.id}`} value={e.id}>{e.name}</option>)
                        }
                    </select>
                </div>
            </section>
        </>
    )
}