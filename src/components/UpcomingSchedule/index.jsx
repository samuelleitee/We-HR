import styles from "./styles.module.css"

export function UpcomingSchedule() {
    return(
        <section className={styles.schedule}>
            <header>
                <h2>Recently Activity</h2>
            </header>
            <main>
                <span>10.40 AM, Fri 10 Sept 2021</span>
                <h2>You Posted a New Job</h2>
                <h6>Kindly check the requirements and terms of work and make sure everything is right.</h6>
            </main>
        </section>
    )
}