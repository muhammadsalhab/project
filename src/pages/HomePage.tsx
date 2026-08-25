import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  Lock,
  Users,
  TrendingUp,
  ShieldCheck,
  Terminal,
  Eye,
  Zap,
} from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { categories } from '@/data/categories';
import { getFeaturedArticles, getLatestArticles } from '@/data/articles';
import { FeaturedArticle, ArticleGrid } from '@/components/FeaturedArticle';

const stats = [
  { icon: BookOpen, value: '+50', label: 'مقال تعليمي' },
  { icon: Users, value: '+10K', label: 'متعلّم' },
  { icon: ShieldCheck, value: '6', label: 'مجالات تعليمية' },
  { icon: TrendingUp, value: '100%', label: 'محتوى مجاني' },
];

const features = [
  {
    icon: Terminal,
    title: 'محتوى تقني عملي',
    desc: 'دروس مبسّطة بأمثلة واقعية، تربط بين النظرية والتطبيق في عالم الأمن السيبراني.',
  },
  {
    icon: Eye,
    title: 'توعية رقمية شاملة',
    desc: 'نساعدك على حماية نفسك من التصيّد والاحتيال والهندسة الاجتماعية على الإنترنت.',
  },
  {
    icon: Lock,
    title: 'من الصفر للاحتراف',
    desc: 'مسار تعليمي تدريجي يناسب المبتدئين والطلاب حتى الوصول لمستوى متقدم.',
  },
  {
    icon: Zap,
    title: 'تحديث مستمر',
    desc: 'محتوى متجدد يواكب أحدث التهديدات والتقنيات في عالم الأمن السيبراني.',
  },
];

export function HomePage() {
  useSeo({
    title: 'ClickEarn Academy | تعلّم الأمن السيبراني بطريقة عملية',
    description:
      'منصة تعليمية متخصصة في الأمن السيبراني والتوعية الرقمية. تعلّم أساسيات الحماية، أمن الشبكات، أمن الويب، واختبار الاختراق الأخلاقي.',
  });

  const featured = getFeaturedArticles();
  const latest = getLatestArticles(6);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid bg-grid-pattern opacity-[0.15]" />
        <div className="absolute -top-24 right-1/4 h-72 w-72 animate-pulse-slow rounded-full bg-cyber-500/10 blur-[100px]" />
        <div className="absolute -top-16 left-1/4 h-64 w-64 animate-pulse-slow rounded-full bg-accent-500/10 blur-[100px] animation-delay-500" />

        <div className="container-page relative py-20 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="animate-fade-in section-label">
              <ShieldCheck size={16} />
              منصة تعليمية في الأمن السيبراني
            </span>

            <h1 className="animate-fade-in-up animation-delay-100 mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              تعلّم <span className="text-gradient">الأمن السيبراني</span>
              <br />
              بطريقة عملية ومنظمة
            </h1>

            <p className="animate-fade-in-up animation-delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-dark-50/80">
              منصة ClickEarn Academy تقدم لك مساراً تعليمياً متكاملاً في
              الأمن السيبراني والتوعية الرقمية — من أساسيات الحماية إلى
              اختبار الاختراق الأخلاقي، بمحتوى عربي واضح وعملي.
            </p>

            <div className="animate-fade-in-up animation-delay-300 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/articles" className="btn-primary w-full sm:w-auto">
                ابدأ التعلم
                <ArrowLeft size={20} />
              </Link>
              <Link to="/articles" className="btn-secondary w-full sm:w-auto">
                <BookOpen size={20} />
                استكشف المقالات
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up animation-delay-500 mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card flex flex-col items-center gap-2 p-5 text-center"
              >
                <stat.icon size={24} className="text-cyber-400" />
                <span className="text-2xl font-bold text-white lg:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs text-dark-100/70 lg:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains / Categories */}
      <section className="container-page py-20 lg:py-28">
        <div className="mb-12 text-center">
          <span className="section-label">
            <Terminal size={16} />
            مسارات التعلم
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
            مجالات <span className="text-gradient">التعلم</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-dark-50/70">
            ستة مجالات تعليمية تغطي أهم جوانب الأمن السيبراني — اختر المجال
            الذي يناسب اهتمامك وابدأ رحلتك.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <Link
              key={cat.slug}
              to={`/articles?category=${cat.slug}`}
              className="card card-hover group animate-fade-in-up p-6"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                <cat.icon size={28} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyber-400">
                {cat.title}
              </h3>
              <p className="text-sm leading-relaxed text-dark-100/70">
                {cat.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-cyber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                استكشف المجال
                <ArrowLeft
                  size={16}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container-page py-20 lg:py-24">
        <div className="mb-12 text-center">
          <span className="section-label">
            <Zap size={16} />
            لماذا ClickEarn؟
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
            تعلّم بطريقة <span className="text-gradient">مختلفة</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className="card card-hover group p-6 animate-fade-in-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyber-500/20 bg-cyber-500/10 transition-colors group-hover:bg-cyber-500/20">
                <f.icon size={24} className="text-cyber-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-dark-100/70">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      {featured.length > 0 && (
        <section className="container-page py-20 lg:py-24">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="section-label">
                <BookOpen size={16} />
                مقال مميز
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
                ابدأ من <span className="text-gradient">هنا</span>
              </h2>
            </div>
          </div>
          <FeaturedArticle article={featured[0]} />
        </section>
      )}

      {/* Latest Articles */}
      <section className="container-page py-20 lg:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="section-label">
              <TrendingUp size={16} />
              جديدنا
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
              أحدث <span className="text-gradient">المقالات</span>
            </h2>
          </div>
          <Link
            to="/articles"
            className="hidden items-center gap-1 text-sm font-semibold text-cyber-400 transition-colors hover:text-cyber-300 sm:flex"
          >
            عرض الكل
            <ArrowLeft size={16} />
          </Link>
        </div>

        <ArticleGrid articles={latest} />

        <div className="mt-8 text-center sm:hidden">
          <Link to="/articles" className="btn-secondary">
            عرض كل المقالات
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 lg:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-cyber-500/20 bg-dark-500/40 p-10 text-center lg:p-16">
          <div className="absolute inset-0 bg-grid bg-grid-pattern opacity-20" />
          <div className="absolute -top-20 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-cyber-500/15 blur-[80px]" />
          <div className="relative">
            <ShieldCheck size={40} className="mx-auto mb-4 text-cyber-400" />
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              ابدأ رحلتك في الأمن السيبراني اليوم
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-dark-50/70">
              انضم إلى آلاف المتعلّمين الذين يبنون مهاراتهم في حماية أنفسهم
              ومجتمعاتهم في العالم الرقمي.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/articles" className="btn-primary">
                تصفّح المقالات
                <ArrowLeft size={20} />
              </Link>
              <Link to="/about" className="btn-secondary">
                تعرّف علينا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
