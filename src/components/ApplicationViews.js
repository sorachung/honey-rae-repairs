import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { Employee } from "./employees/Employee"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { TicketList } from "./serviceTickets/TicketList"
import { Ticket } from "./serviceTickets/Tickets"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/employees/hire">
                <EmployeeForm />
            </Route>
            <Route path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>
            <Route path="/tickets/create">
                <TicketForm />
            </Route>
            <Route path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>
        </>
    )
}