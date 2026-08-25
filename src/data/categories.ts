import {
  ShieldCheck,
  KeyRound,
  Network,
  Globe,
  Lightbulb,
  Bug,
  type LucideIcon,
} from 'lucide-react';

export interface Category {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const categories: Category[] = [
  {
    slug: 'cybersecurity-basics',
    title: 'أساسيات الأمن السيبراني',
    description:
      'تعلّم المفاهيم الأساسية: أنواع التهديدات، مصطلحات الأمن، CIA Triad، وكيف تحمي نفسك في العالم الرقمي.',
    icon: ShieldCheck,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    slug: 'account-protection',
    title: 'حماية الحسابات',
    description:
      'كلمات المرور القوية، المصادقة الثنائية 2FA، إدارة الحسابات، والحماية من سرقة الهوية الرقمية.',
    icon: KeyRound,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    slug: 'network-security',
    title: 'أمن الشبكات',
    description:
      'فهم الجدار الناري، تشفير البيانات، بروتوكولات الأمان، VPN، وكيفية حماية الشبكات من الاختراق.',
    icon: Network,
    color: 'from-orange-500 to-amber-500',
  },
  {
    slug: 'web-security',
    title: 'أمن الويب',
    description:
      'ثغرات XSS و SQL Injection، حماية المواقع، HTTPS، وأفضل ممارسات أمان تطبيقات الويب.',
    icon: Globe,
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    slug: 'digital-awareness',
    title: 'التوعية الرقمية',
    description:
      'التصيّد الاحتيالي، الهندسة الاجتماعية، الخصوصية على وسائل التواصل، والأمان في الإنترنت.',
    icon: Lightbulb,
    color: 'from-rose-500 to-pink-500',
  },
  {
    slug: 'ethical-hacking',
    title: 'اختبار الاختراق الأخلاقي',
    description:
      'أساسيات الاختراق الأخلاقي، أدوات الفحص، منهجية Pentest، والفرق بين القراصنة والمختبرين الأخلاقيين.',
    icon: Bug,
    color: 'from-sky-500 to-indigo-500',
  },
];

export const categoryMap = Object.fromEntries(
  categories.map((c) => [c.slug, c]),
);
