import React from "react";
import styles from "./styles.module.css"

export function ResourceCard({title, number, info}){

    return(
        <>
        <div className={styles.cardPosition}>
            <h2 className={styles.title}>{title}</h2>
            <h1 className={styles.number}>{number}</h1>
            <h2 className={styles.info}>{info}</h2>
        </div>
        </>
    )
}