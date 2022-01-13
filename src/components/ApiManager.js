export const getCustomerByEmail = (email) => {
    return fetch(`http://localhost:8088/customers?email=${email}`)
    .then(res => res.json())
}

export const postCustomer = (customer) => {
    return fetch("http://localhost:8088/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
    })
        .then(res => res.json())
}

export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees")
        .then(res => res.json())
}

export const getSpecificEmployee = (employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}`)
    .then((res) => res.json())
}

export const getAllTickets = () => {
    return fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
        .then(res => res.json())
}

export const deleteTicket = (id) => {
    return fetch(`http://localhost:8088/serviceTickets/${id}`, {
        method: "DELETE"
    })
}

export const getSpecificTicket = (ticketId) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
    .then(res => res.json())
}

export const putSpecificTicket = (ticketId, updatedTicket) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTicket)
    })
}

export const postEmployee = (newEmployee) => {
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    }

    return fetch("http://localhost:8088/employees", fetchOption)
}

export const postTicket = (newTicket) => {
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTicket)
    }

    return fetch("http://localhost:8088/serviceTickets", fetchOption)
}

