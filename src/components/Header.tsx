import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, User, CreditCard } from 'lucide-react'

const navItems = [
  { label: 'خانه', path: '/' },
  { label: 'اعتبار خرید', path: '/services' },
  { label: 'پذیرندگان', path: '/merchants' },
  { label: 'پذیرندگی', path: '/become-merchant' },
  { label: 'سوالات متداول', path: '/faq' },
  { label: 'تماس با ما', path: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 shadow-md shadow-gray-100 backdrop-blur-lg' : 'bg-white'
        }`}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary lg:h-10 lg:w-10">
                <span className="text-lg font-bold text-white">A</span>
              </div>
              <span className="text-xl font-bold text-dark-blue lg:text-2xl">آساپی</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-primary'
                        : 'text-text-main hover:text-primary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 lg:flex">
              <button className="flex h-10 w-10 items-center justify-center rounded-xl text-text-main transition-colors hover:bg-light-blue hover:text-primary">
                <User className="h-5 w-5" />
              </button>
              <Link to="/services" className="btn-primary">
                <CreditCard className="h-4 w-4" />
                درخواست اعتبار
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-dark-blue transition-colors hover:bg-light-blue lg:hidden"
              aria-label="منو"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-dark-blue/30 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-16 right-0 z-40 h-[calc(100vh-4rem)] w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  isActive ? 'bg-light-blue text-primary' : 'text-text-main hover:bg-light-blue'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Link to="/services" className="btn-primary w-full">
              <CreditCard className="h-4 w-4" />
              درخواست اعتبار
            </Link>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-medium text-text-main transition-colors hover:bg-light-blue">
              <User className="h-5 w-5" />
              ورود / حساب کاربری
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
