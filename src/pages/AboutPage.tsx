import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  BookOpen,
  Award,
  ArrowLeft,
} from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

const values = [
  {
    icon: ShieldCheck,
    title: 'الأمان أولاً',
    desc: 'نضع الأمان الرقمي في صميم كل ما نقدمه — من المحتوى إلى النصائح العملية.',
  },
  {
    icon: BookOpen,
    title: 'محتوى موثوق',
    desc: 'نراعي الدقة العلمية في كل درس ونحرص على تقديم المعلومة الصحيحة بأسلوب واضح.',
  },
  {
    icon: Users,
    title: 'للجميع',
    desc: 'نصمم محتوانا ليكون متاحاً للمبتدئين والمتقدمين على حد سواء.',
  },
  {
    icon: Award,
    title: 'جودة عالية',
    desc: 'نسعى لأن نكون مرجعاً عربياً موثوقاً في مجال الأمن السيبراني والتوعية الرقمية.',
  },
];

export function AboutPage() {
  useSeo({
    title: 'من نحن | ClickEarn Academy',
    description:
      'ClickEarn Academy منصة تعليمية متخصصة في الأمن السيبراني والتوعية الرقمية، نسعى لتمكين المبتدئين والطلاب من حماية أنفسهم رقمياً.',
  });

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-300">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid bg-grid-pattern opacity-10" />
        <div className="container-page relative py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">
              <Users size={16} />
              من نحن
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
              نُعزّز الوعي <span className="text-gradient">الرقمي</span> في
              الوطن العربي
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-dark-50/80">
              ClickEarn Academy هي منصة تعليمية متخصصة في الأمن السيبراني
              والتوعية الرقمية، وُلدت من إيمان عميق بأن المعرفة هي خط الدفاع
              الأول في عالمنا الرقمي المتسارع.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container-page py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card card-hover p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyber-500 to-accent-500 shadow-glow-cyan">
              <Target size={28} className="text-white" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white">رسالتنا</h2>
            <p className="leading-relaxed text-dark-50/80">
              تقديم محتوى تعليمي عربي عالي الجودة في مجال الأمن السيبراني،
              يجمع بين البساطة والعمق، ويُمكّن كل شخص — مهما كان مستواه — من
              فهم التهديدات الرقمية والحماية منها بطريقة عملية ومنظمة.
            </p>
          </div>

          <div className="card card-hover p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-cyber-500 shadow-glow-cyan">
              <Eye size={28} className="text-white" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white">رؤيتنا</h2>
            <p className="leading-relaxed text-dark-50/80">
              أن نكون المرجع العربي الأول في تعليم الأمن السيبراني والتوعية
              الرقمية، ونبني مجتمعاً واعياً قادراً على حماية بياناته وهويته
              في الفضاء الرقمي بثقة ووعي.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-20">
        <div className="mb-12 text-center">
          <span className="section-label">
            <Award size={16} />
            قيمنا
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
            ما الذي <span className="text-gradient">يقودنا</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, idx) => (
            <div
              key={v.title}
              className="card card-hover group p-6 animate-fade-in-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyber-500/20 bg-cyber-500/10 transition-colors group-hover:bg-cyber-500/20">
                <v.icon size={24} className="text-cyber-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{v.title}</h3>
              <p className="text-sm leading-relaxed text-dark-100/70">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-3xl border border-cyber-500/20 bg-dark-500/40 p-10 text-center lg:p-14">
          <div className="absolute inset-0 bg-grid bg-grid-pattern opacity-20" />
          <div className="absolute -top-20 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-cyber-500/15 blur-[80px]" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              جاهز لتبدأ رحلتك؟
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-dark-50/70">
              استكشف مقالاتنا التعليمية وابدأ التعلّم من اليوم.
            </p>
            <Link to="/articles" className="btn-primary mt-8">
              تصفّح المقالات
              <ArrowLeft size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
