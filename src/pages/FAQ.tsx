import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'آساپی چیست؟',
    a: 'آساپی یک پلتفرم ارائه‌دهنده اعتبار خرید کالا و خدمات است که به کاربران امکان می‌دهد با استفاده از اعتبار خرید، کالا یا خدمات موردنیاز خود را از پذیرندگان آساپی تهیه کنند.',
  },
  {
    q: 'چگونه اعتبار خرید دریافت کنم؟',
    a: 'برای دریافت اعتبار خرید کافی است درخواست خود را در پلتفرم آساپی ثبت کنید. پس از بررسی اطلاعات و تایید صلاحیت، اعتبار خرید شما فعال می‌شود.',
  },
  {
    q: 'اعتبار در چه فروشگاه‌هایی قابل استفاده است؟',
    a: 'اعتبار آساپی در تمامی پذیرندگان معتبر شبکه آساپی قابل استفاده است. لیست کامل پذیرندگان را در صفحه پذیرندگان مشاهده کنید.',
  },
  {
    q: 'چگونه درخواست اعتبار ثبت کنم؟',
    a: 'کافی است به صفحه اعتبار خرید مراجعه کنید و دکمه «درخواست اعتبار» را انتخاب کنید. پس از تکمیل اطلاعات، درخواست شما بررسی و اعتبار شما فعال می‌شود.',
  },
  {
    q: 'شرایط استفاده از اعتبار چیست؟',
    a: 'شرایط استفاده از اعتبار شامل تایید صلاحیت، رعایت سقف اعتبار و تسویه در زمان مقرر است. جزئیات کامل شرایط در زمان فعال‌سازی اعتبار به اطلاع شما می‌رسد.',
  },
  {
    q: 'چگونه با پشتیبانی تماس بگیرم؟',
    a: 'می‌توانید از طریق پیام‌رسان بله یا واتساپ با نام کاربری ASAPAY_SUPPORT با پشتیبانی آساپی در ارتباط باشید. همچنین صفحه تماس با ما اطلاعات کامل را در اختیار شما قرار می‌دهد.',
  },
  {
    q: 'چگونه پذیرنده آساپی شوم؟',
    a: 'برای پذیرندگی کافی است به صفحه پذیرندگی مراجعه کنید و فرم درخواست پذیرندگی را تکمیل کنید. کارشناسان آساپی در اولین فرصت با شما تماس خواهند گرفت.',
  },
]

export default function FAQ() {
  const { ref, visible } = useScrollReveal()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-light-blue to-bg-main py-16 lg:py-20">
        <div className="container-max px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-dark-blue sm:text-4xl lg:text-5xl">سوالات متداول</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-text-main/60">
            پاسخ پرتکرارترین سوالات کاربران درباره آساپی و خدمات اعتبار خرید.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="section-padding">
        <div ref={ref} className="container-max">
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm reveal ${visible ? 'revealed' : ''}`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-right transition-colors hover:bg-light-blue/50"
                >
                  <span className="text-sm font-semibold text-dark-blue sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                      open === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-text-main/60">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
