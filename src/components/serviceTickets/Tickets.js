import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getAllEmployees, getSpecificTicket, putSpecificTicket } from "../ApiManager";

export const Ticket = () => {
    const [ticket, setTicket] = useState({});
    const [employees, syncEmployees] = useState([]);
    const {ticketId } = useParams();
    const history = useHistory();

    useEffect(
        () => {
            getSpecificTicket(ticketId)
                .then(data => setTicket(data));
        },
        [ticketId]
    );

    useEffect(
        () => {
            getAllEmployees()
                .then((data) => syncEmployees(data));
        }, 
        []
    )

    // Function to invoke when an employee is chosen from <select> element
    const assignEmployee = (event) => {
        // Construct a new object to replace the existing one in the API
        const updatedTicket = {
            customerId: ticket.customerId,
            employeeId: parseInt(event.target.value),
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: ticket.dateCompleted
        }

        // Perform the PUT HTTP request to replace the resource
        putSpecificTicket(ticketId, updatedTicket).then( () => history.push("/tickets"))
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