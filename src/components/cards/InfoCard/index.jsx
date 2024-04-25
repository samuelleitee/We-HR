import React from "react";
import styles from "./style.module.css"

export function InfoCard({ title, number, men, women, grafico, info }) {

    return (
        <div className={styles.container}>
            <div className={styles.data}>
                <h2 className={styles.title}>{title}</h2>
                <h1 className={styles.number}>{number}</h1>
                <div className={styles.sexContainer}>
                    <span className={styles.men}>{men}</span>
                    <span className={styles.women}>{women}</span>
                </div>
            </div>

            <div className={styles.graphic}>
                <img src={grafico} alt="" />
                <span className={styles.info}>{info}</span>
            </div>
        </div>
    )
}