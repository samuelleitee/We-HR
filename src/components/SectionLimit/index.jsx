import React from "react"
import styles from "./styles.module.css"

export function SectionLimit({ title, footerTextFull, footerTextLimited, maxHeight, children }) {
    const [all, setAll] = React.useState(false)

    return (
        <section className={styles.section} style={{maxHeight: all ? "fit-content" : maxHeight}}>
            <header>
                <h3>{title}</h3>
            </header>
            <main>
                {children}
            </main>
            <footer onClick={() => setAll(!all)}>
                {all ? footerTextLimited : footerTextFull}
            </footer>
        </section>
    )
}