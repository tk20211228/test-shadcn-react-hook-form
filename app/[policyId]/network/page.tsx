"use client";

import { ssids } from "@/data/ssids";
import NetworkForm from "./components/network-form";
import SsidsTable from "./components/ssids-table";

export default function Page() {
  const data = ssids;

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
      <NetworkForm />
      <SsidsTable data={data} />
    </div>
  );
}
