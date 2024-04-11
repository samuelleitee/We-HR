import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { ResourceCard } from "../../components/Cards";

export function Dashboard() {
    return (
      <>
        <Sidebar /> 
        <ResourceCard title="Available Position" number="24" info="4 Urgently needed" />
        <ResourceCard title="Job Open" number="10" info="4 Active hiring" />
        <ResourceCard title="New Employees" number="24" info="4 Departament" />
      </>
    );
  }
  