import { ArrowRight, Menu, X } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

export default function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, handleSubmit] = useForm("mdajeygv");

  const [selectedPhase] = useState('private');

  // Removed unused handleConnectWallet function

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-white antialiased">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070a12]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src="/1778910090793.png" alt="Elevate Logo" className="w-9 h-9 object-contain" />
            <span className="text-xl font-black tracking-tight text-white/90">ELEVATE</span>
          </div>
          
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Build the <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Future</span> of Finance
          </h1>
          <button 
            onClick={() => scrollToSection('whitelist')} 
            className="px-8 py-4 bg-orange-500 rounded-xl font-bold flex items-center space-x-2 hover:bg-orange-600 transition-colors"
          >
            <span>Secure Your Spot</span> 
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img src="/file_000000007d8071fb9152d675c2ba6ac7.png" alt="Hero Art" className="w-full max-w-lg object-contain" />
        </div>
      </section>

      <section id="whitelist" className="max-w-3xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="p-8 md:p-12 bg-white/[0.03] border border-white/5 rounded-3xl">
          {state.succeeded ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold">Application Received!</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="Allocation-Tier" value={selectedPhase} />
              
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="Email Address" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm" 
              />
              <ValidationError field="email" errors={state.errors} />
              
              <input 
                type="text" 
                name="walletAddress" 
                required 
                placeholder="EVM Wallet Address (0x...)" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm" 
              />
              
              <div className="flex space-x-3">
                <input 
                  type="number" 
                  name="investmentAmount" 
                  required 
                  placeholder="0.00" 
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm" 
                />
                <select 
                  name="currency" 
                  className="bg-white/10 px-4 rounded-xl text-orange-400 font-bold"
                >
                  <option value="ETH">ETH</option>
                  <option value="USDT">USDT</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                disabled={state.submitting} 
                className="w-full py-4 bg-orange-500 rounded-xl font-bold hover:bg-orange-