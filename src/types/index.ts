export interface Donor {
  id: number;
  name: string;
  amount: string;
  cryptocurrency: string;
  date: string;
  emoji: string;
  message?: string;
}

export interface WalletAddress {
  symbol: string;
  address: string;
  name: string;
  description: string;
  color: string;
  bgColor: string;
}
