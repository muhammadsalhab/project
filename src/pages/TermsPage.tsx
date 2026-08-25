import { FileText, Scale } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

const sections = [
  {
    title: 'قبول الشروط',
    content:
      'باستخدامك لموقع ClickEarn Academy، فإنك توافق على الالتزام بشروط الاستخدام هذه. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام الموقع.',
  },
  {
    title: 'استخدام المحتوى',
    content:
      'جميع المحتويات المنشورة على الموقع مخصصة لأغراض تعليمية وتوعوية فقط. يُسمح بقراءة المحتوى والاستفادة منه للاستخدام الشخصي، لكن لا يُسمح بإعادة نشر المحتوى أو نسخه أو استخدامه تجارياً دون الحصول على إذن مسبق.',
  },
  {
    title: 'المسؤولية التعليمية',
    content:
      'المحتوى المتعلق باختبار الاختراق والأمن السيبراني مقدم لأغراض تعليمية وتعزيز الوعي الرقمي فقط. لا نتحمل أي مسؤولية عن الاستخدام الخاطئ للمعلومات أو تطبيقها على أنظمة أو مواقع لا تملك تصريحاً لاختبارها.',
  },
  {
    title: 'الاستخدام الأخلاقي',
    content:
      'نشجع المتعلّمين على الالتزام بالقوانين المحلية والدولية المتعلقة بالأمن السيبراني. أي استخدام للمعلومات المقدمة في أنشطة غير قانونية يُعد مسؤولية المستخدم وحده، ولا علاقة لمنصة ClickEarn Academy بذلك.',
  },
  {
    title: 'حدود المسؤولية',
    content:
      'نقدم المحتوى «كما هو» دون أي ضمانات صريحة أو ضمنية. لا نضمن أن المعلومات المقدمة خالية تماماً من الأخطاء أو أنها ستناسب احتياجاتك الخاصة. لا نتحمل مسؤولية أي أضرار قد تنتج عن استخدام الموقع أو الاعتماد على محتواه.',
  },
  {
    title: 'الملكية الفكرية',
    content:
      'جميع العلامات التجارية والشعارات والمحتويات المنشورة على الموقع مملوكة لـ ClickEarn Academy أو مرخصة لها، ولا يجوز استخدامها دون إذن مسبق.',
  },
  {
    title: 'الروابط الخارجية',
    content:
      'قد يحتوي الموقع على روابط لمواقع خارجية. لا نتحمل مسؤولية محتوى أو ممارسات هذه المواقع، وزيارتك لها تكون على مسؤوليتك الخاصة.',
  },
  {
    title: 'تعديل الشروط',
    content:
      'نحتفظ بالحق في تعديل شروط الاستخدام هذه في أي وقت. تسري التعديلات فور نشرها على هذه الصفحة. استمرارك في استخدام الموقع بعد التعديل يُعد قبولاً للشروط المعدّلة.',
  },
];

export function TermsPage() {
  useSeo({
    title: 'شروط الاستخدام | ClickEarn Academy',
    description:
      'شروط استخدام منصة ClickEarn Academy — القواعد والأحكام التي تحكم استخدامك للموقع ومحتواه التعليمي.',
  });

  return (
    <div className="pt-16 lg:pt-20">
      <section className="relative overflow-hidden border-b border-dark-300">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid bg-grid-pattern opacity-10" />
        <div className="container-page relative py-16 lg:py-20">
          <span className="section-label">
            <Scale size={16} />
            القانونية
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            شروط <span className="text-gradient">الاستخدام</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-dark-50/70">
            يرجى قراءة هذه الشروط بعناية قبل استخدام الموقع. استخدامك للموقع
            يعني موافقتك على هذه الشروط.
          </p>
          <p className="mt-4 text-sm text-dark-100/60">
            آخر تحديث: 22 أغسطس 2026
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((section, idx) => (
            <div
              key={section.title}
              className="card p-6 lg:p-8 animate-fade-in-up"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyber-500/15 text-sm font-bold text-cyber-400">
                  {idx + 1}
                </span>
                {section.title}
              </h2>
              <p className="leading-relaxed text-dark-50/80">
                {section.content}
              </p>
            </div>
          ))}

          <div className="rounded-2xl border border-warning-500/20 bg-warning-500/5 p-6">
            <div className="flex items-start gap-3">
              <FileText size={24} className="mt-0.5 shrink-0 text-warning-500" />
              <p className="text-sm leading-relaxed text-dark-50/80">
                <span className="font-bold text-white">تنبيه:</span> المحتوى
                التعليمي في هذا الموقع مخصص لتعزيز الوعي الرقمي والحماية فقط.
                الاستخدام غير القانوني للمعلومات يخضع للمساءلة القانونية.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
