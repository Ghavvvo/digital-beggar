'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { donors } from '@/data/donantes';

export default function GoalsPage() {
  // Calculate current BTC total from donations
  const calculateBTCTotal = () => {
    let btcTotal = 0;

    donors.forEach(donor => {
      if (donor.cryptocurrency === 'BTC') {
        btcTotal += parseFloat(donor.amount);
      } else if (donor.cryptocurrency === 'USDT') {
        // Current BTC price: $109,000 USD
        const usdtAmount = parseFloat(donor.amount);
        btcTotal += usdtAmount / 109000;
      }
      // Add other cryptocurrency conversions as needed
    });

    return btcTotal;
  };

  const currentBTC = calculateBTCTotal();

  // Main goal
  const mainGoal = {
    title: "Ultimate Goal: Retire My Grandsons",
    description: "Reach 1 BTC so my future grandsons can retire before they even born",
    target: 1,
    current: currentBTC,
    emoji: "👴",
    color: "from-yellow-400 to-orange-500"
  };

  // Intermediate goals
  const intermediateGoals = [
    {
      title: "Professional Begging Setup",
      description: "Buy a .crypto domain to beg more professionally",
      target: 0.01,
      current: currentBTC,
      emoji: "🌐",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Launch My Own Shitcoin",
      description: "Fund my own whitepaper: Digital Beggar Coin (DBC) – The shitcoin nobody asked for",
      target: 0.1,
      current: currentBTC,
      emoji: "🪙",
      color: "from-green-400 to-blue-500"
    }
  ];

  const calculateProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const formatBTC = (amount: number) => {
    return amount.toFixed(8);
  };

  const ProgressBar = ({ progress, color }: { progress: number, color: string }) => (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out rounded-full relative`}
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Goals & Progress
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Planning for generational wealth, one satoshi at a time
            </p>
          </div>

          {/* Current Status */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4">
              <span className="text-3xl">₿</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Current Balance</h2>
            <p className="text-4xl font-mono font-bold text-orange-600">
              {formatBTC(currentBTC)} BTC
            </p>
            <p className="text-gray-600 mt-2">
              ≈ ${(currentBTC * 109000).toLocaleString()} USD
            </p>
          </div>

          {/* Main Goal */}
          <div className="mb-12">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 border border-white/20">
              <div className="flex items-center justify-center mb-8">
                <span className="text-6xl mr-4">{mainGoal.emoji}</span>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{mainGoal.title}</h3>
                  <p className="text-lg text-gray-600">{mainGoal.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium text-gray-700">Progress to Grandsons' Retirement</span>
                  <span className="text-xl font-bold text-gray-800">
                    {calculateProgress(mainGoal.current, mainGoal.target).toFixed(2)}%
                  </span>
                </div>
                <ProgressBar
                  progress={calculateProgress(mainGoal.current, mainGoal.target)}
                  color={mainGoal.color}
                />
              </div>

              <div className="flex justify-between text-lg text-gray-600 mb-6">
                <span>{formatBTC(mainGoal.current)} BTC</span>
                <span>{formatBTC(mainGoal.target)} BTC</span>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                <p className="text-center text-gray-700 text-lg">
                  <strong>{formatBTC(mainGoal.target - mainGoal.current)} BTC</strong> remaining until my grandsons can retire!
                </p>
                <p className="text-center text-gray-600 mt-2">
                  That&apos;s only <strong>${((mainGoal.target - mainGoal.current) * 109000).toLocaleString()}</strong> away from generational wealth!
                </p>
              </div>
            </div>
          </div>

          {/* Intermediate Goals */}
          {intermediateGoals.map((goal, index) => (
            <div className="mb-12" key={index}>
              <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 border border-white/20">
                <div className="flex items-center justify-center mb-8">
                  <span className="text-6xl mr-4">{goal.emoji}</span>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{goal.title}</h3>
                    <p className="text-lg text-gray-600">{goal.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-medium text-gray-700">Progress to Goal</span>
                    <span className="text-xl font-bold text-gray-800">
                      {calculateProgress(goal.current, goal.target).toFixed(2)}%
                    </span>
                  </div>
                  <ProgressBar
                    progress={calculateProgress(goal.current, goal.target)}
                    color={goal.color}
                  />
                </div>

                <div className="flex justify-between text-lg text-gray-600 mb-6">
                  <span>{formatBTC(goal.current)} BTC</span>
                  <span>{formatBTC(goal.target)} BTC</span>
                </div>
              </div>
            </div>
          ))}

          {/* Humorous Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl mb-2">👶</div>
              <h4 className="font-bold text-gray-800">Grandsons Protected</h4>
              <p className="text-2xl font-mono text-orange-600">∞</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl mb-2">🏖️</div>
              <h4 className="font-bold text-gray-800">Retirement Age</h4>
              <p className="text-2xl font-mono text-orange-600">-5 years</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl mb-2">💭</div>
              <h4 className="font-bold text-gray-800">Dream Level</h4>
              <p className="text-2xl font-mono text-orange-600">Maximum</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Help Secure the Future!</h3>
              <p className="text-lg mb-6 opacity-90">
                Your donation today = My grandsons&apos; retirement tomorrow
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-800 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">👴</span>
                Donate for Future Generations
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
