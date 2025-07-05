'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function AboutPage() {
  const shareUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const shareText = 'Check out Digital Beggar - A satirical take on how even the oldest professions evolve with technology! 😄';

  const shareOnWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Digital Beggar
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 border border-white/20">

            {/* Main Description */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-6">
                <span className="text-2xl">😄</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Satirical & Humorous Project
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Digital Beggar is a <strong>satirical and humorous page</strong> that reflects on how
                even the most basic and ancient activities - like begging - evolve and adapt to new
                technologies over time.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                It&apos;s also a playful way to <strong>mock the volatility and daily losses</strong> that
                people suffer in the crypto world - turning financial pain into comedy gold,
                one satoshi at a time.
              </p>
            </div>

            {/* Crypto Comedy */}
            <div className="mb-12 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-full mb-4">
                  <span className="text-xl">📉</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Crypto Comedy Central</h4>
                <p className="text-gray-700 mb-4">
                  From HODL to rekt, from &ldquo;diamond hands&rdquo; to &ldquo;buying the dip&rdquo; (again and again),
                  this project celebrates the beautiful chaos of cryptocurrency investing where
                  portfolios vanish faster than promises from DeFi protocols.
                </p>
                <p className="text-sm text-gray-600 italic">
                  &ldquo;Turning -99% into +100% laughs since 2024&rdquo;
                </p>
              </div>
            </div>

            {/* Evolution Concept */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                <span className="mr-3"></span>
                Evolution of Everything
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                From street corners to crowdfunding platforms, from hat-in-hand to professional
                websites with payment gateways - this project explores how technology transforms
                even humanity&apos;s oldest practices into modern, digital experiences.
              </p>
            </div>

            {/* Support Section */}
            <div className="mb-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mb-4">
                  <span className="text-xl">💝</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Support & Share</h4>
                <p className="text-gray-700 mb-4">
                  Donations are accepted to contribute to this and many more projects.
                  We also greatly value those who share the page!
                </p>
              </div>
            </div>

            {/* Social Sharing */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-6">Share This Project</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={shareOnWhatsApp}
                  className="flex items-center px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">📱</span>
                  WhatsApp
                </button>

                <button
                  onClick={shareOnTwitter}
                  className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">🐦</span>
                  Twitter
                </button>

                <button
                  onClick={shareOnFacebook}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">📘</span>
                  Facebook
                </button>

                <button
                  onClick={copyToClipboard}
                  className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">🔗</span>
                  Copy Link
                </button>
              </div>
            </div>

          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">←</span>
              Back to Home
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
