'use client';

import Image from "next/image";
import Navigation from '@/components/Navigation';
import WalletCard from '@/components/WalletCard';
import { walletAddresses } from '@/data/donantes';

export default function Home() {
  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
    alert('Address copied! Thanks for your generosity 🙏');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            {/* Meme-style beggar placeholder */}
            <div className="w-64 h-64 mx-auto bg-gray-200 rounded-full flex items-center justify-center text-8xl">
              🥺
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to the
            <span className="text-orange-600"> Blockchain Misery Corner</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Where crypto dreams come to die and satoshis are rarer than my job opportunities
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-left max-w-2xl mx-auto">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-2xl">⚠️</span>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Warning:</strong> This beggar accepts crypto donations because banks won't give me credit anymore.
                  All donations will be used to HODL until it's worth something... or not.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Hat Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🎩 The Digital Hat of Hope
            </h2>
            <p className="text-gray-600">
              Every satoshi counts. Every wei matters. Every USDT is a tear of happiness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {walletAddresses.map((wallet) => (
              <WalletCard
                key={wallet.name}
                wallet={wallet}
                onCopy={copyToClipboard}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 italic">
              "It ain't much, but it's honest work" - Digital Beggar, probably
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Join the Misery Revolution
          </h3>
          <p className="text-gray-600 mb-6">
            Discover who are the heroes that saved me from instant ramen
          </p>
          <a
            href="/donors"
            className="inline-block bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            View Hall of Fame 👑
          </a>
        </div>
      </main>
    </div>
  );
}
