import { site } from '../content/siteContent'

/**
 * Envio via FormSubmit (https://formsubmit.co) — reencaminha para o email indicado
 * sem servidor próprio. Na primeira utilização, geral@obrasremodelacoes.pt recebe
 * um email de ativação do FormSubmit.
 */
const formAction = `https://formsubmit.co/${site.emailPrimary}`

function redirectAfterSubmitUrl() {
  if (typeof window === 'undefined') return ''
  return `${window.location.origin}${window.location.pathname}#obrigado`
}

export function BudgetRequestForm() {
  const nextUrl = redirectAfterSubmitUrl()

  return (
    <form
      className="budget-form"
      action={formAction}
      method="POST"
    >
      <input type="hidden" name="_subject" value="Pedido de orçamento — Obras Remodelações" />
      {nextUrl ? <input type="hidden" name="_next" value={nextUrl} /> : null}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <p className="budget-form__honeypot" aria-hidden="true">
        <label htmlFor="budget-form-website">Website</label>
        <input
          id="budget-form-website"
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </p>

      <div className="budget-form__grid">
        <div className="form-field">
          <label className="form-label" htmlFor="budget-name">
            Nome <span aria-hidden="true">*</span>
          </label>
          <input
            id="budget-name"
            className="form-input"
            type="text"
            name="nome"
            required
            autoComplete="name"
            placeholder="O seu nome"
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="budget-email">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="budget-email"
            className="form-input"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="para responder ao pedido"
          />
        </div>

        <div className="form-field form-field--full">
          <label className="form-label" htmlFor="budget-phone">
            Telefone <span className="form-optional">(opcional)</span>
          </label>
          <input
            id="budget-phone"
            className="form-input"
            type="tel"
            name="telefone"
            autoComplete="tel"
            placeholder="ex. 963 495 891"
          />
        </div>

        <div className="form-field form-field--full">
          <label className="form-label" htmlFor="budget-message">
            O que precisa? <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="budget-message"
            className="form-textarea"
            name="mensagem"
            required
            rows={4}
            placeholder="Tipo de trabalho, zona, disponibilidade, etc."
          />
        </div>
      </div>

      <div className="budget-form__footer">
        <button type="submit" className="btn btn--primary">
          Enviar pedido
        </button>
        <p className="budget-form__note" id="budget-form-privacy">
          Os dados são enviados para{' '}
          <strong>{site.emailPrimary}</strong> através do serviço FormSubmit. Na
          primeira vez, pode ser necessário confirmar o email no aviso que a
          FormSubmit envia.
        </p>
      </div>
    </form>
  )
}
