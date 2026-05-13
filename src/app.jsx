import './App.css'

function Nav() {
  return (
    <nav className="nav">
      <a href="/" className="nav-logo">
        <div className="nav-logo-mark">SC</div>
        SpearCrest.
      </a>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#industries">Industries</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="btn-primary">Book a Call</button>
    </nav>
  )
}

function AuditWidget() {
  return (
    <div className="audit-widget">
      <div className="audit-input-row">
        <span className="audit-search-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </span>
        <input
          className="audit-input"
          type="text"
          placeholder="e.g. acme-plumbing.com"
        />
        <button className="audit-submit" aria-label="Run audit">→</button>
      </div>
      <div className="audit-chips">
        {['🔍 SEO', '📍 Google Business Profile', '📣 Paid Ads', '🌡️ Heat-Map Tracking', '📊 Lead Reporting'].map(chip => (
          <span key={chip} className="audit-chip">{chip}</span>
        ))}
      </div>
      <div className="audit-footer">
        <span>FREE · ENTER EMAIL ADDRESS</span>
        <span>SC-AUDIT v2.4</span>
      </div>
    </div>
  )
}

const TICKER_ITEMS = [
  'Texas', 'Oklahoma', 'Arkansas', 'Colorado', 'Arizona',
  'Nevada', 'Florida', 'Georgia', 'Tennessee', 'Missouri', '+ 12 States',
  'Texas', 'Oklahoma', 'Arkansas', 'Colorado', 'Arizona',
  'Nevada', 'Florida', 'Georgia', 'Tennessee', 'Missouri', '+ 12 States',
]

function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-inner">
        <span className="ticker-item">
          <span className="ticker-dot" />
          SERVING HOME SERVICES ACROSS
        </span>
        {TICKER_ITEMS.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <img
        src="/astronaut.png"
        alt=""
        className="hero-astronaut"
        aria-hidden="true"
      />
      <div className="hero-badge">
        <span className="hero-badge-new">NEW</span>
        Local SEO for home services
      </div>
      <h1>
        Marketing that actually<br />
        shows up for your business.
      </h1>
      <p className="hero-sub">
        We engineer search, ads, and tracking that put home service
        businesses on the map — literally — and turn local intent
        into booked jobs.
      </p>
      <div className="hero-actions">
        <button className="btn-primary">Book a Free Strategy Call →</button>
        <button className="btn-secondary">See Services</button>
      </div>
      <AuditWidget />
    </section>
  )
}

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
    </>
  )
}

export default App