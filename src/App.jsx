import ContactForm from './components/ContactForm.jsx'
import { siteContent } from './content/siteContent.js'

const navigationItems = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

function SectionHeader({ eyebrow, title, intro }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-heading mt-3">{title}</h2>
      {intro ? <p className="mt-3 max-w-2xl text-pretty">{intro}</p> : null}
    </div>
  )
}

function App() {
  const currentYear = new Date().getFullYear()
  const sectionOffsetClass = 'scroll-mt-36 lg:scroll-mt-28'

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(15,118,110,0.18),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(11,59,111,0.16),_transparent_34%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur">
        <div className="section-shell flex flex-wrap items-center justify-between gap-3 py-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-4">
          <a className="flex items-center gap-2.5 lg:justify-self-start" href="#home">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-sm font-display font-semibold text-white shadow-[0_16px_30px_-18px_rgba(15,23,42,0.65)] sm:h-11 sm:w-11 sm:rounded-2xl sm:text-base">
              P
            </div>
            <div className="min-w-0">
              <p className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
                {siteContent.companyName}
              </p>
              <p className="hidden text-xs leading-5 text-muted sm:block sm:text-sm sm:leading-6">
                {siteContent.siteLabel}
              </p>
            </div>
          </a>

          <nav className="order-3 flex basis-full justify-center overflow-x-auto lg:order-none lg:basis-auto lg:justify-self-center">
            <ul className="flex min-w-max items-center justify-center gap-1.5 sm:gap-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a className="nav-chip" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            className="button-primary min-h-10 shrink-0 justify-center px-4 py-2 text-xs sm:min-h-11 sm:px-6 sm:py-3 sm:text-sm lg:justify-self-end"
            href="#contact"
          >
            {siteContent.hero.primaryCta}
          </a>
        </div>
      </header>

      <main className="pt-24 sm:pt-28 lg:pt-20">
        <section
          id="home"
          className={`section-shell pb-10 pt-5 sm:pb-12 sm:pt-7 lg:pb-14 lg:pt-9 ${sectionOffsetClass}`}
        >
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
            <div className="hero-card surface-card p-5 sm:p-7 lg:p-9">
              {siteContent.hero.eyebrow ? (
                <p className="eyebrow">{siteContent.hero.eyebrow}</p>
              ) : null}
              <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                {siteContent.hero.title}
              </h1>
              <div className="hero-signal" aria-hidden="true">
                <div className="hero-signal__window">
                  <div className="hero-signal__header">
                    <span className="hero-signal__dot hero-signal__dot--brand" />
                    <span className="hero-signal__dot hero-signal__dot--muted" />
                    <span className="hero-signal__dot hero-signal__dot--muted" />
                  </div>

                  <div className="hero-signal__code">
                    <span className="hero-signal__line hero-signal__line--strong" />
                    <span className="hero-signal__line hero-signal__line--mid" />
                    <span className="hero-signal__line hero-signal__line--short" />
                  </div>

                  <div className="hero-signal__flow">
                    <span className="hero-signal__beam" />
                    <span className="hero-signal__node hero-signal__node--1" />
                    <span className="hero-signal__node hero-signal__node--2" />
                    <span className="hero-signal__node hero-signal__node--3" />
                    <span className="hero-signal__node hero-signal__node--4" />
                  </div>

                  <div className="hero-signal__chips">
                    <span className="hero-signal__chip hero-signal__chip--strong">AI</span>
                    <span className="hero-signal__chip">Code</span>
                    <span className="hero-signal__chip">Apps</span>
                    <span className="hero-signal__chip">Cloud</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-lg leading-7 text-muted sm:text-xl sm:leading-8">
                {siteContent.hero.subtitle}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a className="button-primary justify-center" href="#contact">
                  {siteContent.hero.primaryCta}
                </a>
                <a className="button-secondary justify-center" href="#services">
                  {siteContent.hero.secondaryCta}
                </a>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2.5 text-left">
                {siteContent.hero.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-full border border-line bg-surface px-3 py-2 text-sm font-semibold text-ink"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="surface-card p-5 sm:p-7">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {siteContent.snapshot.title}
              </h2>
              <div className="mt-5 grid gap-3">
                {siteContent.snapshot.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-[1.5rem] border border-line bg-surface px-4 py-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-ink sm:text-base sm:leading-7">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section
          id="services"
          className={`section-shell section-spacing ${sectionOffsetClass}`}
        >
          <SectionHeader
            eyebrow={siteContent.services.eyebrow}
            title={siteContent.services.title}
            intro={siteContent.services.intro}
          />

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.services.items.map((service) => (
              <article key={service.title} className="surface-card h-full p-5 sm:p-6">
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink sm:text-base sm:leading-7">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="why-us"
          className={`section-shell section-spacing ${sectionOffsetClass}`}
        >
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="surface-card p-5 sm:p-7 lg:p-9">
              <SectionHeader
                eyebrow={siteContent.value.eyebrow}
                title={siteContent.value.title}
              />
              <p className="mt-4 max-w-xl text-sm leading-6 text-ink sm:text-base sm:leading-7">
                {siteContent.value.closing}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {siteContent.value.items.map((item) => (
                <article
                  key={item.title}
                  className={`surface-card h-full p-5 sm:p-6 ${
                    item.stack ? 'md:col-span-2' : ''
                  }`}
                >
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink sm:text-base sm:leading-7">
                    {item.description}
                  </p>
                  {item.stack ? (
                    <ul className="mt-5 grid grid-cols-2 gap-2.5 text-sm lg:grid-cols-4">
                      {item.stack.map((tech) => (
                        <li
                          key={tech.label}
                          className={
                            tech.emphasis === 'high'
                              ? 'flex min-h-11 items-center gap-2 rounded-2xl border border-brand/15 bg-brand-soft px-3.5 py-2.5 font-semibold text-ink'
                              : 'flex min-h-11 items-center gap-2 rounded-2xl border border-line bg-surface px-3.5 py-2.5 font-medium text-muted'
                          }
                        >
                          <span
                            className={
                              tech.emphasis === 'high'
                                ? 'h-2 w-2 rounded-full bg-brand'
                                : 'h-2 w-2 rounded-full bg-slate-300'
                            }
                          />
                          <span>{tech.label}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className={`section-shell section-spacing ${sectionOffsetClass}`}
        >
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
            <div className="surface-card p-5 sm:p-7 lg:p-9">
              <SectionHeader
                eyebrow={siteContent.contact.eyebrow}
                title={siteContent.contact.title}
                intro={siteContent.contact.intro}
              />

              <div className="mt-6 rounded-[1.5rem] border border-dashed border-brand/35 bg-brand-soft/55 px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Email fallback
                </p>
                <a
                  className="mt-2 inline-flex text-lg font-semibold text-ink underline decoration-brand/40 underline-offset-4"
                  href={`mailto:${siteContent.contact.email}`}
                >
                  {siteContent.contact.email}
                </a>
                <p className="mt-2 text-sm leading-6 text-ink">
                  {siteContent.contact.emailNote}
                </p>
              </div>
            </div>

            <ContactForm fallbackEmail={siteContent.contact.email} />
          </div>
        </section>
      </main>

      <footer className="section-shell pb-8 pt-1 sm:pb-10">
        <div className="flex flex-col gap-3 border-t border-line/70 pt-5 text-sm leading-6 text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>
              © {currentYear} {siteContent.companyName}. {siteContent.footerBlurb}
            </p>
            <p className="mt-1 font-display text-base font-semibold tracking-tight text-ink">
              {siteContent.footerTagline}
            </p>
          </div>
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
