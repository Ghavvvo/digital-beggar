import { Donor, WalletAddress } from '@/types';

export const donors: Donor[] = [
  {
    id: 1,
    name: "CryptoWhale42",
    amount: "0.1",
    cryptocurrency: "BTC",
    date: "2024-12-25",
    emoji: "🐋",
    message: "Hope this helps you HODL longer!"
  },
  {
    id: 2,
    name: "ElonMusksFan",
    amount: "420.69",
    cryptocurrency: "DOGE",
    date: "2024-12-24",
    emoji: "🚀",
    message: "Much wow, very donation"
  },
  {
    id: 3,
    name: "DiamondHands💎",
    amount: "2.5",
    cryptocurrency: "ETH",
    date: "2024-12-23",
    emoji: "💎",
    message: "HODL until death!"
  },
  {
    id: 4,
    name: "SatoshiGhost",
    amount: "0.00001337",
    cryptocurrency: "BTC",
    date: "2024-12-22",
    emoji: "👻",
    message: "1 satoshi = 1 satoshi"
  },
  {
    id: 5,
    name: "PumpAndDumpKing",
    amount: "1000000",
    cryptocurrency: "SHIB",
    date: "2024-12-21",
    emoji: "👑",
    message: "To the moon! 🌙"
  },
  {
    id: 6,
    name: "VitaliksCousin",
    amount: "3.14",
    cryptocurrency: "ETH",
    date: "2024-12-20",
    emoji: "🧠",
    message: "Gas fees are higher than my donation"
  },
  {
    id: 7,
    name: "HODLmaster3000",
    amount: "100",
    cryptocurrency: "USDT",
    date: "2024-12-19",
    emoji: "🔥",
    message: "Stablecoins for stability"
  },
  {
    id: 8,
    name: "CryptoNewbie",
    amount: "0.5",
    cryptocurrency: "ETH",
    date: "2024-12-18",
    emoji: "🤓",
    message: "I sold my car for this donation"
  }
];

export const walletAddresses: WalletAddress[] = [
  {
    symbol: "₿",
    address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    name: "Bitcoin",
    description: "The digital gold I never had",
    color: "text-orange-600",
    bgColor: "bg-orange-50 border-orange-200"
  },
  {
    symbol: "Ξ",
    address: "0x742d35Cc6Bf8f4dE3b8E92e8C7e5D8b1A9C8E3F2",
    name: "Ethereum",
    description: "Gas fees cost more than my rent",
    color: "text-blue-600",
    bgColor: "bg-blue-50 border-blue-200"
  },
  {
    symbol: "₮",
    address: "TQn9Y2khEsLJW1ChVWFMSMeRDow5oREqjK",
    name: "USDT",
    description: "The stability I desperately need",
    color: "text-green-600",
    bgColor: "bg-green-50 border-green-200"
  }
];
