import { ArrowRight, Menu, X, Globe, MapPin, Shield, Users } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [state, handleSubmit] = useForm("mdajeygv");
  const [selectedPhase] = useState('private');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white antialiased">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1c]/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-xl flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-2xl font-black tracking-tighter">CURATE</span>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm mb-6">
            <MapPin className="w-4 h-4 text-cyan-400" />
            On-Chain × Real World
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-6">
            Decentralized Data<br />
            Curation Network
          </h1>
          
          <p className="text-xl text-white/70 mb-8 max-w-lg">
            Where real-world exploration meets blockchain precision.
          </p>

          <button 
            onClick={() => scrollToSection('whitelist')} 
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-2xl font-bold text-lg flex items-center gap-3 hover:scale-105 transition-all"
          >
            Join the Network
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img 
              src="/file_000000007d8071fb9152d675c2ba6ac7.png" 
              alt="Curate Network" 
              className="w-full max-w-lg object-contain" 
            />
          </div>
        </div>
      </section>

      {/* Whitelist / Application Section */}
      <section id="whitelist" className="max-w-3xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="p-8 md:p-12 bg-white/[0.03] border border-white/10 rounded-3xl">
          {state.succeeded ? (
            <div className="text-center py-12">
              <h3 className="text-3xl font-bold mb-4">Application Received</h3>
              <p className="text-white/70">Welcome to the Curate Network.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="Allocation-Tier" value={selectedPhase} />
              
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="Email Address" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm" 
              />
              <ValidationError field="email" errors={state.errors} />
              
              <input 
                type="text" 
                name="walletAddress" 
                required 
                placeholder="EVM Wallet Address (0x...)" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm" 
              />
              
              <div className="flex space-x-3">
                <input 
                  type="number" 
                  name="investmentAmount" 
                  required 
                  placeholder="0.00" 
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm" 
                />
                <select 
                  name="currency" 
                  className="bg-white/10 px-4 rounded-2xl text-cyan-400 font-bold"
                >
                  <option value="ETH">ETH</option>
                  <option value="USDT">USDT</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                disabled={state.submitting} 
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-2xl font-bold text-lg hover:brightness-110 transition"
              >
                Apply for Early Access
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}