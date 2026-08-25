import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Mail,
  Twitter,
  Youtube,
  Linkedin,
  Github,
  Send,
} from 'lucide-react';
import { Logo } from './Logo';

const footerLinks = {
  platform: [
    { to: '/', label: 'الرئيسية' },
    { to: '/articles', label: 'المقالات' },
    { to: '/about', label: 'من نحن' },
    { to: '/contact', label: 'اتصل بنا' },
  ],
  legal: [
    { to: '/privacy', label: 'سياسة الخصوصية' },
    { to: '/terms', label: 'شروط الاستخدام' },
  ],
  social: [
    { href: 'https://twitter.com', label: 'تويتر', icon: Twitter },
    { href: 'https://youtube.com', label: 'يوتيوب', icon: Youtube },
    { href: 'https://linkedin.com', label: 'لينكدإن', icon: Linkedin },
    { href: 'https://github.com', label: 'جيت هاب', icon: Github },
    { href: 'https://t.me', label: 'تيليجرام', icon: Send },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-dark-300 bg-dark-800/80 backdrop-blur">
      <div className="container-page py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-dark-100/80">
              منصة تعليمية متخصصة في الأمن السيبراني والتوعية الرقمية، نهدف
              إلى تمكين المبتدئين والطلاب من فهم عالم الأمن الرقمي بطريقة
              عملية ومنظمة.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {footerLinks.social.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-300 bg-dark-500/50 text-dark-100 transition-all duration-300 hover:border-cyber-500/50 hover:text-cyber-400 hover:shadow-glow-cyan"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              المنصة
            </h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-dark-100/80 transition-colors hover:text-cyber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              القانون
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-dark-100/80 transition-colors hover:text-cyber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              تواصل معنا
            </h3>
            <a
              href="mailto:contact@clickearn.academy"
              className="flex items-center gap-2 text-sm text-dark-100/80 transition-colors hover:text-cyber-400"
            >
              <Mail size={16} />
              contact@clickearn.academy
            </a>
            <div className="mt-5 rounded-xl border border-dark-300 bg-dark-500/40 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyber-400">
                <ShieldCheck size={18} />
                نحن ندعم الأمن الرقمي
              </div>
              <p className="mt-1.5 text-xs text-dark-100/70">
                جميع المحتويات لأغراض تعليمية وتعزيز الوعي الرقمي فقط.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-dark-300 pt-6 sm:flex-row">
          <p className="text-xs text-dark-100/60">
            © {new Date().getFullYear()} ClickEarn Academy — جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-dark-100/60">
            صُمّم بعناية لتعزيز الوعي الرقمي في الوطن العربي.
          </p>
        </div>
      </div>
    </footer>
  );
}
