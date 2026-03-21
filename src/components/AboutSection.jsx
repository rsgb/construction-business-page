import { site } from '../content/siteContent'

export function AboutSection() {
  return (
    <section id="sobre" className="section" aria-labelledby="sobre-heading">
      <div className="container about">
        <div className="about__text">
          <h2 id="sobre-heading" className="section__title">
            Sobre nós
          </h2>
          <p>
            A <strong>{site.name}</strong> apoia particulares em{' '}
            <strong>{site.area}</strong> com remodelações, pinturas, montagens e
            reparações domésticas — desde projetos maiores até pequenos arranjos.
          </p>
          <p>
            O objetivo é simplificar: explicar o que fazemos, responder de forma
            direta e permitir pedir orçamento por vários canais.
          </p>
          <ul className="about__list">
            <li>Orçamento sob consulta</li>
            <li>Comunicação por telefone, email ou WhatsApp</li>
            <li>Foco em serviços locais para a região indicada no site</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
