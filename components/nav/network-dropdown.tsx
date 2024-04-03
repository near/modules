"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WifiMedium } from "@phosphor-icons/react";

enum Network {
  Mainnet = "Mainnet",
  Testnet = "Testnet",
}

export default function NetworkDropdown() {
  const [selectedNetwork, setSelectedNetwork] =
    React.useState<Network>(Network.Mainnet);

  const handleNetworkChange = (network: Network) => {
    setSelectedNetwork(network);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center"
        >
          <WifiMedium size={28} className="-mt-2 mr-1" />
          {selectedNetwork}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          Select network
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedNetwork === Network.Mainnet}
          onCheckedChange={() =>
            handleNetworkChange(Network.Mainnet)
          }
        >
          {Network.Mainnet}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedNetwork === Network.Testnet}
          onCheckedChange={() =>
            handleNetworkChange(Network.Testnet)
          }
        >
          {Network.Testnet}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
