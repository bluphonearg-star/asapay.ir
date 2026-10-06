import { MapPin } from 'lucide-react'
import { merchants } from '../data/merchants'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Merchants() {
  const { ref, visible } = useScrollReveal()

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-light-blue to-bg-main py-16 lg:py-20">
        <div className="container-max px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-dark-blue sm:text-4xl lg:text-5xl">پذیرندگان آساپی</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-text-main/60">
            پذیرندگان معتبر آساپی را پیدا کن و با اعتبار خود خریدت را انجام بده.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div ref={ref} className="container-max">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {merchants.map((m, i) => (
              <div
                key={m.id}
                className={`card reveal ${visible ? 'revealed' : ''}`}
                style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl text-xl font-bold text-white"
                    style={{ backgroundColor: m.logoColor }}
                  >
                    {m.logoText}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-dark-blue">{m.name}</h3>
                    <p className="text-xs text-text-main/50">{m.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-text-main/50">
                  <MapPin className="h-3.5 w-3.5" />
                  {m.city}
                </div>
                <button className="mt-4 flex w-full items-center justify-center gap-1 rounded-lg bg-light-blue py-2.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
                  مشاهده
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
