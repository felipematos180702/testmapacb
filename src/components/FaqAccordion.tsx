import React, { useState } from 'react';
import { FAQ_DATA } from '../data/contentData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1); // Default first open

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-28 bg-[#141414] relative border-t border-[#262626]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#E8A838] bg-[#0A0A0A] px-4 py-1.5 rounded-full border border-[#262626]">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Perguntas Frequentes
          </h2>
          <p className="text-[#C2C2C2] text-sm sm:text-base">
            Tire todas as suas dúvidas antes de dar o próximo passo para transformar sua realidade digital.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-[#0A0A0A] border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-[#E8A838]/60 shadow-lg shadow-[#E8A838]/5' : 'border-[#262626] hover:border-[#9C7A5B]'
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-white flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-[#E8A838]' : 'text-[#9C7A5B]'}`} />
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center shrink-0 text-[#E8A838] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#E8A838]/10' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#C2C2C2] leading-relaxed border-t border-[#262626]/50 animate-fade-in font-sans">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Support Direct Contact Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center p-6 bg-[#0A0A0A] rounded-2xl border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Ainda ficou com alguma dúvida?</p>
              <p className="text-xs text-[#9C7A5B]">Fale diretamente com nossa equipe de suporte no WhatsApp.</p>
            </div>
          </div>
          <a
            href="https://wa.me/?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20MAPA%20CB"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#141414] border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:text-white text-xs font-bold transition-all flex items-center gap-2"
          >
            Falar no WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
};

