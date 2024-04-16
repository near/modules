"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

const data = [
  {
    name: "4/1",
    near: 500,
  },
  {
    name: "4/2",
    near: 1000,
  },
  {
    name: "4/3",
    near: 1500,
  },
  {
    name: "4/4",
    near: 1780,
  },
  {
    name: "4/5",
    near: 1890,
  },
  {
    name: "4/6",
    near: 2390,
  },
  {
    name: "4/7",
    near: 3090,
  },
];

export default function transactionsChart() {
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
            {new Intl.NumberFormat("en-US").format(
              payload[0]?.payload.near || 0
            )}{" "}
            TX
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
      <LineChart data={data}>
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 13 }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 13 }}
        />
        <Tooltip
          cursor={{ fill: "transparent" }}
          content={<CustomTooltip />}
        />
        <Line
          type="monotone"
          dataKey="near"
          stroke="#22c55e"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
