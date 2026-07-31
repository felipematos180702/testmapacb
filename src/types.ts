export interface ModuleData {
  id: number;
  number: string;
  title: string;
  summary: string;
  lessonsCount: number;
  duration: string;
  tag: string;
  imageBg: string;
}

export interface TestimonialData {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  role: string;
  timeAgo: string;
  message: string;
  earningsBadge?: string;
  platform: 'whatsapp' | 'instagram';
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
