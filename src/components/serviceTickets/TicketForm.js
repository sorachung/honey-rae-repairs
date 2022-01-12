import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const TicketForm = () => {
    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false
    });

    const history = useHistory();

    const saveTicket = (event) => {
        event.preventDefault()
        
        const newTicket = {
            description: ticket.description,
            emergency: ticket.emergency,
            customerId: localStorage.getItem("honey_customer"),
            dateCompleted: "",
            employeeId: 1
        }
    
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }

        return fetch("http://localhost:8088/serviceTickets", fetchOption)
            .then( () => history.push("/tickets"))
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={ (event) => {
                            const copyOfTicketState = { ...ticket };
                            copyOfTicketState.description = event.target.value;
                            updateTicket(copyOfTicketState);
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="emergency">Emergency:</label>
                    <input type="checkbox"
                        onChange={(event) => {
                            const copyOfTicketState = { ...ticket };
                            copyOfTicketState.emergency = event.target.checked;
                            updateTicket(copyOfTicketState);
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveTicket}>
                Submit Ticket
            </button>
        </form>
    )
}