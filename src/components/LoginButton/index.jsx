import styles from "./styles.module.css"

export function LoginButton({ text, onClick, dark, type }, ...props) {
    return (
        <button className={`${styles.button} ${dark ? styles.dark : styles.light}`} onClick={onClick} type={type} {...props}>
            <span>{text}</span>
        </button>
    )
}