import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/articles', label: 'المقالات' },
  { to: '/about', label: 'من نحن' },
  { to: '/contact', label: 'اتصل بنا' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-dark-300 bg-dark-700/90 backdrop-blur-lg shadow-card'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between lg:h-20">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-cyber-400'
                    : 'text-dark-50/80 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-cyber-gradient" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/articles" className="btn-primary !px-5 !py-2.5 text-sm">
            ابدأ التعلم
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-dark-300 bg-dark-500/50 text-dark-50 transition-colors hover:border-cyber-500/50 lg:hidden"
          aria-label="القائمة"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="animate-slide-down border-t border-dark-300 bg-dark-700/95 backdrop-blur-lg lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 font-semibold transition-colors ${
                    isActive
                      ? 'bg-cyber-500/10 text-cyber-400'
                      : 'text-dark-50/80 hover:bg-dark-400/50 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/articles" className="btn-primary mt-2 w-full">
              ابدأ التعلم
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
