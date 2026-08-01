import React from 'react';
import { Play, Sparkles, ArrowRight, Volume2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { MarqueeBanner } from './MarqueeBanner';

interface VslSectionProps {
  onOpenCheckout?: () => void;
}

export const VslSection: React.FC<VslSectionProps> = ({ onOpenCheckout }) => {
  const vimeoEmbedUrl = "https://player.vimeo.com/video/1214834722?loop=1&title=0&byline=0&portrait=0&badge=0&autopause=0";

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#0A0A0A] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8A838]/10 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag and Title */}
        <div className="text-center space-y-4 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#E8A838]/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#FFD000]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#E8A838] uppercase">
              Assista à Apresentação Exclusiva
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight max-w-3xl mx-auto"
          >
            Descubra Como Mudar de Vida no Digital com o <span className="bg-gradient-to-r from-[#FFD000] via-[#E8A838] to-[#9C7A5B] bg-clip-text text-transparent">MAPA CB</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[#C2C2C2] max-w-xl mx-auto flex items-center justify-center gap-2"
          >
            <Volume2 className="w-4 h-4 text-[#E8A838] shrink-0" />
            Ligue o som e assista até o final para entender o método passo a passo.
          </motion.p>
        </div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-[#E8A838]/30 via-[#262626] to-[#E8A838]/20 border border-[#E8A838]/40 shadow-[0_0_50px_rgba(232,168,56,0.15)]"
        >
          <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-[#0A0A0A] shadow-2xl">
            <iframe
              src={vimeoEmbedUrl}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Apresentação MAPA CB - Carla Borges"
            ></iframe>
          </div>
        </motion.div>

        {/* Call to Action Below Video */}
        {onOpenCheckout && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center flex flex-col items-center justify-center gap-4"
          >
            <button
              onClick={onOpenCheckout}
              className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-black uppercase tracking-wider text-black bg-gradient-to-r from-[#FFD000] via-[#E8A838] to-[#FFD000] bg-[length:200%_auto] rounded-2xl shadow-[0_10px_30px_rgba(232,168,56,0.4)] hover:shadow-[0_15px_40px_rgba(232,168,56,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span className="flex items-center gap-3">
                PEGUE SEU ACESSO AGORA
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-[#A3A3A3]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E8A838]" />
                Acesso Imediato
              </span>
              <span className="w-1 h-1 rounded-full bg-[#333]"></span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E8A838]" />
                7 Dias de Garantia
              </span>
            </div>
          </motion.div>
        )}

      </div>

      {/* Animated Marquee Banner below CTA */}
      <div className="w-full relative z-30 pt-10 sm:pt-12">
        <MarqueeBanner />
      </div>
    </section>
  );
};
