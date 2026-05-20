import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrumSepolia,
  baseSepolia,
  mainnet,
} from 'wagmi/chains';

export const wagmiConfig = getDefaultConfig({
  appName: 'Elevate Protocols Presale',
  projectId: 'e6e65b93cf1c8c5ce8a07b2e90917d7b', // Official WalletConnect Project ID
  chains: [baseSepolia, arbitrumSepolia, mainnet],
  ssr: true,
});

export const SUPPORTED_CHAINS = {
  baseSepolia: baseSepolia.id,
  arbitrumSepolia: arbitrumSepolia.id,
  mainnet: mainnet.id,
};

export const DEFAULT_CHAIN = baseSepolia.id;
