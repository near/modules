"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "How does this calculator work?",
    answer:
      "The calculator is designed to provide an estimate of the potential cost savings that can be achieved by using NEAR Data Availability (DA) compared to Ethereum and Celestia. The calculator uses real rollup data to estimate the cost of submitting the same amount of data on Celestia and NEAR using Data Availability.",
    answer1: (
      <a
        href="https://dune.com/queries/2863300/4788854"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Rollup cost data (Dune Analytics)
      </a>
    ),
    answer2: (
      <a
        href="https://www.datalenses.zone/chain/celestia/calculator"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Celestia cost data (Data Lenses)
      </a>
    ),
  },
  {
    question: "What makes NEAR DA so cheap?",
    answer:
      "NEAR's Data Availability (DA) is notably inexpensive due to several key factors. Firstly, NEAR offers a substantial amount of block space per shard, ensuring efficient utilization. Moreover, NEAR optimizes this space by avoiding unnecessary cryptographic bloat, ensuring that each 4MB allocated equals precisely 4MB of usable data. Additionally, NEAR's scalability is unmatched, as it can readily reshard and scale in response to increasing demand, unlike competitors who would need to resort to constructing rollups or sidechains, thus maintaining a consistently ample and cost-effective data availability solution.",
  },
  {
    question:
      "Why is now the time for NEAR DA? What is the history of DA within NEAR Protocol?",
    answer:
      "As early as 2020, NEAR had already established a solid foundation, running 4 shards and successfully onboarding 100M wallets, with 11M of these being monthly active. A scalable blockchain demands an efficient, cost-effective DA layer to achieve those metrics.  The rise of L2 during the summer not only increased the quantity of modular blockchains but also blurred the distinctions between different blockchains. Having a DA layer, and further optimizing it through smart contracts, and opening it up to the increasing number of L2s seemed not only logical but also advantageous in providing a superior experience for DA.",
  },
  {
    question: "How does DA fit into NEAR's tech stack?",
    answer:
      "Every monolithic blockchain has a data availability layer. NEAR DA represents a pioneering initiative to extract the data availability layer from the NEAR blockchain and is the first of its kind. This infrastructure consists of a smart contract, a Remote Procedure Call (RPC) node, and a light client. The smart contract is designed to accept blob data, which is then processed through NEAR's consensus.The RPC node functions as the serving node, where users can transmit their data. Lastly, the light client operates as a node that rollups can verify to ensure the availability of data.",
  },
  {
    question:
      "Are there any security tradeoffs using NEAR DA?",
    answer:
      "NEAR DA process data through NEAR's consensus algorithm, Nightshade, which is secured by a number of validators and a significant stake. While this approach does provide a measure of security, like any system, it is not without potential tradeoffs.",
    answer1:
      "The primary mission of NEAR is to empower individuals to manage their assets, data, and governance. This is supported by validators who ensure that no single entity can control or manipulate the network's governance or data management. In the NEAR Proof-of-Stake network, a decentralized pool of validators process transactions to keep the network secure, receiving rewards in return. This system also allows for delegators, entities that want to provide security but may not have the necessary hardware, to delegate their tokens to validators.",
    answer2:
      "Presently, the NEAR network is secured by 210 validators and thousands of delegators. However, the goal is to bring more validators and delegators online to further decentralize the network. Joining the validator community supports the mission of decentralization and provides the opportunity to earn rewards.",
    answer3:
      "The current proving data depends on off-chain compute and archival nodes after 5 epochs (roughly 60 hours). In the future, we will have an upgrade to get on-chain proving via zk-proofs (more in the roadmap later).",
  },
  {
    question:
      "Why is DAS (Data Availability Sampling) not needed?",
    answer:
      "DAS is a probabilistic method used in blockchain consensus mechanisms to ensure that all nodes in the network have access to the same data in order to achieve consensus. DAS involves randomly selecting a subset of nodes in the network and asking them to confirm the availability of a particular piece of data. This process is repeated multiple times to ensure that the data is available to all nodes in the network.",
    answer1:
      "The problem with DAS is that some nodes could act dishonestly given it is a probabilistic way to prove data, causing data to be seen available, even though that might not be the case.",
    answer2:
      "As Ethereum switches towards a rollup centric roadmap, majority of the ETH ecosystem traffic is shifting towards L2s, meaning that the overall throughput of the system (and overall blockspace of the chain) becomes more and more important.",
    answer3:
      "This is where sharding matters in NEAR Protocol’s case for the rollups. As the requirements of becoming a validator gets considerably lower (and by moving the state to memory which increases the performance of a single shard), and by allowing the primitive ‘there can exist validators that only track one shard’,  the number of shards will increase. Currently the shard capacity is capped at 4mb/s per shard, making the whole chain’s throughput cap at 16mb/s. With the introduction of Stateless Validation, this would scale to 4mb/s * n of shards which gives an abundance of blockspace, meaning that the overall throughput of the system could potentially increase indefinitely and L2 rollups do not have to compete for blockspace.",
  },
];

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible>
      {faq.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-lg font-semibold text-left py-5">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="font-light text-slate-800 my-3 leading-8 text-lg">
            {item.answer && (
              <p className="my-6">{item.answer}</p>
            )}
            {item.answer1 && (
              <p className="my-6">{item.answer1}</p>
            )}
            {item.answer2 && (
              <p className="my-6">{item.answer2}</p>
            )}
            {item.answer3 && (
              <p className="my-6">{item.answer3}</p>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
