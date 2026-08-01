import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/contentData';
import { TestimonialData } from '../types';
import { CheckCircle2, MessageCircle, Instagram, Star, Sparkles, ZoomIn, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SocialProofProps {
  onOpenCheckout: () => void;
}

export const SocialProof: React.FC<SocialProofProps> = ({ onOpenCheckout }) => {
  const [activeTestimonial, setActiveTestimonial] = useState<TestimonialData | null>(null);

  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenCheckout();
    }
  };

  // Duplicate items to ensure smooth infinite loop
  const carouselItems = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section className="py-20 md:py-28 bg-[#141414] relative border-y border-[#262626] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#E8A838] bg-[#0A0A0A] px-4 py-1.5 rounded-full border border-[#262626]">
            Resultados Comprovados
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Mulheres que já estão construindo seu caminho
          </h2>
          <p className="text-[#C2C2C2] text-sm sm:text-base leading-relaxed">
            Veja depoimentos e mensagens reais de alunas que saíram da dúvida e conquistaram sua autonomia no digital com o MAPA CB.
          </p>
        </motion.div>

      </div>

      {/* Infinite Animated Carousel Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full overflow-hidden py-4"
      >
        {/* Left & Right Gradient Shadows for seamless transition */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#141414] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#141414] to-transparent z-20 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="animate-marquee-left flex items-center gap-6 w-max">
          {carouselItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => setActiveTestimonial(item)}
              className="w-[250px] sm:w-[350px] shrink-0 bg-[#0A0A0A] border border-[#262626] hover:border-[#E8A838]/70 rounded-2xl p-3.5 sm:p-5 relative group transition-all duration-300 cursor-pointer shadow-2xl flex flex-col justify-between space-y-3 sm:space-y-4"
            >
              {/* Card Header: User Info */}
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#262626]">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-xs sm:text-sm text-white">{item.name}</h3>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A838]" />
                  </div>
                </div>

                <span className="text-[10px] text-[#9C7A5B] bg-[#141414] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-[#262626]">
                  {item.timeAgo}
                </span>
              </div>

              {/* Message Body - Print Style */}
              <div className="bg-[#141414] p-3 sm:p-4 rounded-xl border border-[#262626] space-y-2 sm:space-y-3 relative overflow-hidden">
                <div className="flex items-center text-[#FFD000] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FFD000] text-[#FFD000]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#C2C2C2] leading-relaxed italic line-clamp-4">
                  "{item.message}"
                </p>

                {/* Print Screenshot Badge / Placeholder Notice */}
                {item.earningsBadge && (
                  <div className="pt-2 flex items-center justify-between border-t border-[#262626]/60">
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#E8A838] bg-[#0A0A0A] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-[#E8A838]/30">
                      <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FFD000]" />
                      {item.earningsBadge}
                    </span>
                  </div>
                )}
              </div>

              {/* Verified Badge Footer */}
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#9C7A5B] pt-1">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Aluna do MAPA CB
                </span>
              </div>

            </div>
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Bottom Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <button
            onClick={scrollToOffer}
            className="btn-gold-glow px-8 py-3.5 rounded-full font-bold text-sm tracking-wide inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Quero Fazer Parte Deste Grupo de Alunas</span>
            <ArrowRight className="w-4 h-4 text-[#0A0A0A]" />
          </button>
        </motion.div>
      </div>

      {/* Testimonial Print Lightbox Modal */}
      {activeTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="bg-[#141414] border border-[#E8A838]/40 rounded-3xl max-w-lg w-full p-6 relative shadow-2xl space-y-6">
            <button
              onClick={() => setActiveTestimonial(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0A0A0A] text-[#C2C2C2] hover:text-white flex items-center justify-center border border-[#262626] cursor-pointer"
            >
              ✕
            </button>

            <div>
              <h3 className="font-bold text-lg text-white">{activeTestimonial.name}</h3>
              <p className="text-xs text-[#E8A838]">{activeTestimonial.role}</p>
            </div>

            {/* Print Screenshot Container */}
            <div className="bg-[#0A0A0A] p-5 rounded-2xl border border-[#262626] space-y-4">
              <div className="flex items-center justify-between text-xs text-[#9C7A5B] pb-2 border-b border-[#262626]">
                <span>Depoimento enviado via {activeTestimonial.platform === 'whatsapp' ? 'WhatsApp' : 'Instagram Direct'}</span>
                <span>{activeTestimonial.timeAgo}</span>
              </div>
              <p className="text-sm text-white leading-relaxed font-sans">
                "{activeTestimonial.message}"
              </p>
              {activeTestimonial.earningsBadge && (
                <div className="p-3 bg-[#141414] rounded-xl border border-[#E8A838]/30 flex items-center justify-between">
                  <span className="text-xs text-[#C2C2C2]">Resultado Conquistado:</span>
                  <span className="text-xs font-bold text-[#FFD000]">{activeTestimonial.earningsBadge}</span>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setActiveTestimonial(null);
                scrollToOffer();
              }}
              className="btn-gold-glow w-full py-3.5 rounded-xl font-bold text-sm tracking-wide cursor-pointer"
            >
              QUERO CONSTRUIR MEUS RESULTADOS NO MAPA CB
            </button>
          </div>
        </div>
      )}

    </section>
  );
};


