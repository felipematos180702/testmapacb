import React from 'react';
import { Award, Users, Globe, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProducerBioProps {
  onOpenCheckout: () => void;
}

export const ProducerBio: React.FC<ProducerBioProps> = ({ onOpenCheckout }) => {
  const stats = [
    { label: "Alunas Impactadas", value: "+5.000", icon: Users },
    { label: "Anos no Digital", value: "8+ Anos", icon: Award },
    { label: "Países Alcançados", value: "12+", icon: Globe },
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Carla's Portrait Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E8A838]/30 via-[#9C7A5B]/20 to-[#FFD000]/30 rounded-3xl blur-xl"></div>

              <div className="relative bg-[#141414] border border-[#262626] rounded-3xl p-4 shadow-2xl">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-[#262626] relative">
                  <img
                    src="https://drive.google.com/thumbnail?id=1v109OnfhMGAJs2LJbP65nCamJ4cv8NVP&sz=w1000"
                    alt="Carla Borges"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent pointer-events-none"></div>

                  <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0A]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#E8A838]/30 text-left">
                    <p className="font-sans text-base font-bold text-[#E8A838]">Carla Borges</p>
                    <p className="text-xs text-[#C2C2C2]">Especialista em Estratégia Digital Feminina</p>
                  </div>
                </div>

                {/* Floating Stats Bar */}
                <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                  {stats.map((stat, idx) => {
                    const IconComp = stat.icon;
                    return (
                      <div key={idx} className="bg-[#0A0A0A] p-2.5 rounded-xl border border-[#262626]">
                        <IconComp className="w-4 h-4 text-[#E8A838] mx-auto mb-1" />
                        <p className="font-bold text-sm text-white">{stat.value}</p>
                        <p className="text-[10px] text-[#9C7A5B] leading-tight">{stat.label}</p>
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>
          </motion.div>

          {/* Right: Persuasive Bio Text */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            
            <div className="space-y-2">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#E8A838] bg-[#141414] px-4 py-1.5 rounded-full border border-[#262626]">
                Conheça a Sua Mentora
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Muito prazer, eu sou a <span className="gold-gradient-text">Carla Borges.</span>
              </h2>
            </div>

            <div className="space-y-4 text-[#C2C2C2] text-sm sm:text-base leading-relaxed">
              <p>
                Durante anos, eu acompanhei milhares de mulheres talentosas se sentindo completamente perdidas no digital. Elas viam dezenas de 'gurus' prometendo faturamentos milionários da noite para o dia, mas quando tentavam aplicar na prática, só encontravam frustração e excesso de informação.
              </p>
              <p>
                Eu decidi mudar essa história. Desenvolvi uma metodologia simples, direta e 100% aplicável para mulheres que não querem viver em função de algoritmo, mas desejam construir uma <strong className="text-white font-semibold">fonte de renda sólida e recorrente</strong>.
              </p>
              <p className="p-4 bg-[#141414] rounded-2xl border-l-4 border-[#E8A838] border-[#262626] italic text-white">
                "O MAPA CB não é mais um curso teórico de prateleira. É a rota prática e desenhada para você tomar posse da sua própria autonomia financeira."
              </p>
            </div>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-[#141414] p-3.5 rounded-xl border border-[#262626]">
                <HeartHandshake className="w-5 h-5 text-[#E8A838] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Linguagem Acessível</p>
                  <p className="text-[11px] text-[#C2C2C2]">Sem 'termos difíceis' em inglês ou enrolação sem nexo.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#141414] p-3.5 rounded-xl border border-[#262626]">
                <Sparkles className="w-5 h-5 text-[#FFD000] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">Acompanhamento Real</p>
                  <p className="text-[11px] text-[#C2C2C2]">Suporte dedicado para tirar cada uma das suas dúvidas.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToOffer}
                className="btn-gold-glow px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide inline-flex items-center gap-2 cursor-pointer"
              >
                <span>QUERO SER GUIADA PELA CARLA BORGES</span>
                <ArrowRight className="w-4 h-4 text-[#0A0A0A]" />
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

