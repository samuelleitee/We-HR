import React from "react";
import styles from "./styles.module.css"
import pin from "../../assets/ic_pin.svg"
import pinlight from "../../assets/ic_pin_light.svg"
import config from "../../assets/config.svg"

export function Announcement({ message, time, pinned }) {
        
    return (
        <>
            <div className={styles.container}>
                <span className={styles.text}>
                    <h2 className={styles.message}>{message}</h2>
                    <p className={styles.time}>{time}</p>
                </span>

                <div className={styles.icons}>
                    <img className={styles.pin} src={pinned ? pin : pinlight } alt={pinned ? "Pinned" : "Not Pinned"}/>
                    <img className={styles.config} src={config} />
                </div>
            </div>
        </>
    )
}