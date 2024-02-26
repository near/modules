"use client";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

interface DataItem {
  calldata_mb: number;
  l1_calldata_cost: number;
  l1_calldata_cost_usd: number;
  name: string;
  week: string;
  weekly_approx_near_l2_calldata_cost_1mb_usd: number;
  weekly_approx_near_l2_calldata_cost_4mb_usd: number;
}

export default function CostBarChart({
  data,
  fourMbBatch,
}: {
  data: DataItem[];
  fourMbBatch: boolean;
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
            borderRadius: "6px",
            padding: "12px",
          }}
        >
          <div className="text-xs text-slate-500 mb-1">
            {isNaN(Date.parse(payload[0]?.payload?.week))
              ? payload[0]?.payload?.week
              : dayjs(
                  payload[0]?.payload?.week,
                  "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
                ).format("YYYY-MM-DD")}
          </div>
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
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 45,
          bottom: 0,
        }}
      >
        <CartesianGrid stroke="none" />
        <XAxis
          dataKey="week"
          tickFormatter={(value) =>
            isNaN(Date.parse(value))
              ? value
              : dayjs(
                  value,
                  "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
                ).format("YYYY-MM-DD")
          }
        />
        <YAxis
          scale="log"
          domain={[1, 5000000]}
          tickFormatter={(value) =>
            `$${Number(value).toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}`
          }
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          dataKey="l1_calldata_cost_usd"
          name="ETH DA Cost"
          fill="#64748B"
          radius={[2, 2, 0, 0]}
        />
        <Bar
          dataKey="weekly_approx_celestia_l2_calldata_cost_1mb_usd"
          name="Celestia DA Cost"
          fill="#A855F7"
          radius={[2, 2, 0, 0]}
        />
        <Bar
          dataKey={
            fourMbBatch
              ? "weekly_approx_near_l2_calldata_cost_4mb_usd"
              : "weekly_approx_near_l2_calldata_cost_1mb_usd"
          }
          name="NEAR DA Cost"
          fill="#22C55E"
          radius={[2, 2, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
