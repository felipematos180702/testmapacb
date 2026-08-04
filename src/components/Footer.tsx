import React, { useState } from 'react';
import { Instagram, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'terms' | 'privacy'>('terms');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (type: 'terms' | 'privacy', e: React.MouseEvent) => {
    e.preventDefault();
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#262626] pt-16 pb-12 text-[#C2C2C2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#262626]">
          
          {/* Logo & Slogan */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="font-serif-title font-extrabold text-xl text-white gold-gradient-text tracking-widest">
                O MAPA CB
              </span>
            </div>
            <p className="text-xs text-[#9C7A5B] max-w-sm">
              O caminho direcionado e prático para mulheres construírem a própria autonomia e viverem da internet.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://instagram.com/carlaborgess2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] border border-[#262626] hover:border-[#E8A838] text-xs text-white hover:text-[#E8A838] transition-all"
            >
              <Instagram className="w-4 h-4 text-[#E8A838]" />
              <span>@carlaborgess2</span>
            </a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#141414] border border-[#262626] hover:border-[#E8A838] flex items-center justify-center text-[#E8A838] transition-all cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom Legal & Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9C7A5B] text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} O MAPA CB - Carla Borges. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" onClick={(e) => openModal('terms', e)} className="hover:text-white transition-colors cursor-pointer">Termos de Uso</a>
            <span>•</span>
            <a href="#" onClick={(e) => openModal('privacy', e)} className="hover:text-white transition-colors cursor-pointer">Políticas de Privacidade</a>
          </div>
        </div>

      </div>

      <LegalModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type={modalType} 
      />
    </footer>
  );
};
