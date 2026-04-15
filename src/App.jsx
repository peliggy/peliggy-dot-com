import ContactForm from './components/ContactForm.jsx'
import { siteContent } from './content/siteContent.js'

const navigationItems = [
  { label: 'Services', href: '#services' },
  { label: 'Proof', href: '#proof' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function SectionHeader({ eyebrow, title, intro }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-heading mt-4">{title}</h2>
      {intro ? <p className="mt-5 max-w-2xl text-pretty">{intro}</p> : null}
    </div>
  )
}

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top_left,_rgba(15,118,110,0.18),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(11,59,111,0.16),_transparent_34%)]" />

      <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/90 backdrop-blur">
        <div className="section-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <a className="flex items-center gap-3" href="#home">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-base font-display font-semibold text-white shadow-[0_16px_30px_-18px_rgba(15,23,42,0.65)]">
              P
            </div>
            <div>
              <p className="font-display text-lg font-semibold tracking-tight text-ink">
                {siteContent.companyName}
              </p>
              <p className="text-sm leading-6 text-muted">{siteContent.siteLabel}</p>
            </div>
          </a>

          <nav className="overflow-x-auto">
            <ul className="flex min-w-max items-center gap-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a className="nav-chip" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a className="button-primary shrink-0 justify-center" href="#contact">
            Contact us
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="section-shell scroll-mt-28 py-12 sm:py-16 lg:py-24">
          <div className="notice-card">
            <span className="label-chip">Version 1 note</span>
            <p className="mt-4 max-w-4xl text-pretty text-sm leading-6 text-ink sm:text-base sm:leading-7">
              {siteContent.launchNote}
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
            <div className="surface-card p-6 sm:p-8 lg:p-10">
              <p className="eyebrow">{siteContent.hero.eyebrow}</p>
              <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                {siteContent.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {siteContent.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="button-primary justify-center" href="#contact">
                  {siteContent.hero.primaryCta}
                </a>
                <a className="button-secondary justify-center" href="#process">
                  {siteContent.hero.secondaryCta}
                </a>
              </div>

              <ul className="mt-8 grid gap-3 text-left sm:grid-cols-3">
                {siteContent.hero.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-3xl border border-line bg-surface px-4 py-4 text-sm leading-6 text-muted"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="surface-card p-6 sm:p-8">
              <p className="eyebrow">Launch snapshot</p>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                A clean first release with the right plumbing already in place.
              </h2>
              <div className="mt-6 space-y-4">
                {siteContent.proof.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-3xl border border-line bg-surface px-5 py-4"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-base leading-7 text-ink">{fact.value}</p>
                  </div>
                ))}
              </div>

              <div className="placeholder-card mt-6">
                <p className="eyebrow">Content status</p>
                <p className="mt-3 text-sm leading-6 text-ink">
                  Business messaging is still placeholder content. The layout,
                  form wiring, and deployment configuration are the real
                  deliverables in this first pass.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="services"
          className="section-shell section-spacing scroll-mt-28"
        >
          <SectionHeader
            eyebrow={siteContent.services.eyebrow}
            title={siteContent.services.title}
            intro={siteContent.services.intro}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {siteContent.services.items.map((service) => (
              <article key={service.title} className="surface-card h-full p-6 sm:p-8">
                <span className="label-chip">TODO content</span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-4">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="proof" className="section-shell section-spacing scroll-mt-28">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="surface-card p-6 sm:p-8">
              <SectionHeader
                eyebrow={siteContent.proof.eyebrow}
                title={siteContent.proof.title}
                intro={siteContent.proof.intro}
              />
            </div>

            <div className="surface-card p-6 sm:p-8">
              <div className="grid gap-4">
                {siteContent.proof.placeholders.map((item) => (
                  <div key={item} className="placeholder-card">
                    <p className="text-sm leading-6 text-ink sm:text-base sm:leading-7">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section-shell section-spacing scroll-mt-28">
          <SectionHeader
            eyebrow={siteContent.process.eyebrow}
            title={siteContent.process.title}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {siteContent.process.steps.map((step) => (
              <article key={step.number} className="surface-card h-full p-6 sm:p-8">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                  Step {step.number}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-4">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell section-spacing scroll-mt-28">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <div className="surface-card p-6 sm:p-8 lg:p-10">
              <SectionHeader
                eyebrow={siteContent.about.eyebrow}
                title={siteContent.about.title}
              />
              <div className="placeholder-card mt-8">
                <p className="text-sm leading-6 text-ink sm:text-base sm:leading-7">
                  {siteContent.about.body}
                </p>
              </div>
            </div>

            <div className="surface-card p-6 sm:p-8">
              <p className="eyebrow">What to add next</p>
              <div className="mt-6 space-y-4">
                {siteContent.about.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-3xl border border-line bg-surface px-5 py-4"
                  >
                    <p className="text-sm leading-6 text-ink sm:text-base sm:leading-7">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell section-spacing scroll-mt-28">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="surface-card p-6 sm:p-8 lg:p-10">
              <SectionHeader
                eyebrow={siteContent.contact.eyebrow}
                title={siteContent.contact.title}
                intro={siteContent.contact.intro}
              />

              <div className="placeholder-card mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                  Email fallback
                </p>
                <a
                  className="mt-3 inline-flex text-lg font-semibold text-ink underline decoration-brand/40 underline-offset-4"
                  href={`mailto:${siteContent.contact.email}`}
                >
                  {siteContent.contact.email}
                </a>
                <p className="mt-3 text-sm leading-6 text-ink">
                  {siteContent.contact.emailNote}
                </p>
              </div>
            </div>

            <ContactForm fallbackEmail={siteContent.contact.email} />
          </div>
        </section>
      </main>

      <footer className="section-shell pb-10 pt-2 sm:pb-12">
        <div className="flex flex-col gap-3 border-t border-line/70 pt-6 text-sm leading-6 text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteContent.companyName}. Launch-ready website
            starter with clearly marked placeholder business content.
          </p>
          <a
            className="font-semibold text-ink underline decoration-brand/40 underline-offset-4"
            href="#home"
          >
            Back to top
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
