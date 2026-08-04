import React from 'react';
import { MODULES_DATA } from '../data/contentData';
import { motion } from 'motion/react';

export const ModulesCarousel: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#141414] relative border-y border-[#262626] overflow-hidden flex flex-col">
      <style>
        {`
          @keyframes infinite-scroll {
            from { transform: translate3d(0, 0, 0); }
            to { transform: translate3d(-100%, 0, 0); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 50s linear infinite;
            will-change: transform;
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
          }
          .pause-animation {
            animation-play-state: paused;
          }
        `}
      </style>
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E8A838]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD000]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Conheça as Rotas do Seu Mapa
            </h2>
            <p className="text-[#C2C2C2] text-sm sm:text-base mt-2 max-w-xl">
              Um ecossistema prático estruturado em etapas claras para te conduzir do zero à monetização real no digital.
            </p>
          </div>

        </motion.div>
      </div>

      {/* Horizontal Modules Slider Container - Full Width */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative group/carousel w-full z-10 flex overflow-hidden pb-12 pt-2 pl-4 sm:pl-6 lg:pl-8 xl:pl-[calc((100%-80rem)/2+2rem)]"
      >
        
        {/* First Set */}
        <div className="flex gap-6 pr-6 shrink-0 w-max animate-infinite-scroll group-hover/carousel:pause-animation group-active/carousel:pause-animation">
          {MODULES_DATA.map((module) => (
            <div
              key={module.id}
              className="flex-none w-[260px] sm:w-[340px] bg-[#0A0A0A] border border-[#262626] rounded-2xl overflow-hidden hover:border-[#E8A838]/60 transition-all duration-300 group flex flex-col justify-between shadow-xl"
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
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/20 group-hover:backdrop-blur-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
                
                {/* Number Badge (Centered) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-[#0A0A0A]/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold text-[#E8A838] border border-[#E8A838]/40 shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                    {module.number}
                  </span>
                </div>
              </div>

              {/* Module Info Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-start space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white leading-snug uppercase">
                    {module.title}
                  </h3>
                  <p className="text-xs text-[#C2C2C2] mt-2.5 leading-relaxed line-clamp-3">
                    {module.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Set (Duplicate) */}
        <div className="flex gap-6 pr-6 shrink-0 w-max animate-infinite-scroll group-hover/carousel:pause-animation group-active/carousel:pause-animation" aria-hidden="true">
          {MODULES_DATA.map((module) => (
            <div
              key={module.id}
              className="flex-none w-[260px] sm:w-[340px] bg-[#0A0A0A] border border-[#262626] rounded-2xl overflow-hidden hover:border-[#E8A838]/60 transition-all duration-300 group flex flex-col justify-between shadow-xl"
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
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/20 group-hover:backdrop-blur-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
                
                {/* Number Badge (Centered) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-[#0A0A0A]/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold text-[#E8A838] border border-[#E8A838]/40 shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                    {module.number}
                  </span>
                </div>
              </div>

              {/* Module Info Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-start space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white leading-snug uppercase">
                    {module.title}
                  </h3>
                  <p className="text-xs text-[#C2C2C2] mt-2.5 leading-relaxed line-clamp-3">
                    {module.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </motion.div>

    </section>
  );
};

