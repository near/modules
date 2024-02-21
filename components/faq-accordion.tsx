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
    question: "Why now is the time for NEAR DA?",
    answer:
      "With NEAR Protocol already having 35 million accounts since its mainnet launch in 2020 and ensuring 100% uptime, the need for a robust data availability solution is evident. NEAR DA is capable of supporting multiple layer-twos, enabling developers to build on any layer-two solution and use NEAR DA for data availability. This modular approach ensures that data is easily accessible across different networks, and it is expected to lead to a more seamless experience for both users and developers. In fact, NEAR DA is already being used by several Ethereum-based projects such as Optimism and Rainbow Bridge, proving its interoperability potential and versatility. This will lead to a more seamless experience for users and developers alike, with data being easily accessible across different networks.",
  },
  {
    question: "How does DA fit into NEAR's tech stack?",
    answer:
      "NEAR DA is an integral part of NEAR Protocol's tech stack, which seamlessly integrates with the Nightshade consensus mechanism to efficiently utilize multiple shards for parallel processing. By leveraging this infrastructure, NEAR DA provides an out-of-the-box solution for developers to build rollups with cost-effective data availability, especially for those with high transaction volumes, such as gaming chains. This modular design ensures compatibility and collaboration with other NEAR components, contributing to NEAR's objectives of scalability, security, and developer-friendliness. With NEAR DA, rollup builders can easily make the most of NEAR's infrastructure, which has proven reliability and includes essential components such as the Blob Store Contract, Light Client, and RPC Client. Additionally, NEAR DA's rollup-as-a-service (RaaS) providers offer a cloud-like service that abstracts these components, making it even easier for developers to implement NEAR DA into their tech stack.",
  },
  {
    question: "Security tradeoffs?",
    answer:
      "The NEAR DA platform prioritizes security while optimizing for scalability and it does not compromise security for scalability. In fact, by leveraging zero-knowledge technology to unify security across chains through state proofs and by using the Nightshade consensus mechanism, NEAR DA ensures a robust security posture and mitigates potential security risks. The role of Data availability and NEAR DA in chain abstraction is also very important, as zero-knowledge technology enables unification of security across chains via state proofs, making settlement data easier to fetch from different networks. This makes it easier for dApps to become truly multichain and query data from multiple chains more easily when data is all posted in one place. Overall, NEAR DA provides a secure, scalable, and cost-effective solution for users and developers alike.",
  },
  {
    question:
      "Why is DAS (Data Availability Sampling) not needed?",
    answer:
      "DAS stands for Data Availability Sampling. It is a method used in traditional blockchain consensus mechanisms to ensure that all nodes in the network have access to the same data in order to achieve consensus. DAS involves randomly selecting a subset of nodes in the network and asking them to confirm the availability of a particular piece of data. This process is repeated multiple times to ensure that the data is available to all nodes in the network. However, DAS can be inefficient and may create security complexities. NEAR DA eliminates the need for DAS by using the Nightshade consensus mechanism, where the receipt is no longer required for consensus once a chunk is processed and included in a block. This approach simplifies the process, enhances efficiency and security, and provides a streamlined solution for achieving data availability in the network without the need for additional sampling methods.",
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
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
