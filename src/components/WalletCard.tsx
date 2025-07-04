'use client';

import { WalletAddress } from '@/types';

interface WalletCardProps {
  wallet: WalletAddress;
  onCopy: (address: string) => void;
}

export default function WalletCard({ wallet, onCopy }: WalletCardProps) {
  // Map wallet names to their button colors
  const getButtonColor = (walletName: string) => {
    switch (walletName) {
      case 'Bitcoin':
        return 'bg-orange-600 hover:bg-orange-700';
      case 'Ethereum':
        return 'bg-blue-600 hover:bg-blue-700';
      case 'USDT':
        return 'bg-green-600 hover:bg-green-700';
      default:
        return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <div className={`${wallet.bgColor} border rounded-lg p-6 text-center`}>
      <div className="text-4xl mb-4">{wallet.symbol}</div>
      <h3 className="font-bold text-lg mb-2 text-gray-900">{wallet.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{wallet.description}</p>
      <div className="bg-white p-3 rounded border text-xs font-mono break-all mb-4 text-gray-800">
        {wallet.address}
      </div>
      <button
        onClick={() => onCopy(wallet.address)}
        className={`w-full ${getButtonColor(wallet.name)} text-white py-2 px-4 rounded transition-colors`}
      >
        Copy Address
      </button>
    </div>
  );
}
