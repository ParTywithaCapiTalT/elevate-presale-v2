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
          {/* BRAND LOGO INTEGRATION */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img 
              src="/1778910090793.png" 
              alt="Elevate Logo" 
              className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(249,115,22,0.2)]" 
            />
            <span className="text-xl font-black tracking-tight text-white/90">ELEVATE</span>
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

      {/* HERO SECTION WITH HERO GRAPHIC */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
        <div>
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-bold text-orange-400 mb-8 tracking-wide uppercase">
            🚀 Private Whitelist Live
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Build the <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Future</span> of Elevated Finance
          </h1>
          <p className="text-base md:text-lg text-white/60 mb-10 leading-relaxed">
            Join the premium entry gateway for Elevate Protocols. Early token holders secure high-efficiency cross-vault yields and governance voting rights.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => scrollToSection('whitelist')}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/20 flex items-center justify-center space-x-2 group"
            >
              <span>Secure Your Spot</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* HERO ART GRAPHIC INTEGRATION */}
        <div className="flex justify-center lg:justify-end">
          <img 
            src="/file_000000007d8071fb9152d675c2ba6ac7.png" 
            alt="Elevate Ecosystem Art" 
            className="w-full max-w-lg h-auto object-contain drop-shadow-[0_0_50px_rgba(249,115,22,0.15)] animate-pulse"
            style={{ animationDuration: '6s' }}
          />
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
            <p className="text-sm text-white/50 leading
