import { footerServiceList, site, socialProfiles } from '../content/siteContent'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__brand">{site.name}</p>
          <p className="site-footer__meta">{site.area}</p>
        </div>
        <div>
          <p className="site-footer__heading">Serviços</p>
          <ul className="site-footer__list">
            {footerServiceList.map((s) => (
              <li key={s}>
                <a href="#servicos">{s}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="site-footer__heading">Contacto</p>
          <p>
            <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${site.emailPrimary}`}>{site.emailPrimary}</a>
          </p>
          <p className="site-footer__heading site-footer__heading--spaced">
            Redes sociais
          </p>
          <p>
            <a
              href={socialProfiles.facebook.url}
              rel="noopener noreferrer"
            >
              {socialProfiles.facebook.label}
            </a>
          </p>
        </div>
      </div>
      <div className="site-footer__bar">
        <div className="container site-footer__bar-inner">
          <p>
            © {year} {site.name}. Rascunho de modernização para aprendizagem —
            conteúdo baseado no site público.
          </p>
        </div>
      </div>
    </footer>
  )
}
