import React from "react";
import styles from "./styles.module.css"

export function ResourceCard({title, number, info}){

    return(
        <>
        <div className={styles.container}>
            <h3>{title}</h3>
            <h1>{number}</h1>
            <h2>{info}</h2>
        </div>
        </>
    )
}