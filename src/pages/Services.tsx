import { Link } from 'react-router-dom'
import { CreditCard, ArrowLeft, HelpCircle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const sections = [
  {
    title: 'اعتبار خرید چیست؟',
    desc: 'اعتبار خرید آساپی یک سرویس مالی است که به شما امکان می‌دهد بدون نیاز به پرداخت نقدی فوری، کالا و خدمات موردنیاز خود را از پذیرندگان آساپی تهیه کنید. این اعتبار به‌صورت یک خط اعتباری در اختیار شما قرار می‌گیرد و می‌توانید آن را در زمان مناسب تسویه کنید.',
  },
  {
    title: 'چگونه اعتبار دریافت کنیم؟',
    desc: 'برای دریافت اعتبار کافی است درخواست خود را در پلتفرم آساپی ثبت کنید. پس از بررسی اطلاعات و تایید صلاحیت، اعتبار خرید شما فعال می‌شود و می‌توانید بلافاصله خرید خود را آغاز کنید. فرآیند ثبت درخواست کاملاً آنلاین و سریع است.',
  },
  {
    title: 'چگونه از اعتبار استفاده کنیم؟',
    desc: 'پس از فعال‌سازی اعتبار، کافی است به یکی از پذیرندگان معتبر آساپی مراجعه کنید و کالا یا خدمات موردنیاز خود را انتخاب کنید. در زمان پرداخت، اعتبار آساپی خود را به‌عنوان روش پرداخت انتخاب کنید و خرید خود را نهایی کنید.',
  },
  {
    title: 'در چه فروشگاه‌هایی می‌توان خرید کرد؟',
    desc: 'اعتبار آساپی در طیف گسترده‌ای از پذیرندگان شامل لوازم خانگی، پوشاک، لوازم دیجیتال، خدمات پزشکی، خدمات مسافرتی، رستوران‌ها و بسیاری از دسته‌بندی‌های دیگر قابل استفاده است. لیست کامل پذیرندگان را در صفحه پذیرندگان مشاهده کنید.',
  },
]

export default function Services() {
  const { ref, visible } = useScrollReveal()

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-light-blue to-bg-main py-16 lg:py-24">
        <div className="container-max px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <CreditCard className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-dark-blue sm:text-4xl lg:text-5xl">اعتبار خرید آساپی</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-text-main/60">
            با اعتبار خرید آساپی، خرید کالا و خدمات موردنیاز خود را آسان‌تر و مطمئن‌تر انجام دهید.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding">
        <div ref={ref} className="container-max space-y-6">
          {sections.map((s, i) => (
            <div
              key={i}
              className={`card reveal ${visible ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-dark-blue">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  {i + 1}
                </span>
                {s.title}
              </h2>
              <p className="text-sm leading-8 text-text-main/70">{s.desc}</p>
            </div>
          ))}

          {/* FAQ Link */}
          <Link
            to="/faq"
            className={`card flex items-center justify-between reveal ${visible ? 'revealed' : ''}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="flex items-center gap-3">
              <HelpCircle className="h-6 w-6 text-primary" />
              <span className="text-base font-semibold text-dark-blue">سوالات متداول</span>
            </div>
            <ArrowLeft className="h-5 w-5 text-primary" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="rounded-3xl bg-gradient-to-l from-primary to-primary-dark px-6 py-12 text-center shadow-xl shadow-primary/20 lg:px-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">آماده دریافت اعتبار هستید؟</h2>
            <p className="mt-3 text-sm text-white/80">همین حالا درخواست خود را ثبت کنید و خریدتان را آسان‌تر کنید.</p>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-sm font-bold text-primary transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              <CreditCard className="h-5 w-5" />
              درخواست اعتبار
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
