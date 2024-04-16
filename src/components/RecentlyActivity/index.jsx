import styles from "./styles.module.css"

export function RecentlyActivities() {
    return (
        <section className={styles.container}>
            <header>
                <h2>Recently Activity</h2>
            </header>
            <main>
                <span className={styles.text}>
                    <span>10.40 AM, Fri 10 Sept 2021</span>
                    <h2>You Posted a New Job</h2>
                    <h6>Kindly check the requirements and terms of work and make sure everything is right.</h6>
                </span>

                <div className={styles.activities}>
                    <p>Today you makes 12 Activity</p>
                    <button>See all activities</button>
                </div>
            </main>
        </section>
    )
}