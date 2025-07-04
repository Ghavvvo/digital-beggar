'use client';

import Navigation from '@/components/Navigation';
import { donors } from '@/data/donantes';

export default function DonorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 pt-32 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Donors Hall of Fame
          </h1>
          <h2 className="text-2xl text-yellow-600 mb-6">
            Heroes Without Capes (But With Wallets)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These brave souls have decided to feed this digital beggar.
            Their names will be forever engraved in the blockchain of my heart.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold text-green-600">{donors.length}</div>
            <div className="text-gray-600">Generous Souls</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">🙏</div>
            <div className="text-2xl font-bold text-blue-600">∞</div>
            <div className="text-gray-600">Infinite Gratitude</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">😢</div>
            <div className="text-2xl font-bold text-purple-600">-50%</div>
            <div className="text-gray-600">Tears Reduced</div>
          </div>
        </div>

        {/* Donors Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-6">
            <h3 className="text-2xl font-bold">🏆 The Noble Few</h3>
            <p className="mt-2 opacity-90">Quality over quantity - these legends actually donated!</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hero
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Donation
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {donors.map((donor, index) => (
                  <tr key={donor.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">{donor.emoji}</div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {donor.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            Legend #{index + 1}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {donor.amount} {donor.cryptocurrency}
                      </div>
                      <div className="text-sm text-gray-500">
                        {donor.cryptocurrency === 'BTC' && '🟠 Bitcoin'}
                        {donor.cryptocurrency === 'ETH' && '🔵 Ethereum'}
                        {donor.cryptocurrency === 'USDT' && '🟢 Tether'}
                        {donor.cryptocurrency === 'DOGE' && '🟡 Dogecoin'}
                        {donor.cryptocurrency === 'SHIB' && '🔴 Shiba Inu'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(donor.date).toLocaleDateString('en-US')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs">
                        {donor.message || "Silent but golden donation 🤫"}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Join the Hall of Fame */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-8 max-w-3xl mx-auto">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-yellow-800 mb-4">
              🌟 Want to Join This Elite Club?
            </h4>
            <p className="text-yellow-700 mb-6">
              Become a blockchain legend and earn your place in this exclusive table of awesomeness.
              Just remember our high-tech donation processing system...
            </p>

            {/* Email Instructions */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h5 className="font-bold text-gray-800 mb-3">📧 How to Get Listed:</h5>
              <ol className="text-left text-gray-700 space-y-2 max-w-md mx-auto">
                <li>1. Make your crypto donation</li>
                <li>2. Email <strong className="text-blue-600">itsdigitalbeggar@gmail.com</strong></li>
                <li>3. Include: Name, amount, crypto type, message</li>
                <li>4. Wait for manual processing (because I'm poor and automation costs money)</li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#donation-section"
                className="bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                 Donate Now
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('itsdigitalbeggar@gmail.com');
                  alert('Email copied! Ready to become legendary? 📧');
                }}
                className="bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Copy Email
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
