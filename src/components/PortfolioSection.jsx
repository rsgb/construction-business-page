import { useCallback, useEffect, useMemo, useState } from "react";
import { portfolioImageUrls } from "../content/portfolioScrape";

const VISIBLE_COUNT = 6;
const ARROW_STEP = 6;
/** Acima disto, os pontos de navegação tornam-se ilegíveis — mostramos contador. */
const DOT_NAV_MAX = 36;

const carouselAlt =
  "Trabalho do portfólio Obras Remodelações — pré-visualização";

function shuffleUrls(urls) {
  const out = [...urls];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function PortfolioSection() {
  const [urls] = useState(() => shuffleUrls(portfolioImageUrls));
  const [index, setIndex] = useState(0);
  const n = urls.length;

  const visibleSlots = useMemo(() => {
    return Array.from({ length: VISIBLE_COUNT }, (_, offset) => {
      const i = (index + offset) % n;
      return { i, url: urls[i] };
    });
  }, [index, n, urls]);

  const go = useCallback(
    (delta) => {
      setIndex((i) => (i + delta + n) % n);
    },
    [n]
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return undefined;
    const id = setInterval(() => go(ARROW_STEP), 5500);
    return () => clearInterval(id);
  }, [go]);

  return (
    <section
      id="portfolio"
      className="section"
      aria-labelledby="portfolio-heading"
    >
      <div className="container">
        <h2 id="portfolio-heading" className="section__title">
          Trabalhos realizados
        </h2>

        <div
          className="portfolio-carousel"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Pré-visualização do portfólio — seis imagens em grelha"
        >
          <div className="portfolio-carousel__viewport">
            {visibleSlots.map(({ i, url }, slot) => (
              <div
                key={`${index}-${slot}`}
                className="portfolio-carousel__cell"
              >
                <img
                  className="portfolio-carousel__img"
                  src={url}
                  alt={`${carouselAlt} (${i + 1} de ${n})`}
                  width={400}
                  height={225}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <div className="portfolio-carousel__controls">
            <button
              type="button"
              className="portfolio-carousel__btn"
              onClick={() => go(-ARROW_STEP)}
              aria-label="Retroceder seis imagens"
            >
              ‹
            </button>
            {n <= DOT_NAV_MAX ? (
              <div
                className="portfolio-carousel__dots"
                role="tablist"
                aria-label="Primeira imagem do grupo visível"
              >
                {urls.map((url, i) => (
                  <button
                    key={url}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Começar grupo na imagem ${i + 1} de ${n}`}
                    className={`portfolio-carousel__dot ${
                      i === index ? "portfolio-carousel__dot--active" : ""
                    }`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            ) : (
              <p
                className="portfolio-carousel__position"
                role="status"
                aria-live="polite"
                aria-label={`Primeira imagem visível do grupo: ${
                  index + 1
                } de ${n}`}
              >
                <span className="visually-hidden">
                  Primeira imagem do grupo:{" "}
                </span>
                {index + 1} / {n}
              </p>
            )}
            <button
              type="button"
              className="portfolio-carousel__btn"
              onClick={() => go(ARROW_STEP)}
              aria-label="Avançar seis imagens"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
