import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = {
    sm: { box: 'h-8 w-8', icon: 18, text: 'text-lg' },
    md: { box: 'h-10 w-10', icon: 22, text: 'text-xl' },
    lg: { box: 'h-14 w-14', icon: 30, text: 'text-3xl' },
  }[size];

  return (
    <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02]">
      <div
        className={`${dims.box} flex items-center justify-center rounded-xl bg-gradient-to-br from-cyber-500 to-accent-500 shadow-glow-cyan`}
      >
        <ShieldCheck size={dims.icon} className="text-white" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`${dims.text} font-display font-bold text-white`}>
          ClickEarn
        </span>
        <span className="text-xs font-semibold tracking-widest text-cyber-400">
          ACADEMY
        </span>
      </div>
    </Link>
  );
}
