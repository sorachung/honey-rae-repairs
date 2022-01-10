import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialtiesText, updateSpecialties] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        const specialties = employees.map(employee => employee.specialty);
        updateSpecialties(specialties.join(", "))
    }, [employees])

    return (
        <>
            <div>
                Specialties: {specialtiesText}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}