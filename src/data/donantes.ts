import { Donor, WalletAddress } from '@/types';

export const donors: Donor[] = [
  {
    id: 1,
    name: "Anonymous_Helper",
    amount: "0.00025",
    cryptocurrency: "BTC",
    date: "2025-7-1",
    emoji: "👤",
    message: "Every satoshi counts, brother"
  },
  {
    id: 2,
    name: "CoffeeSkipper",
    amount: "5.0",
    cryptocurrency: "USDT",
    date: "2025-6-29",
    emoji: "☕",
    message: "Skipped my coffee this week for you"
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
