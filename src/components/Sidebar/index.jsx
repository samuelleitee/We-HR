import { Link } from "react-router-dom";
import { TextLogo } from "../TextLogo";

import DashboardIcon from "../../assets/ic_dashboard.svg"
import DashboardIconActive from "../../assets/ic_dashboard_active.svg"
import RecruitmentIcon from "../../assets/ic_recruitment.svg"
import RecruitmentIconActive from "../../assets/ic_recruitment_active.svg"
import ScheduleIcon from "../../assets/ic_calendar.svg"
import ScheduleIconActive from "../../assets/ic_calendar_active.svg"
import EmployeeIcon from "../../assets/ic_employee.svg"
import EmployeeIconActive from "../../assets/ic_employee_active.svg"
import DepartmentIcon from "../../assets/ic_department.svg"
import DepartmentIconActive from "../../assets/ic_department_active.svg"
import SupportIcon from "../../assets/ic_support.svg"
import SupportIconActive from "../../assets/ic_support_active.svg"
import SettingsIcon from "../../assets/ic_settings.svg"
import SettingsIconActive from "../../assets/ic_settings_active.svg"

import styles from "./styles.module.css"

export function Sidebar({ showMenu }) {
    const { pathname } = window.location

    // showMenu ? console.log("True") : console.log("False")

    return (
        <aside className={`${styles.sidebar} ${showMenu ? styles.showSidebar : null}`}>
            <nav>
                <Link className={styles.logo} to="/dashboard">
                    <TextLogo />
                </Link>

                <section>
                    <header className={styles.header}>MAIN MENU</header>
                    <ul>
                        <Link to="/dashboard">
                            <li className={pathname.split("/")[1] === "dashboard" ? styles.active : null}>
                                <img src={pathname.split("/")[1] === "dashboard" ? DashboardIconActive : DashboardIcon} />
                                <span>Dashboard</span>
                            </li>
                        </Link>
                        <Link to="/dashboard">
                            <li className={pathname.split("/")[1] === "recruitment" ? styles.active : null}>
                                <img src={pathname.split("/")[1] === "recruitment" ? RecruitmentIconActive : RecruitmentIcon} />
                                <span>Recruitment</span>
                            </li>
                        </Link>

                        <Link to="/dashboard">
                            <li className={pathname.split("/")[1] === "schedule" ? styles.active : null}>
                                <img src={pathname.split("/")[1] === "schedule" ? ScheduleIconActive : ScheduleIcon} />
                                <span>Schedule</span>
                            </li>
                        </Link>
                        <Link to="/dashboard">
                            <li className={pathname.split("/")[1] === "employee" ? styles.active : null}>
                                <img src={pathname.split("/")[1] === "employee" ? EmployeeIconActive : EmployeeIcon} />
                                <span>Employee</span>
                            </li>
                        </Link>
                        <Link to="/dashboard">
                            <li className={pathname.split("/")[1] === "department" ? styles.active : null}>
                                <img src={pathname.split("/")[1] === "department" ? DepartmentIconActive : DepartmentIcon} />
                                <span>Department</span>
                            </li>
                        </Link>
                    </ul>
                </section>
                <section>
                    <header className={styles.header}>OTHER</header>

                    <ul>
                        <Link to="/dashboard">
                            <li className={pathname.split("/")[1] === "support" ? styles.active : null}>
                                <img src={pathname.split("/")[1] === "support" ? SupportIconActive : SupportIcon} />
                                <span>Support</span>
                            </li>
                        </Link>
                        <Link to="/dashboard">
                            <li className={pathname.split("/")[1] === "settings" ? styles.active : null}>
                                <img src={pathname.split("/")[1] === "settings" ? SettingsIconActive : SettingsIcon} />
                                <span>Settings</span>
                            </li>
                        </Link>
                    </ul>
                </section>
            </nav>
        </aside>
    )
}