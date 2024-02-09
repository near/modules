"use client";
import React from "react";
import InfoTooltip from "@/components/info-tooltip";

interface DataItem {
  calldata_mb: number;
  l1_calldata_cost: number;
  l1_calldata_cost_usd: number;
  name: string;
  week: string;
  weekly_approx_near_l2_calldata_cost_1mb_usd: number;
  weekly_approx_near_l2_calldata_cost_4mb_usd: number;
}

export default function CostSavings({
  data,
}: {
  data: DataItem[];
}) {
  // calculate total call data by summing calldata_mb
  const totalCalldata = (data: DataItem[]) =>
    Math.round(
      data.reduce(
        (acc, curr) => acc + curr.calldata_mb,
        0
      ) * 100
    ) / 100;

  // calculate total cost w/ rollup by summing l1_calldata_cost_usd
  const totalCostRollup = (data: DataItem[]) =>
    Math.round(
      data.reduce(
        (acc, curr) => acc + curr.l1_calldata_cost_usd,
        0
      ) * 100
    ) / 100;

  // calculate total cost w/ NEAR DA by summing weekly_approx_near_l2_calldata_cost_4mb_usd
  const totalCostNearDA = (data: DataItem[]) =>
    Math.round(
      data.reduce(
        (acc, curr) =>
          acc +
          curr.weekly_approx_near_l2_calldata_cost_4mb_usd,
        0
      ) * 100
    ) / 100;

  // calculate total savings w/ NEAR DA
  const totalSavings = (data: DataItem[]) =>
    Math.round(
      totalCostRollup(data) - totalCostNearDA(data)
    );

  // calculate totalSavings as a percentage
  const totalSavingsPercent = (data: DataItem[]) =>
    (totalSavings(data) / totalCostRollup(data)) * 100;

  // calculate savings per MB w/ NEAR DA
  const savingsPerMB = (data: DataItem[]) =>
    Math.round(
      (totalSavings(data) / totalCalldata(data)) * 100
    ) / 100;

  const totalDataMB = totalCalldata(data).toLocaleString();
  const totalCostRollupUSD = totalCostRollup(
    data
  ).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const totalCostNearDAUSD = totalCostNearDA(
    data
  ).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const totalSavingsUSD = totalSavings(data).toLocaleString(
    "en-US",
    { style: "currency", currency: "USD" }
  );
  const savingsPerMBUSD = savingsPerMB(data).toLocaleString(
    "en-US",
    { style: "currency", currency: "USD" }
  );

  return (
    <div className="flex place-content-between items-center w-full border border-slate-200 rounded-md p-5 mb-10">
      <div>
        <div className="flex items-center text-xs text-slate-500 mb-0.5">
          Total data size
          <InfoTooltip>Content here</InfoTooltip>
        </div>
        <div className="font-semibold">
          {totalDataMB} MB
        </div>
      </div>
      <div>
        <div className="flex items-center text-xs text-slate-500 mb-0.5">
          Total cost w/ rollup
          <InfoTooltip>Content here</InfoTooltip>
        </div>
        <div className="font-semibold">
          {totalCostRollupUSD}
        </div>
      </div>
      <div>
        <div className="flex items-center text-xs text-slate-500 mb-0.5">
          Total cost w/ NEAR DA
          <InfoTooltip>Content here</InfoTooltip>
        </div>
        <div className="font-semibold text-green-500">
          {totalCostNearDAUSD}
        </div>
      </div>
      <div>
        <div className="flex items-center text-xs text-slate-500 mb-0.5">
          Total savings w/ NEAR DA
          <InfoTooltip>Content here</InfoTooltip>
        </div>
        <div className="font-semibold text-green-500">
          {totalSavingsUSD}
        </div>
      </div>
      <div>
        <div className="flex items-center text-xs text-slate-500 mb-0.5">
          Savings per MB w/ NEAR DA
          <InfoTooltip>Content here</InfoTooltip>
        </div>
        <div className="font-semibold text-green-500">
          {savingsPerMBUSD}/MB
        </div>
      </div>
    </div>
  );
}
