// Token Configuration with Contract ABIs and Asset Mappings
export const PINNACLE_LEDGER_ABI = [
  {
    inputs: [
      { internalType: "address", name: "scout", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bytes32", name: "dataHash", type: "bytes32" },
      { internalType: "uint256", name: "nonce", type: "uint256" },
      { internalType: "bytes", name: "signature", type: "bytes" },
    ],
    name: "claimScoutRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export interface Token {
  id: string;
  symbol: string;
  name: string;
  description: string;
  image: string;
  address: string;
  status: "ACTIVE" | "PENDING";
  accent: string;
}

export const TOKEN_LIST: Token[] = [
  {
    id: "sumit",
    symbol: "$SUMIT",
    name: "Summit Vault",
    description: "The apex of elevated finance. Core reserve and settlement layer.",
    image: "/images/file_00000000e0ec71fb9979a66bbf32849f.png",
    address: "0x0000000000000000000000000000000000000000", // Placeholder - update with actual
    status: "ACTIVE",
    accent: "#f97316", // Scout Orange
  },
  {
    id: "velo",
    symbol: "$VELO",
    name: "Access Velocity Index",
    description: "Speed in the digital expanse. Liquidity and velocity metrics.",
    image: "/images/1778914059933.png",
    address: "0x0000000000000000000000000000000000000001",
    status: "ACTIVE",
    accent: "#38bdf8", // Alpine Blue
  },
  {
    id: "mind",
    symbol: "$MIND",
    name: "Frontier Intelligence Index",
    description: "Strength from the digital expansion. Data-driven insights.",
    image: "/images/1778914204570.png",
    address: "0x0000000000000000000000000000000000000002",
    status: "ACTIVE",
    accent: "#a78bfa", // Frontier Purple
  },
  {
    id: "shore",
    symbol: "$SHORE",
    name: "Safe Harbor Index",
    description: "Stability in the digital sea. Risk-managed positions.",
    image: "/images/1778914279423.png",
    address: "0x0000000000000000000000000000000000000003",
    status: "ACTIVE",
    accent: "#60a5fa", // Harbor Blue
  },
  {
    id: "path",
    symbol: "$PATH",
    name: "Nomad Interop Index",
    description: "Connecting the digital horizon. Cross-chain interoperability.",
    image: "/images/1778914364352.png",
    address: "0x0000000000000000000000000000000000000004",
    status: "ACTIVE",
    accent: "#fbbf24", // Golden Path
  },
  {
    id: "rwat",
    symbol: "$RWAT",
    name: "Real-World Terrain",
    description: "Tokenizing physical landscapes. Environmental data integration.",
    image: "/images/1778914510959.png",
    address: "0x0000000000000000000000000000000000000005",
    status: "PENDING",
    accent: "#34d399", // Terrain Green
  },
];

export const PRESALE_CONFIG = {
  startTime: new Date("2026-05-22T21:30:00").getTime(), // Friday 9:30 PM
  whitelistPhase: {
    start: new Date("2026-05-22T21:30:00").getTime(),
    end: new Date("2026-05-24T23:59:59").getTime(), // Through Sunday
  },
  publicPhase: {
    start: new Date("2026-05-25T00:00:00").getTime(), // Monday
    end: new Date("2026-06-01T23:59:59").getTime(),
  },
  appLaunch: new Date("2026-06-02T00:00:00").getTime(),
};
