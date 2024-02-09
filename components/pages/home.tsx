"use client";
import React, { useState, useEffect } from "react";
import Chart from "@/components/line-chart";
import Combobox from "@/components/combobox";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "@phosphor-icons/react";
import CostSavings from "@/components/cost-savings";

interface DataItem {
  calldata_mb: number;
  l1_calldata_cost: number;
  l1_calldata_cost_usd: number;
  name: string;
  week: string;
  weekly_approx_near_l2_calldata_cost_1mb_usd: number;
  weekly_approx_near_l2_calldata_cost_4mb_usd: number;
}

const rollups = [
  {
    value: "arbitrum",
    label: "Arbitrum",
  },
  {
    value: "polygon zkevm",
    label: "Polygon",
  },
  {
    value: "scroll",
    label: "Scroll",
  },
  {
    value: "op mainnet",
    label: "OP Mainnet",
  },
  {
    value: "base",
    label: "Base",
  },
  {
    value: "starknet",
    label: "Starknet",
  },
];

export default function Home() {
  const [rollupData, setRollupData] = useState<DataItem[]>(
    []
  );
  const [selectedRollup, setSelectedRollup] =
    useState("arbitrum");

  const fetchRollupData = async (rollup: string) => {
    const response = await fetch(
      `https://rollup-fee-calculator.api.pagoda.co/getByName?name=${rollup}`
    );
    const data = await response.json();
    setRollupData(data);
  };

  useEffect(() => {
    fetchRollupData(selectedRollup);
  }, [selectedRollup]);

  rollupData.sort((a, b) => {
    return (
      new Date(a.week).getTime() -
      new Date(b.week).getTime()
    );
  });

  return (
    <main className="min-h-screen py-6">
      <section className="mb-8 flex flex-wrap">
        <div className="w-full md:w-1/2">
          <h1 className="text-slate-800">
            Rollup Data Availability
          </h1>
          <h1 className="text-slate-800 mt-3">on NEAR</h1>
          <h4 className="mt-6 font-light max-w-md text-slate-800 leading-9">
            Data availability on NEAR offers unmatched
            performance and cost efficiency
          </h4>
          <Button
            variant="outline"
            className="mt-7 p-6 border-slate-800 rounded-md"
          >
            Learn more on Github{" "}
            <ArrowUpRight size={16} className="ml-1" />
          </Button>
        </div>
        <div className="w-full md:w-1/2 max-w-lg">
          <div className="mb-6">
            <h5 className="text-slate-800">
              Drastically reduce your costs
            </h5>
            <p className="font-light text-slate-800 my-3 leading-7">
              Storing calldata on NEAR Protocol is
              approximately 8000x cheaper than storing the
              same amount of data on Ethereum.
            </p>
          </div>
          <div className="mb-6">
            <h5 className="text-slate-800">
              Easily validate proofs
            </h5>
            <p className="font-light text-slate-800 my-3 leading-7">
              A trustless off-chain light client for NEAR
              provides easy access to validate that rollup
              data was stored on-chain.
            </p>
          </div>
          <div>
            <h5 className="text-slate-800">
              Simple to interact with
            </h5>
            <p className="font-light text-slate-800 my-3 leading-7">
              NEAR readily provides an RPC to easily
              retrieve the on-chain data from anywhere
            </p>
          </div>
        </div>
      </section>
      <h6 className="text-slate-800 font-semibold">
        Select a rollup to compare costs
      </h6>
      <div className="flex place-content-between items-center my-5 mt-0.5">
        <Combobox
          data={rollups}
          value={selectedRollup}
          setValue={(v) => setSelectedRollup(v)}
        />
        {rollupData && rollupData.length > 0 && (
          <div className="text-xs text-slate-500">
            Showing data from 
            {rollupData &&
            rollupData.length > 0 &&
            rollupData[0]?.week
              ? new Date(rollupData?.[0]?.week)
                  .toISOString()
                  .split("T")[0]
              : "N/A"}
            {" to "}
            {rollupData &&
            rollupData.length > 0 &&
            rollupData[rollupData.length - 1]?.week
              ? new Date(
                  rollupData?.[rollupData.length - 1]?.week
                )
                  .toISOString()
                  .split("T")[0]
              : "N/A"}
          </div>
        )}
      </div>
      <CostSavings data={rollupData} />
      <div className="z-10 w-full text-sm border border-slate-200 rounded-md p-5">
        <h6 className="text-slate-800 font-semibold mb-5 text-center">
          Weekly Cost ({selectedRollup} vs near)
        </h6>
        <Chart data={rollupData} />
      </div>
    </main>
  );
}
