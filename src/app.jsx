import './App.css'

// ── Nav ──────────────────────────────────────────────
function Nav() {
  return (
    <nav className="nav">
      <a href="/" className="nav-logo">
        <img src="/sc-logo.png" alt="SpearCrest Logo" className="nav-logo-img" />
        Spear Crest Digital
      </a>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#industries">Industries</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="btn-primary">Book a Call</button>
    </nav>
  )
}

// ── Audit Widget ──────────────────────────────────────
function AuditWidget() {
  return (
    <div className="audit-widget">
      <div className="audit-input-row">
        <span className="audit-search-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </span>
        <input className="audit-input" type="text" placeholder="e.g. acme-plumbing.com" />
        <button className="audit-submit" aria-label="Run audit">→</button>
      </div>
      <div className="audit-chips">
        {['🔍 SEO','📍 Google Business Profile','📣 Paid Ads','🌡️ Heat-Map Tracking','📊 Lead Reporting'].map(chip => (
          <span key={chip} className="audit-chip">{chip}</span>
        ))}
      </div>
      <div className="audit-footer">
        <span>FREE · NO SIGN-UP · 60 SECONDS</span>
        <span>SC-AUDIT v2.4</span>
      </div>
    </div>
  )
}

// ── Ticker ────────────────────────────────────────────
const TICKER_ITEMS = [
  'Dumpster Rental','Demolition','HVAC','Plumbing','Electrician','ALL HOME SERVICE BUSINESSES', 'Dumpster Rental','Demolition','HVAC','Plumbing','Electrician','ALL HOME SERVICE BUSINESSES',
  'Dumpster Rental','Demolition','HVAC','Plumbing','Electrician','ALL HOME SERVICE BUSINESSES',
]

function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-inner">
        <span className="ticker-item"><span className="ticker-dot"/>SERVING HOME SERVICES ACROSS</span>
        {TICKER_ITEMS.map((item, i) => (
          <span key={i} className="ticker-item"><span className="ticker-dot"/>{item.toUpperCase()}</span>
        ))}
      </div>
    </div>
  )
}

// ── Hero ──────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero">
      <img src="/astronaut.png" alt="" className="hero-astronaut" aria-hidden="true" />
      <div className="hero-badge">
        <span className="hero-badge-new">NEW</span>
        Local SEO for home services
      </div>
      <h1>More leads.<br />Less wasted ad spend.</h1>
      <p className="hero-sub">
        We engineer search, ads, and tracking that put home service businesses
        on the map — literally — and turn local intent into booked jobs.
      </p>
      <div className="hero-actions">
        <button className="btn-primary">Book a Free Strategy Call →</button>
        <button className="btn-secondary">See Services</button>
      </div>
      <AuditWidget />
    </section>
  )
}

// ── Industries ────────────────────────────────────────
const INDUSTRIES = [
  { num:'01', name:'Dumpster Rental', stat:'62% lower cost per lead', desc:'High-intent, short-cycle bookings. Perfect for local search dominance.', color:'#a855f7', icon:'M4 10h24v18H4zM4 10l4-5h16l4 5M11 16h10' },
  { num:'02', name:'Roofing', stat:'+189% organic, yr 1', desc:'Storm season and year-round installs. We capture intent when it peaks.', color:'#ef4444', icon:'M3 16L16 5l13 11M7 16v12h18V16M14 28v-7h4v7' },
  { num:'03', name:'HVAC', stat:'+134% avg leads, yr 1', desc:'Heating, cooling and air quality for residential and commercial properties.', color:'#5b6ef5', icon:'M4 11h14a3 3 0 100-6 3 3 0 00-3 3M4 21h22a3 3 0 110 6 3 3 0 01-3-3M4 16h18' },
  { num:'04', name:'Plumbing', stat:'847 clients served', desc:'Emergency repairs, installs and drain services that book fast.', color:'#06b6d4', icon:'M16 4c4 6 8 10 8 15a8 8 0 11-16 0c0-5 4-9 8-15z' },
  { num:'05', name:'Electrician', stat:'3.2x map-pack wins', desc:'Licensed electricians dominating local search in competitive markets.', color:'#fbbf24', icon:'M18 3L7 18h7l-2 11 11-15h-7l2-11z' },
  { num:'06', name:'Landscaping', stat:'+112% map clicks', desc:'Seasonal and year-round lawn and landscape businesses that need map visibility.', color:'#22c55e', icon:'M27 5c-12 0-20 6-20 16 0 4 2 7 5 7 9 0 15-8 15-23zM7 28L19 16' },
  { num:'07', name:'Painting', stat:'+88% qualified leads', desc:'Interior and exterior painters capturing local project leads before competitors.', color:'#f97316', icon:'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM17 14l5 5-5 5' },
  { num:'08', name:'Junk Removal', stat:'+74% booking rate', desc:'Fast-moving, high-demand service with short sales cycles and repeat customers.', color:'#ec4899', icon:'M6 6l12 12M6 18L18 6M12 2v4M12 18v4M2 12h4M18 12h4' },
]

