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
    address: "bc1qukhh6xf6yn8lrgf35n4yes4zns7wahdqzd560y",
    name: "Bitcoin",
    description: "The digital gold I never had",
    color: "text-orange-600",
    bgColor: "bg-orange-50 border-orange-200"
  },
  {
    symbol: "Ξ",
    address: "0xa042e89fba310a52d025da02df0a977d0ba7c0a2",
    name: "Ethereum",
    description: "Gas fees cost more than my rent",
    color: "text-blue-600",
    bgColor: "bg-blue-50 border-blue-200"
  },
  {
    symbol: "₮",
    address: "0xa042e89fba310a52d025da02df0a977d0ba7c0a2",
    name: "USDT",
    description: "The stability I desperately need",
    color: "text-green-600",
    bgColor: "bg-green-50 border-green-200"
  },
  {
    symbol: "S",
    address: "6p7zC2RjhSn9dy9X8xjtSYntZtExx34Zrdx7584pxmzx",
    name: "Solana",
    description: "Solana - because why not?",
    color: "text-yellow-600",
    bgColor: "bg-green-50 border-green-200"
  }
];
