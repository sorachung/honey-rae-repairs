import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, assignEmployees] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then(
                    (employees) => {
                         assignEmployees(employees);   
                    }
                )
        },
        []
    )

    return (
        <>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>;
                    }
                )
            }
        </>
    )
}