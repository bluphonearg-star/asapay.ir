import { Link } from 'react-router-dom'
import { Headset, MessageCircle, Phone } from 'lucide-react'

const quickLinks = [
  { label: 'خانه', path: '/' },
  { label: 'اعتبار خرید', path: '/services' },
  { label: 'پذیرندگان', path: '/merchants' },
  { label: 'پذیرندگی', path: '/become-merchant' },
  { label: 'سوالات متداول', path: '/faq' },
  { label: 'تماس با ما', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="container-max px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <span className="text-lg font-bold text-white">A</span>
              </div>
              <span className="text-xl font-bold">آساپی</span>
            </div>
            <p className="text-sm leading-7 text-white/70">
              آساپی پلتفرم اعتبار خرید کالا و خدمات است که به شما امکان می‌دهد خریدهای خود را آسان‌تر و مطمئن‌تر انجام دهید.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-white">دسترسی سریع</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 transition-colors hover:text-primary-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-white">ارتباط با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <MessageCircle className="h-4 w-4 text-primary-light" />
                <span>بله: ASAPAY_SUPPORT</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="h-4 w-4 text-primary-light" />
                <span>واتساپ: ASAPAY_SUPPORT</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-white">پشتیبانی</h3>
            <p className="mb-4 text-sm text-white/70">
              تیم پشتیبانی آساپی آماده پاسخگویی به سوالات شماست.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30"
            >
              <Headset className="h-4 w-4" />
              ارتباط با پشتیبانی
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">© تمامی حقوق این وب‌سایت متعلق به آساپی است.</p>
        </div>
      </div>
    </footer>
  )
}
