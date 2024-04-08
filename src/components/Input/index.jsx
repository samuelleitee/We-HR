import React from "react";
import styles from "./styles.module.css";

import emailIcon from "../../assets/email.svg"
import passwordIcon from "../../assets/password.svg"

export function Input({ name, type, placeholder }) {
  return (
    <>
      <label className={styles.label} htmlFor={name}>{name}</label>

      <div className={styles.container}>
        <img src={type == "email" ? emailIcon : passwordIcon} />
        <input className={styles.input} id={name} name={name} type={type} placeholder={placeholder} />
      </div>
    </>
  );
}
