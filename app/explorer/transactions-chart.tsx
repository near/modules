"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
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
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      minHeight="250px"
    >
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line
          type="monotone"
          dataKey="near"
          stroke="#82ca9d"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
