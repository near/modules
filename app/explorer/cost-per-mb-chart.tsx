"use client";
import React from "react";
import {
  BarChart,
  Bar,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

interface DataItem {
  eth_cost_USD: number;
  celestia_cost_USD: number;
  near_cost_USD: number;
}

export default function CostPerMb({
  data,
}: {
  data: DataItem[];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <YAxis scale="log" domain={[0.1, 50]} hide={true} />
        <Legend wrapperStyle={{ paddingTop: "10px" }} />
        <Bar
          dataKey="eth_cost_USD"
          name="ETH"
          fill="#64748B"
          radius={[6, 6, 0, 0]}
        />
        <Bar
          dataKey="celestia_cost_USD"
          name="Celestia"
          fill="#A855F7"
          radius={[6, 6, 0, 0]}
        />
        <Bar
          dataKey="near_cost_USD"
          name="NEAR"
          fill="#22C55E"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
