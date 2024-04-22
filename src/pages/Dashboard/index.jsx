import { Sidebar } from "../../components/Sidebar";
import { ResourceCard } from "../../components/cards/ResourceCards"
import { InfoCard } from "../../components/cards/InfoCard";
import { RecentlyActivities } from './../../components/RecentlyActivity/index';
import { Announcement } from "../../components/Announcement";

import styles from "./styles.module.css"
import { UpcomingSchedule } from "../../components/UpcomingSchedule";
import { Header } from "../../components/Header";


export function Dashboard() {
        return (
                <div className={styles.container}>
                        <Sidebar />
                        <div className={styles.section}>
                                <Header nome={"Admirra John"}/>
                                <div className={styles.main}>
                                        <div>
                                                <div className={styles.resourceCards}>
                                                        <ResourceCard title="Available Position" number="24" info="4 Urgently needed" variant="positions" />
                                                        <ResourceCard title="Job Open" number="10" info="4 Active hiring" variant="jobs" />
                                                        <ResourceCard title="New Employees" number="24" info="4 Departament" variant="employees" />

                                                </div>
                                                <div className={styles.infoCards}>
                                                        <InfoCard title={"Total Employees"} number="216" men="120 Men" women="96 Women" grafico="Gráfico Aqui" info="+2 Past month" />
                                                        <InfoCard title={"Talent Request"} number="16" men="6 Men" women="10 Women" grafico="Gráfico Aqui" info="+5% Past month" />
                                                </div>
                                                <div className={styles.announcement}>
                                                        <Announcement message={"Outing schedule for every departement"} time={"5 Minutes ago"} pinned />
                                                        <Announcement message={"Meeting HR Department"} time={"Yesterday, 12:30 PM"} />
                                                        <Announcement message={"IT Department need two more talents for UX/UI Designer position"} time={"Yesterday, 09:15 AM"} />
                                                </div>
                                        </div>

                                        <div className={styles.activities}>
                                                <RecentlyActivities />
                                        </div>

                                </div>
                        </div>
                </div>
        );
}
