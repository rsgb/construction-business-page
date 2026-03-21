import { useEffect, useState } from 'react'
import { nav, site } from '../content/siteContent'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="site-header" role="banner">
      <div className="site-header__inner">
        <a className="site-logo" href="#inicio">
          <span className="site-logo__name">{site.name}</span>
          <span className="site-logo__tag">{site.tagline}</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">
            {open ? 'Fechar menu' : 'Abrir menu'}
          </span>
          <span className="nav-toggle__bars" aria-hidden="true" />
        </button>

        <nav
          id="primary-nav"
          className={`site-nav ${open ? 'site-nav--open' : ''}`}
          aria-label="Principal"
        >
          <ul className="site-nav__list">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
