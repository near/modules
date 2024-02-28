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
    question:
      "Why now is the time for NEAR DA? What is the history of DA within the NEAR Protocol?",
    answer:
      "As early as 2020, NEAR had already established a solid foundation, running 4 shards and successfully onboarding 35M wallets, with 16M of these being monthly active. A scalable blockchain demands an efficient, cost-effective DA layer to achieve those metrics.  The rise of L2 during the summer not only increased the quantity of modular blockchains but also blurred the distinctions between different blockchains. Having a DA layer, and further optimizing it through smart contracts, and opening it up to the increasing number of L2s seemed not only logical but also advantageous in providing a superior experience for DA.",
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
      "Presently, the NEAR network is secured by 100 block producing validators and thousands of delegators. However, the goal is to bring more validators and delegators online to further decentralize the network. Joining the validator community supports the mission of decentralization and provides the opportunity to earn rewards.",
    answer3:
      "In the future, the current proving data depends on off-chain compute and archival nodes after 5 epochs (roughly 60 hours). There is work being done to get on-chain proving done via zk-proofs (more in the roadmap later).",
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
  {
    question: "Roadmap (to be released on Feb 7)",
    answer:
      "Stay tuned for the unveiling of NEAR DA's roadmap on <new date>. This comprehensive document will outline the future trajectory of NEAR DA, including development plans, enhancements, and key milestones. The roadmap will serve as a transparent and forward-looking guide, offering insights into how NEAR DA will continue to evolve and meet the dynamic needs of the Web3 ecosystem. Be prepared for a detailed roadmap that showcases the ongoing commitment to innovation within the NEAR Protocol.",
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
            {Object.keys(item)
              .filter((key) => key.startsWith("answer"))
              .map((key) => (
                <p key={key} className="my-6">
                  {(item as any)[key]}
                </p>
              ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
