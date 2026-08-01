import React, { useRef, useState } from 'react';
import { MODULES_DATA } from '../data/contentData';
import { ModuleData } from '../types';
import { ChevronLeft, ChevronRight, BookOpen, Play, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const ModulesCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#141414] relative border-y border-[#262626] overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E8A838]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD000]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#E8A838] bg-[#0A0A0A] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[#262626] mb-3">
              Conteúdo Programático Exclusivo
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Conheça as Rotas do Seu Mapa
            </h2>
            <p className="text-[#C2C2C2] text-sm sm:text-base mt-2 max-w-xl">
              Um ecossistema prático estruturado em etapas claras para te conduzir do zero à monetização real no digital.
            </p>
          </div>

          {/* Slider Navigation Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-[#262626] hover:border-[#E8A838] flex items-center justify-center text-white hover:text-[#E8A838] transition-all cursor-pointer shadow-lg"
              aria-label="Módulo anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-[#262626] hover:border-[#E8A838] flex items-center justify-center text-white hover:text-[#E8A838] transition-all cursor-pointer shadow-lg"
              aria-label="Próximo módulo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal Modules Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {MODULES_DATA.map((module) => (
            <div
              key={module.id}
              onClick={() => setSelectedModule(module)}
              className="snap-start flex-none w-[260px] sm:w-[340px] bg-[#0A0A0A] border border-[#262626] rounded-2xl overflow-hidden hover:border-[#E8A838]/60 transition-all duration-300 group cursor-pointer shadow-xl flex flex-col justify-between"
            >
              {/* Module Cover Image Container */}
              <div className="relative h-36 sm:h-44 w-full overflow-hidden bg-[#141414]">
                <img
                  src={module.imageBg}
                  alt={module.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.includes('lh3.googleusercontent.com')) {
                      target.src = 'https://drive.google.com/thumbnail?id=1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX&sz=w1000';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
                
                {/* Number Badge */}
                <span className="absolute top-3 left-3 bg-[#0A0A0A]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#E8A838] border border-[#E8A838]/30">
                  {module.number}
                </span>

                <div className="absolute bottom-3 right-3">
                  <div className="w-7 h-7 rounded-full bg-[#E8A838] flex items-center justify-center text-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Play className="w-3.5 h-3.5 fill-[#0A0A0A] ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Module Info Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E8A838] transition-colors leading-snug">
                    {module.title}
                  </h3>
                  <p className="text-xs text-[#C2C2C2] mt-2.5 leading-relaxed line-clamp-3">
                    {module.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-[#9C7A5B]">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#E8A838]" />
                    {module.lessonsCount} Aulas Direcionadas
                  </span>
                  <span className="text-[#E8A838] font-medium group-hover:underline flex items-center gap-1">
                    Ver detalhes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Module Detail Modal */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#141414] border border-[#E8A838]/40 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0A0A0A] text-[#C2C2C2] hover:text-white flex items-center justify-center border border-[#262626] cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#E8A838] bg-[#0A0A0A] px-3 py-1 rounded-full border border-[#262626]">
                {selectedModule.number}
              </span>
              <h3 className="text-2xl font-bold text-white pt-2">
                {selectedModule.title}
              </h3>
            </div>

            <p className="text-sm text-[#C2C2C2] leading-relaxed bg-[#0A0A0A] p-4 rounded-xl border border-[#262626]">
              {selectedModule.summary}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#E8A838] uppercase tracking-wider">O que você vai dominar:</h4>
              <ul className="space-y-2 text-xs text-[#C2C2C2]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8A838]" />
                  Aulas 100% práticas gravadas em alta definição
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8A838]" />
                  Materiais em PDF, checklists e gabaritos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8A838]" />
                  Planilha de apoio e modelos prontos
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                setSelectedModule(null);
                const offerElement = document.getElementById('oferta');
                if (offerElement) offerElement.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gold-glow w-full py-3.5 rounded-xl font-bold text-sm tracking-wide cursor-pointer"
            >
              Garantir Todos os Módulos no MAPA CB
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

