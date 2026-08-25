import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

export function NotFoundPage() {
  useSeo({
    title: 'صفحة غير موجودة | ClickEarn Academy',
    description: 'الصفحة التي تبحث عنها غير موجودة.',
  });

  return (
    <div className="pt-16 lg:pt-20">
      <div className="container-page flex flex-col items-center gap-6 py-32 text-center">
        <div className="relative">
          <div className="absolute inset-0 animate-pulse-slow rounded-full bg-cyber-500/20 blur-3xl" />
          <AlertCircle size={80} className="relative text-cyber-400" />
        </div>
        <h1 className="text-5xl font-bold text-white lg:text-6xl">404</h1>
        <h2 className="text-2xl font-bold text-white">الصفحة غير موجودة</h2>
        <p className="max-w-md text-dark-100/70">
          عذراً، الصفحة التي تبحث عنها قد تكون محذوفة أو الرابط غير صحيح.
        </p>
        <Link to="/" className="btn-primary mt-2">
          <Home size={18} />
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
