import './index.css'

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

function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge">
        <span className="hero-badge-new">NEW</span>
        Local SEO for home services
      </div>
      <h1>More leads.<br />Less wasted ad spend.</h1>
      <p className="hero-sub">
        We engineer search, ads, and tracking that put home service
        businesses on the map and turn local intent into booked jobs.
      </p>
      <div className="hero-actions">
        <button className="btn-primary">Book a Free Strategy Call →</button>
        <button className="btn-secondary">See Services</button>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Nav />
      <Hero />
    </>
  )
}

export default App
