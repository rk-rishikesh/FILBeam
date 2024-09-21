import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  DynamicContextProvider,
  EthereumWalletConnectors,
} from "../lib/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FILBeam",
  description: "FILBeam",
};

const dynamicEnvId = process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID;

const evmNetworks = [
  {
    blockExplorerUrls: ["https://etherscan.io/"],
    chainId: 296,
    chainName: "Hedera Testnet",
    iconUrls: [
      "https://docs.hedera.com/~gitbook/image?url=https%3A%2F%2F72010995-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-LsUmP_7NoX2exvbv_Ps%252Ficon%252FEreNBwhyCRmIPoBUOXkV%252Fhedera-hashgraph-hbar-logo.png%3Falt%3Dmedia%26token%3D6dfffccf-ad9f-4542-983c-6d2fe482a3ee&width=32&dpr=2&quality=100&sign=15a8db6f&sv=1",
    ],
    name: "Hedera Testnet",
    nativeCurrency: {
      decimals: 18,
      name: "HBAR",
      symbol: "HBAR",
    },
    networkId: 296,
    rpcUrls: ["https://testnet.hashio.io/api"],
    vanityName: "Hedera",
  },
  {
    blockExplorerUrls: ["https://etherscan.io/"],
    chainId: 59141,
    chainName: "Linea Sepolia",
    iconUrls: [
      "https://pbs.twimg.com/profile_images/1639402103486521344/erDLnbwE_400x400.jpg",
    ],
    name: "Linea Sepolia",
    nativeCurrency: {
      decimals: 18,
      name: "ETH",
      symbol: "ETH",
    },
    networkId: 59141,
    rpcUrls: ["https://rpc.sepolia.linea.build"],
    vanityName: "Linea",
  },
  {
    blockExplorerUrls: ["https://etherscan.io/"],
    chainId: 314159,
    chainName: "Filecoin Calibration",
    iconUrls: ["https://cryptologos.cc/logos/filecoin-fil-logo.png"],
    name: "Filecoin Calibration",
    nativeCurrency: {
      decimals: 18,
      name: "ETH",
      symbol: "ETH",
    },
    networkId: 314159,
    rpcUrls: ["https://rpc.sepolia.linea.build"],
    vanityName: "Filecoin",
  },
  {
    blockExplorerUrls: ["https://etherscan.io/"],
    chainId: 545,
    chainName: "Flow Testnet",
    iconUrls: ["https://cryptologos.cc/logos/filecoin-fil-logo.png"],
    name: "Flow Testnet",
    nativeCurrency: {
      decimals: 18,
      name: "FLOW",
      symbol: "FLOW",
    },
    networkId: 545,
    rpcUrls: ["https://rpc.sepolia.linea.build"],
    vanityName: "Flow",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!dynamicEnvId) {
    const errMsg =
      "Please add your Dynamic Environment to this project's .env file";
    console.error(errMsg);
    throw new Error(errMsg);
  }

  return (
    <html lang="en">
          <DynamicContextProvider
            settings={{
              environmentId: dynamicEnvId,
              walletConnectors: [EthereumWalletConnectors],
              overrides: { evmNetworks },
            }}
          >
            <body className={inter.className}>{children}</body>
          </DynamicContextProvider>
    </html>
  );
}
