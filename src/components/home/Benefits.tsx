import { CreditCard, Zap, Store, ShieldCheck } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const benefits = [
  {
    icon: CreditCard,
    title: 'اعتبار خرید آسان',
    desc: 'بدون پیچیدگی و در سریع‌ترین زمان ممکن، اعتبار خرید خود را دریافت کنید.',
  },
  {
    icon: Zap,
    title: 'فرآیند سریع و ساده',
    desc: 'تنها با چند مرحله ساده، درخواست خود را ثبت کرده و اعتبار بگیرید.',
  },
  {
    icon: Store,
    title: 'پذیرندگان متنوع',
    desc: 'از طیف گسترده‌ای از پذیرندگان معتبر در شهرهای مختلف خرید کنید.',
  },
  {
    icon: ShieldCheck,
    title: 'پرداخت امن و مطمئن',
    desc: 'تمامی تراکنش‌ها با بالاترین استانداردهای امنیتی انجام می‌شوند.',
  },
]

export default function Benefits() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="section-padding">
      <div ref={ref} className="container-max">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-dark-blue sm:text-3xl lg:text-4xl">چرا آساپی؟</h2>
          <p className="mt-3 text-sm text-text-main/60 sm:text-base">مزایایی که آساپی را بهترین انتخاب برای اعتبار خرید می‌کند.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, i) => (
            <div
              key={i}
              className={`card reveal ${visible ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-light-blue">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-dark-blue">{item.title}</h3>
              <p className="text-sm leading-7 text-text-main/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
