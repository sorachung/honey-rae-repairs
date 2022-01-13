import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpecificEmployee } from "../ApiManager";

export const Employee = () => {
    const [employee, setEmployee] = useState({});
    const {employeeId } = useParams();

    useEffect(() => {
        getSpecificEmployee(employeeId)
            .then((data) => setEmployee(data));
    }, [employeeId]);

    return (
        <>
            <section className="employee">
               <h3 className="employee__name">{employee?.name}</h3>
               <p className="employee__specialty">Specialty is {employee?.specialty}</p> 
            </section>
        </>
    )

};
