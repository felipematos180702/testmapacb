import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenCheckout();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-2 sm:py-3.5 border-b border-[#262626]/90 shadow-2xl'
          : 'bg-gradient-to-b from-[#0A0A0A]/95 via-[#0A0A0A]/80 to-transparent py-2.5 sm:py-5 backdrop-blur-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo Left */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#E8A838] to-[#9C7A5B] p-[1px] flex items-center justify-center shadow-lg shadow-[#E8A838]/10 group-hover:shadow-[#FFD000]/25 transition-all">
            <div className="w-full h-full bg-[#0A0A0A] rounded-[11px] flex items-center justify-center">
              <span className="font-bold text-[#E8A838] text-sm sm:text-lg tracking-wider">CB</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-xl text-white tracking-widest gold-gradient-text leading-tight">
              O MAPA CB
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#9C7A5B] tracking-widest uppercase font-medium -mt-0.5">
              por Carla Borges
            </span>
          </div>
        </a>

        {/* Right Floating Action Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-[#C2C2C2] bg-[#141414] px-3.5 py-1.5 rounded-full border border-[#262626]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Inscrições Abertas
          </span>

          <button
            onClick={scrollToOffer}
            className="btn-gold-glow px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-full font-bold text-[11px] sm:text-sm tracking-wide flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-lg group shrink-0"
          >
            <span>Garantir Meu Acesso</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#0A0A0A] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};

