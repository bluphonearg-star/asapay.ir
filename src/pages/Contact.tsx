import { useState } from 'react'
import { MessageCircle, Phone, CheckCircle, Send } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const subjects = ['پشتیبانی', 'اعتبار خرید', 'پذیرندگی', 'پرداخت', 'سایر موارد']

const BALE_URL = 'https://ble.ir/ASAPAY_SUPPORT'
const WHATSAPP_URL = 'https://wa.me/ASAPAY_SUPPORT'

export default function Contact() {
  const { ref, visible } = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({ fullName: '', phone: '', subject: '', message: '' })

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.fullName.trim()) e.fullName = 'نام و نام خانوادگی الزامی است'
    if (!form.phone.trim()) e.phone = 'شماره موبایل الزامی است'
    else if (!/^09\d{9}$/.test(form.phone.trim())) e.phone = 'شماره موبایل معتبر نیست'
    if (!form.subject) e.subject = 'موضوع پیام را انتخاب کنید'
    if (!form.message.trim()) e.message = 'متن پیام الزامی است'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (validate()) setSubmitted(true)
  }

  const update = (key: string, value: string) => {
    setForm({ ...form, [key]: value })
    if (errors[key]) setErrors({ ...errors, [key]: '' })
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-light-blue to-bg-main py-16 lg:py-20">
        <div className="container-max px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-dark-blue sm:text-4xl lg:text-5xl">با آساپی در ارتباط باشید</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-text-main/60">
            تیم پشتیبانی آساپی آماده پاسخگویی به سوالات شماست.
          </p>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="section-padding">
        <div ref={ref} className="container-max">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Bale */}
            <div className={`card reveal ${visible ? 'revealed' : ''}`}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-light-blue">
                <MessageCircle className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-bold text-dark-blue">پیام‌رسان بله</h3>
              <p className="mb-4 text-sm text-text-main/60">Username: ASAPAY_SUPPORT</p>
              <a
                href={BALE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                ارتباط در بله
              </a>
            </div>

            {/* WhatsApp */}
            <div className={`card reveal ${visible ? 'revealed' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-light-blue">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-bold text-dark-blue">واتساپ</h3>
              <p className="mb-4 text-sm text-text-main/60">Username: ASAPAY_SUPPORT</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                ارتباط در واتساپ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="mx-auto max-w-2xl">
            {submitted ? (
              <div className="card flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle className="h-9 w-9 text-green-500" />
                </div>
                <h2 className="mb-2 text-xl font-bold text-dark-blue">پیام ارسال شد</h2>
                <p className="max-w-md text-sm leading-7 text-text-main/60">
                  پیام شما با موفقیت ارسال شد. کارشناسان آساپی در اسرع وقت پاسخ خواهند داد.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ fullName: '', phone: '', subject: '', message: '' })
                  }}
                  className="btn-outline mt-6"
                >
                  ارسال پیام جدید
                </button>
              </div>
            ) : (
              <div className="card">
                <h2 className="mb-6 text-xl font-bold text-dark-blue">فرم ارسال پیام</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-main">نام و نام خانوادگی</label>
                      <input
                        type="text"
                        value={form.fullName}
                        onChange={(e) => update('fullName', e.target.value)}
                        className="input-field"
                        placeholder="مثال: علی رضایی"
                      />
                      {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-main">شماره موبایل</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className="input-field"
                        placeholder="09123456789"
                        dir="ltr"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-main">موضوع پیام</label>
                    <select
                      value={form.subject}
                      onChange={(e) => update('subject', e.target.value)}
                      className="input-field"
                    >
                      <option value="">انتخاب کنید</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-main">متن پیام</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className="input-field min-h-[120px] resize-none"
                      placeholder="متن پیام خود را وارد کنید"
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    <Send className="h-4 w-4" />
                    ارسال پیام
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
