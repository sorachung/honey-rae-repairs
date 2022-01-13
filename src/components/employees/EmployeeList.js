import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getAllEmployees } from "../ApiManager"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialtiesText, updateSpecialties] = useState("")
    const history = useHistory();

    useEffect(
        () => {
            getAllEmployees()
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
                <button onClick={ () => {
                    history.push("/employees/hire")
                    }
                } >
                    Hire Employee
                </button>
            </div>
            <div>
                Specialties: {specialtiesText}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`/employees/${employee.id}`}>{employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}