function Industries() {
  return (
    <section id="industries" className="section">
      <div className="section-head">
        <span className="kicker">WHO WE WORK WITH</span>
        <h2>Built for home service operators.</h2>
        <p>We don't dabble in everything. We obsess over the verticals where local intent moves revenue and we know what works for each.</p>
      </div>
      <div className="ind-grid">
        {INDUSTRIES.map(ind => (
          <div key={ind.name} className="ind-card-h" style={{'--ind-color': ind.color}}>
            <div className="ind-card-glow"/>
            <div className="ind-card-bg-num">{ind.num}</div>
            <div className="ind-card-content">
              <div className="ind-icon-wrap">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <path d={ind.icon}/>
                </svg>
              </div>
              <div className="ind-card-bottom">
                <div className="ind-card-num-label">{ind.num}</div>
                <div className="ind-card-name">{ind.name}</div>
                <div className="ind-card-desc">{ind.desc}</div>
                <div className="ind-card-stat">
                  <span className="ind-stat-dot"/>
                  <span className="ind-stat-text">{ind.stat}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────
function KeywordsMock() {
  const rows = [['hvac repair near me',8,2,78],['ac installation austin',14,4,62],['emergency furnace repair',21,6,54],['hvac company austin',6,1,88],['air conditioner tune up',18,5,48]]
  return (
    <div className="mock-window">
      <div className="mock-bar"><span className="mock-dot"/><span className="mock-dot"/><span className="mock-dot"/><span className="mock-url">/keywords · austin tx</span></div>
      {rows.map(([kw,pos,delta,bar]) => (
        <div className="kw-row" key={kw}>
          <span className="kw-name">{kw}</span>
          <span className="kw-right"><span className="kw-bar"><div style={{width:bar+'%'}}/></span><span className="kw-pos">#{pos}</span><span className="kw-up">↑{delta}</span></span>
        </div>
      ))}
    </div>
  )
}

function GBPMock() {
  return (
    <div className="gbp-mock">
      <div className="gbp-biz"><div className="gbp-icon">A</div><div><div className="gbp-name">Acme HVAC & Cooling</div><div className="gbp-meta">HVAC contractor · Open · Closes 8 PM</div></div></div>
      <div className="gbp-stars">★★★★★ <span>4.9 (412)</span></div>
      <div className="gbp-actions"><span>Call</span><span>Directions</span><span>Website</span></div>
    </div>
  )
}

function AdsMock() {
  return (
    <div className="mock-window">
      <div className="mock-bar"><span className="mock-dot"/><span className="mock-dot"/><span className="mock-dot"/><span className="mock-url">google.com/search?q=plumber+near+me</span></div>
      <div className="ad-row"><div className="ad-label">Ad · acme-plumbing.com</div><div className="ad-title">24/7 Emergency Plumber — On-Site in 60 Min</div><div className="ad-desc">Licensed & bonded. Flat-rate pricing. 4.9★ on 800+ reviews.</div></div>
      <div className="ad-row"><div className="ad-label">Ad · acme-plumbing.com/drains</div><div className="ad-title">Drain Cleaning Special — $89 Any Drain</div><div className="ad-desc">Same-day appointments. Free camera inspection on tough clogs.</div></div>
    </div>
  )
}

function HeatmapMock() {
  const ranks = [[1,1,2,1,2,3,5],[1,1,1,2,2,4,6],[2,1,1,1,3,5,8],[3,2,1,2,4,7,10],[5,4,3,5,8,12,15]]
  const color = r => r<=3?'#5ee0a0':r<=6?'#a4b4ff':r<=10?'#ffd166':'#ff6b6b'
  return (
    <div className="heatmap-mock">
      {ranks.map((row,r) => row.map((rank,c) => (
        <div key={`${r}-${c}`} className="heat-cell" style={{background:color(rank)+'22',border:`1px solid ${color(rank)}55`,color:color(rank)}}>{rank}</div>
      )))}
    </div>
  )
}

function LeadsMock() {
  const leads = [['MJ','Marcus J.','Google · "ac repair near me"','$1,240'],['SR','Sarah R.','LSA · Plumbing','$680'],['DP','Diego P.','Organic · "furnace tune up"','$220'],['EL','Emma L.','GBP · Map pack','$1,890']]
  return (
    <div className="leads-mock">
      <div className="leads-head"><span>This week · 47 leads</span><span className="leads-badge">+22% WoW</span></div>
      {leads.map(([init,name,src,val]) => (
        <div key={name} className="lead-row">
          <span className="lead-av">{init}</span>
          <span className="lead-info"><div className="lead-name">{name}</div><div className="lead-src">{src}</div></span>
          <span className="lead-val">{val}</span>
        </div>
      ))}
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="section-head">
        <span className="kicker">WHAT WE DO</span>
        <h2>The full stack to dominate your service area.</h2>
        <p>Five services, one playbook. Each piece compounds the others — so every dollar works harder than it would alone.</p>
      </div>
      <div className="svc-big">
        <div className="svc-big-body">
          <span className="svc-tag"><span className="svc-dot"/>01 · Targeted SEO</span>
          <h3>Rank where the jobs come from.</h3>
          <p>Hyper-local keyword strategy, on-page rebuilds, technical fixes, and content engineered for "near me" intent. We move you up the map pack and the organic results — in that order.</p>
          <div className="svc-stats">
            <div><div className="stat-num">+147%</div><div className="stat-label">avg organic traffic, yr 1</div></div>
            <div><div className="stat-num">3.2×</div><div className="stat-label">map-pack appearances</div></div>
          </div>
        </div>
        <div className="svc-big-vis"><KeywordsMock /></div>
      </div>
      <div className="svc-grid">
        <div className="svc-card"><span className="svc-tag"><span className="svc-dot"/>02 · Google Business Profile</span><h3>Own the map pack.</h3><p>Weekly posts, photo uploads, review acquisition, Q&A management, and category surgery. The 3-pack is real estate — we make sure you own a parcel.</p><div className="svc-vis"><GBPMock /></div></div>
        <div className="svc-card"><span className="svc-tag"><span className="svc-dot"/>03 · Google Paid Ads</span><h3>Ads that pay rent.</h3><p>Search and LSA campaigns built around call-tracked, profitable keywords. Negative-keyword discipline. Bid strategies tied to your real margin — not vanity clicks.</p><div className="svc-vis"><AdsMock /></div></div>
        <div className="svc-card"><span className="svc-tag"><span className="svc-dot"/>04 · Heat-Map Tracking</span><h3>See your rankings from every block.</h3><p>Grid-based local rank tracking shows exactly where you win — and where competitors edge you out — across your service area. We optimize the cold spots, week by week.</p><div className="svc-vis"><HeatmapMock /></div></div>
        <div className="svc-card"><span className="svc-tag"><span className="svc-dot"/>05 · Lead Reporting</span><h3>Every lead, sourced and priced.</h3><p>Call tracking, form attribution, and weekly reports that tie every booking back to the channel, keyword, and ad that earned it. No more "marketing did something."</p><div className="svc-vis"><LeadsMock /></div></div>
      </div>
    </section>
  )
}

// ── Pricing ───────────────────────────────────────────
const TIERS = [
  { name:'Take Off', price:'1,500', desc:'Get on the map. Built for owner-operators ready to grow past referrals.', features:['Local SEO foundation','Google Business Profile management','Heat-map tracking (1 location)','Monthly performance report','Call & form tracking'], cta:'Start with Launch', featured:false },
  { name:'Orbit', price:'2,500', desc:'Most-picked. SEO + paid working in lockstep with full attribution.', features:['Everything in Launch','Google Paid Ads management','Weekly heat-map snapshots','Lead source attribution','Bi-weekly strategy calls','Up to 3 locations'], cta:'Choose Orbit', featured:true },
  { name:'Apex', price:'5,000', desc:'Multi-location operators serious about owning their market.', features:['Everything in Orbit','Unlimited locations','Dedicated growth strategist','Custom dashboards','Competitor displacement plays','Priority response SLA'], cta:'Talk to Sales', featured:false },
]

function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="section-head">
        <span className="kicker">PRICING</span>
        <h2>Pick where you land.</h2>
        <p>Flat monthly retainers. No long-term contracts. Cancel anytime after the first 90 days — but most clients stay because the math works.</p>
      </div>
      <div className="pricing-grid">
        {TIERS.map(t => (
          <div key={t.name} className={`tier-card${t.featured?' tier-featured':''}`}>
            {t.featured && <span className="tier-badge">MOST PICKED</span>}
            <div className="tier-name">{t.name}</div>
            <div className="tier-desc">{t.desc}</div>
            <div className="tier-price"><span className="tier-dollar">$</span><span className="tier-amt">{t.price}</span><span className="tier-per">/mo</span></div>
            <ul className="tier-features">{t.features.map(f => <li key={f}><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>{f}</li>)}</ul>
            <button className={t.featured?'btn-primary tier-cta':'btn-ghost tier-cta'}>{t.cta}</button>
          </div>
        ))}
      </div>
      <div className="pricing-note">HALF UP FRONT / HALF AT LAUNCH</div>
    </section>
  )
}

// ── Team ──────────────────────────────────────────────
const TEAM = [
  { name:'Ronnie Knuckles', role:'CEO & Founder', color:'#7c3aed', stats:[['Vision','99'],['Leadership','97'],['Strategy','95']], init:'RK', num:'01' },
  { name:'Dakota Straub', role:'Vice President', color:'#2563eb', stats:[['Operations','94'],['Organization','92'],['Execution','96']], init:'DS', num:'02' },
  { name:'Ryan Woosley', role:'Paid Ads Manager', color:'#0891b2', stats:[['ROAS','98'],['Targeting','95'],['Budget IQ','93']], init:'RW', num:'03' },
  { name:'Natasha Urrea', role:'Sales Manager', color:'rgb(155, 178, 8)', stats:[['Communication','98'],['Targeting','95'],['Professionalism','93']], init:'RW', num:'03' },
  { name:'Eden Dasok', role:'Administrative Assistant', color:'#059669', stats:[['Efficiency','97'],['Precision','94'],['Comms','96']], init:'ED', num:'04' },
  { name:'Rhiyana Padua', role:'Lead Developer', color:'#dc2626', stats:[['Code','98'],['Speed','95'],['Problem Solving','97']], init:'RP', num:'05' },
  { name:'Joahan Martos', role:'Lead SEO Specialist', color:'#d97706', stats:[['Rankings','99'],['Keywords','96'],['Local SEO','98']], init:'JM', num:'06' },
  { name:'Sergio Encabo', role:'Developer', color:'#7c3aed', stats:[['Frontend','94'],['Performance','92'],['UX','93']], init:'SE', num:'07' },
]

function AstronautAvatar({ color, init }) {
  return (
    <svg viewBox="0 0 120 120" className="team-avatar" xmlns="http://www.w3.org/2000/svg">
      {/* Space background */}
      <circle cx="60" cy="60" r="60" fill="#0a0f2e"/>
      {/* Stars */}
      <circle cx="15" cy="20" r="1" fill="white" opacity="0.8"/>
      <circle cx="95" cy="15" r="1.5" fill="white" opacity="0.6"/>
      <circle cx="105" cy="45" r="1" fill="white" opacity="0.7"/>
      <circle cx="10" cy="70" r="1" fill="white" opacity="0.5"/>
      <circle cx="100" cy="80" r="1.5" fill="white" opacity="0.6"/>
      <circle cx="20" cy="95" r="1" fill="white" opacity="0.4"/>
      <circle cx="90" cy="100" r="1" fill="white" opacity="0.5"/>
      {/* Suit body */}
      <ellipse cx="60" cy="95" rx="28" ry="20" fill={color} opacity="0.9"/>
      <ellipse cx="60" cy="85" rx="22" ry="18" fill={color}/>
      {/* Suit details */}
      <rect x="52" y="78" width="16" height="10" rx="3" fill="rgba(255,255,255,0.15)"/>
      <circle cx="60" cy="83" r="3" fill="rgba(255,255,255,0.3)"/>
      {/* Helmet outer */}
      <circle cx="60" cy="52" r="26" fill={color} opacity="0.95"/>
      {/* Helmet visor */}
      <circle cx="60" cy="50" r="18" fill="#0a1a3e"/>
      <ellipse cx="60" cy="50" rx="18" ry="18" fill={`url(#visor-${init})`}/>
      {/* Visor gradient */}
      <defs>
        <radialGradient id={`visor-${init}`} cx="40%" cy="35%">
          <stop offset="0%" stopColor="rgba(100,160,255,0.4)"/>
          <stop offset="100%" stopColor="rgba(10,26,62,0.95)"/>
        </radialGradient>
      </defs>
      {/* Initials in visor */}
      <text x="60" y="56" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Space Grotesk, sans-serif" opacity="0.9">{init}</text>
      {/* Helmet shine */}
      <ellipse cx="52" cy="40" rx="7" ry="5" fill="rgba(255,255,255,0.12)" transform="rotate(-20 52 40)"/>
      {/* Helmet ring */}
      <circle cx="60" cy="52" r="26" fill="none" stroke={color} strokeWidth="2" opacity="0.5"/>
      <circle cx="60" cy="52" r="28" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
    </svg>
  )
}

function TeamCard({ member }) {
  return (
    <div className="team-card" style={{'--card-color': member.color}}>
      <div className="team-card-num">{member.num}</div>
      <div className="team-card-avatar">
        <AstronautAvatar color={member.color} init={member.init} />
      </div>
      <div className="team-card-info">
        <div className="team-card-name">{member.name}</div>
        <div className="team-card-role">{member.role}</div>
      </div>
      <div className="team-card-stats">
        {member.stats.map(([label, val]) => (
          <div key={label} className="team-stat">
            <div className="team-stat-label">{label}</div>
            <div className="team-stat-bar">
              <div className="team-stat-fill" style={{width: val+'%', background: member.color}}/>
            </div>
            <div className="team-stat-val">{val}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Team() {
  return (
    <section id="team" className="section">
      <div className="section-head">
        <span className="kicker">MISSION CREW</span>
        <h2>The team behind your growth.</h2>
        <p>Seven specialists. One mission — put your business on the map and keep it there.</p>
      </div>
      <div className="team-grid">
        {TEAM.map(member => <TeamCard key={member.name} member={member} />)}
      </div>
    </section>
  )
}

// ── CTA Band ──────────────────────────────────────────
function CtaBand() {
  return (
    <section id="contact" className="cta-section">
      <div className="cta-band">
        <div className="cta-body">
          <h2>Plant your flag in the search results.</h2>
          <p>30-minute strategy call. We audit your local presence on the spot and tell you, plainly, if we can help. No sales theater.</p>
          <div className="cta-actions">
            <button className="btn-primary">Book a Free Call</button>
            <a href="mailto:hello@spearcrestdigital.com" className="btn-ghost">hello@spearcrestdigital.com</a>
          </div>
        </div>
        <img src="/astronaut.png" alt="" className="cta-astronaut" aria-hidden="true" />
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo"><div className="nav-logo-mark">SC</div><span className="footer-wordmark">SpearCrest.</span></div>
          <p>Local SEO & paid media for home service operators who want the leads, not the runaround.</p>
        </div>
        <div className="footer-cols">
          <div className="footer-col"><h4>SERVICES</h4><a href="#services">Targeted SEO</a><a href="#services">GBP Management</a><a href="#services">Google Paid Ads</a><a href="#services">Heat-Map Tracking</a><a href="#services">Lead Reporting</a></div>
          <div className="footer-col"><h4>INDUSTRIES</h4><a href="#industries">HVAC</a><a href="#industries">Plumbing</a><a href="#industries">Electrical</a><a href="#industries">Roofing</a><a href="#industries">Landscaping</a></div>
          <div className="footer-col"><h4>COMPANY</h4><a href="#">About</a><a href="#">Case Studies</a><a href="#">Blog</a><a href="#contact">Contact</a></div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© SPEARCREST DIGITAL · 2026</span>
        <span>HELLO@SPEARCRESTDIGITAL.COM</span>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Industries />
      <Services />
      <Pricing />
      <Team />
      <CtaBand />
      <Footer />
    </>
  )
}

export default App
