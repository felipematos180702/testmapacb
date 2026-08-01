import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import carlaPortraitImg from '../assets/images/carla_borges_portrait_1784979484506.jpg';
import { MarqueeBanner } from './MarqueeBanner';

interface HeroProps {
  onOpenCheckout: () => void;
}

const DRIVE_CUTOUT_URL = 'https://lh3.googleusercontent.com/d/1MqQ-hsB9CyuUcGbvEOIbuTVq1jwWtLHe';

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  const [customPhotoUrl] = useState<string>('');
  const [imgSrc, setImgSrc] = useState<string>(DRIVE_CUTOUT_URL);

  const activePhoto = customPhotoUrl.trim() !== '' ? customPhotoUrl : imgSrc;

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
    <section className="relative pt-14 sm:pt-20 lg:pt-12 pb-0 flex flex-col bg-[#0A0A0A]">
      {/* Glow background ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[750px] lg:h-[750px] bg-[#E8A838]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-[#FFD000]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 lg:gap-8 items-end">
          
          {/* Producer Cutout Image: On mobile, order-1 (top below header). On desktop, lg:order-2 (right column) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="order-1 lg:order-2 lg:col-span-5 w-full flex flex-col items-center lg:items-end justify-end z-10 self-end mb-0 pt-2 lg:pt-0 h-auto"
          >
            <div className="w-full max-w-[340px] xs:max-w-sm sm:max-w-md lg:max-w-none mx-auto lg:mx-0 flex items-end justify-center lg:justify-end h-auto min-h-[290px] sm:min-h-[400px] lg:min-h-[500px] relative">
              
              {/* Subtle Ambient Radial Glow behind cutout */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] bg-gradient-to-t from-[#E8A838]/25 via-[#9C7A5B]/10 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

              {/* Cutout Image Element with smooth bottom fade mask on Mobile to conceal straight crop edge */}
              <div 
                className="relative z-20 w-full flex justify-center lg:justify-end items-end leading-none h-auto [mask-image:linear-gradient(to_bottom,black_68%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_68%,transparent_100%)] lg:[mask-image:none] lg:[-webkit-mask-image:none]"
              >
                <img
                  src={activePhoto}
                  alt="Carla Borges - Criadora do MAPA CB"
                  className="block align-bottom w-auto max-h-[340px] xs:max-h-[370px] sm:max-h-[420px] lg:max-h-none lg:w-[175%] lg:max-w-none lg:translate-x-64 h-auto object-bottom drop-shadow-[0_20px_40px_rgba(232,168,56,0.25)] mb-0 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    if (imgSrc === DRIVE_CUTOUT_URL) {
                      setImgSrc('https://drive.google.com/uc?export=view&id=1MqQ-hsB9CyuUcGbvEOIbuTVq1jwWtLHe');
                    } else if (imgSrc !== carlaPortraitImg) {
                      setImgSrc(carlaPortraitImg);
                    }
                  }}
                />
              </div>

            </div>
          </motion.div>

          {/* Copywriting Column: On mobile, order-2 (below photo with slight overlap -mt-10). On desktop, lg:order-1 (left column) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-start space-y-4 lg:space-y-8 text-left relative z-30 -mt-10 sm:-mt-14 lg:mt-2 pt-0 pb-4 lg:pb-8"
          >
            
            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.12] tracking-tight text-left"
            >
              O MAPA CB:{' '}
              <span className="gold-gradient-text block mt-1 sm:mt-2">
                O CAMINHO PARA VIVER DE INTERNET
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs sm:text-lg lg:text-xl text-[#C2C2C2] max-w-2xl mx-0 font-normal leading-relaxed mt-[2px] text-left"
            >
              Um treinamento prático e direcionado para mulheres que querem sair da dúvida, dominar rotas reais de renda no digital e construir a própria liberdade.
            </motion.p>

            {/* Social Proof Micro-Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-1 flex flex-wrap items-center justify-start gap-4 text-xs lg:text-sm text-[#C2C2C2]"
            >
              <div className="flex flex-col text-left">
                <div className="flex items-center text-[#FFD000] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FFD000] text-[#FFD000]" />
                  ))}
                  <span className="font-bold text-white ml-1 text-xs sm:text-sm">4.9/5</span>
                </div>
                <span className="text-[#9C7A5B] font-medium text-xs sm:text-sm">+5.000 alunas transformadas</span>
              </div>
            </motion.div>

            {/* CTA Button & Guarantees */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-2 sm:pt-4 space-y-2.5 sm:space-y-3"
            >
              <button
                onClick={scrollToOffer}
                className="btn-gold-glow w-full sm:w-auto px-5 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4.5 rounded-2xl font-heading font-extrabold text-xs sm:text-lg tracking-wide flex items-center justify-center gap-2 sm:gap-3 cursor-pointer group mx-0 shadow-2xl"
              >
                <span>QUERO O MEU MAPA CB AGORA</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A0A0A] group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-4 text-[10px] sm:text-xs lg:text-sm text-[#9C7A5B]">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E8A838]" />
                  Acesso Imediato
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E8A838]" />
                  7 Dias de Garantia
                </span>
                <span>•</span>
                <span>Suporte Direto</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* MarqueeBanner - rendered at the base of the hero section below CTA on mobile, and at the section base on desktop */}
      <div className="w-full relative z-30 pt-4 sm:pt-6 lg:pt-0 -mt-0 lg:-mt-4">
        <MarqueeBanner />
      </div>
    </section>
  );
};



