"use client";
import React from "react";
import CostPerMb from "./cost-per-mb-chart";
import TransactionsChart from "./transactions-chart";
import {
  Diamond,
  Binoculars,
  Hash,
  Cube,
  Ruler,
} from "@phosphor-icons/react";
import SearchInput from "@/components/search-input";
import { Button } from "@/components/ui/button";
import TransactionsTable from "./transactions-table";
import AvailabilityBar from "./availability-bar";

const costPerMbData = [
  {
    eth_cost_USD: 6.8,
    celestia_cost_USD: 1.93,
    near_cost_USD: 0.3,
  },
];

const totalsData = [
  {
    name: "Total Blobs",
    value: 1720031,
    icon: <Diamond size={18} />,
  },
  {
    name: "Total Blob Size (MB)",
    value: 103843,
    icon: <Ruler size={18} />,
  },
  {
    name: "Total Blob Transactions",
    value: 3103540,
    icon: <Hash size={18} />,
  },
  {
    name: "Total Blocks",
    value: 302075,
    icon: <Cube size={18} />,
  },
];

const latestBlobs = [
  {
    hash: "0x017c...9a256e",
    size: "128 KB",
  },
  {
    hash: "0x01ab...9a2bce",
    size: "256 KB",
  },
  {
    hash: "0x02cd...9a3def",
    size: "512 KB",
  },
  {
    hash: "0x03ef...9a4fgh",
    size: "1 MB",
  },
  {
    hash: "0x04ij...9a5klm",
    size: "2 MB",
  },
  {
    hash: "0x05no...9a6pqr",
    size: "4 MB",
  },
];

export default function Page() {
  if (process.env.NEXT_PUBLIC_ENABLE_EXPLORER === "true")
    return (
      <main className="min-h-screen pb-6 mb-20 -mt-5">
        <h4 className="text-slate-800 flex items-center mb-10">
          <Binoculars
            size={32}
            className="mr-2"
            color="#1e293b"
            weight="duotone"
          />
          Blob Explorer
        </h4>
        {/* <p className="text-slate-500 mt-4 mb-10">
          This page provides a high-level overview of Data
          Availability on the NEAR blockchain.
        </p> */}
        <section className="flex flex-col md:flex-row md:space-x-10 justify-between">
          <div className="w-full md:w-1/2 border border-slate-200 rounded-lg pl-0 pt-16 py-8 sm:p-8 bg-white relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium whitespace-nowrap -mt-8 sm:mt-0">
              Avg. Cost per MB (last 7 days)
            </div>
            <CostPerMb data={costPerMbData} />
          </div>
          <div className="w-full md:w-1/2 border border-slate-200 rounded-lg pl-0 pt-16 py-8 sm:p-8 pr-8 bg-white relative mt-10 md:mt-0">
            <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium whitespace-nowrap -mt-8 sm:mt-0">
              Daily Blob Transactions (NEAR)
            </div>
            <TransactionsChart />
          </div>
        </section>
        <section className="flex justify-between space-x-10 my-10 overflow-y-auto">
          {totalsData.map((item) => (
            <div
              key={item.name}
              className="w-1/4 border-container min-w-64"
            >
              <div className="text-sm text-slate-500 mb-2 flex items-center justify-between">
                {item.name}
                {item.icon && <div>{item.icon}</div>}
              </div>
              <h4 className="text-slate-800">
                {new Intl.NumberFormat("en-US").format(
                  item.value
                )}
              </h4>
            </div>
          ))}
        </section>
        <section>
          <div className="my-10 border border-slate-200 rounded-lg pt-10 bg-white relative pr-6 sm:pt-8 sm:pb-4 sm:pl-2">
            <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium whitespace-nowrap -mt-2 sm:mt-0">
              Hourly Availability (last 7 days)
            </div>
            <AvailabilityBar />
          </div>
        </section>
        <div className="flex items-center justify-between">
          <h6 className="text-slate-800 font-semibold">
            Latest Blobs
          </h6>
          <Button variant="outline">View all</Button>
        </div>
        <section className="flex justify-between space-x-5 my-10 overflow-y-auto">
          {latestBlobs.map((blob, index) => (
            <button
              key={index}
              className="flex flex-col w-1/6 border-container small-container hover:bg-slate-100 rounded-lg min-w-44"
              title={blob.hash}
            >
              <div className="font-medium text-sm">
                {blob.hash}
              </div>
              <div className="text-sm text-slate-500 mt-1">
                {blob.size}
              </div>
            </button>
          ))}
        </section>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 sm:mb-10">
          <h6 className="text-slate-800 font-semibold flex items-center">
            Latest Blob Transactions
          </h6>
          <div className="mt-10 sm:mt-0 sm:w-72 sm:max-w-72 sm:ml-auto">
            <SearchInput />
          </div>
        </div>
        <section>
          <TransactionsTable />
        </section>
        <div className="flex mt-10">
          <Button
            variant="outline"
            className="mx-auto text-center"
          >
            View all
          </Button>
        </div>
      </main>
    );

  return (
    <main className="min-h-screen md:py-6 pb-6 mb-20">
      <section>
        <h1>Coming soon</h1>
      </section>
    </main>
  );
}
