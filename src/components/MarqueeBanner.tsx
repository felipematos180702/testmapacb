import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const phrase = "O MAPA CB - O CAMINHO PARA VIVER DE INTERNET";
  // Repeat phrase multiple times for seamless infinite scrolling
  const repeatedText = Array(12).fill(phrase);

  return (
    <div className="relative w-full py-3 lg:py-4 bg-[#0A0A0A] border-y border-[#E8A838]/30 overflow-hidden z-30">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>

      <div className="animate-marquee-left flex items-center whitespace-nowrap overflow-hidden">
        {repeatedText.map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4">
            <span className="font-sans font-black text-sm sm:text-base tracking-[0.2em] text-[#E8A838] uppercase gold-gradient-text drop-shadow-[0_0_8px_rgba(232,168,56,0.3)]">
              {text}
            </span>
            <span className="text-[#E8A838] opacity-50 font-bold">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};


