import {
  serviceAreas,
  servicesDetailed,
  servicesExtra,
  servicesPageIntro,
} from '../content/siteContent'

export function ServicesSection() {
  return (
    <section id="servicos" className="section section--muted" aria-labelledby="servicos-heading">
      <div className="container">
        <h2 id="servicos-heading" className="section__title">
          Serviços
        </h2>
        <p className="services-page__kicker">{servicesPageIntro.kicker}</p>
        <p className="section__lead services-page__lead">{servicesPageIntro.lead}</p>

        <ul className="service-grid service-grid--detailed">
          {servicesDetailed.map((s) => (
            <li key={s.title} className="service-card service-card--detailed">
              <h3 className="service-card__title">{s.title}</h3>
              {s.intro ? <p className="service-card__intro">{s.intro}</p> : null}
              <ul className="service-card__list">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {s.priceRange ? (
                <p className="service-card__price">
                  <span className="service-card__price-label">{s.priceLabel}</span>
                  <span className="service-card__price-range">{s.priceRange}</span>
                </p>
              ) : null}
              <a className="service-card__cta" href="#pedir-orcamento">
                Pedir orçamento
              </a>
            </li>
          ))}
        </ul>

        <div className="services-areas" aria-labelledby="servicos-areas-heading">
          <h3 id="servicos-areas-heading" className="services-areas__title">
            Áreas de serviço
          </h3>
          <div className="services-areas__grid">
            {serviceAreas.map((area) => (
              <div key={area.title} className="services-areas__block">
                <h4 className="services-areas__subtitle">{area.title}</h4>
                <ul className="services-areas__list">
                  {area.places.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <h3 className="services-extra__title">Remodelações e outros serviços</h3>
        <ul className="service-grid">
          {servicesExtra.map((s) => (
            <li key={s.title} className="service-card">
              <h3 className="service-card__title">{s.title}</h3>
              <ul className="service-card__list">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="service-card__cta" href="#pedir-orcamento">
                Pedir orçamento
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
