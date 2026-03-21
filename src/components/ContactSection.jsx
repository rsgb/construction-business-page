import { useEffect, useState } from 'react'
import { BudgetRequestForm } from './BudgetRequestForm'
import { hours, site } from '../content/siteContent'

const waHref = `https://wa.me/${site.phoneE164.replace(/\D/g, '')}`
const mailPrimary = `mailto:${site.emailPrimary}`
const mailSecondary = `mailto:${site.emailSecondary}`

export function ContactSection() {
  const [showThanks, setShowThanks] = useState(
    () => typeof window !== 'undefined' && window.location.hash === '#obrigado',
  )

  useEffect(() => {
    const sync = () => {
      setShowThanks(window.location.hash === '#obrigado')
      if (window.location.hash === '#obrigado') {
        document.getElementById('obrigado')?.focus()
      }
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  return (
    <section id="contactos" className="section section--contact" aria-labelledby="contactos-heading">
      <div className="container">
        <h2 id="contactos-heading" className="section__title">
          Contactos
        </h2>
        <p className="section__lead">
          Peça orçamento grátis ou envie fotos do que precisa — respondemos o mais
          rápido possível.
        </p>

        {showThanks ? (
          <div
            id="obrigado"
            className="contact-thanks"
            tabIndex={-1}
            role="status"
            aria-live="polite"
          >
            <p className="contact-thanks__title">Obrigado pelo pedido</p>
            <p className="contact-thanks__text">
              Se o formulário foi enviado com sucesso, a equipa recebeu a sua
              mensagem em <strong>{site.emailPrimary}</strong>. Pode também falar
              connosco pelo WhatsApp.
            </p>
            <a className="btn btn--outline" href="#pedir-orcamento">
              Enviar outro pedido
            </a>
          </div>
        ) : null}

        <div
          id="pedir-orcamento"
          className="contact-card contact-card--form"
        >
          <h3 className="contact-card__title">Pedir orçamento</h3>
          <p className="contact-card__intro">
            Preencha o formulário — é breve. Indique o tipo de trabalho e a zona.
          </p>
          <BudgetRequestForm />
        </div>

        <div className="contact-layout contact-layout--below-form">
          <div className="contact-card">
            <h3 className="contact-card__title">Fale connosco</h3>
            <ul className="contact-list">
              <li>
                <span className="contact-list__label">Telefone / WhatsApp</span>
                <a
                  className="contact-list__wa"
                  href={waHref}
                  rel="noopener noreferrer"
                >
                  +351 {site.phoneDisplay}
                </a>
                <span className="contact-list__hint">
                  Toque para abrir o WhatsApp com este número.
                </span>
              </li>
              <li>
                <span className="contact-list__label">Email</span>
                <a href={mailPrimary}>{site.emailPrimary}</a>
              </li>
              <li>
                <span className="contact-list__label">Email (alternativo)</span>
                <a href={mailSecondary}>{site.emailSecondary}</a>
                <span className="contact-list__hint">
                  [Nota: email Gmail listado no site atual; para maior confiança,
                  unificar num endereço profissional.]
                </span>
              </li>
              <li>
                <span className="contact-list__label">Zona</span>
                {site.area}
              </li>
            </ul>
          </div>

          <div className="contact-card">
            <h3 className="contact-card__title">Horário</h3>
            <ul className="hours-list">
              {hours.map((h) => (
                <li key={h.label}>
                  <span className="hours-list__day">{h.label}</span>
                  <span className="hours-list__time">{h.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
