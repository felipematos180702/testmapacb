import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VslSection } from './components/VslSection';
import { TargetAudience } from './components/TargetAudience';
import { ModulesCarousel } from './components/ModulesCarousel';
import { ProducerBio } from './components/ProducerBio';
import { SocialProof } from './components/SocialProof';
import { OfferSection } from './components/OfferSection';
import { FaqAccordion } from './components/FaqAccordion';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    window.location.href = "https://pay.kiwify.com.br/UCPczEQ?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnehNCBUP8DGjsn_RsaisVeQ4GNEIArsKqj_iaiuKVu8FeoVe4Ivv-MowuDSw_aem_1HxpkdP0BglnWuFfddA7pg&utm_id=97760_v0_s00_e0_tv3";
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#E8A838]/30 selection:text-[#FFD000] overflow-x-hidden font-sans">
      
      {/* HEADER FLUTUANTE QUE ACOMPANHA A ROLAGEM */}
      <Header onOpenCheckout={handleOpenCheckout} />

      {/* 1. HERO SECTION (Atenção) */}
      <Hero onOpenCheckout={handleOpenCheckout} />

      {/* VSL SECTION (Vídeo de Apresentação) */}
      <VslSection onOpenCheckout={handleOpenCheckout} />

      {/* 4. SEÇÃO "PRA QUEM É" (Interesse) */}
      <TargetAudience onOpenCheckout={handleOpenCheckout} />

      {/* 5. CARROSSEL INFINITO DE MÓDULOS (O que você vai aprender) */}
      <ModulesCarousel />

      {/* 6. SEÇÃO SOBRE A PRODUTORA (Autoridade & Desejo) */}
      <ProducerBio onOpenCheckout={handleOpenCheckout} />

      {/* 7. SEÇÃO DE PROVA SOCIAL (Prints de Depoimentos) */}
      <SocialProof onOpenCheckout={handleOpenCheckout} />

      {/* 8. SEÇÃO DE OFERTA / CHECKOUT (Ação) */}
      <OfferSection onOpenCheckout={handleOpenCheckout} />

      {/* 9. SEÇÃO FAQ (Sanfona Interativa) */}
      <FaqAccordion />

      {/* 10. RODAPÉ PERSONALIZADO */}
      <Footer />

      {/* INTERACTIVE CHECKOUT MODAL */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />

    </div>
  );
}
