'use client';

import { WalletAddress } from '@/types';

interface WalletCardProps {
  wallet: WalletAddress;
  onCopy: (address: string) => void;
}

export default function WalletCard({ wallet, onCopy }: WalletCardProps) {
  return (
    <div className={`${wallet.bgColor} border rounded-lg p-6 text-center`}>
      <div className="text-4xl mb-4">{wallet.symbol}</div>
      <h3 className="font-bold text-lg mb-2">{wallet.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{wallet.description}</p>
      <div className="bg-white p-3 rounded border text-xs font-mono break-all mb-4">
        {wallet.address}
      </div>
      <button
        onClick={() => onCopy(wallet.address)}
        className={`w-full ${wallet.color.replace('text-', 'bg-')} text-white py-2 px-4 rounded hover:opacity-80 transition-opacity`}
      >
        Copy Address
      </button>
    </div>
  );
}
