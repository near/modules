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
  weekly_approx_celestia_l2_calldata_cost_1mb_usd: number;
}

export default function CostSavings({
  data,
  fourMbBatch,
  selectedRollupLabel,
}: {
  data: DataItem[];
  fourMbBatch: boolean;
  selectedRollupLabel: string;
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
          curr[
            fourMbBatch
              ? "weekly_approx_near_l2_calldata_cost_4mb_usd"
              : "weekly_approx_near_l2_calldata_cost_1mb_usd"
          ],
        0
      ) * 100
    ) / 100;

  // calculate total cost w/ CELESTIA DA by summing weekly_approx_celestia_l2_calldata_cost_1mb_usd
  const totalCostCelestiaDA = (data: DataItem[]) =>
    Math.round(
      data.reduce(
        (acc, curr) =>
          acc +
          curr.weekly_approx_celestia_l2_calldata_cost_1mb_usd,
        0
      ) * 100
    ) / 100;

  // calculate total savings w/ NEAR DA
  const totalSavings = (data: DataItem[]) =>
    Math.round(
      totalCostRollup(data) - totalCostNearDA(data)
    );

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
  const totalCostCelestiaDAUSD = totalCostCelestiaDA(
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
    <div className="flex flex-col md:flex-row md:place-content-between md:items-center w-full border border-slate-200 rounded-lg p-5 mb-10 bg-white">
      <div className="mb-3 md:mb-0">
        <div className="flex items-center text-sm text-slate-500 mb-1">
          Total data size ({selectedRollupLabel})
          <InfoTooltip>
            Total data processed by the rollup for the
            period
          </InfoTooltip>
        </div>
        <h4 className="text-slate-800">{totalDataMB} MB</h4>
      </div>
      <div className="mb-3 md:mb-0">
        <div className="flex items-center text-sm text-slate-500 mb-1">
          Total cost on ETH
          <InfoTooltip>
            Actual cost for the selected rollup to store
            data on a blockchain for the period
          </InfoTooltip>
        </div>
        <h4 className="text-slate-500">
          {totalCostRollupUSD}
        </h4>
      </div>
      <div className="mb-3 md:mb-0">
        <div className="flex items-center text-sm text-slate-500 mb-1">
          Total cost on Celestia
          <InfoTooltip>
            Estimated cost to store the same amount of data
            on Celestia
          </InfoTooltip>
        </div>
        <h4 className="text-violet-500">
          {totalCostCelestiaDAUSD}
        </h4>
      </div>
      <div className="mb-3 md:mb-0">
        <div className="flex items-center text-sm text-slate-500 mb-1">
          Total cost on NEAR
          <InfoTooltip>
            Estimated cost to store the same amount of data
            on NEAR
          </InfoTooltip>
        </div>
        <h4 className="text-green-500">
          {totalCostNearDAUSD}
        </h4>
      </div>
      <div className="mb-3 md:mb-0">
        <div className="flex items-center text-sm text-slate-500 mb-1">
          Total savings on NEAR
          <InfoTooltip>
            Estimated savings to store the same amount of
            data on NEAR
          </InfoTooltip>
        </div>
        <h4 className="text-green-500">
          {totalSavingsUSD}
        </h4>
      </div>
    </div>
  );
}
