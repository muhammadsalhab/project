import { Link } from 'react-router-dom';
import { Clock, ArrowLeft } from 'lucide-react';
import type { Article } from '@/data/articles';
import { categoryMap } from '@/data/categories';

function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const cat = categoryMap[article.category];

  return (
    <Link
      to={`/articles/${article.slug}`}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      <div className="relative h-44 overflow-hidden border-b border-dark-300 bg-dark-600">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${cat?.color ?? 'from-cyan-500 to-blue-500'} opacity-20`}
        />
        <div className="absolute inset-0 bg-grid bg-grid-pattern opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-dark-300/50 bg-dark-700/60 backdrop-blur transition-transform duration-500 group-hover:scale-110">
            {cat && (
              <cat.icon
                size={28}
                className="text-cyber-400 transition-transform duration-500 group-hover:rotate-6"
              />
            )}
          </div>
        </div>
        <span className="absolute right-3 top-3 rounded-lg border border-dark-300/60 bg-dark-700/80 px-3 py-1 text-xs font-semibold text-dark-50 backdrop-blur">
          {cat?.title}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-white transition-colors group-hover:text-cyber-400">
          {article.title}
        </h3>
        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-dark-100/80">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between border-t border-dark-300/50 pt-3 text-xs text-dark-100/60">
          <span>{formatDate(article.date)}</span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {article.readTime} دقائق
          </span>
        </div>

        <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-cyber-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
          اقرأ المقال
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
