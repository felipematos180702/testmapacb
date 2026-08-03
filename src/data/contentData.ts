import { ModuleData, TestimonialData, FaqItem } from '../types';

export const MODULES_DATA: ModuleData[] = [
  {
    id: 1,
    number: "MÓDULO 01",
    title: "O CÓDIGO DO PERFIL QUE CRESCE 🧲",
    summary: "Descubra o segredo para estruturar um perfil magnético e preparado para atrair seguidores qualificados e clientes.",
    lessonsCount: 5,
    duration: "1h 10min",
    tag: "Fundação",
    imageBg: "https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX"
  },
  {
    id: 2,
    number: "MÓDULO 02",
    title: "O MAPA PRA VIRALIZAR 🚀",
    summary: "Estratégias comprovadas para fazer seus vídeos alcançarem milhares de pessoas de forma orgânica e acelerada.",
    lessonsCount: 7,
    duration: "1h 45min",
    tag: "Alcance",
    imageBg: "https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX"
  },
  {
    id: 3,
    number: "MÓDULO 03",
    title: "a sala secreta 🔐",
    summary: "Acesso a estratégias ocultas e bastidores do que realmente funciona no mercado digital atual.",
    lessonsCount: 4,
    duration: "1h 00min",
    tag: "Exclusivo",
    imageBg: "https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX"
  },
  {
    id: 4,
    number: "MÓDULO 04",
    title: "O MOLHO PRA SE DESTACAR 🎥",
    summary: "Aprenda a ter aquele diferencial único no seu conteúdo que prende a atenção e destaca você da concorrência.",
    lessonsCount: 6,
    duration: "1h 30min",
    tag: "Diferenciação",
    imageBg: "https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX"
  },
  {
    id: 5,
    number: "MÓDULO 05",
    title: "COMO GANHAR DINHEIRO COM O TIKTOK 🤑",
    summary: "O passo a passo para monetizar o seu TikTok, seja com visualizações, parcerias ou vendendo produtos.",
    lessonsCount: 8,
    duration: "2h 00min",
    tag: "Monetização TikTok",
    imageBg: "https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX"
  },
  {
    id: 6,
    number: "MÓDULO 06",
    title: "COMO GANHAR DINHEIRO COM SHOPEE 💸🧡",
    summary: "Transforme a Shopee em uma máquina de vendas trabalhando como afiliada e lucrando sem estoque.",
    lessonsCount: 7,
    duration: "1h 40min",
    tag: "Afiliado Shopee",
    imageBg: "https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX"
  },
  {
    id: 7,
    number: "MÓDULO 07",
    title: "PRIMEIRAS VENDAS DO ZERO 📲🛍️",
    summary: "Passo a passo afiliado completo para você realizar as suas primeiras vendas, mesmo começando do absoluto zero.",
    lessonsCount: 9,
    duration: "2h 15min",
    tag: "Primeiras Vendas",
    imageBg: "https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX"
  },
  {
    id: 8,
    number: "MÓDULO 08",
    title: "FATURANDO SEM APARECER 🧡💸",
    summary: "Descubra como criar estruturas lucrativas e vender todos os dias sem precisar mostrar o seu rosto.",
    lessonsCount: 6,
    duration: "1h 20min",
    tag: "Bastidores",
    imageBg: "https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX"
  },
  {
    id: 9,
    number: "MÓDULO 09",
    title: "ROTA PRA FATURAR SEM SEGUIDORES",
    summary: "Como começar a fazer dinheiro no digital mesmo que você tenha um perfil pequeno ou esteja começando do zero.",
    lessonsCount: 5,
    duration: "1h 15min",
    tag: "Iniciantes",
    imageBg: "https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX"
  },
  {
    id: 10,
    number: "MÓDULO 10",
    title: "ROTA GARIMPO DIGITAL",
    summary: "As melhores ferramentas e técnicas para encontrar oportunidades escondidas e altamente lucrativas na internet.",
    lessonsCount: 6,
    duration: "1h 30min",
    tag: "Oportunidades",
    imageBg: "https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX"
  },
  {
    id: 11,
    number: "MÓDULO 11",
    title: "ROTA QUE ME FEZ FATURAR 100 MIL 💰",
    summary: "O exato mapa de ações, estratégias e funis que eu utilizei para ultrapassar os múltiplos 6 dígitos no digital.",
    lessonsCount: 8,
    duration: "2h 10min",
    tag: "Escala",
    imageBg: "https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX"
  },
  {
    id: 12,
    number: "MÓDULO 12",
    title: "ESTRUTURA DO SEU NEGÓCIO",
    summary: "Organize as bases do seu projeto para crescer de forma sustentável, profissional e com alta margem de lucro.",
    lessonsCount: 5,
    duration: "1h 10min",
    tag: "Estruturação",
    imageBg: "https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX"
  },
  {
    id: 13,
    number: "MODULO 13",
    title: "Como Receber Produtos, Fechar Parcerias e Ganhar com Plataformas",
    summary: "Aprenda a atrair marcas, fechar parcerias lucrativas e receber produtos em casa, além de monetizar com diversas plataformas.",
    lessonsCount: 7,
    duration: "1h 50min",
    tag: "Parcerias",
    imageBg: "https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX"
  },
  {
    id: 14,
    number: "MODULO 14",
    title: "FATURANDO COM YOUTUBE",
    summary: "O guia completo para criar um canal lucrativo e transformar visualizações no YouTube em uma fonte constante de renda.",
    lessonsCount: 6,
    duration: "1h 45min",
    tag: "YouTube",
    imageBg: "https://lh3.googleusercontent.com/d/1te25VUEcaBpRU6hN8_wLxtUCsxQMQ5vX"
  }
];

