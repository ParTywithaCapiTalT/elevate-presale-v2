import React, { useState } from 'react';
import { ArrowRight, Wallet, CheckCircle2, Shield, Menu, X, ChevronRight, PieChart, Coins, TrendingUp, Milestone } from 'lucide-react';

export default function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [selectedPhase, setSelectedPhase] = useState('private');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleConnectWallet = () => {
    if (walletConnected) {
      setWalletConnected(false);
      setWalletAddress('');
    } else {
      setWalletConnected(true);
      setWalletAddress('0x71C...3A9f');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.address) {
      setFormSubmitted(true);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-white selection:bg-orange-500 selection:text-white antialiased">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070a12]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">EP</span>
            <span className="text-lg font-bold tracking-tight text-white/90">ELEVATE</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/70">
            <button onClick={() => scrollToSection('mechanics')} className="hover:text-orange-400 transition">How It Works</button>
            <button onClick={() => scrollToSection('phases')} className="hover:text-orange-400 transition">Presale Tiers</button>
            <button onClick={() => scrollToSection('tokenomics')} className="hover:text-orange-400 transition">Tokenomics</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-orange-400 transition">About Us</button>
            <button onClick={() => scrollToSection('whitelist')} className="hover:text-orange-400 transition text-orange-400 font-bold">Join Whitelist</button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleConnectWallet}
              className="flex items-center space-x-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-bold rounded-xl transition-all duration-200"
            >
              <Wallet className="w-4 h-4 text-orange-400" />
              <span>{walletConnected ? walletAddress : 'Connect Wallet'}</span>
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#070a12] pt-24 px-6 flex flex-col space-y-6 text-xl">
          <button onClick={() => scrollToSection('mechanics')} className="text-left py-2 border-b border-white/5 text-white/80">How It Works</button>
          <button onClick={() => scrollToSection('phases')} className="text-left py-2 border-b border-white/5 text-white/80">Presale Tiers</button>
          <button onClick={() => scrollToSection('tokenomics')} className="text-left py-2 border-b border-white/5 text-white/80">Tokenomics</button>
          <button onClick={() => scrollToSection('about')} className="text-left py-2 border-b border-white/5 text-white/80">About Us</button>
          <button onClick={() => scrollToSection('whitelist')} className="text-left py-2 border-b border-white/5 text-orange-400 font-bold">Join Whitelist</button>
          <button 
            onClick={() => { handleConnectWallet(); setIsMenuOpen(false); }}
            className="w-full py-4 bg-orange-500 rounded-xl font-bold flex items-center justify-center space-x-2"
          >
            <Wallet className="w-5 h-5" />
            <span>{walletConnected ? walletAddress : 'Connect Wallet'}</span>
          </button>
        </div>
      )}

      {/* HERO */}
      <section className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-bold text-orange-400 mb-8 tracking-wide uppercase">
          🚀 Private Whitelist Live
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
          Build the <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Future</span> of Elevated Finance
        </h1>
        <p className="text-base md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
          Join the premium entry gateway for Elevate Protocols. Early token holders secure high-efficiency cross-vault yields and governance voting rights.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <button 
            onClick={() => scrollToSection('whitelist')}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/20 flex items-center justify-center space-x-2 group"
          >
            <span>Secure Your Spot</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('mechanics')}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-semibold rounded-xl transition duration-200 text-center"
          >
            How It Works
          </button>
        </div>
      </section>

      {/* ECOSYSTEM MECHANICS */}
      <section id="mechanics" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Ecosystem Architecture</h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base">How Elevate Protocols routes utility, maximizes sustainable yield targets, and compounds stakeholder assets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white/[0.01] border border-white/5 rounded-2xl">
            <div className="w-12 h-12 bg-orange-500/10 text-orange-400 rounded-xl flex items-center justify-center mb-6 font-bold text-lg">1</div>
            <h3 className="text-xl font-bold mb-3">Multi-Vault Liquidity Routing</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Deposited assets are systematically deployed across automated index vaults. The core protocol aggregates top-tier decentralized pools to optimize native yields securely.
            </p>
          </div>
          <div className="p-8 bg-white/[0.01] border border-white/5 rounded-2xl">
            <div className="w-12 h-12 bg-orange-500/10 text-orange-400 rounded-xl flex items-center justify-center mb-6 font-bold text-lg">2</div>
            <h3 className="text-xl font-bold mb-3">Token Buyback & Deflation</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              A fixed percentage of performance fees earned by our institutional-grade vaults is designated to continuously market-buy tokens, inducing natural supply scarcity.
            </p>
          </div>
          <div className="p-8 bg-white/[0.01] border border-white/5 rounded-2xl">
            <div className="w-12 h-12 bg-orange-500/10 text-orange-400 rounded-xl flex items-center justify-center mb-6 font-bold text-lg">3</div>
            <h3 className="text-xl font-bold mb-3">Staking Rewards & Multipliers</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Ecosystem tokens can be locked in governance contracts to unlock premium tier modifiers, compounding base yields while securing cross-chain protocol voting weight.
            </p>
          </div>
        </div>
      </section>

      {/* PRESALE PHASES */}
      <section id="phases" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Allocation Funding Tiers</h2>
          <p className="text-white/50 text-sm md:text-base">Select your preferred presale window block to automatically lock your tier pricing index.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 'private', name: 'Private Seed Pool', price: '$0.015', status: 'Whitelisting Active', cap: '50 ETH Max', access: 'Whitelist Priority' },
            { id: 'presale', name: 'Strategic Presale', price: '$0.025', status: 'Upcoming Tier', cap: '150 ETH Max', access: 'Open Whitelist' },
            { id: 'public', name: 'Public ITO Window', price: '$0.040', status: 'Public Launch', cap: '300 ETH Max', access: 'Public Standard' }
          ].map((phase) => (
            <div 
              key={phase.id} 
              onClick={() => setSelectedPhase(phase.id)}
              className={`p-8 bg-white/[0.01] border rounded-2xl cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                selectedPhase === phase.id ? 'border-orange-500 ring-4 ring-orange-500/10 bg-orange-500/[0.02]' : 'border-white/5 hover:border-white/10'
              }`}
            >
              {phase.id === 'presale' && (
                <span className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-md text-[10px] font-black tracking-wider uppercase shadow-md">RECOMMENDED</span>
              )}
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">{phase.status}</span>
                <h3 className="text-2xl font-bold mt-2 mb-6">{phase.name}</h3>
                <div className="text-5xl font-black tracking-tight text-white mb-4">{phase.price}</div>
                <div className="space-y-2 pt-4 border-t border-white/5 text-sm text-white/60">
                  <div className="flex justify-between"><span>Allocation Cap:</span> <span className="text-white font-medium">{phase.cap}</span></div>
                  <div className="flex justify-between"><span>Entry Gate:</span> <span className="text-white font-medium">{phase.access}</span></div>
                </div>
              </div>
              <button 
                className={`mt-8 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  selectedPhase === phase.id ? 'bg-orange-500 text-white shadow-lg' : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {selectedPhase === phase.id ? 'Allocation Tier Selected' : 'Select Allocation'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Token Distribution Metrics</h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base">Transparent cryptographic breakdown outlining long-term supply lockups and allocation rules.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center"><Coins className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-base">Total Fixed Supply</h4>
                  <p className="text-xs text-white/40">Hard-capped genesis tokens</p>
                </div>
              </div>
              <span className="text-xl font-black text-white">100,000,000 ELEV</span>
            </div>

            <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center"><PieChart className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-base">Core Presale Allocation</h4>
                  <p className="text-xs text-white/40">Aggregated funding rounds</p>
                </div>
              </div>
              <span className="text-xl font-black text-white">35%</span>
            </div>

            <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center"><TrendingUp className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-base">Liquidity & Ecosystem Vaults</h4>
                  <p className="text-xs text-white/40">Locked inside smart routers</p>
                </div>
              </div>
              <span className="text-xl font-black text-white">45%</span>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 rounded-2xl space-y-6">
            <h3 className="text-xl font-bold border-b border-white/5 pb-4">Token Distribution Breakdown</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-white/70"><span>Ecosystem & Staking Rewards:</span> <span className="text-white font-bold">30%</span></div>
              <div className="flex justify-between text-white/70"><span>Strategic Liquidity Lockup:</span> <span className="text-white font-bold">15%</span></div>
              <div className="flex justify-between text-white/70"><span>Presale Contributors Pool:</span> <span className="text-white font-bold">35%</span></div>
              <div className="flex justify-between text-white/70"><span>Ecosystem Marketing & Growth:</span> <span className="text-white font-bold">10%</span></div>
              <div className="flex justify-between text-white/70"><span>Core Development Smart Vesting:</span> <span className="text-white font-bold">10%</span></div>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-start space-x-2 text-xs text-white/40 leading-relaxed">
              <Shield className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Core Development allocation parameters are automatically locked under multi-signature smart contract time locks to guarantee ecosystem health.</span>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED ABOUT US & MISSION SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-white/60 mb-4 tracking-wide uppercase">
              ✨ About Elevate Protocols
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Our Vision for Decentralized Wealth Optimization</h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
              Elevate Protocols was founded by an elite collective of smart-contract architects and quantitative analysts. We believe that professional yield generation shouldn't be restricted behind the closed doors of legacy financial institutions.
            </p>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Our mission is to build completely trustless, autonomous index infrastructure that enables global web3 participants to compound capital with high efficiency, industrial-grade security, and total structural transparency.
            </p>
          </div>

          {/* Strategic Roadmap Sub-Layout */}
          <div className="p-8 bg-white/[0.01] border border-white/5 rounded-3xl space-y-8">
            <h3 className="text-xl font-bold tracking-tight border-b border-white/5 pb-4 flex items-center space-x-2">
              <Milestone className="w-5 h-5 text-orange-400" />
              <span>Strategic Implementation Roadmap</span>
            </h3>

            <div className="space-y-6 relative border-l border-white/10 pl-6 ml-2">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3 h-3 bg-orange-500 rounded-full ring-4 ring-orange-500/20"></div>
                <h4 className="font-bold text-sm text-orange-400 uppercase tracking-wider">Phase 1: Token Genesis & Audit</h4>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">Deploy smart contract matrices across target chains and finalize complete security verification through leading independent audit teams.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3 h-3 bg-white/20 rounded-full"></div>
                <h4 className="font-bold text-sm text-white/80 uppercase tracking-wider">Phase 2: Decentralized Index Launch</h4>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">Open mainnet liquidity vaults for active deposits, enabling native automated cross-pool compounding and live yield optimization tracking.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-3 h-3 bg-white/20 rounded-full"></div>
                <h4 className="font-bold text-sm text-white/80 uppercase tracking-wider">Phase 3: Cross-Chain Yield Aggregation</h4>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">Integrate zero-knowledge messaging frameworks to seamlessly aggregate asset yields across secondary layer-2 execution networks smoothly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section id="whitelist" className="max-w-3xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="p-8 md:p-12 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold mb-2">Apply for Priority Allocation</h2>
            <p className="text-sm text-white/50">Submit parameters below to verify contract whitelist routing configurations.</p>
          </div>

          {formSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center text-orange-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Application Queued Successfully!</h3>
              <p className="text-sm text-white/60 max-w-md leading-relaxed">
                Your parameters are locked to the <span className="text-orange-400 font-bold uppercase">{selectedPhase}</span> pool contract architecture. Routing confirmation details will propagate via your input coordinates.
              </p>
              <button onClick={() => setFormSubmitted(false)} className="text-xs font-medium text-white/40 hover:text-white/60 underline pt-6">Submit new parameters</button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Target Presale Window Tier</label>
                <div className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold capitalize text-orange-400 flex items-center justify-between">
                  <span>{selectedPhase} Presale Allocation</span>
                  <span className="text-xs bg-white/5 px-2.5 py-1 rounded text-white/50">Auto-Assigned</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Email Routing Coordinates</label>
                <input 
                  type="email" 
                  required
                  placeholder="investor@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 rounded-xl text-sm text-white placeholder-white/20 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">EVM Web3 Network Address</label>
                <input 
                  type="text" 
                  required
                  placeholder="0x..."
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 rounded-xl text-sm text-white placeholder-white/20 outline-none transition"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-xl transition duration-200 shadow-lg shadow-orange-500/10 flex items-center justify-center space-x-2 mt-8"
              >
                <span>Process Presale Application</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 text-center text-xs text-white/30 tracking-tight">
        &copy; {new Date().getFullYear()} Elevate Protocols. All ecosystem rights reserved. Infrastructure components audited.
      </footer>

    </div>
  );
}
