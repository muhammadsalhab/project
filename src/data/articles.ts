export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    slug: 'what-is-cybersecurity',
    title: 'ما هو الأمن السيبراني؟ دليل المبتدئين الشامل',
    excerpt:
      'تعرف على مفهوم الأمن السيبراني وأهميته في عصرنا الرقمي، والفرق بين الحماية والدفاع، وكيف تحمي بياناتك من التهديدات المتزايدة.',
    category: 'cybersecurity-basics',
    author: 'فريق ClickEarn',
    date: '2026-08-18',
    readTime: 7,
    featured: true,
  },
  {
    slug: 'cia-triad-explained',
    title: 'مثلث CIA في الأمن السيبراني: السرية والسلامة والتوافر',
    excerpt:
      'شرح مبسط للمبدأ الأساسي الذي يقوم عليه الأمن السيبراني: Confidentiality و Integrity و Availability، مع أمثلة عملية.',
    category: 'cybersecurity-basics',
    author: 'فريق ClickEarn',
    date: '2026-08-16',
    readTime: 6,
  },
  {
    slug: 'strong-password-guide',
    title: 'كيف تنشئ كلمة مرور قوية لا تُخترق',
    excerpt:
      'دليل عملي لإنشاء كلمات مرور قوية وإدارتها باستخدام مدير كلمات المرور، مع نصائح لتجنب الأخطاء الشائعة.',
    category: 'account-protection',
    author: 'فريق ClickEarn',
    date: '2026-08-15',
    readTime: 5,
    featured: true,
  },
  {
    slug: 'two-factor-authentication',
    title: 'المصادقة الثنائية 2FA: طبقة حماية إضافية لحساباتك',
    excerpt:
      'لماذا لا تكفي كلمة المرور وحدها؟ تعرف على المصادقة الثنائية وكيف تفعّلها على حساباتك المهمة خطوة بخطوة.',
    category: 'account-protection',
    author: 'فريق ClickEarn',
    date: '2026-08-13',
    readTime: 6,
  },
  {
    slug: 'firewall-basics',
    title: 'الجدار الناري: حارس بوابة شبكتك الأول',
    excerpt:
      'ما هو الجدار الناري وكيف يعمل؟ أنواعه وفرقه بين Hardware و Software، وكيف تختار الأنسب لحالتك.',
    category: 'network-security',
    author: 'فريق ClickEarn',
    date: '2026-08-11',
    readTime: 8,
  },
  {
    slug: 'vpn-explained',
    title: 'ما هو VPN وهل تحتاجه فعلاً؟',
    excerpt:
      'شرح تقنية الشبكة الافتراضية الخاصة VPN وكيف تحمي خصوصيتك على الإنترنت، مع معايير اختيار خدمة موثوقة.',
    category: 'network-security',
    author: 'فريق ClickEarn',
    date: '2026-08-09',
    readTime: 7,
  },
  {
    slug: 'xss-attack-guide',
    title: 'هجوم XSS: كيف تُسرق البيانات عبر متصفحك',
    excerpt:
      'فهم ثغرة Cross-Site Scripting وأنواعها، وكيف يستغلها المهاجمون، وأهم طرق الحماية منها في تطبيقات الويب.',
    category: 'web-security',
    author: 'فريق ClickEarn',
    date: '2026-08-07',
    readTime: 9,
    featured: true,
  },
  {
    slug: 'sql-injection-basics',
    title: 'حقن SQL: أخطر ثغرات الويب وأكثرها شيوعاً',
    excerpt:
      'دليل مبسّط لفهم هجوم SQL Injection وكيف يمكن لمخترق الوصول لقواعد البيانات، مع طرق الوقاية للمعماريين.',
    category: 'web-security',
    author: 'فريق ClickEarn',
    date: '2026-08-05',
    readTime: 8,
  },
  {
    slug: 'phishing-attacks',
    title: 'التصيّد الاحتيالي: كيف تكتشف رسائل الخداع الرقمي',
    excerpt:
      'تعلّم كيف تفرّق بين الرسائل الشرعية ومحاولات التصيّد، وأبرز علامات الاحتيال في البريد الإلكتروني والرسائل النصية.',
    category: 'digital-awareness',
    author: 'فريق ClickEarn',
    date: '2026-08-03',
    readTime: 6,
  },
  {
    slug: 'social-engineering',
    title: 'الهندسة الاجتماعية: عندما يكون الإنسان هو الثغرة',
    excerpt:
      'كيف يستغل المهاجمون نفسية الإنسان لاختراق حساباته؟ تعرف على أساليب الهندسة الاجتماعية وكيف تتصدى لها.',
    category: 'digital-awareness',
    author: 'فريق ClickEarn',
    date: '2026-08-01',
    readTime: 7,
  },
  {
    slug: 'ethical-hacking-intro',
    title: 'ما هو الاختراق الأخلاقي ومتى يكون قانونياً؟',
    excerpt:
      'الفرق بين القرصنة الضارة والاختراق الأخلاقي، أدوار المختبر الأخلاقي، وأهم الشهادات المهنية في هذا المجال.',
    category: 'ethical-hacking',
    author: 'فريق ClickEarn',
    date: '2026-07-29',
    readTime: 8,
    featured: true,
  },
  {
    slug: 'pentest-methodology',
    title: 'منهجية اختبار الاختراق: من الفحص إلى التقرير',
    excerpt:
      'تعرف على مراحل اختبار الاختراق الاحترافي: جمع المعلومات، المسح، الاستغلال، وكتابة التقرير الأمني.',
    category: 'ethical-hacking',
    author: 'فريق ClickEarn',
    date: '2026-07-27',
    readTime: 10,
  },
];

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getLatestArticles(limit = 6): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.category === categorySlug);
}
