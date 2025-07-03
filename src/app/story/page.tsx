import Navigation from '@/components/Navigation';

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 pt-32 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            📜 The Digital Beggar's Tragedy
          </h1>
          <h2 className="text-2xl text-red-600 mb-6">
            A Tale of Love, Loss, and Cryptocurrency
          </h2>
          <div className="text-6xl mb-6">😭</div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prepare for an emotional journey through the blockchain of my existence...
          </p>
        </div>

        {/* Timeline of Tragedy */}
        <div className="space-y-8">
          {/* Chapter 1 */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🏠</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Chapter 1: The Golden Days (2009-2017)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Once upon a time, in the glorious era of dial-up internet, I was just a junior developer
                  with dreams of grandeur and an impressive collection of cat memes. I had a stable job,
                  a bank account with more than $50, and most importantly: <strong>I heard about Bitcoin
                  when it was $1</strong> but thought it was a pyramid scheme.
                </p>
                <p className="text-gray-700 italic">
                  "Digital money? Ha! That will never work" - Me, being a genius in 2010
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-yellow-500">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🚀</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Chapter 2: The Crypto Awakening (2017-2020)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The year 2017 came like a FOMO tsunami. Bitcoin hit $20,000 and I, like every good average citizen,
                  decided it was the perfect time to enter the market. I sold my car, my PlayStation,
                  and even my Pokémon card collection to buy Bitcoin at $19,500.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Three months later, Bitcoin was at $6,000 and I was living on instant ramen and salty tears.
                  But that didn't stop me. No sir! I discovered altcoins. If Bitcoin had failed me, surely
                  "SafeMoonDogeElonCoin" would make me a millionaire.
                </p>
                <p className="text-gray-700 italic">
                  Spoiler alert: It didn't.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-500">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">💀</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Chapter 3: The Great Debacle of 2022 (The Cursed Year)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ah, 2022. The year that not only broke me financially but also shattered my crypto soul.
                  Terra Luna collapsed and took my savings with it. FTX went bankrupt and my money disappeared
                  faster than Sam Bankman-Fried from the Bahamas.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  But wait, there's more! I decided to try my luck with NFTs. I bought a pixelated monkey for 2 ETH
                  thinking I'd sell it for 10 ETH. Result: I now have a JPEG worth less than a McDonald's burger
                  and permanent emotional trauma.
                </p>
                <div className="bg-red-50 p-4 rounded-lg mt-4">
                  <p className="text-red-700 font-semibold">
                    🔥 Accumulated losses: 99.7% of my portfolio
                  </p>
                  <p className="text-red-600 text-sm mt-1">
                    (The remaining 0.3% are 12 satoshis I can't sell because fees are more expensive)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter 4 */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🎭</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Chapter 4: The Beggar's Renaissance (2023-Present)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After hitting rock bottom (and a bit lower), I had an epiphany while eating my tenth ramen pack
                  of the month: If I can't make money with crypto, at least I can beg with style!
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Thus this website was born, my masterpiece of desperation. A place where misery meets blockchain
                  innovation, where every donation is a ray of hope in my ocean of debt.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I'm now officially a "Certified Digital Beggar" (self-certified) and I accept donations
                  in all cryptocurrencies, because at the end of the day, diversification is key... even in begging.
                </p>
              </div>
            </div>
          </div>

          {/* Epilogue */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg shadow-lg p-8 border">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                🌅 Epilogue: The Future (Hopefully)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
                And here I am, dear visitor, sharing my story with you. Maybe you think I'm a lost cause,
                maybe you feel sorry for me, or maybe you just enjoy my existential misery.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
                But remember: every satoshi you donate not only feeds my body with something better than ramen,
                but also feeds my soul with the hope that someday, when Bitcoin reaches $1 million,
                my remaining 12 satoshis will make me a millionaire.
              </p>
              <div className="bg-white p-6 rounded-lg max-w-md mx-auto">
                <p className="text-2xl mb-2">🙏</p>
                <p className="font-bold text-gray-900">
                  "In the blockchain of life, we are all HODLers of our own mistakes"
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  - Digital Beggar, 2024
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-yellow-800 mb-4">
              Did my story move you? 😢
            </h4>
            <p className="text-yellow-700 mb-6">
              Be part of the happy ending to this crypto tragedy. Your donation could be the plot twist I need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                💰 Donate Now
              </a>
              <a
                href="/donors"
                className="bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                👑 See Other Heroes
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
