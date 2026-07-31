import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star, Lock, Settings2, X } from 'lucide-react';
import { motion } from 'motion/react';
import carlaPortraitImg from '../assets/images/carla_borges_portrait_1784979484506.jpg';

interface HeroProps {
  onOpenCheckout: () => void;
}

const DRIVE_CUTOUT_URL = 'https://lh3.googleusercontent.com/d/1HDkJw69pDjO6vc-md5gDwGAppfGxPrQV';

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  const [customPhotoUrl] = useState<string>('');
  const [imgSrc, setImgSrc] = useState<string>(DRIVE_CUTOUT_URL);
  
  // Image Edit Mode State
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [transforms, setTransforms] = useState({
    mobile: { x: 0, y: -48, scale: 0.77, mb: 0 },
    desktop: { x: 0, y: 100, scale: 2.50, mb: -15 },
  });

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('hero-image-transforms-percent');
    if (saved) {
      try {
        setTransforms(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved transforms");
      }
    }
  }, []);

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

  const currentTransform = isDesktop ? transforms.desktop : transforms.mobile;

  const handleTransformChange = (key: 'x' | 'y' | 'scale' | 'mb', value: number) => {
    const newTransforms = {
      ...transforms,
      [isDesktop ? 'desktop' : 'mobile']: {
        ...currentTransform,
        [key]: value
      }
    };
    setTransforms(newTransforms);
    localStorage.setItem('hero-image-transforms-percent', JSON.stringify(newTransforms));
  };

  return (
    <section className="relative pt-20 pb-0 sm:pt-24 sm:pb-0 lg:pt-28 lg:pb-0 lg:min-h-[95vh] flex flex-col bg-[#0A0A0A]">
      {/* Edit Mode Toggle Button */}
      <button 
        onClick={() => setIsEditMode(!isEditMode)}
        className="absolute top-24 right-4 z-50 bg-[#141414] border border-[#262626] p-2 rounded-full text-[#C2C2C2] hover:text-white transition-colors shadow-lg"
        title="Editar Posição da Imagem"
      >
        <Settings2 className="w-5 h-5" />
      </button>

      {/* Control Panel */}
      {isEditMode && (
        <div className="fixed top-36 right-4 z-50 bg-[#141414]/95 backdrop-blur-md border border-[#262626] p-5 rounded-xl shadow-2xl w-64 text-sm text-[#C2C2C2]">
          <div className="flex items-center justify-between mb-4 border-b border-[#262626] pb-2">
            <h3 className="font-bold text-white text-base">Ajuste da Imagem</h3>
            <button onClick={() => setIsEditMode(false)} className="hover:text-white"><X className="w-4 h-4"/></button>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Modo Atual:</span>
              <span className={`px-2 py-0.5 rounded text-xs font-bold ${isDesktop ? 'bg-[#E8A838]/20 text-[#FFD000]' : 'bg-emerald-500/20 text-emerald-400'}`}>
                {isDesktop ? 'Desktop' : 'Mobile'}
              </span>
            </div>
            <p className="text-[10px] text-[#888] leading-tight">
              Os ajustes feitos aqui são salvos automaticamente para a versão {isDesktop ? 'Desktop' : 'Mobile'}. Redimensione a janela para editar a outra versão.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Zoom (Escala)</span>
                <span>{currentTransform.scale.toFixed(2)}x</span>
              </div>
              <input 
                type="range" min="0.5" max="2.5" step="0.01" 
                value={currentTransform.scale} 
                onChange={(e) => handleTransformChange('scale', parseFloat(e.target.value))}
                className="w-full accent-[#E8A838]"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Esquerda / Direita (X)</span>
                <span>{currentTransform.x}%</span>
              </div>
              <input 
                type="range" min="-100" max="100" step="1" 
                value={currentTransform.x} 
                onChange={(e) => handleTransformChange('x', parseInt(e.target.value))}
                className="w-full accent-[#E8A838]"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Cima / Baixo (Y)</span>
                <span>{currentTransform.y}%</span>
              </div>
              <input 
                type="range" min="-100" max="100" step="1" 
                value={currentTransform.y} 
                onChange={(e) => handleTransformChange('y', parseInt(e.target.value))}
                className="w-full accent-[#E8A838]"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Recuo Inferior (Cortar base invisível)</span>
                <span>{currentTransform.mb || 0}%</span>
              </div>
              <input 
                type="range" min="-100" max="100" step="1" 
                value={currentTransform.mb ?? currentTransform.y} 
                onChange={(e) => handleTransformChange('mb', parseInt(e.target.value))}
                className="w-full accent-[#E8A838]"
              />
            </div>
          </div>
          
          <button 
            onClick={() => {
              handleTransformChange('x', 0);
              handleTransformChange('y', 0);
              handleTransformChange('scale', 1);
              handleTransformChange('mb', 0);
            }}
            className="mt-4 w-full py-1.5 bg-[#262626] hover:bg-[#333] rounded text-white text-xs font-medium transition-colors"
          >
            Resetar Posição
          </button>
        </div>
      )}

      {/* Glow background ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[750px] lg:h-[750px] bg-[#E8A838]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-[#FFD000]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 flex-1">
          
          {/* Left Column: Copywriting */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:space-y-8 text-center lg:text-left relative z-20 pb-12 lg:pb-16 lg:pt-8"
          >
            
            {/* Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#141414] border border-[#E8A838]/30 text-[#E8A838] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD000]" />
                Método Validado
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#141414] border border-[#262626] text-[#C2C2C2]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9C7A5B]" />
                Sem Enrolação
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#141414] border border-[#262626] text-[#C2C2C2]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% Prático
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.12] tracking-tight"
            >
              O MAPA CB:{' '}
              <span className="gold-gradient-text block mt-2">
                O CAMINHO PARA VIVER DE INTERNET
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg lg:text-xl text-[#C2C2C2] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Um treinamento prático e direcionado para mulheres que querem sair da dúvida, dominar rotas reais de renda no digital e construir a própria liberdade.
            </motion.p>

            {/* Social Proof Micro-Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs lg:text-sm text-[#C2C2C2]"
            >
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 lg:h-9 lg:w-9 rounded-full ring-2 ring-[#E8A838]/40 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Aluna" referrerPolicy="no-referrer" />
                <img className="inline-block h-8 w-8 lg:h-9 lg:w-9 rounded-full ring-2 ring-[#E8A838]/40 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Aluna" referrerPolicy="no-referrer" />
                <img className="inline-block h-8 w-8 lg:h-9 lg:w-9 rounded-full ring-2 ring-[#E8A838]/40 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Aluna" referrerPolicy="no-referrer" />
                <img className="inline-block h-8 w-8 lg:h-9 lg:w-9 rounded-full ring-2 ring-[#E8A838]/40 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80" alt="Aluna" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center text-[#FFD000] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FFD000] text-[#FFD000]" />
                  ))}
                  <span className="font-bold text-white ml-1">4.9/5</span>
                </div>
                <span className="text-[#9C7A5B] font-medium">+5.000 alunas transformadas</span>
              </div>
            </motion.div>

            {/* CTA Button & Guarantees */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4 space-y-3"
            >
              <button
                onClick={scrollToOffer}
                className="btn-gold-glow w-full sm:w-auto px-8 py-4 lg:px-10 lg:py-4.5 rounded-2xl font-heading font-extrabold text-base sm:text-lg tracking-wide flex items-center justify-center gap-3 cursor-pointer group mx-auto lg:mx-0 shadow-2xl"
              >
                <span>QUERO O MEU MAPA CB AGORA</span>
                <ArrowRight className="w-5 h-5 text-[#0A0A0A] group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs lg:text-sm text-[#9C7A5B]">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#E8A838]" />
                  Acesso Imediato
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E8A838]" />
                  7 Dias de Garantia
                </span>
                <span>•</span>
                <span>Suporte Direto</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Producer Cutout Image (Fundo Transparente) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-end relative z-10 self-end mb-0 pt-8 lg:pt-0 overflow-visible h-full"
          >
            <div className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 flex items-end justify-center h-full">
              
              {/* Subtle Ambient Radial Glow behind cutout */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-gradient-to-t from-[#E8A838]/30 via-[#9C7A5B]/15 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

              {/* Cutout Image Element */}
              <div 
                className="relative z-10 w-full flex justify-center items-end leading-none"
                style={{
                  transform: `translate(${currentTransform.x}%, ${currentTransform.y}%) scale(${currentTransform.scale})`,
                  marginBottom: currentTransform.mb !== undefined ? `${currentTransform.mb}%` : (currentTransform.y < 0 ? `${currentTransform.y}%` : '0%'),
                  transition: isEditMode ? 'none' : 'all 0.3s ease-out',
                  transformOrigin: 'bottom center'
                }}
              >
                <img
                  src={activePhoto}
                  alt="Carla Borges - Criadora do MAPA CB"
                  className="block w-[145%] sm:w-[165%] lg:w-[195%] max-w-none max-h-[1000px] lg:max-h-[85vh] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(232,168,56,0.25)]"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    if (imgSrc === DRIVE_CUTOUT_URL) {
                      setImgSrc('https://drive.google.com/uc?export=view&id=1HDkJw69pDjO6vc-md5gDwGAppfGxPrQV');
                    } else if (imgSrc !== carlaPortraitImg) {
                      setImgSrc(carlaPortraitImg);
                    }
                  }}
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


