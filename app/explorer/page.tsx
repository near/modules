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

export default function Page() {
  return (
    <main className="min-h-screen md:py-6 pb-6 mb-20">
      <section>
        <div className="flex">
          <div className="w-full md:w-1/2">
            <CostPerMb data={costPerMbData} />
          </div>
          <div className="w-full md:w-1/2">
            <TransactionsChart />
          </div>
        </div>
      </section>
    </main>
  );
}
