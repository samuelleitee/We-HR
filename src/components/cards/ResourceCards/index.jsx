import React from "react";
import styles from "./styles.module.css"

export function ResourceCard({title, number, info, variant}){
    function getVariant(variant) {
        if (variant == "positions") {
            return styles.positions
        } else if (variant == "jobs") {
            return styles.jobs
        } else if (variant == "employees") {
            return styles.employees
        }
    }

    return(
        <>
        <div className={`${styles.container} ${getVariant(variant)}`}>
            <h3>{title}</h3>
            <h1>{number}</h1>
            <h2>{info}</h2>
        </div>
        </>
    )
}