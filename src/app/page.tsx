'use client';

import Image from "next/image";
import Navigation from '@/components/Navigation';
import WalletCard from '@/components/WalletCard';
import { walletAddresses } from '@/data/donantes';
import { useState, useEffect } from 'react';

export default function Home() {
  const [dayCount, setDayCount] = useState(0);
  const [currentMillionaire, setCurrentMillionaire] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState('');

  const techMillionaires = [
    'Elon Musk', 'Jeff Bezos', 'Bill Gates', 'Mark Zuckerberg', 'Larry Page',
    'Sergey Brin', 'Warren Buffett', 'Larry Ellison', 'Tim Cook', 'Satya Nadella',
    'Jensen Huang', 'Marc Benioff', 'Reed Hastings', 'Jack Dorsey', 'Michael Dell',
    'Vitalik Buterin', 'Sam Altman', 'Brian Chesky', 'Daniel Ek', 'Patrick Collison'
  ];

  const funnyPhrases = [
    'to accidentally send Bitcoin instead of buying another yacht',
    'to fat-finger a donation while checking their bank balance',
    'to mistake my wallet for their tax write-off account',
    'to drop some pocket change (aka my life savings)',
    'to accidentally solve my poverty while debugging their code',
    'to send crypto instead of a LinkedIn connection request',
    'to donate by accident while flexing their net worth',
    'to think my address is their cold storage wallet',
    'to make it rain satoshis instead of buying another mansion',
    'to confuse my QR code with their coffee shop payment',
    'to send me their Tesla money by mistake',
    'to accidentally copy-paste the wrong wallet address'
  ];

  useEffect(() => {
    // Calculate days since July 1, 2025 (yesterday from current date July 2, 2025)
    const startDate = new Date('2025-07-01');
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDayCount(diffDays);

    // Select a random millionaire based on current session
    const randomIndex = Math.floor(Math.random() * techMillionaires.length);
    setCurrentMillionaire(techMillionaires[randomIndex]);

    // Select a random funny phrase
    const randomPhraseIndex = Math.floor(Math.random() * funnyPhrases.length);
    setCurrentPhrase(funnyPhrases[randomPhraseIndex]);
  }, []);

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

        {/* Story Hook Section */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg shadow-lg p-8 mb-12 border border-red-200">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              💀 How I Lost Everything in Crypto
            </h2>
            <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
              From buying Bitcoin at $19,500 to losing everything in Terra Luna...
              My journey from hopeful investor to professional digital beggar is a masterpiece of bad decisions.
            </p>
            <div className="bg-white p-4 rounded-lg max-w-md mx-auto mb-6">
              <p className="text-red-600 font-bold italic">
                "I turned $50,000 into 12 satoshis. AMA."
              </p>
            </div>
            <a
              href="/story"
              className="inline-block bg-red-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Read My Tragic Tale 📖
            </a>
          </div>
        </div>

        {/* Day Counter Section */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-8 max-w-md mx-auto text-center">
          <p className="text-purple-800 text-sm font-semibold mb-2">
            ⏰ Day #{dayCount} waiting for {currentMillionaire}
          </p>
          <p className="text-purple-700 text-xs italic">
            {currentPhrase} 🤞
          </p>
        </div>


        {/* Donation Hat Section */}
        <div id="donation-section" className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🎩 The Digital Hat of Hope
            </h2>
            <p className="text-gray-600 mb-4">
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

        {/* Contact Section */}
        <div className="bg-gray-100 rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💬 Got Questions? Suggestions? Pity?
            </h3>
            <p className="text-gray-600 mb-6">
              Drop me a line! I promise to read every email while crying softly.
            </p>
            <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl mr-2">📬</span>
                <span className="font-mono text-lg text-gray-800">itsdigitalbeggar@gmail.com</span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('itsdigitalbeggar@gmail.com');
                  alert('Email copied! Now you can roast me properly 📧');
                }}
                className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
              >
                Copy Email
              </button>
            </div>
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
