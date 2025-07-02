import Navigation from '@/components/Navigation';
import { donors } from '@/data/donantes';

export default function DonorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            👑 Donors Hall of Fame
          </h1>
          <h2 className="text-2xl text-purple-600 mb-6">
            Heroes Without Capes (But With Wallets)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These brave blockchain warriors have decided to feed this digital beggar.
            Their names will be forever engraved in the blockchain of my heart.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold text-green-600">{donors.length}</div>
            <div className="text-gray-600">VIP Donors</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-2xl font-bold text-blue-600">∞</div>
            <div className="text-gray-600">Infinite Gratitude</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-2">😭</div>
            <div className="text-2xl font-bold text-purple-600">-99%</div>
            <div className="text-gray-600">Misery Reduced</div>
          </div>
        </div>

        {/* Donors Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
            <h3 className="text-2xl font-bold">🏆 The Chosen Ones of Crypto-Kingdom</h3>
            <p className="mt-2 opacity-90">I sold myself for 0.001 ETH and here are the buyers</p>
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
                            Position #{index + 1} in my heart
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
                        {donor.message || "Silent but powerful donation 🤫"}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold text-yellow-800 mb-2">
              🎭 Want to appear here?
            </h4>
            <p className="text-yellow-700 mb-4">
              Become a blockchain legend and earn a place in this prestigious table of desperation.
            </p>
            <a
              href="/"
              className="inline-block bg-yellow-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              Donate Now and Be Immortal 🏅
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
