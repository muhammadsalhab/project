import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { Article } from '@/data/articles';
import { categoryMap } from '@/data/categories';
import { ArticleCard } from './ArticleCard';

interface FeaturedArticleProps {
  article: Article;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  const cat = categoryMap[article.category];

  return (
    <Link
      to={`/articles/${article.slug}`}
      className="card card-hover group relative flex flex-col overflow-hidden md:flex-row"
    >
      <div className="relative h-56 overflow-hidden border-b border-dark-300 bg-dark-600 md:h-auto md:w-2/5 md:border-b-0 md:border-l">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${cat?.color ?? 'from-cyan-500 to-blue-500'} opacity-20`}
        />
        <div className="absolute inset-0 bg-grid bg-grid-pattern opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-dark-300/50 bg-dark-700/60 backdrop-blur transition-transform duration-500 group-hover:scale-110">
            {cat && (
              <cat.icon
                size={36}
                className="text-cyber-400 transition-transform duration-500 group-hover:rotate-6"
              />
            )}
          </div>
        </div>
        <span className="absolute right-4 top-4 rounded-lg border border-dark-300/60 bg-dark-700/80 px-3 py-1 text-xs font-semibold text-dark-50 backdrop-blur">
          {cat?.title}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-cyber-500/15 px-3 py-1 text-xs font-bold text-cyber-400">
          مقال مميز
        </span>
        <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-cyber-400 lg:text-3xl">
          {article.title}
        </h3>
        <p className="mb-5 flex-1 text-base leading-relaxed text-dark-100/80">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between border-t border-dark-300/50 pt-4">
          <div className="flex items-center gap-3 text-xs text-dark-100/60">
            <span>{article.author}</span>
            <span className="h-1 w-1 rounded-full bg-dark-200" />
            <span>{formatDate(article.date)}</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-cyber-400">
            اقرأ المقال
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

interface ArticleGridProps {
  articles: Article[];
  showAll?: boolean;
}

export function ArticleGrid({ articles: list, showAll }: ArticleGridProps) {
  const items = showAll ? list : list.slice(0, 6);
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
