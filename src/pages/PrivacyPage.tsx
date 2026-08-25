import { Shield, FileText } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

const sections = [
  {
    title: 'مقدمة',
    content:
      'توضح سياسة الخصوصية هذه كيف يقوم موقع ClickEarn Academy بجمع واستخدام وحماية بياناتك عند استخدامك لموقعنا. نحن نأخذ خصوصيتك على محمل الجد وملتزمون بحماية بياناتك الشخصية وفقاً لأفضل الممارسات.',
  },
  {
    title: 'البيانات التي نجمعها',
    content:
      'لا نقوم بجمع بيانات شخصية حساسة من زوار الموقع. قد نجمع بيانات غير شخصية مثل نوع المتصفح، نظام التشغيل، الصفحات التي تزورها، ووقت الزيارة، وذلك لأغراض تحسين تجربة الاستخدام و إحصائيات الموقع فقط.',
  },
  {
    title: 'استخدام البيانات',
    content:
      'نستخدم البيانات التي نجمعها لأغراض تشمل: تحسين محتوى الموقع وتجربة المستخدم، تحليل أداء الموقع، تطوير مقالات ومحتوى جديد يناسب اهتمامات الزوار، وضمان أمان الموقع وحمايته من التهديدات.',
  },
  {
    title: 'ملفات تعريف الارتباط (Cookies)',
    content:
      'قد يستخدم موقعنا ملفات تعريف ارتباط (Cookies) لتحسين تجربة التصفح. هذه الملفات لا تجمع معلومات شخصية حساسة، ويمكنك تعطيلها من إعدادات متصفحك دون التأثير على قدرتك على تصفح الموقع.',
  },
  {
    title: 'حماية البيانات',
    content:
      'نطبق إجراءات أمنية مناسبة لحماية بياناتك من الوصول غير المصرّح به أو التعديل أو الإفصاح. نظراً لطبيعة موقعنا التعليمي في مجال الأمن السيبراني، فإننا نولي حماية البيانات أهمية قصوى.',
  },
  {
    title: 'الروابط الخارجية',
    content:
      'قد يحتوي موقعنا على روابط لمواقع خارجية. نحن غير مسؤولين عن ممارسات الخصوصية لهذه المواقع، وننصحك بقراءة سياسات الخصوصية الخاصة بأي موقع تزوره عبر روابطنا.',
  },
  {
    title: 'حقوقك',
    content:
      'لك الحق في الوصول إلى بياناتك أو طلب تعديلها أو حذفها. إذا كنت ترغب في ممارسة أي من هذه الحقوق، يمكنك التواصل معنا عبر صفحة اتصل بنا.',
  },
  {
    title: 'التعديلات على السياسة',
    content:
      'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سننشر أي تغييرات على هذه الصفحة مع تحديث تاريخ آخر مراجعة. ننصحك بمراجعة هذه الصفحة دورياً للاطلاع على أي تحديثات.',
  },
];

export function PrivacyPage() {
  useSeo({
    title: 'سياسة الخصوصية | ClickEarn Academy',
    description:
      'سياسة الخصوصية الخاصة بموقع ClickEarn Academy — كيف نجمع ونستخدم ونحمي بياناتك عند استخدامك للمنصة.',
  });

  return (
    <div className="pt-16 lg:pt-20">
      <section className="relative overflow-hidden border-b border-dark-300">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-grid bg-grid-pattern opacity-10" />
        <div className="container-page relative py-16 lg:py-20">
          <span className="section-label">
            <Shield size={16} />
            القانونية
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            سياسة <span className="text-gradient">الخصوصية</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-dark-50/70">
            نحن نحترم خصوصيتك وملتزمون بحمايتها. توضح هذه السياسة كيف نتعامل
            مع بياناتك.
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
        </div>
      </section>
    </div>
  );
}
