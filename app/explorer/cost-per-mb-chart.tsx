"use client";
import React from "react";
import {
  BarChart,
  Bar,
  YAxis,
  Legend,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
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
  const CustomTooltip = ({
    active,
    payload,
  }: TooltipProps<number, number>) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #F0F0F0",
            borderRadius: "6px",
            padding: "12px",
            fontSize: "13px",
          }}
        >
          <div className="flex items-center">
            <div className="bg-slate-500 w-1.5 h-1.5 rounded-full mr-2" />
            ETH:{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(payload[0]?.value || 0)}
          </div>
          <div className="flex items-center">
            <div className="bg-violet-500 w-1.5 h-1.5 rounded-full mr-2" />
            Celestia:{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(payload[1]?.value || 0)}
          </div>
          <div className="flex items-center">
            <div className="bg-green-500 w-1.5 h-1.5 rounded-full mr-2" />
            NEAR:{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(payload[2]?.value || 0)}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      minHeight="250px"
    >
      <BarChart data={data}>
        <YAxis
          scale="log"
          domain={[0.1, 50]}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 13 }}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          cursor={{ fill: "transparent" }}
          content={<CustomTooltip />}
        />
        <Legend
          wrapperStyle={{
            paddingTop: "16px",
          }}
        />
        <Bar
          dataKey="eth_cost_USD"
          name="ETH"
          fill="#64748B"
          radius={6}
        />
        <Bar
          dataKey="celestia_cost_USD"
          name="Celestia"
          fill="#A855F7"
          radius={6}
        />
        <Bar
          dataKey="near_cost_USD"
          name="NEAR"
          fill="#22C55E"
          radius={6}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
