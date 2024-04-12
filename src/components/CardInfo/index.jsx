import React from "react";
import styles from "./style.module.css"

export function InfoCard({title, number, men, women, grafico, info}){

    return(
        <>
        <div className={styles}>
            <h3>{title}</h3>
            <h1>{number}</h1>
            <h4>{men}</h4>
            <h4>{women}</h4>
        </div>
        <div>
            <div>{grafico}</div>
            <h4>{info}</h4>
        </div>
        </>
    )
}