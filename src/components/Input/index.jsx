import React from "react";
import styles from "./styles.module.css";

export function Input({ name, type, placeholder }) {
  return (
    <>
      <label className={styles.label} htmlFor={name}>{name}</label>
      <input className={styles.input} id={name} name={name} type={type} placeholder={placeholder} />
    </>
  );
}
