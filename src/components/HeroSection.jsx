import { useEffect, useState } from 'react'
import { heroSlides, site } from '../content/siteContent'

const waHref = `https://wa.me/${site.phoneE164.replace(/\D/g, '')}`

export function HeroSection() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setI((n) => (n + 1) % heroSlides.length)
    }, 7000)
    return () => clearInterval(t)
  }, [])

  const slide = heroSlides[i]

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__column hero__column--text">
          <p className="hero__eyebrow">{site.area}</p>
          <h1 id="hero-title" className="hero__title">
            {site.name}
          </h1>
          <p className="hero__subtitle">{site.tagline}</p>

          <div className="hero__rotator" aria-live="polite">
            <h2 className="hero__slide-title">{slide.title}</h2>
            <p className="hero__slide-body">{slide.body}</p>
            <div className="hero__dots" role="tablist" aria-label="Destaques">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={idx === i}
                  className={`hero__dot ${idx === i ? 'hero__dot--active' : ''}`}
                  onClick={() => setI(idx)}
                >
                  <span className="visually-hidden">Destaque {idx + 1}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={waHref}
              rel="noopener noreferrer"
            >
              WhatsApp — {site.phoneDisplay}
            </a>
            <a className="btn btn--outline" href="#pedir-orcamento">
              Pedir orçamento
            </a>
          </div>
        </div>

        <div className="hero__column hero__column--visual">
          <figure className="hero__figure">
            <img
              key={slide.imageUrl}
              src={slide.imageUrl}
              alt={slide.imageAlt}
              width={960}
              height={720}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="hero__img"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
