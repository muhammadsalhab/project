import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  BookOpen,
  ChevronLeft,
} from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { getArticleBySlug, getLatestArticles } from '@/data/articles';
import { categoryMap } from '@/data/categories';
import { ArticleCard } from '@/components/ArticleCard';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useSeo({
    title: article
      ? `${article.title} | ClickEarn Academy`
      : 'مقال غير موجود | ClickEarn Academy',
    description: article?.excerpt,
  });

  if (!article) {
    return (
      <div className="pt-16 lg:pt-20">
        <div className="container-page flex flex-col items-center gap-4 py-32 text-center">
          <BookOpen size={56} className="text-dark-200" />
          <h1 className="text-3xl font-bold text-white">المقال غير موجود</h1>
          <p className="max-w-sm text-dark-100/70">
            قد يكون الرابط غير صحيح أو تم نقل المقال. يمكنك العودة لصفحة
            المقالات.
          </p>
          <Link to="/articles" className="btn-primary mt-2">
            <ArrowRight size={18} />
            العودة للمقالات
          </Link>
        </div>
      </div>
    );
  }

  const cat = categoryMap[article.category];
  const related = getLatestArticles(3).filter((a) => a.slug !== article.slug);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-300">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid bg-grid-pattern opacity-10" />
        <div className="container-page relative py-14 lg:py-20">
          <Link
            to="/articles"
            className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-cyber-400 transition-colors hover:text-cyber-300"
          >
            <ArrowRight size={16} />
            العودة للمقالات
          </Link>

          <div className="mx-auto max-w-3xl">
            {cat && (
              <Link
                to={`/articles?category=${cat.slug}`}
                className="mb-4 inline-flex items-center gap-2 rounded-lg border border-dark-300 bg-dark-500/50 px-3 py-1.5 text-xs font-semibold text-cyber-400 transition-colors hover:border-cyber-500/50"
              >
                <cat.icon size={14} />
                {cat.title}
              </Link>
            )}

            <h1 className="text-3xl font-bold leading-tight text-white lg:text-4xl xl:text-5xl">
              {article.title}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-dark-50/80">
              {article.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-dark-100/70">
              <span className="flex items-center gap-1.5">
                <User size={16} className="text-cyber-400" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={16} className="text-cyber-400" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={16} className="text-cyber-400" />
                {article.readTime} دقائق قراءة
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="container-page py-12 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-cyber-500/20 bg-cyber-500/5 p-6 lg:p-8">
            <h2 className="mb-4 text-2xl font-bold text-white">
              محتوى المقال قريباً
            </h2>
            <p className="leading-relaxed text-dark-50/80">
              هذا المقال ضمن مكتبة ClickEarn Academy وسيتم نشر محتواه الكامل
              قريباً. نحن نعمل على تجهيز محتوى تعليمي شامل وعملي يغطي جميع
              جوانب الموضوع. ابقَ على تواصل وعد قريباً لقراءة الدرس كاملاً.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyber-400">
              <BookOpen size={18} />
              في انتظار المحتوى الكامل...
            </div>
          </div>

          {/* Tags / category */}
          <div className="mt-8 flex items-center gap-3 border-t border-dark-300/50 pt-6">
            <span className="text-sm text-dark-100/60">التصنيف:</span>
            {cat && (
              <Link
                to={`/articles?category=${cat.slug}`}
                className="rounded-lg border border-dark-300 bg-dark-500/50 px-3 py-1.5 text-xs font-semibold text-dark-50 transition-colors hover:border-cyber-500/50 hover:text-cyber-400"
              >
                {cat.title}
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="container-page pb-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-white">
              <ChevronLeft size={24} className="text-cyber-400" />
              مقالات ذات صلة
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
