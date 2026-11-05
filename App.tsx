import { FormEvent, ReactNode, useState } from 'react'

const capabilities = [
  { icon: 'database', title: 'Data strategy', text: 'Practical roadmaps that turn scattered priorities into an executable data agenda.' },
  { icon: 'layers', title: 'Lakehouse architecture', text: 'Modern, governed platforms designed to scale with your business.' },
  { icon: 'spark', title: 'AI & machine learning', text: 'Responsible AI solutions that move from promising pilots to production value.' },
  { icon: 'chart', title: 'Analytics & BI', text: 'Trusted insights and intuitive experiences that help teams make better decisions.' },
  { icon: 'shield', title: 'Data governance', text: 'Clear ownership, quality, and controls that build confidence in every dataset.' },
  { icon: 'flow', title: 'Data engineering', text: 'Reliable pipelines and products that make high-quality data easier to use.' },
]

const results = [
  { number: '40%', text: 'faster time to insight with a unified analytics foundation' },
  { number: '3×', text: 'increase in data product delivery velocity' },
  { number: '$8M', text: 'in identified annual operational savings' },
  { number: '99.9%', text: 'platform reliability across critical workloads' },
]

const contacts = [
  { initials: 'AS', name: 'Mark Knauss', role: 'Managing Director, Data & AI', email: 'alex.smith@thought-logic.com' },
  { initials: 'MJ', name: 'Crystal Meyers', role: 'Principal, Data Platforms', email: 'maya.johnson@thought-logic.com' },
]

function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const paths: Record<string, ReactNode> = {
    database: <><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></>,
    layers: <><path d="m12 3-9 5 9 5 9-5-9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    spark: <><path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" /></>,
    chart: <><path d="M4 19V9M10 19V5M16 19v-7M22 19H2" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.7 2.8 8.2 7 10 4.2-1.8 7-5.3 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-5" /></>,
    flow: <><rect x="3" y="4" width="6" height="5" rx="1" /><rect x="15" y="15" width="6" height="5" rx="1" /><path d="M9 6.5h4a4 4 0 0 1 4 4V15M15 17.5h-4a4 4 0 0 1-4-4V9" /></>,
    people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3 20c.4-4 2.4-6 6-6s5.6 2 6 6M15 15c3.5 0 5.5 1.7 6 5" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15 9-2 4-4 2 2-4 4-2Z" /></>,
    handshake: <><path d="m8 12 3-3c1-1 2-1 3 0l7 7M3 14l4-4 7 7c1 1 0 3-1.5 2.5L5 12M16 13l-3 3M19 15l-3 3" /></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    linkedin: <><rect x="4" y="9" width="3" height="11" /><path d="M5.5 4.5v.1M11 20V9h3v1.8c1-1.4 2.2-2.1 3.8-2.1 2.3 0 3.2 1.5 3.2 4.2V20h-3v-6.3c0-1.5-.5-2.2-1.7-2.2-1.4 0-2.3 1-2.3 2.8V20h-3Z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    award: <><circle cx="12" cy="9" r="6" /><path d="m8 14-1 7 5-3 5 3-1-7M9.5 9l1.5 1.5L14.5 7" /></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...common}>{paths[name]}</svg>
}

function ThoughtLogicLogo({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className={`tl-logo ${reverse ? 'tl-logo--reverse' : ''}`} aria-label="Thought Logic">
      <span className="tl-logo__mark"><i /><i /><i /></span>
      <span>THOUGHT <b>LOGIC</b></span>
    </div>
  )
}

function DatabricksLogo() {
  return (
    <div className="db-logo" aria-label="Databricks">
      <span className="db-logo__mark"><i /><i /><i /></span>
      <span>databricks · Certified partner</span>
    </div>
  )
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{children}</p>
}

function ArrowLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <a className={`arrow-link ${light ? 'arrow-link--light' : ''}`} href={href}>{children}<Icon name="arrow" size={18} /></a>
}

