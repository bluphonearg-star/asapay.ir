import { Link } from 'react-router-dom'
import { CreditCard, Store, ShieldCheck, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-light-blue via-bg-main to-bg-main">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-primary-light/10 blur-3xl" />

      <div className="container-max relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="text-center lg:text-right">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-sm animate-fade-in-down">
              <Sparkles className="h-4 w-4" />
              اعتبار خرید، ساده و مطمئن
            </div>
            <h1 className="text-3xl font-bold leading-tight text-dark-blue animate-fade-in-up sm:text-4xl lg:text-5xl">
              با آساپی، خریدت رو آسون‌تر کن
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-text-main/70 lg:mx-0 lg:text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              اعتبار خرید دریافت کن و کالا و خدمات موردنیازت رو از پذیرندگان آساپی تهیه کن.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/services" className="btn-primary w-full sm:w-auto">
                <CreditCard className="h-5 w-5" />
                دریافت اعتبار
              </Link>
              <Link to="/merchants" className="btn-outline w-full sm:w-auto">
                <Store className="h-5 w-5" />
                مشاهده پذیرندگان
              </Link>
            </div>
          </div>

          {/* Graphic — Credit Card */}
          <div className="relative flex items-center justify-center lg:justify-start">
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {/* Main Card */}
              <div className="relative h-56 w-80 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-6 shadow-2xl shadow-primary/30 animate-float sm:h-64 sm:w-96">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-white/70">ASAPAY</p>
                    <p className="text-lg font-bold text-white">آساپی کارت</p>
                  </div>
                  <div className="h-8 w-12 rounded-md bg-white/20" />
                </div>
                <div className="mt-8">
                  <div className="h-5 w-10 rounded bg-yellow-300/80" />
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="h-2 w-3 rounded-full bg-white/40" />
                  <div className="h-2 w-3 rounded-full bg-white/40" />
                  <div className="h-2 w-3 rounded-full bg-white/40" />
                  <div className="h-2 w-3 rounded-full bg-white/40" />
                  <span className="text-sm font-medium text-white/80">۱۲۳۴</span>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] text-white/50">دارنده کارت</p>
                    <p className="text-sm font-medium text-white">کاربر آساپی</p>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-6 w-6 rounded-full bg-white/30" />
                    <div className="-mr-3 h-6 w-6 rounded-full bg-white/20" />
                  </div>
                </div>
              </div>

              {/* Floating Badge — Secure */}
              <div className="absolute -top-5 -right-5 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg animate-float-slow">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs font-bold text-dark-blue">پرداخت امن</p>
                  <p className="text-[10px] text-text-main/50">۱۰۰٪ مطمئن</p>
                </div>
              </div>

              {/* Floating Badge — Credit */}
              <div className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <CreditCard className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs font-bold text-dark-blue">اعتبار فعال</p>
                  <p className="text-[10px] text-text-main/50">آماده خرید</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
