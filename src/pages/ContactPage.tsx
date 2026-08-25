import { useState } from 'react';
import {
  Mail,
  Send,
  MessageSquare,
  User,
  CheckCircle2,
  MapPin,
  Clock,
} from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

export function ContactPage() {
  useSeo({
    title: 'اتصل بنا | ClickEarn Academy',
    description:
      'تواصل مع فريق ClickEarn Academy للاستفسارات والاقتراحات والأسئلة المتعلقة بالأمن السيبراني والتوعية الرقمية.',
  });

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'contact@clickearn.academy',
      desc: 'للاستفسارات والاقتراحات',
    },
    {
      icon: MessageSquare,
      title: 'وسائل التواصل',
      value: 'تواصل عبر روابطنا',
      desc: 'تابعنا على منصات التواصل الاجتماعي',
    },
    {
      icon: Clock,
      title: 'وقت الرد',
      value: 'خلال 48 ساعة',
      desc: 'نرد على رسائلك في أقرب وقت',
    },
    {
      icon: MapPin,
      title: 'النطاق',
      value: 'الوطن العربي',
      desc: 'محتوى عربي للمستخدم العربي',
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-300">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid bg-grid-pattern opacity-10" />
        <div className="container-page relative py-16 lg:py-20">
          <span className="section-label">
            <Mail size={16} />
            اتصل بنا
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            نحن هنا <span className="text-gradient">لمساعدتك</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-dark-50/70">
            هل لديك سؤال أو اقتراح أو استفسار؟ نحب أن نسمع منك. راسلنا وسنرد
            عليك في أقرب وقت ممكن.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="container-page py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, idx) => (
            <div
              key={info.title}
              className="card card-hover group p-6 animate-fade-in-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-cyber-500/20 bg-cyber-500/10 transition-colors group-hover:bg-cyber-500/20">
                <info.icon size={24} className="text-cyber-400" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-dark-100/70">
                {info.title}
              </h3>
              <p className="mb-1 font-bold text-white">{info.value}</p>
              <p className="text-xs text-dark-100/60">{info.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="container-page pb-20">
        <div className="mx-auto max-w-2xl">
          <div className="card p-8 lg:p-10">
            {submitted && (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-success-500/30 bg-success-500/10 p-4 text-success-400 animate-fade-in">
                <CheckCircle2 size={22} />
                <span className="font-semibold">
                  تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                </span>
              </div>
            )}

            <h2 className="mb-2 text-2xl font-bold text-white">أرسل رسالة</h2>
            <p className="mb-6 text-dark-100/70">
              املأ النموذج التالي وسنعاود التواصل معك.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-dark-50">
                    الاسم
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-dark-100/50"
                    />
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="اسمك الكامل"
                      className="input-field pr-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-dark-50">
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-dark-100/50"
                    />
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="example@email.com"
                      className="input-field pr-10"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-dark-50">
                  الموضوع
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  placeholder="موضوع الرسالة"
                  className="input-field"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-dark-50">
                  الرسالة
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="اكتب رسالتك هنا..."
                  className="input-field resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send size={18} />
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
