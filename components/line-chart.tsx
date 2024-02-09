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
  TooltipProps,
} from "recharts";

interface DataItem {
  calldata_mb: number;
  l1_calldata_cost: number;
  l1_calldata_cost_usd: number;
  name: string;
  week: string;
  weekly_approx_near_l2_calldata_cost_1mb_usd: number;
  weekly_approx_near_l2_calldata_cost_4mb_usd: number;
}

export default function Chart({
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
            backgroundColor: "#FBFBFB",
            border: "1px solid #F0F0F0",
            borderRadius: "4px",
            padding: "10px",
          }}
        >
          <div>
            {
              new Date(payload[0].payload.week)
                .toISOString()
                .split("T")[0]
            }
          </div>
          <div>
            {data[0]?.name}:{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(payload[0]?.value || 0)}
          </div>
          <div>
            near:{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(payload[1]?.value || 0)}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 50,
          bottom: 0,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
        />
        <XAxis
          dataKey="week"
          tickFormatter={(value) =>
            new Date(value).toISOString().split("T")[0]
          }
        />
        {/* domain={['auto', 'auto']} */}
        <YAxis
          scale="log"
          domain={[1, 5000000]}
          tickFormatter={(value) =>
            new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(value)
          }
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="l1_calldata_cost_usd"
          stroke="#FF6442"
          activeDot={{ r: 8 }}
          strokeDasharray="5 5"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="weekly_approx_near_l2_calldata_cost_4mb_usd"
          stroke="#00B654"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
