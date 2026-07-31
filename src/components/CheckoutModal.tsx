import React, { useState } from 'react';
import { Lock, ShieldCheck, CheckCircle2, Sparkles, CreditCard, ExternalLink, Settings, Zap } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [checkoutUrl, setCheckoutUrl] = useState<string>('');
  const [showSettings, setShowSettings] = useState(false);
  const [purchased, setPurchased] = useState(false);

  if (!isOpen) return null;

  const handleRedirect = () => {
    if (checkoutUrl.trim()) {
      window.open(checkoutUrl.startsWith('http') ? checkoutUrl : `https://${checkoutUrl}`, '_blank');
    } else {
      setPurchased(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#141414] border border-[#E8A838]/50 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0A0A0A] text-[#C2C2C2] hover:text-white flex items-center justify-center border border-[#262626]"
        >
          ✕
        </button>

        {!purchased ? (
          <>
            <div className="text-center space-y-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-[#E8A838]/10 text-[#FFD000] border border-[#E8A838]/30">
                <Lock className="w-3 h-3" /> AMBIENTE 100% SEGURO
              </span>
              <h3 className="font-serif-title text-2xl font-bold text-white">
                Inscrição para <span className="gold-gradient-text">O MAPA CB</span>
              </h3>
              <p className="text-xs text-[#C2C2C2]">
                Você está a um passo de desbloquear seu acesso à plataforma por Carla Borges.
              </p>
            </div>

            {/* Price Summary */}
            <div className="bg-[#0A0A0A] p-4 rounded-2xl border border-[#262626] space-y-3">
              <div className="flex items-center justify-between text-xs text-[#C2C2C2]">
                <span>Plano Completo MAPA CB + Bônus</span>
                <span className="text-white font-bold">12x R$ 20,48</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#9C7A5B] pt-2 border-t border-[#262626]">
                <span>Ou pagamento à vista</span>
                <span className="text-[#FFD000] font-bold">R$ 198,00</span>
              </div>
            </div>

            {/* Guarantees */}
            <div className="space-y-2 text-xs text-[#C2C2C2]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Acesso Imediato no seu E-mail após confirmação
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E8A838]" />
                7 Dias de Garantia Incondicional de Satisfação
              </div>
            </div>

            {/* Main Action Button */}
            <button
              onClick={handleRedirect}
              className="btn-gold-glow w-full py-4 rounded-xl font-heading font-extrabold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-xl"
            >
              <Zap className="w-4 h-4 text-[#0A0A0A] fill-[#0A0A0A]" />
              <span>{checkoutUrl.trim() ? 'IR PARA O CHECKOUT OFICIAL' : 'SIMULAR INSCRIÇÃO AGORA'}</span>
              <ExternalLink className="w-4 h-4 text-[#0A0A0A]" />
            </button>

            {/* Settings Option to set Hotmart/Kiwify link */}
            <div className="pt-2 text-center">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="text-[11px] text-[#9C7A5B] hover:text-[#E8A838] flex items-center justify-center gap-1 mx-auto transition-colors"
              >
                <Settings className="w-3 h-3" />
                {showSettings ? 'Ocultar Link de Checkout' : 'Configurar Link Real do Checkout (Hotmart, Kiwify, etc)'}
              </button>

              {showSettings && (
                <div className="mt-3 p-3 bg-[#0A0A0A] rounded-xl border border-[#262626] space-y-2">
                  <p className="text-[10px] text-[#9C7A5B] text-left">
                    Insira o link da sua página de pagamento (Kiwify, Hotmart, Eduzz, etc):
                  </p>
                  <input
                    type="url"
                    placeholder="https://pay.kiwify.com.br/..."
                    value={checkoutUrl}
                    onChange={(e) => setCheckoutUrl(e.target.value)}
                    className="w-full bg-[#141414] text-xs text-white px-3 py-2 rounded-lg border border-[#262626] focus:border-[#E8A838] outline-none"
                  />
                  {checkoutUrl && (
                    <p className="text-[10px] text-emerald-400 text-left">
                      ✓ Link configurado com sucesso! O botão redirecionará para esta URL.
                    </p>
                  )}
                </div>
              )}
            </div>
          </>
        ) : (
          /* Simulated Purchase Confirmation state */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto shadow-xl">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-white">
              Parabéns! Bem-vinda ao <span className="gold-gradient-text">MAPA CB</span>
            </h3>
            <p className="text-xs text-[#C2C2C2] max-w-xs mx-auto">
              Simulação de compra concluída! Em uma página ativa, a aluna receberia seu acesso imediato no e-mail cadastrado.
            </p>
            <button
              onClick={() => {
                setPurchased(false);
                onClose();
              }}
              className="btn-gold-glow px-6 py-2.5 rounded-full font-heading font-bold text-xs"
            >
              Voltar para a Página Principal
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
