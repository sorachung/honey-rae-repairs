import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, assignCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then(
                    (customers) => {
                         assignCustomers(customers);   
                    }
                )
        },
        []
    )

    return (
        <>
            {
                customers.map(
                    (customer) => {
                        return <p key={`customer--${customer.id}`}>{customer.name}</p>;
                    }
                )
            }
        </>
    )
}