export const TESTIMONIALS_DATA: TestimonialData[] = [
  {
    id: 1,
    name: "Mariana Souza",
    handle: "@marisouza.digital",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    role: "Ex-CLT & Mentora",
    timeAgo: "Há 2 dias",
    message: "Gente, eu tô em choque! Apliquei o método do Módulo 3 de posicionamento e fechei minhas 3 primeiras clientes em 12 dias de MAPA CB. Já paguei o curso 5x!",
    earningsBadge: "R$ 2.450,00 no 1º mês",
    platform: "whatsapp"
  },
  {
    id: 2,
    name: "Camila Rodrigues",
    handle: "@camilarodrigues.oficial",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    role: "Mãe & Empreendedora Digital",
    timeAgo: "Ontem",
    message: "Eu achava que precisava ter 10 mil seguidores pra vender. A Carla me provou que com 400 seguidores focados eu já conseguia gerar renda de casa enquanto cuidava dos meus filhos.",
    earningsBadge: "R$ 3.800,00 da sala de casa",
    platform: "instagram"
  },
  {
    id: 3,
    name: "Beatriz Lima",
    handle: "@biastudiodesign",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    role: "Prestadora de Serviços",
    timeAgo: "Há 5 dias",
    message: "A clareza do MAPA CB é surreal. Sem enrolação teórica! A Carla te pega pela mão e mostra exatamente o que fazer no dia a dia. Melhor investimento da minha vida.",
    earningsBadge: "Primeira venda em 72h",
    platform: "whatsapp"
  },
  {
    id: 4,
    name: "Fernanda Duarte",
    handle: "@feduarte.mkt",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    role: "Criadora de Conteúdo",
    timeAgo: "Há 1 semana",
    message: "Eu já tinha feito 3 cursos antes e continuava travada sem saber minha rota. O MAPA CB me deu direção clara e hoje vivo 100% da internet com total liberdade!",
    earningsBadge: "Liberdade Geográfica conquistada",
    platform: "instagram"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    question: "Preciso ter experiência prévia no digital?",
    answer: "Não! O MAPA CB foi desenhado para te pegar do absoluto zero. Você vai aprender desde os conceitos fundamentais de posicionamento até a execução prática das rotas de renda, sem necessidade de conhecimentos técnicos avançados."
  },
  {
    id: 2,
    question: "Como recebo meu acesso ao MAPA CB?",
    answer: "O acesso é imediato! Assim que seu pagamento for confirmado, você receberá um e-mail com seus dados de login para a plataforma exclusiva de alunas, onde todos os módulos, materiais de apoio e suporte já estarão disponíveis."
  },
  {
    id: 3,
    question: "Tenho pouco tempo no dia, o curso serve para mim?",
    answer: "Com certeza. As aulas do MAPA CB são objetivas, direto ao ponto e sem enrolação teórica. Com apenas 30 a 45 minutos por dia você consegue assistir ao conteúdo e aplicar o passo a passo na sua rotina."
  },
  {
    id: 4,
    question: "Quais são as formas de pagamento?",
    answer: "Você pode pagar via Cartão de Crédito em até 12x, Pix (com liberação imediata) ou Boleto Bancário. O pagamento é 100% seguro e intermediado por plataforma criptografada."
  },
  {
    id: 5,
    question: "Por quanto tempo terei acesso ao treinamento?",
    answer: "Você terá 1 ano inteiro (12 meses) de acesso ilimitado a todas as aulas, atualizações futuras do método e suporte tira-dúvidas."
  },
  {
    id: 6,
    question: "E se eu não gostar ou achar que não é pra mim?",
    answer: "Você possui uma Garantia Incondicional de 7 Dias. Se dentro desse período você assistir às aulas e achar que o treinamento não é para você, basta solicitar o reembolso na plataforma e devolvemos 100% do seu dinheiro, sem burocracia e sem perguntas."
  }
];
