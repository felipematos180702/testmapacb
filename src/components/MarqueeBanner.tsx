import React, { useState, useEffect } from 'react';
import { Settings2, X } from 'lucide-react';

export const MarqueeBanner: React.FC = () => {
  const phrase = "O MAPA CB - O CAMINHO PARA VIVER DE INTERNET";
  // Repeat phrase multiple times for seamless infinite scrolling
  const repeatedText = Array(12).fill(phrase);
  
  // Edit Mode State
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [transforms, setTransforms] = useState({
    mobile: { x: 0, y: -294, scale: 1, mt: 0, mb: 0 },
    desktop: { x: 0, y: 3, scale: 1, mt: 0, mb: 0 },
  });

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('marquee-transforms-percent');
    if (saved) {
      try {
        setTransforms(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved marquee transforms");
      }
    }
  }, []);

  const currentTransform = isDesktop ? transforms.desktop : transforms.mobile;

  const handleTransformChange = (key: 'x' | 'y' | 'scale' | 'mt' | 'mb', value: number) => {
    const newTransforms = {
      ...transforms,
      [isDesktop ? 'desktop' : 'mobile']: {
        ...currentTransform,
        [key]: value
      }
    };
    setTransforms(newTransforms);
    localStorage.setItem('marquee-transforms-percent', JSON.stringify(newTransforms));
  };

  return (
    <div className="relative w-full z-20">
      {/* Edit Mode Toggle Button */}
      <button 
        onClick={() => setIsEditMode(!isEditMode)}
        className="absolute -top-12 right-4 z-50 bg-[#141414] border border-[#262626] p-2 rounded-full text-[#C2C2C2] hover:text-white transition-colors shadow-lg"
        title="Editar Posição do Carrossel"
      >
        <Settings2 className="w-5 h-5" />
      </button>

      {/* Control Panel */}
      {isEditMode && (
        <div className="fixed top-36 left-4 z-50 bg-[#141414]/95 backdrop-blur-md border border-[#262626] p-5 rounded-xl shadow-2xl w-64 text-sm text-[#C2C2C2]">
          <div className="flex items-center justify-between mb-4 border-b border-[#262626] pb-2">
            <h3 className="font-bold text-white text-base">Ajuste do Carrossel</h3>
            <button onClick={() => setIsEditMode(false)} className="hover:text-white"><X className="w-4 h-4"/></button>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Modo Atual:</span>
              <span className={`px-2 py-0.5 rounded text-xs font-bold ${isDesktop ? 'bg-[#E8A838]/20 text-[#FFD000]' : 'bg-emerald-500/20 text-emerald-400'}`}>
                {isDesktop ? 'Desktop' : 'Mobile'}
              </span>
            </div>
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
                <span>Espaço Superior (MT)</span>
                <span>{currentTransform.mt || 0}%</span>
              </div>
              <input 
                type="range" min="-100" max="100" step="1" 
                value={currentTransform.mt ?? 0} 
                onChange={(e) => handleTransformChange('mt', parseInt(e.target.value))}
                className="w-full accent-[#E8A838]"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Espaço Inferior (MB)</span>
                <span>{currentTransform.mb || 0}%</span>
              </div>
              <input 
                type="range" min="-100" max="100" step="1" 
                value={currentTransform.mb ?? 0} 
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
              handleTransformChange('mt', 0);
              handleTransformChange('mb', 0);
            }}
            className="mt-4 w-full py-1.5 bg-[#262626] hover:bg-[#333] rounded text-white text-xs font-medium transition-colors"
          >
            Resetar Posição
          </button>
        </div>
      )}

      <div 
        className="w-full py-4 bg-gradient-to-r from-[#141414] via-[#0A0A0A] to-[#141414] border-y border-[#E8A838]/30 shadow-xl"
        style={{
          transform: `translate(${currentTransform.x}%, ${currentTransform.y}%) scale(${currentTransform.scale})`,
          marginTop: currentTransform.mt !== undefined ? `${currentTransform.mt}%` : '0%',
          marginBottom: currentTransform.mb !== undefined ? `${currentTransform.mb}%` : '0%',
          transition: isEditMode ? 'none' : 'all 0.3s ease-out',
        }}
      >
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
    </div>
  );
};

