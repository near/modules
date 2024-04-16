"use client";
import React from "react";
import {
  BarChart,
  Bar,
  YAxis,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts";

const data = Array.from({ length: 168 }, (_, i) => {
  const date = new Date(
    2022,
    1,
    Math.floor(i / 24) + 1,
    i % 24
  );
  const formattedTime = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const formattedDate = date.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
  });
  return {
    uv: Math.floor(Math.random() * 31) + 70,
    time: formattedTime,
    date: formattedDate,
  };
});

export default function AvailabilityBar() {
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
          <div>
            <div className="text-xs text-slate-500">
              {payload[0]?.payload.time} (
              {payload[0]?.payload.date})
            </div>
            <div className="font-medium mt-1">
              {new Intl.NumberFormat("en-US").format(
                payload[0]?.payload.uv || 0
              )}
              % available
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  const startTimes = Array.from({ length: 7 }, (_, i) =>
    new Date(2022, 1, i + 1).toISOString()
  );

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      minHeight="200px"
      className={"pt-10"}
    >
      <BarChart data={data}>
        <YAxis
          domain={[1, 100]}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 13 }}
          ticks={[10, 50, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 13 }}
          ticks={startTimes}
        />
        <Tooltip
          cursor={{ fill: "transparent" }}
          content={<CustomTooltip />}
        />
        <Bar dataKey="uv" fill="#22c55e" radius={6} />
      </BarChart>
    </ResponsiveContainer>
  );
}
