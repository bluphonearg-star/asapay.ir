import { useState } from 'react'
import { TrendingUp, UserPlus, Users, FileCheck, Headset, CheckCircle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const benefits = [
  { icon: TrendingUp, title: 'افزایش فروش', desc: 'با امکان خرید با اعتبار، مشتریان بیشتری خرید می‌کنند.' },
  { icon: UserPlus, title: 'جذب مشتری جدید', desc: 'به شبکه کاربران آساپی متصل شوید و مشتریان جدید جذب کنید.' },
  { icon: Users, title: 'دسترسی به مشتریان دارای اعتبار', desc: 'مشتریانی که اعتبار آساپی دارند در فروشگاه شما خرید می‌کنند.' },
  { icon: FileCheck, title: 'فرآیند ساده پذیرندگی', desc: 'با چند مرحله ساده، پذیرنده آساپی شوید.' },
  { icon: Headset, title: 'پشتیبانی اختصاصی', desc: 'تیم پشتیبانی آساپی همواره همراه شماست.' },
]

const categories = ['لوازم خانگی', 'پوشاک', 'لوازم دیجیتال', 'خدمات پزشکی', 'خدمات مسافرتی', 'رستوران', 'مبلمان', 'خدمات خودرو', 'سایر']

export default function BecomeMerchant() {
  const { ref, visible } = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    city: '',
    address: '',
    category: '',
    description: '',
  })

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.fullName.trim()) e.fullName = 'نام و نام خانوادگی الزامی است'
    if (!form.businessName.trim()) e.businessName = 'نام فروشگاه الزامی است'
    if (!form.phone.trim()) e.phone = 'شماره موبایل الزامی است'
    else if (!/^09\d{9}$/.test(form.phone.trim())) e.phone = 'شماره موبایل معتبر نیست (مثال: 09123456789)'
    if (!form.city.trim()) e.city = 'نام شهر الزامی است'
    if (!form.address.trim()) e.address = 'آدرس فروشگاه الزامی است'
    if (!form.category) e.category = 'دسته‌بندی را انتخاب کنید'
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
          <h1 className="text-3xl font-bold text-dark-blue sm:text-4xl lg:text-5xl">به شبکه پذیرندگان آساپی بپیوندید</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-text-main/60">
            با عضویت در شبکه پذیرندگان آساپی، مشتریان جدید جذب کنید و امکان خرید با اعتبار آساپی را برای مشتریان خود فراهم کنید.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div ref={ref} className="container-max">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`card text-center reveal ${visible ? 'revealed' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-light-blue">
                  <b.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-dark-blue">{b.title}</h3>
                <p className="text-xs leading-6 text-text-main/60">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="container-max">
          <div className="mx-auto max-w-2xl">
            {submitted ? (
              <div className="card flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle className="h-9 w-9 text-green-500" />
                </div>
                <h2 className="mb-2 text-xl font-bold text-dark-blue">درخواست ثبت شد</h2>
                <p className="max-w-md text-sm leading-7 text-text-main/60">
                  درخواست شما با موفقیت ثبت شد. کارشناسان آساپی در اولین فرصت با شما تماس خواهند گرفت.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ fullName: '', businessName: '', phone: '', city: '', address: '', category: '', description: '' })
                  }}
                  className="btn-outline mt-6"
                >
                  ثبت درخواست جدید
                </button>
              </div>
            ) : (
              <div className="card">
                <h2 className="mb-6 text-xl font-bold text-dark-blue">فرم درخواست پذیرندگی</h2>
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
                      <label className="mb-1.5 block text-sm font-medium text-text-main">نام فروشگاه / کسب‌وکار</label>
                      <input
                        type="text"
                        value={form.businessName}
                        onChange={(e) => update('businessName', e.target.value)}
                        className="input-field"
                        placeholder="مثال: فروشگاه آرمان"
                      />
                      {errors.businessName && <p className="mt-1 text-xs text-red-500">{errors.businessName}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text-main">نام شهر</label>
                      <input
                        type="text"
                        value={form.city}
                        onChange={(e) => update('city', e.target.value)}
                        className="input-field"
                        placeholder="مثال: تهران"
                      />
                      {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-main">آدرس فروشگاه</label>
                    <input
                      type="text"
                      value={form.address}
                      onChange={(e) => update('address', e.target.value)}
                      className="input-field"
                      placeholder="آدرس کامل فروشگاه"
                    />
                    {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-main">دسته‌بندی فعالیت</label>
                    <select
                      value={form.category}
                      onChange={(e) => update('category', e.target.value)}
                      className="input-field"
                    >
                      <option value="">انتخاب کنید</option>
                      {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.category && <p className="mt-1 text-xs text-red-500">{errors.category}</p>}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-text-main">توضیحات</label>
                    <textarea
                      value={form.description}
                      onChange={(e) => update('description', e.target.value)}
                      className="input-field min-h-[100px] resize-none"
                      placeholder="توضیحات بیشتر درباره کسب‌وکار شما"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    ارسال درخواست پذیرندگی
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
