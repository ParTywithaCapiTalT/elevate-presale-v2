import React, { useState } from 'react';
import { ArrowRight, Wallet, CheckCircle2, Shield, Layers, Star, Menu, X, ChevronRight } from 'lucide-react';

export default function App() {
  // Interactive State Engines
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [selectedPhase, setSelectedPhase] = useState('private');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Whitelist Form State
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Simulated Wallet Trigger
  const handleConnectWallet = () => {
    if (walletConnected) {
      setWalletConnected(false);
      setWalletAddress('');
    } else {
      setWalletConnected(true);
      setWalletAddress('0x71C...3A9f');
    }
  };

  // Form Submission Handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.address) {
      setFormSubmitted(true);
    }
  };

  // Smooth Scroll Trigger
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-white selection:bg-orange-500 selection:text-white antialiased">
      
      {/* HEADER NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#090d16]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">EP</span>
            <span className="text-lg font-bold tracking-tight text-white/90">ELEVATE</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/70">
            <button onClick={() => scrollToSection('phases')} className="hover:text-orange-400 transition">Presale Phases</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-orange-400 transition">Tokenomics</button>
            <button onClick={() => scrollToSection('whitelist')} className="hover:text-orange-400 transition">Join Whitelist</button>
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

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* MOBILE DROP DOWN */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090d16] pt-24 px-6 flex flex-col space-y-6 text-xl">
          <button onClick={() => scrollToSection('phases')} className="text-left py-2 border-b border-white/5 text-white/80">Presale Phases</button>
          <button onClick={() => scrollToSection('features')} className="text-left py-2 border-b border-white/5 text-white/80">Tokenomics</button>
          <button onClick={() => scrollToSection('whitelist')} className="text-left py-2 border-b border-white/5 text-white/80 text-orange-400 font-bold">Join Whitelist</button>
          <button 
            onClick={() => { handleConnectWallet(); setIsMenuOpen(false); }}
            className="w-full py-4 bg-orange-500 rounded-xl font-bold flex items-center justify-center space-x-2"
          >
            <Wallet className="w-5 h-5" />
            <span>{walletConnected ? walletAddress : 'Connect Wallet'}</span>
          </button>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-bold text-orange-400 mb-8 tracking-wide uppercase">
          🚀 Private Whitelist Live
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
          Build the <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Future</span> of Elevated Finance
        </h1>
        <p className="text-base md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
          Join the exclusive entry gateway for Elevate Protocols. Early backers secure maximum optimization rates, premium multi-vault access, and priority ecosystem allocations.
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
            onClick={() => scrollToSection('phases')}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-semibold rounded-xl transition duration-200 text-center"
          >
            View Allocation Tiers
          </button>
        </div>
      </section>

      {/* VALUE PROP FEATURE GRID */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <Shield className="w-6 h-6 text-orange-400" />, title: "Fully Audited & Secure", desc: "Enterprise-grade smart contracts rigorously inspected to guarantee institutional security thresholds." },
          { icon: <Layers className="w-6 h-6 text-orange-400" />, title: "Premium Index Vaults", desc: "Automated, hyper-efficient yield infrastructure routing capital to top decentralized liquidity pools." },
          { icon: <Star className="w-6 h-6 text-orange-400" />, title: "Guaranteed Whitelist", desc: "Early phase participants receive hard-capped token price entries prior to public DEX generation events." }
        ].map((feat, i) => (
          <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl transition hover:border-white/10">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4">{feat.icon}</div>
            <h3 className="text-lg font-bold mb-2">{feat.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </section>

      {/* INTERACTIVE PRESALE PHASES */}
      <section id="phases" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Token Sale Allocation Phases</h2>
          <p className="text-white/50 text-sm md:text-base">Select an ongoing phase allocation window to initiate initialization mapping.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 'private', name: 'Private Seed', price: '$0.015', status: 'Whitelisting', cap: '50 ETH' },
            { id: 'presale', name: 'Strategic Presale', price: '$0.025', status: 'Featured Tier', cap: '150 ETH' },
            { id: 'public', name: 'Public ITO', price: '$0.040', status: 'Public Window', cap: '300 ETH' }
          ].map((phase) => (
            <div 
              key={phase.id} 
              onClick={() => setSelectedPhase(phase.id)}
              className={`p-6 bg-white/[0.02] border rounded-2xl cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                selectedPhase === phase.id ? 'border-orange-500 ring-2 ring-orange-500/20 bg-orange-500/[0.01]' : 'border-white/5 hover:border-white/10'
              }`}
            >
              {phase.id === 'presale' && (
                <span className="absolute -top-3 right-4 px-2.5 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-md text-[10px] font-black tracking-wider uppercase shadow-md">FEATURED</span>
              )}
              <div>
                <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">{phase.status}</span>
                <h3 className="text-xl font-bold mt-1 mb-4">{phase.name}</h3>
                <div className="text-4xl font-black tracking-tight text-white mb-2">{phase.price}</div>
                <p className="text-xs text-white/40">Soft/Hard Cap Threshold: {phase.cap}</p>
              </div>
              <button 
                className={`mt-6 w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                  selectedPhase === phase.id ? 'bg-orange-500 text-white shadow-lg' : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {selectedPhase === phase.id ? 'Selected Allocation' : 'Select Phase'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FORM AND PORTAL INTERACTION */}
      <section id="whitelist" className="max-w-3xl mx-auto px-6 py-16 mb-20">
        <div className="p-8 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Apply for Priority Allocation</h2>
            <p className="text-sm text-white/50">Submit your parameters to verify contract whitelist routing status.</p>
          </div>

          {formSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-full flex items-center justify-center text-orange-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Application Successfully Queued!</h3>
              <p className="text-sm text-white/60 max-w-md">
                Your wallet configuration address has been mapped to the <span className="text-orange-400 font-bold uppercase">{selectedPhase}</span> contract state tier. Verification will deploy via email shortly.
              </p>
              <button onClick={() => setFormSubmitted(false)} className="text-xs font-medium text-white/40 hover:text-white/60 underline pt-4">Submit another request</button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Selected Allocation Window</label>
                <div className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold capitalize text-orange-400 flex items-center justify-between">
                  <span>{selectedPhase} Presale Tier</span>
                  <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/60">Auto-assigned</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Email Identity Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="investor@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 rounded-xl text-sm text-white placeholder-white/20 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Web3 Wallet Address (EVm Compatible)</label>
                <input 
                  type="text" 
                  required
                  placeholder="0x..."
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 rounded-xl text-sm text-white placeholder-white/20 outline-none transition"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-xl transition duration-200 shadow-md flex items-center justify-center space-x-2 mt-6"
              >
                <span>Submit Application to State Router</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-white/30 tracking-tight">
        &copy; {new Date().getFullYear()} Elevate Protocols. All ecosystem rights reserved. Smart contracts audited and deployed.
      </footer>

    </div>
  );
}
