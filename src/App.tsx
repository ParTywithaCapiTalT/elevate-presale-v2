;

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">EP</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:inline">Elevate Protocols</span>
          </div>

          <nav className="flex items-center gap-8">
            <a href="#presale" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Presale</a>
            <a href="#tokenomics" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Tokenomics</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm font-medium">About</a>
          </nav>

          <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50 text-sm">
            Join Whitelist
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-transparent to-transparent opacity-40" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent opacity-30 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent opacity-30 blur-3xl" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen px-6 sm:px-8 lg:px-12 py-12">
          <div className="space-y-8 flex flex-col justify-center">
            <div className="inline-block w-fit">
              <div className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-full">
                <p className="text-sm font-semibold text-orange-300">🚀 PRIVATE WHITELIST</p>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Build the
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Future
                </span>
              </h1>
            </div>

            <div className="space-y-3">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
                Join the exclusive whitelist for Elevate Protocols. Early investors. Greater rewards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: '🔒', label: 'Secure', desc: 'Smart contract audited' },
                { icon: '📈', label: 'Elevated', desc: 'Premium index vaults' },
                { icon: '✨', label: 'Exclusive', desc: 'Limited whitelist spots' },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm hover:border-white/20 transition-colors">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <p className="font-bold text-white text-sm mb-1">{feature.label}</p>
                  <p className="text-xs text-white/60">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50">
                Join Whitelist
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-96 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center">
              <div className="text-6xl">🏔️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Token Sale Phases</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">Three strategic phases to build the future of elevated finance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Private Seed', price: '$0.015', desc: 'Early access. Premium rates.' },
              { name: 'Private Presale', price: '$0.025', desc: 'Whitelist priority access.', featured: true },
              { name: 'Public ITO', price: '$0.040', desc: 'Public launch. Open to all.' },
            ].map((tier, idx) => (
              <div
                key={idx}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                  tier.featured
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border border-orange-500/30 shadow-lg shadow-orange-500/20 transform md:scale-105'
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                } backdrop-blur-xl p-8`}
              >
                {tier.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-xs font-bold text-white">
                    FEATURED
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-orange-400 mb-4">{tier.price}</div>
                <p className="text-sm text-white/60 mb-6">{tier.desc}</p>

                <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                  tier.featured
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-orange-500/50'
                    : 'bg-white/10 hover:bg-white/20 border border-white/20 text-white'
                }`}>
                  Select Phase
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-gradient-to-b from-slate-900 to-slate-950 py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Ready to Join?</h2>
          <p className="text-lg text-white/60">Apply to the whitelist and secure your spot in the Elevate Protocols presale.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50">
              Learn More
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm">
              About Elevate
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/50 py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center text-sm text-white/40">
          <p>© 2026 Elevate Protocols. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
