"use client";
import React from "react";
import CostPerMb from "./cost-per-mb-chart";
import TransactionsChart from "./transactions-chart";

const costPerMbData = [
  {
    eth_cost_USD: 6.8,
    celestia_cost_USD: 1.93,
    near_cost_USD: 0.3,
  },
];

const totalsData = [
  {
    name: "Total Blocks",
    value: 3024075,
  },
  {
    name: "Total Transactions",
    value: 31039540,
  },
  {
    name: "Total Blobs",
    value: 172031,
  },
  {
    name: "Total Blob Size (MB)",
    value: 103843,
  },
];

export default function Page() {
  if (false)
    return (
      <main className="min-h-screen pb-6 mb-20">
        <h2 className="text-xl font-semibold">
          Blob Explorer
        </h2>
        <p className="text-slate-500 mt-4 mb-10">
          This page provides a high-level overview of Data
          Availability on the NEAR blockchain.
        </p>
        <section className="flex space-x-10 justify-between">
          <div className="w-full md:w-1/2 border-container relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 text-slate-500 text-sm">
              Avg. Cost per MB (last 7 days)
            </div>
            <CostPerMb data={costPerMbData} />
          </div>
          <div className="w-full md:w-1/2 border-container relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 text-slate-500 text-sm">
              Daily transactions (NEAR)
            </div>
            <TransactionsChart />
          </div>
        </section>
        <section className="flex justify-between space-x-10 my-10">
          {totalsData.map((item) => (
            <div
              key={item.name}
              className="w-1/4 text-center border-container"
            >
              <div className="text-sm text-slate-500 mb-1">
                {item.name}
              </div>
              <h4 className="text-slate-800">
                {new Intl.NumberFormat("en-US").format(
                  item.value
                )}
              </h4>
            </div>
          ))}
        </section>
      </main>
    );

  return (
    <main className="min-h-screen md:py-6 pb-6 mb-20">
      <section>
        <h1>Coming soon...</h1>
      </section>
    </main>
  );
}
