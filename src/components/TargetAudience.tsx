import React from 'react';
import { Compass, Lightbulb, MapPin, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface TargetAudienceProps {
  onOpenCheckout: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onOpenCheckout }) => {
  const cards = [
    {
      id: 1,
      icon: Compass,
      title: "É iniciante no digital",
      description: "Quer criar uma fonte de renda no digital mas não sabe por onde começar.",
      tag: "Do Zero à Ação"
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Está cansada de teoria sem fim",
      description: "Já tentou outros cursos genéricos e ficou perdida com tanta teoria sem aplicação prática.",
      tag: "Sem Enrolação"
    },
    {
      id: 3,
      icon: MapPin,
      title: "Busca Liberdade Real",
      description: "Busca liberdade geográfica e financeira para trabalhar de onde quiser e gerir o próprio tempo.",
      tag: "Trabalhe de Casa"
    },
    {
      id: 4,
      icon: Heart,
      title: "Quer uma visão feminina",
      description: "Quer um passo a passo estruturado e pensado para a realidade, rotina e desafios da mulher atual.",
      tag: "Método Feminino"
    }
  ];

  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenCheckout();
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#E8A838] bg-[#141414] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[#262626]">
            Sintomas de Quem Precisa do Mapa
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white">
            O MAPA CB é para você que...
          </h2>
          <p className="text-[#C2C2C2] text-sm sm:text-base leading-relaxed">
            Se você se identifica com pelo menos uma destas situações, você encontrou o seu ponto de virada.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="card-dark-tactile p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative group cursor-pointer border border-[#262626] bg-[#141414] rounded-2xl hover:border-[#E8A838]/50 transition-all duration-300"
              >
                <div className="space-y-2 sm:space-y-3">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#E8A838] uppercase tracking-wider">
                    {card.tag}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-[#FFD000] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C2C2C2] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent line */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#262626] flex items-center justify-between text-[11px] sm:text-xs text-[#9C7A5B] group-hover:text-[#E8A838] transition-colors">
                  <span>Essa é a minha rota</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <button
            onClick={scrollToOffer}
            className="btn-gold-glow px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Sim, Me Identifiquei! Quero Entrar no MAPA CB</span>
            <ArrowRight className="w-4 h-4 text-[#0A0A0A]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

