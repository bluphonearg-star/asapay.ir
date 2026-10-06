import { ClipboardList, BadgeCheck, Store, ShoppingBag } from 'lucide-react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const steps = [
  { icon: ClipboardList, title: 'ثبت درخواست', desc: 'درخواست اعتبار خرید خود را به‌سادگی ثبت کنید.' },
  { icon: BadgeCheck, title: 'دریافت اعتبار', desc: 'پس از بررسی، اعتبار خرید شما فعال می‌شود.' },
  { icon: Store, title: 'انتخاب پذیرنده', desc: 'از میان پذیرندگان معتبر آساپی انتخاب کنید.' },
  { icon: ShoppingBag, title: 'خرید کالا یا خدمات', desc: 'کالا یا خدمات موردنیاز خود را تهیه کنید.' },
]

export default function HowItWorks() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="section-padding bg-white">
      <div ref={ref} className="container-max">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-dark-blue sm:text-3xl lg:text-4xl">چطور کار می‌کند؟</h2>
          <p className="mt-3 text-sm text-text-main/60 sm:text-base">در تنها ۴ مرحله ساده، خرید خود را با اعتبار آساپی انجام دهید.</p>
        </div>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line (desktop) */}
          <div className="absolute top-12 right-0 hidden h-px w-full bg-gradient-to-l from-primary/20 via-primary/20 to-transparent lg:block" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center text-center reveal ${visible ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="relative mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-light-blue">
                <step.icon className="h-9 w-9 text-primary" />
                <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-dark-blue">{step.title}</h3>
              <p className="max-w-xs text-sm leading-7 text-text-main/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
