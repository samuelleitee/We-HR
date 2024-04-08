import styles from "./styles.module.css"

export function LoginButton({ text, onClick, dark }, ...props) {
    return (
        <button className={`${styles.button} ${dark ? styles.dark : styles.light}`} onClick={onClick} {...props}>
            <span>{text}</span>
        </button>
    )
}