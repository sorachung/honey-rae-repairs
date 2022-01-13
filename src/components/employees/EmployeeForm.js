import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { postEmployee } from "../ApiManager";

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({
        name: "",
        specialty: ""
    });

    const history = useHistory();

    const saveEmployee = (event) => {
        event.preventDefault()
        
        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty
        }
    
        postEmployee(newEmployee)
            .then( () => history.push("/employees"))
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={ (event) => {
                            const copyOfEmployeeState = { ...employee };
                            copyOfEmployeeState.name = event.target.value;
                            updateEmployee(copyOfEmployeeState);
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Technical Specialty"
                        onChange={ (event) => {
                            const copyOfEmployeeState = { ...employee };
                            copyOfEmployeeState.specialty = event.target.value;
                            updateEmployee(copyOfEmployeeState);
                            }
                        } />
                </div>
            </fieldset>
            <button classspecialty="btn btn-primary" onClick={saveEmployee}>
                Hire Employee
            </button>
        </form>
    )
}