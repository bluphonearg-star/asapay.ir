import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin } from 'lucide-react'
import { merchants } from '../../data/merchants'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function MerchantsPreview() {
  const { ref, visible } = useScrollReveal()
  const preview = merchants.slice(0, 4)

  return (
    <section className="section-padding">
      <div ref={ref} className="container-max">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-dark-blue sm:text-3xl lg:text-4xl">از پذیرندگان آساپی خرید کن</h2>
          <p className="mt-3 text-sm text-text-main/60 sm:text-base">
            پذیرندگان معتبر آساپی را پیدا کن و با اعتبار خود خریدت را انجام بده.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((m, i) => (
            <div
              key={m.id}
              className={`card reveal ${visible ? 'revealed' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white"
                  style={{ backgroundColor: m.logoColor }}
                >
                  {m.logoText}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-dark-blue">{m.name}</h3>
                  <p className="text-xs text-text-main/50">{m.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-text-main/50">
                <MapPin className="h-3.5 w-3.5" />
                {m.city}
              </div>
              <Link
                to="/merchants"
                className="mt-4 flex items-center justify-center gap-1 rounded-lg bg-light-blue py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                مشاهده
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/merchants" className="btn-outline">
            مشاهده همه پذیرندگان
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