function App() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <section className="hero" id="top">
        <div className="dot-field" />
        <nav className="nav shell" aria-label="Main navigation">
          <ThoughtLogicLogo reverse />
        </nav>
        <div className="hero__content shell">
          <Eyebrow light>DATABRICKS DATA + AI WORLD TOUR · ATLANTA</Eyebrow>
          <h1>Turn your data ambition<br />into <span>business impact.</span></h1>
          <p className="hero__subhead">Meet the consulting team that connects modern data and AI technology to the outcomes that matter most.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">Let's talk <Icon name="arrow" size={19} /><br /></a>
            <ArrowLink href="#session" light>View our speaker session</ArrowLink>
          </div>
          <div className="lockup" aria-label="Thought Logic and Databricks">
            <DatabricksLogo />
          </div>
        </div>
        <div className="wave" aria-hidden="true">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none"><path d="M0 38C260 102 550 1 814 37c257 35 413 80 626 23v40H0V38Z" /></svg>
        </div>
      </section>

      <section className="section section--white" id="about">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div>
              <Eyebrow>WHO WE ARE</Eyebrow>
              <h2>Functionally-led, digitally enabled.</h2>
            </div>
            <p>We specialize in transforming core business functions with advanced digital solutions that drive measurable business outcomes.<br /><br />Our proven approach delivers where it matters most: real ROI across the business functions that drive your competitive advantage.</p>
          </div>
          <div className="stats">
            <article><strong>13+</strong><span>years helping ambitious organizations transform</span></article>
            <article><strong>92</strong><span>average client NPS across our engagements</span></article>
            <article><strong>80%</strong><span>of our work comes from repeat clients and referrals</span></article>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="expertise">
        <div className="shell">
          <div className="section-heading">
            <Eyebrow>DATA & AI EXPERTISE</Eyebrow>
            <h2>From possibility to <em>performance.</em></h2>
            <p>We help organizations build the strategy, platforms, and habits that make data a durable advantage.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.title}>
                <span className="icon-box"><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="partner-row" aria-label="Technology partners">
          </div>
        </div>
      </section>

      <section className="section session" id="session">
        <div className="shell">
          <div className="session__header">
            <div>
              <Eyebrow>FEATURED SESSION</Eyebrow>
              <h2>Every Utility is a Weather Company: Southern Company's Governed Weather Lakehouse on Databricks<span className="fg-inline-italic" /></h2>
            </div>
            <div className="session__meta">
              <span><Icon name="clock" size={19} /> 3:30 PM</span>
              <span><Icon name="pin" size={19} /> International Salon 8-10</span>
            </div>
          </div>
          <div className="session__body">
            <div className="session__copy">
              <p>Weather drives nearly every decision a utility makes: how much fuel to commit, where storms will knock out power, how much load to expect tomorrow, and what to tell customers. At Southern Company, more than twenty teams were sourcing, storing, and modeling weather data independently, with multiple paid vendor feeds, duplicated copies of public models, and one enterprise meteorologist supporting all of it. In this session, Southern Company and Thought Logic share how they are consolidating that landscape into one governed Weather Lakehouse on Databricks: the business case that won leadership support, the governance model that lets business units keep their models while sharing one forecast of record, the architecture behind the foundation build, and the use cases, from outage prediction to fuel optimization, it unlocks in 2027.</p>
            </div>
            <div className="speakers">
              <article className="speaker-card">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=faces&fit=crop&w=300&h=300&q=85" alt="Jordan Lee, Thought Logic speaker" />
                <div>
                  <p className="speaker-card__company">THOUGHT <b>LOGIC</b></p>
                  <h3>Mark Knauss</h3>
                  <p>Partner, Data & AI</p>
                </div>
              </article>
              <article className="speaker-card">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=faces&fit=crop&w=300&h=300&q=85" alt="Marcus Chen, Databricks speaker" />
                <div>
                  <p className="speaker-card__company speaker-card__company--db">◆ databricks</p>
                  <h3>Shane Powell</h3>
                  <p>Director, Field Engineering</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--navy" id="why">
        <div className="shell">
          <div className="section-heading section-heading--dark">
            <Eyebrow light>WHY THOUGHT LOGIC</Eyebrow>
            <h2>Different by <em>design.</em></h2>
          </div>
          <div className="why-grid">
            <article>
              <span className="why-number">01</span>
              <span className="icon-box icon-box--dark"><Icon name="people" /></span>
              <h3>Senior teams, always</h3>
              <p>The people you meet are the people who lead the work—experienced practitioners, not layers of handoffs.</p>
            </article>
            <article>
              <span className="why-number">02</span>
              <span className="icon-box icon-box--dark"><Icon name="compass" /></span>
              <h3>Business-first thinking</h3>
              <p>We start with the decision, process, or customer outcome—not the technology shopping list.</p>
            </article>
            <article>
              <span className="why-number">03</span>
              <span className="icon-box icon-box--dark"><Icon name="handshake" /></span>
              <h3>Built alongside you</h3>
              <p>We work shoulder to shoulder with your teams, leaving capability and momentum behind.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="results">
        <div className="shell">
          <div className="section-heading section-heading--center">
            <Eyebrow>RESULTS THAT MATTER</Eyebrow>
            <h2>Measured in <em>momentum.</em></h2>
          </div>
          <div className="results-grid">
            {results.map((item) => <article key={item.number}><strong>{item.number}</strong><p>{item.text}</p></article>)}
          </div>
          <p className="results-note">Representative outcomes from recent client engagements.</p>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="shell contact__layout">
          <div>
            <Eyebrow>GET IN TOUCH</Eyebrow>
            <h2>Let’s make your next move <em>count.</em></h2>
            <p className="contact__intro">Tell us what’s on your mind. We’ll connect you with the right member of our team at Data + AI World Tour.</p>
            {submitted ? (
              <div className="success-message" role="status">
                <span className="icon-circle"><Icon name="check" /></span>
                <div><h3>Thanks—we’ll be in touch.</h3><p>A member of our team will follow up shortly to find a time in Atlanta.</p></div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>First name<input required name="firstName" autoComplete="given-name" /></label>
                  <label>Last name<input required name="lastName" autoComplete="family-name" /></label>
                </div>
                <div className="form-row">
                  <label>Company<input required name="company" autoComplete="organization" /></label>
                  <label>Title<input name="title" autoComplete="organization-title" /></label>
                </div>
                <label>Work email<input required type="email" name="email" autoComplete="email" /></label>
                <label>How can we help?<textarea name="message" rows={4} placeholder="Share a little about your priorities..." /></label>
                <button className="button button--primary" type="submit">Start the conversation <Icon name="arrow" size={19} /></button>
              </form>
            )}
          </div>
          <aside className="contact__aside">
            <p className="contact__aside-label">MEET THE TEAM IN ATLANTA</p>
            {contacts.map((contact) => (
              <article className="contact-card" key={contact.email}>
                <span className="avatar">{contact.initials}</span>
                <div><h3>{contact.name}</h3><p>{contact.role}</p><a href={`mailto:${contact.email}`} aria-label={`Email ${contact.name}`}><Icon name="mail" size={18} /></a></div>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <footer>
        <div className="shell footer__top">
          <ThoughtLogicLogo reverse />
          <p>Challenge the Expected.</p>
        </div>
        <div className="shell footer__bottom">
          <p>Atlanta · Dallas· Nashville · Washington, DC</p>
          <div><a href="https://www.linkedin.com" aria-label="Thought Logic on LinkedIn"><Icon name="linkedin" size={20} /></a><a href="#top">Privacy</a><span>© 2025 Thought Logic</span></div>
        </div>
      </footer>
    </main>
  )
}

export default App
