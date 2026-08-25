import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, BookOpen, Filter } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { articles } from '@/data/articles';
import { categories, categoryMap } from '@/data/categories';
import { ArticleGrid } from '@/components/FeaturedArticle';

export function ArticlesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') ?? 'all';
  const [query, setQuery] = useState('');

  useSeo({
    title: 'المقالات | ClickEarn Academy',
    description:
      'استكشف مقالات الأمن السيبراني في ClickEarn Academy — أساسيات الحماية، أمن الشبكات، أمن الويب، اختبار الاختراق، والتوعية الرقمية.',
  });

  useEffect(() => {
    setQuery('');
  }, [activeCategory]);

  const filtered = useMemo(() => {
    let list = articles;
    if (activeCategory !== 'all') {
      list = list.filter((a) => a.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q),
      );
    }
    return [...list].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }, [activeCategory, query]);

  const setCategory = (slug: string) => {
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-dark-300">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid bg-grid-pattern opacity-10" />
        <div className="container-page relative py-16 lg:py-20">
          <span className="section-label">
            <BookOpen size={16} />
            مكتبة المقالات
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            مقالات <span className="text-gradient">الأمن السيبراني</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-dark-50/70">
            استكشف مقالاتنا التعليمية في مختلف مجالات الأمن السيبراني، وابحث
            عن الموضوع الذي تريد تعلّمه.
          </p>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="container-page py-10">
        <div className="relative mb-6">
          <Search
            size={20}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-dark-100/60"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن مقال..."
            className="input-field pr-12"
            aria-label="بحث عن المقالات"
          />
        </div>

        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-dark-100/70">
          <Filter size={16} />
          التصنيفات
        </div>
        <div className="scrollbar-thin flex flex-wrap gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setCategory('all')}
            className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-cyber-gradient text-white shadow-glow-cyan'
                : 'border border-dark-300 bg-dark-500/50 text-dark-50/80 hover:border-cyber-500/50 hover:text-cyber-400'
            }`}
          >
            الكل
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setCategory(cat.slug)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.slug
                  ? 'bg-cyber-gradient text-white shadow-glow-cyan'
                  : 'border border-dark-300 bg-dark-500/50 text-dark-50/80 hover:border-cyber-500/50 hover:text-cyber-400'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="container-page pb-20">
        {filtered.length > 0 ? (
          <>
            <p className="mb-6 text-sm text-dark-100/60">
              عرض {filtered.length} مقال
              {activeCategory !== 'all' && categoryMap[activeCategory] && (
                <span> في «{categoryMap[activeCategory].title}»</span>
              )}
            </p>
            <ArticleGrid articles={filtered} showAll />
          </>
        ) : (
          <div className="card flex flex-col items-center gap-4 py-20 text-center">
            <Search size={48} className="text-dark-200" />
            <h3 className="text-xl font-bold text-white">
              لا توجد مقالات مطابقة
            </h3>
            <p className="max-w-sm text-dark-100/70">
              لم نعثر على مقالات تطابق بحثك. جرّب كلمات بحث أخرى أو تصفّح
              تصنيفاً مختلفاً.
            </p>
            <button
              onClick={() => {
                setQuery('');
                setCategory('all');
              }}
              className="btn-secondary mt-2"
            >
              إعادة ضبط البحث
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
