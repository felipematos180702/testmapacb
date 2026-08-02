import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShieldCheck, Lock, Sparkles, Clock, ArrowRight, Zap, CreditCard, Award } from 'lucide-react';
import mockupImg from '../assets/images/course_mapa_mockup_1784979501568.jpg';
import { motion } from 'motion/react';

interface OfferSectionProps {
  onOpenCheckout: () => void;
}

const CTA_IMAGE_URL = 'https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX';

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  const [ctaImgSrc, setCtaImgSrc] = useState(CTA_IMAGE_URL);

  // Countdown Timer state (e.g. 14 minutes 59 seconds)
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 14, seconds: 59 }; // Reset loop for urgency
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    "Comunidade Exclusiva de Alunas no Telegram / WhatsApp",
    "Suporte Direto para Dúvidas Durante Toda a Sua Jornada",
    "BÔNUS 1: Guia de Posicionamento Irresistível no Instagram",
    "BÔNUS 2: Planilha de Gestão Financeira para Empreendedoras",
    "BÔNUS 3: Scripts de Vendas Suaves para Direct & WhatsApp"
  ];

  return (
    <section id="oferta" className="py-20 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E8A838]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Offer Card Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-1 bg-gradient-to-b from-[#E8A838] via-[#9C7A5B]/40 to-[#262626] shadow-[0_0_50px_rgba(232,168,56,0.2)]"
        >
          
          <div className="bg-[#141414] rounded-[22px] p-4 sm:p-10 lg:p-12 space-y-6 sm:space-y-10">
            
            {/* Header / Title */}
            <div className="text-center space-y-3">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#E8A838]/10 text-[#FFD000] border border-[#E8A838]/30">
                <Sparkles className="w-3.5 h-3.5" />
                OFERTA DE LANÇAMENTO EXCLUSIVA
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Garanta Seu Acesso ao <span className="gold-gradient-text">MAPA CB</span>
              </h2>
              <p className="text-sm sm:text-base text-[#C2C2C2]">
                Tudo o que você precisa para dominar o digital e construir a sua liberdade.
              </p>
            </div>

            {/* Grid Layout: Features List & Price Box */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Left Column: What's Included */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-[#262626] pb-3">
                  <Award className="w-5 h-5 text-[#E8A838]" />
                  E você ainda terá acesso a:
                </h3>

                <ul className="space-y-3">
                  {features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#C2C2C2]">
                      <CheckCircle2 className="w-4 h-4 text-[#E8A838] shrink-0 mt-0.5" />
                      <span
                        className={item.includes('BÔNUS') ? 'text-white font-semibold' : ''}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Pricing Box & CTA */}
              <div className="lg:col-span-5 bg-[#0A0A0A] border border-[#E8A838]/40 rounded-2xl p-4 sm:p-8 text-center space-y-3 sm:space-y-6 shadow-2xl relative max-w-sm lg:max-w-none mx-auto w-full">
                
                {/* Micro Timer inside pricing card - Prominent & Elegant Style */}
                <div className="flex items-center justify-center gap-3 text-[11px] sm:text-xs font-bold text-[#FFD000] bg-[#1A1208] py-2 px-4 rounded-xl border border-[#E8A838] w-fit mx-auto mb-3 shadow-[0_0_20px_rgba(232,168,56,0.2)]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#FFD000] animate-spin" style={{ animationDuration: '6s' }} />
                    <span className="tracking-wider uppercase font-extrabold">OFERTA EXPIRA EM:</span>
                  </span>
                  <span className="font-mono font-black text-white bg-[#0A0A0A] px-2.5 py-1 rounded-md border border-[#E8A838]/40 shadow-inner text-xs sm:text-sm tracking-widest min-w-[56px] text-center">
                    {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <p className="text-[11px] sm:text-xs text-[#9C7A5B] line-through uppercase tracking-wider font-medium">
                    De R$ 997,00
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#C2C2C2] font-medium">Por apenas 12x de</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-lg sm:text-xl font-bold text-[#E8A838]">R$</span>
                    <span className="font-sans text-3xl sm:text-5xl font-extrabold text-white gold-gradient-text">
                      20,48
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#C2C2C2] pt-0.5 sm:pt-1">
                    ou <span className="text-white font-bold">R$ 198,00 à vista</span> no Pix ou Cartão
                  </p>
                </div>

                <button
                  onClick={onOpenCheckout}
                  className="btn-gold-glow w-full max-w-[280px] sm:max-w-[320px] mx-auto py-2 sm:py-2.5 px-4 rounded-xl font-bold text-[11px] sm:text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl group"
                >
                  <Zap className="w-3.5 h-3.5 text-[#0A0A0A] fill-[#0A0A0A]" />
                  <span>GARANTIR MINHA VAGA AGORA</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0A0A0A] group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-3 text-[11px] text-[#9C7A5B] pt-1 sm:pt-2">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" /> Checkout Seguro
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <CreditCard className="w-3.5 h-3.5 text-[#E8A838]" /> Acesso Imediato
                  </span>
                </div>

              </div>

            </div>

            {/* Guarantee Seal Box */}
            <div className="mt-4 sm:mt-8 pt-4 sm:pt-8 border-t border-[#262626] bg-[#0A0A0A] rounded-xl sm:rounded-2xl p-3.5 sm:p-8 flex flex-row items-center gap-3 sm:gap-6 text-left">
              <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#E8A838]/20 to-[#9C7A5B]/20 border border-[#E8A838]/40 flex items-center justify-center text-[#E8A838] shrink-0 shadow-lg">
                <ShieldCheck className="w-6 h-6 sm:w-10 sm:h-10 text-[#FFD000]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-lg font-bold text-white flex items-center gap-2">
                  Garantia Incondicional de 7 Dias — Risco Zero!
                </h4>
                <p className="text-[11px] sm:text-sm text-[#C2C2C2] leading-snug sm:leading-relaxed">
                  Experimente o MAPA CB por 7 dias inteiros. Assista aos módulos, acesse os materiais e teste a metodologia. Se por qualquer motivo você achar que não é para você, basta solicitar o reembolso e devolveremos 100% do seu investimento, sem burocracia.
                </p>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

