import React from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import "./Repairs.css"


export const Repairs = () => {
    return (
        <>
            <NavBar />
            <h1>Honey Rae's Repair Shop</h1>
            <ApplicationViews />
        </>
    )
}