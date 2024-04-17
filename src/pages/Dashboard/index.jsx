import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { ResourceCard } from "../../components/cards/ResourceCards"
import { InfoCard } from "../../components/cards/InfoCard";
import { RecentlyActivities } from './../../components/RecentlyActivity/index';
import { Announcement } from "../../components/Announcement";


export function Dashboard() {
    return (
      <>
        <Sidebar /> 
        <ResourceCard title="Available Position" number="24" info="4 Urgently needed" variant="positions" />
        <ResourceCard title="Job Open" number="10" info="4 Active hiring" variant="jobs" />
        <ResourceCard title="New Employees" number="24" info="4 Departament" variant="employees" />
        <InfoCard title={"Total Employees"} number="216" men="120 Men" women="96 Women" grafico="Gráfico Aqui" info="+2 Past month" />
        <InfoCard title={"Talent Request"} number="16" men="6 Men" women="10 Women" grafico="Gráfico Aqui" info="+5% Past month" />
        <Announcement message={"Outing schedule for every departement"} time={"5 Minutes ago"} pinned/>
        <Announcement message={"Meeting HR Department"} time={"Yesterday, 12:30 PM"}/>
        <Announcement message={"IT Department need two more talents for UX/UI Designer position"} time={"Yesterday, 09:15 AM"}/>
        <RecentlyActivities />
      </>
    );
  }
  