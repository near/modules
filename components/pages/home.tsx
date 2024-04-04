"use client";
import React, { useState, useEffect } from "react";
import CostBarChart from "@/components/bar-chart";
import Combobox from "@/components/combobox";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "@phosphor-icons/react";
import CostSavings from "@/components/cost-savings";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import CountUp from "react-countup";
import FaqAccordion from "@/components/faq-accordion";
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
  [key: string]: any;
  dateRange: any;
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
  {
    value: "linea",
    label: "Linea",
  },
  {
    value: "aevo",
    label: "Aevo",
  },
  {
    value: "lyra",
    label: "Lyra",
  },
  {
    value: "zora",
    label: "Zora",
  },
];

export default function Home() {
  const [rollupData, setRollupData] = useState<DataItem[]>(
    []
  );
  const [isSwitchOn, setSwitchState] = useState(false);
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
    if (!a.week || !b.week) return 0;
    return (
      dayjs(a.week, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").unix() -
      dayjs(b.week, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").unix()
    );
  });

  // Combines the data from the last 4 weeks
  const combinedData = rollupData.reduce(
    (accumulator: any, current: DataItem) => {
      Object.keys(current).forEach((key: any) => {
        if (typeof current[key] === "number") {
          if (accumulator[key]) {
            accumulator[key] += current[key] as number;
          } else {
            accumulator[key] = current[key] as number;
          }
        } else if (!accumulator[key]) {
          accumulator[key] = current[key] as string;
        }
      });
      return accumulator as DataItem;
    },
    {}
  );

  const totalDataRange = () => {
    const firstDate = rollupData[0]?.week;
    const lastDate =
      rollupData[rollupData.length - 1]?.week;
    if (firstDate && lastDate) {
      return (
        <>
          {dayjs(
            firstDate,
            "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
          ).format("YYYY-MM-DD")}{" "}
          -{" "}
          {dayjs(
            lastDate,
            "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
          ).format("YYYY-MM-DD")}
        </>
      );
    }
    return null;
  };

  const selectedRollupLabel = rollups.find(
    (rollup) => rollup.value === selectedRollup
  )?.label;

  const dateRange = totalDataRange();

  return (
    <main className="min-h-screen md:py-6 pb-6 mb-20">
      <section className="mb-8 flex flex-wrap">
        <div className="w-full md:w-1/2">
          <h1 className="text-slate-800">
            Rollup Data Availability
          </h1>
          <h1 className="text-slate-800 mt-3">
            on{" "}
            <a href="https://near.org" target="_blank">
              <span className="underline text-green-500">
                <span className="text-slate-800">NEAR</span>
              </span>
            </a>
          </h1>
          <h4 className="mt-6 font-light max-w-md text-slate-800 leading-9">
            Data availability on NEAR offers unmatched
            performance and cost efficiency
          </h4>
          <Button
            variant="outline"
            className="mb-12 md:mb-0 mt-7 p-6 border-slate-200 rounded-lg bg-white"
            onClick={() => {
              window.open(
                "https://github.com/near/rollup-data-availability/",
                "_blank"
              );
            }}
          >
            Read more on Github{" "}
            <ArrowUpRight
              size={18}
              className="ml-2 mt-0.5"
            />
          </Button>
        </div>
        <div className="w-full md:w-1/2 max-w-lg">
          <div className="mb-6">
            <h5 className="text-slate-800 text-xl">
              Drastically reduce your costs
            </h5>
            <p className="font-light text-slate-800 my-3 leading-7">
              Storing calldata on NEAR Protocol is
              approximately{" "}
              <span className="hidden lg:inline">
                <span className="font-semibold">
                  <CountUp
                    start={1}
                    end={85000 || 0}
                    duration={2.5}
                    separator=","
                  />
                  x <br />
                </span>
              </span>
              <span className="font-semibold inline lg:hidden">
                85000x{" "}
              </span>
              cheaper than storing the same amount of data
              on Ethereum.
            </p>
          </div>
          <div className="mb-6">
            <h5 className="text-slate-800 text-xl">
              Easily validate proofs
            </h5>
            <p className="font-light text-slate-800 my-3 leading-7">
              A trustless off-chain light client for NEAR
              provides easy access to validate that rollup
              data was stored on-chain.
            </p>
          </div>
          <div>
            <h5 className="text-slate-800 text-xl">
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
      <div className="flex place-content-between flex-wrap items-center my-2 mt-0.5">
        <Combobox
          data={rollups}
          value={selectedRollup}
          setValue={(v) => setSelectedRollup(v)}
        />
        <div
          className="flex items-center space-x-2
      "
        >
          <Label
            htmlFor="airplane-mode"
            className="text-xs text-slate-500 font-normal"
          >
            <div className="flex items-center">
              4 MB batches
              <InfoTooltip>
                Simulate cost if rollup submitted data to
                NEAR in 4 MB batches
              </InfoTooltip>
            </div>
          </Label>
          <Switch
            id="airplane-mode"
            checked={isSwitchOn}
            onCheckedChange={() => {
              setSwitchState(!isSwitchOn);
            }}
          />
        </div>
      </div>
      <CostSavings
        data={rollupData}
        fourMbBatch={isSwitchOn}
        selectedRollupLabel={selectedRollupLabel || ""}
      />
      <div className="z-10 w-full text-sm border border-slate-200 rounded-md p-5 bg-white">
        <h6 className="text-slate-800 font-semibold mb-5 text-center text-base">
          <div>
            Data Availability cost for {selectedRollupLabel}{" "}
            ({rollupData.length} weeks)*
          </div>
          <div className="text-sm font-normal mt-2">
            ETH vs Celestia vs NEAR
          </div>
        </h6>
        {/* <Chart data={rollupData} fourMbBatch={isSwitchOn} /> */}
        <CostBarChart
          data={[combinedData]}
          fourMbBatch={isSwitchOn}
          dateRange={dateRange || ""}
        />
        <div className="text-sm text-slate-500 text-left mb-2 flex flex-col justify-between md:items-center md:flex-row">
          <div>
            *Cost data from{" "}
            <a
              href="https://dune.com/queries/2863300/4788854"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Dune Analytics
            </a>{" "}
            and{" "}
            <a
              href="https://www.datalenses.zone/chain/celestia/calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Data Lenses
            </a>
          </div>
          {dateRange}
        </div>
      </div>
      <h2 className="text-slate-800 text-2xl mt-20 font-semibold text-center">
        Watch talks about NEAR DA
      </h2>
      <div className="flex my-20 flex-col md:flex-row">
        <div className="w-100 md:w-1/2">
          <iframe
            className="w-full h-96 rounded-md"
            src="https://www.youtube.com/embed/U1IfP435Aow"
            title="Introducing the NEAR Data Availability Layer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-100 md:w-1/2 mt-10 md:mt-0 md:ml-16">
          <iframe
            className="w-full h-96 rounded-md"
            src="https://www.youtube.com/embed/GJOTSUeRKkk"
            title="Layer 2 Stage | NEAR as a Data Availability Layer for Ethereum Rollups"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <h2 className="text-slate-800 text-2xl mt-12 mb-20 font-semibold text-center">
        Frequently Asked Questions
      </h2>
      <div className="w-full border border-slate-200 rounded-lg p-5 mt-30 bg-white">
        <FaqAccordion />
      </div>
      <div className="flex flex-col">
        <h2 className="text-slate-800 text-2xl mt-20 mb-12 font-semibold text-center">
          Want to learn more?
        </h2>
        <Button
          variant="outline"
          className="p-6 border-slate-200 rounded-lg mx-auto bg-white"
          onClick={() => {
            window.open(
              "https://forms.gle/LWJoTpTiCbSheUL26",
              "_blank"
            );
          }}
        >
          Get in touch
        </Button>
      </div>
    </main>
  );
}
