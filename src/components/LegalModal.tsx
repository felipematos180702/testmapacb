import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-3xl bg-[#141414] border border-[#262626] rounded-2xl shadow-2xl max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-[#262626]">
          <h2 className="text-xl font-bold text-white">
            {type === 'terms' ? 'Termos de Uso' : 'Políticas de Privacidade'}
          </h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#0A0A0A] border border-[#262626] flex items-center justify-center text-[#C2C2C2] hover:text-white hover:border-[#E8A838] transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto text-[#C2C2C2] text-sm leading-relaxed space-y-4">
          {type === 'terms' ? (
            <>
              <p>Estes Termos de Uso regem o acesso e a utilização dos conteúdos, serviços e produtos oferecidos pelo MAPA CB.</p>
              <h3 className="text-white font-bold mt-4">1. Aceitação dos Termos</h3>
              <p>Ao acessar e adquirir nossos produtos, você concorda com estes termos. Caso não concorde, recomendamos não utilizar os nossos serviços.</p>
              <h3 className="text-white font-bold mt-4">2. Uso do Conteúdo</h3>
              <p>Todo o conteúdo (aulas, textos, imagens e planilhas) é de propriedade exclusiva do MAPA CB, sendo estritamente proibida a reprodução, distribuição ou venda sem autorização prévia.</p>
              <h3 className="text-white font-bold mt-4">3. Acesso e Conta</h3>
              <p>O acesso ao produto é pessoal e intransferível. O compartilhamento de senhas pode acarretar o bloqueio definitivo do acesso, sem direito a reembolso.</p>
              <h3 className="text-white font-bold mt-4">4. Reembolso</h3>
              <p>Garantimos o reembolso integral em até 7 dias após a data da compra. Após esse período, não haverá devolução do valor investido.</p>
            </>
          ) : (
            <>
              <p>A sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações pessoais.</p>
              <h3 className="text-white font-bold mt-4">1. Coleta de Dados</h3>
              <p>Coletamos as informações fornecidas por você durante o cadastro e pagamento, como nome, e-mail e dados de cobrança. Também podemos coletar automaticamente dados de navegação via cookies.</p>
              <h3 className="text-white font-bold mt-4">2. Uso das Informações</h3>
              <p>Seus dados são utilizados para processar pagamentos, liberar acesso ao produto, fornecer suporte e enviar atualizações relevantes sobre o MAPA CB.</p>
              <h3 className="text-white font-bold mt-4">3. Proteção e Segurança</h3>
              <p>Adotamos medidas rigorosas para proteger suas informações. Todas as transações financeiras são processadas por plataformas seguras, que utilizam criptografia de ponta a ponta.</p>
              <h3 className="text-white font-bold mt-4">4. Compartilhamento</h3>
              <p>Não vendemos e não compartilhamos seus dados com terceiros, exceto quando necessário para processamento do pagamento ou exigência legal.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
