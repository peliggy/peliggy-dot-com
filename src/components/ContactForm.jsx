import { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  company: '',
  message: '',
  'bot-field': '',
}

function encodeFormData(data) {
  return new URLSearchParams(data).toString()
}

function ContactForm({ fallbackEmail }) {
  const [formData, setFormData] = useState(initialState)
  const [status, setStatus] = useState('idle')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeFormData({
          'form-name': 'contact',
          ...formData,
        }),
      })

      if (!response.ok) {
        throw new Error('Netlify form submission failed.')
      }

      setFormData(initialState)
      setStatus('submitted')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  function resetFormState() {
    setStatus('idle')
  }

  return (
    <div className="surface-card p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Contact Form</p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
            Send the project brief
          </h3>
        </div>
        <span className="label-chip">Netlify-ready</span>
      </div>

      <form
        className="space-y-4"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label htmlFor="bot-field">
            Do not fill this out if you are human:
            <input
              id="bot-field"
              name="bot-field"
              value={formData['bot-field']}
              onChange={handleChange}
            />
          </label>
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-left">
            <span className="field-label">Name</span>
            <input
              className="field"
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="space-y-2 text-left">
            <span className="field-label">Email</span>
            <input
              className="field"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label className="space-y-2 text-left">
          <span className="field-label">Company or project</span>
          <input
            className="field"
            type="text"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
          />
        </label>

        <label className="space-y-2 text-left">
          <span className="field-label">Message</span>
          <textarea
            className="field min-h-36 resize-y"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <div className="space-y-3 pt-2">
          <button
            className="button-primary w-full justify-center sm:w-auto"
            type="submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send enquiry'}
          </button>

          <p className="text-sm leading-6 text-muted">
            Prefer email? Use{' '}
            <a
              className="font-semibold text-ink underline decoration-brand/40 underline-offset-4"
              href={`mailto:${fallbackEmail}`}
            >
              {fallbackEmail}
            </a>
            .
          </p>

          <div className="min-h-16" aria-live="polite">
            {status === 'submitted' ? (
              <div className="rounded-3xl border border-brand/20 bg-brand-soft px-4 py-3 text-sm font-medium text-ink">
                Thanks! We&apos;ll be in touch.
                <button
                  className="ml-2 font-semibold text-brand underline decoration-brand/40 underline-offset-4"
                  type="button"
                  onClick={resetFormState}
                >
                  Send another
                </button>
              </div>
            ) : null}

            {status === 'error' ? (
              <div className="rounded-3xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-medium text-ink">
                Something went wrong. Please retry or email us directly.
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
