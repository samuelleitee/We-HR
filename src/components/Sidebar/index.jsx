import { Link } from "react-router-dom";
import { Logo } from "../Logo";

import styles from "./styles.module.css"

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <Logo />

                <section>
                    <header>MAIN MENU</header>

                    <ul>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Recruitment</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Schedule</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Employee</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Department</Link>
                        </li>
                    </ul>
                </section>
                <section>
                    <header>OTHER</header>

                    <ul>
                        <li>
                            <Link to="/dashboard">Support</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Settings</Link>
                        </li>
                    </ul>
                </section>
            </nav>
        </aside>
    )
}