import { useEffect, useState, useRef } from 'react'
import './App.css'

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

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
      <div style={{display:'flex', gap:'8px', alignItems:'center'}}>
        <a href="/onboard" className="btn-ghost">Client Onboarding</a>
        <button className="btn-primary">Book a Call</button>
      </div>
    </nav>
  )
}

function AuditWidget() {
  const [form, setForm] = useState({ name:'', phone:'', business:'' })
  const [sent, setSent] = useState(false)
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async (e) => {
    e.preventDefault()
    try {
      await fetch('https://formspree.io/f/xnjweaqz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch (err) { console.error(err) }
    setSent(true)
  }

  return (
    <div className="audit-widget">
      {sent ? (
        <div className="cta-success">
          <span className="cta-success-icon">🚀</span>
          <div>
            <div className="cta-success-title">You're on the launchpad.</div>
            <div className="cta-success-sub">We'll reach out within 24 hours to schedule your free audit.</div>
          </div>
        </div>
      ) : (
        <form onSubmit={submit}>
          <div className="audit-form-fields">
            <input className="audit-field-input" name="name" placeholder="Your Name" value={form.name} onChange={handle} required />
            <input className="audit-field-input" name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handle} required />
            <input className="audit-field-input" name="business" placeholder="Business Name" value={form.business} onChange={handle} required />
          </div>
          <button type="submit" className="btn-primary" style={{width:'100%', justifyContent:'center', padding:'13px', marginTop:'12px'}}>
            Get My Free SEO Audit →
          </button>
          <div className="audit-footer" style={{marginTop:'16px'}}>
            <span>FREE · NO SIGN-UP · 60 SECONDS</span>
            <span>SC-AUDIT v2.4</span>
          </div>
        </form>
      )}
    </div>
  )
}

const TICKER_ITEMS = [
  'Texas','Oklahoma','Arkansas','Colorado','Arizona','Nevada','Florida','Georgia','Tennessee','Missouri','Kentucky','Iowa','Illinois','South Carolina','North Carolina','New Jersey','New Hampshire','Ohio',
  'Texas','Oklahoma','Arkansas','Colorado','Arizona','Nevada','Florida','Georgia','Tennessee','Missouri','Kentucky','Iowa','Illinois','South Carolina','North Carolina','New Jersey','New Hampshire','Ohio',
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

function Hero() {
  return (
    <section className="hero">
      <img src="/astronaut.png" alt="" className="hero-astronaut" aria-hidden="true" />
      <div className="hero-badge reveal">
        <span className="hero-badge-new">NEW</span>
        Local SEO for home services
      </div>
      <h1 className="reveal reveal-delay-1">More leads.<br />Less wasted ad spend.</h1>
      <p className="hero-sub reveal reveal-delay-2">
        We engineer search, ads, and tracking that put home service businesses
        on the map and turn local intent into booked jobs.
      </p>
      <div className="hero-actions reveal reveal-delay-3">
        <button className="btn-primary">Book a Free Strategy Call →</button>
        <button className="btn-secondary">See Services</button>
      </div>
      <AuditWidget />
    </section>
  )
}

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
      <div className="section-head reveal">
        <span className="kicker">WHO WE WORK WITH</span>
        <h2>Built for home service operators.</h2>
        <p>We don't dabble in everything. We obsess over the verticals where local intent moves revenue and we know what works for each.</p>
      </div>
      <div className="ind-grid">
        {INDUSTRIES.map((ind, i) => (
          <div key={ind.name} className={`ind-card-h reveal reveal-delay-${(i % 4) + 1}`} style={{'--ind-color': ind.color}}>
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

function DumpsterRental() {
  return (
    <section id="dumpster-rental" className="section">
      <div className="section-head reveal">
        <span className="kicker">DUMPSTER RENTAL SPECIALISTS</span>
        <h2>We've cornered the dumpster rental market.</h2>
        <p>More dumpster rental clients rank #1 in their city than any other agency. Here's what that looks like in numbers.</p>
      </div>
      <div className="dr-stats reveal">
        {[
          { num:'47+', label:'dumpster rental clients' },
          { num:'62%', label:'avg lower cost per lead' },
          { num:'#1', label:'rank in 30+ cities' },
          { num:'4.2x', label:'avg ROAS on paid ads' },
        ].map(s => (
          <div key={s.label} className="dr-stat-card">
            <div className="dr-stat-num">{s.num}</div>
            <div className="dr-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="dr-case reveal">
        <div className="dr-case-body">
          <span className="dr-case-tag">Case Study — Austin, TX</span>
          <h3>From page 3 to map pack #1 in 90 days.</h3>
          <p>Lone Star Dumpsters was spending $4,200/mo on Google Ads with a 12% conversion rate. We rebuilt their local SEO foundation, restructured their ad campaigns, and optimized their GBP. Within 90 days they owned the map pack for every high-intent keyword in Austin.</p>
          <div className="dr-case-metrics">
            {[
              { num:'+312%', label:'organic traffic' },
              { num:'$41', label:'cost per lead (was $148)' },
              { num:'89%', label:'more booked jobs' },
              { num:'4.9★', label:'GBP rating (was 3.8)' },
            ].map(m => (
              <div key={m.label} className="dr-metric">
                <div className="dr-metric-num">{m.num}</div>
                <div className="dr-metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="dr-case-chart">
          <div className="dr-chart-title">Keyword rankings after 90 days</div>
          {[
            { kw:'dumpster rental austin', rank:'#1', pct:95 },
            { kw:'roll off rental', rank:'#1', pct:90 },
            { kw:'10 yard dumpster', rank:'#2', pct:80 },
            { kw:'construction cleanup', rank:'#2', pct:75 },
            { kw:'same day dumpster', rank:'#3', pct:65 },
          ].map(r => (
            <div key={r.kw} className="dr-bar-row">
              <span className="dr-bar-name">{r.kw}</span>
              <div className="dr-bar-track"><div className="dr-bar-fill" style={{width:r.pct+'%'}}/></div>
              <span className="dr-bar-rank">{r.rank}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="dr-testimonials">
        {[
          { quote:'"We went from fighting for scraps to owning our market. Best investment we\'ve made in 10 years of business."', name:'Jake Miller', company:'Miller Roll-Off, Dallas TX', init:'JM', color:'#7c3aed' },
          { quote:'"Our phone rings constantly now. We had to hire two more drivers in 6 months. SpearCrest delivered exactly what they promised."', name:'Sarah Reynolds', company:'Lone Star Dumpsters, Austin TX', init:'SR', color:'#059669' },
          { quote:'"Cut our cost per lead by 70% in 60 days. I wish we\'d found them years ago. No fluff, just results."', name:'Tony Cruz', company:'Cruz Disposal, San Antonio TX', init:'TC', color:'#d97706' },
        ].map((t, i) => (
          <div key={t.name} className={`dr-testi reveal reveal-delay-${i+1}`}>
            <div className="dr-testi-stars">★★★★★</div>
            <p className="dr-testi-quote">{t.quote}</p>
            <div className="dr-testi-author">
              <div className="dr-testi-av" style={{background:t.color+'22', border:`1px solid ${t.color}55`, color:t.color}}>{t.init}</div>
              <div>
                <div className="dr-testi-name">{t.name}</div>
                <div className="dr-testi-co">{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dr-cta reveal">
        <div>
          <div className="dr-cta-title">Own dumpster rental in your city.</div>
          <div className="dr-cta-sub">Free 30-minute audit — we'll show you exactly where you're losing jobs.</div>
        </div>
        <button className="btn-primary">Book a Free Audit →</button>
      </div>
    </section>
  )
}

const REVIEWS = [
  { name:'Jake Miller', company:'Miller Roll-Off', location:'Dallas, TX', industry:'Dumpster Rental', rating:5, init:'JM', color:'#7c3aed', quote:'We went from fighting for scraps to owning our market. Best investment we\'ve made in 10 years of business. Phone rings off the hook now.' },
  { name:'Sarah Reynolds', company:'Lone Star Dumpsters', location:'Austin, TX', industry:'Dumpster Rental', rating:5, init:'SR', color:'#059669', quote:'Our phone rings constantly now. We had to hire two more drivers in 6 months. SpearCrest delivered exactly what they promised — no fluff.' },
  { name:'Tony Cruz', company:'Cruz Disposal', location:'San Antonio, TX', industry:'Dumpster Rental', rating:5, init:'TC', color:'#d97706', quote:'Cut our cost per lead by 70% in 60 days. I wish we\'d found them years ago. The ROI is insane compared to what we were doing before.' },
  { name:'Marcus Johnson', company:'Johnson HVAC', location:'Oklahoma City, OK', industry:'HVAC', rating:5, init:'MJ', color:'#0891b2', quote:'Went from page 4 to the map pack in under 90 days. Our slow season this year was busier than our peak season last year. Incredible results.' },
  { name:'Linda Park', company:'Park Roofing Co', location:'Denver, CO', industry:'Roofing', rating:5, init:'LP', color:'#ef4444', quote:'SpearCrest rebuilt our entire digital presence. Within 6 months we were ranking #1 for every major keyword in our city. Game changer.' },
  { name:'Derek Williams', company:'Williams Plumbing', location:'Houston, TX', industry:'Plumbing', rating:5, init:'DW', color:'#06b6d4', quote:'The heat map tracking alone was worth the investment. We could see exactly where we were losing jobs and fix it. Revenue up 89% year over year.' },
  { name:'Amy Chen', company:'Chen Landscaping', location:'Phoenix, AZ', industry:'Landscaping', rating:5, init:'AC', color:'#22c55e', quote:'I was skeptical at first but the results don\'t lie. We\'re now the #1 landscaping company in Phoenix on Google Maps. Unbelievable.' },
  { name:'Robert Torres', company:'Torres Electric', location:'Las Vegas, NV', industry:'Electrical', rating:5, init:'RT', color:'#fbbf24', quote:'Best marketing agency we\'ve ever worked with. They actually understand the home service business. Leads are up 140% since we started.' },
]

function ReviewsCarousel() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const total = REVIEWS.length
  const visible = 3

  const prev = () => setActive(a => (a - 1 + total) % total)
  const next = () => setActive(a => (a + 1) % total)

  const getVisible = () => {
    const items = []
    for (let i = 0; i < visible; i++) {
      items.push(REVIEWS[(active + i) % total])
    }
    return items
  }

  return (
    <section id="reviews" className="section">
      <div className="section-head reveal">
        <span className="kicker">CLIENT REVIEWS</span>
        <h2>Don't take our word for it.</h2>
        <p>Real results from real home service operators across the country. These are their words.</p>
      </div>
      <div className="reviews-summary reveal">
        <div className="reviews-score">
          <div className="reviews-score-num">4.9</div>
          <div className="reviews-score-stars">★★★★★</div>
          <div className="reviews-score-label">Average Rating</div>
        </div>
        <div className="reviews-divider"/>
        <div className="reviews-breakdown">
          {[['200+', 'Total Reviews'], ['98%', 'Would Recommend'], ['47', 'States Served']].map(([num, label]) => (
            <div key={label} className="reviews-breakdown-item">
              <div className="reviews-breakdown-num">{num}</div>
              <div className="reviews-breakdown-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel reveal">
        <div className="carousel-track" ref={trackRef}>
          {getVisible().map((r, i) => (
            <div key={`${r.name}-${i}`} className="review-card" style={{'--r-color': r.color}}>
              <div className="review-card-top">
                <div className="review-stars">{'★'.repeat(r.rating)}</div>
                <div className="review-industry-tag" style={{color: r.color, background: r.color+'18', border: `1px solid ${r.color}33`}}>{r.industry}</div>
              </div>
              <p className="review-quote">"{r.quote}"</p>
              <div className="review-author">
                <div className="review-av" style={{background: r.color+'22', border: `1px solid ${r.color}55`, color: r.color}}>{r.init}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-meta">{r.company} · {r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prev} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <div className="carousel-dots">
            {REVIEWS.map((_, i) => (
              <button key={i} className={`carousel-dot${i === active ? ' active' : ''}`} onClick={() => setActive(i)} aria-label={`Review ${i+1}`}/>
            ))}
          </div>
          <button className="carousel-btn" onClick={next} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

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
      <div className="section-head reveal">
        <span className="kicker">WHAT WE DO</span>
        <h2>The full stack to dominate your service area.</h2>
        <p>Five services, one playbook. Each piece compounds the others — so every dollar works harder than it would alone.</p>
      </div>
      <div className="svc-big reveal">
        <div className="svc-big-body">
          <span className="svc-tag"><span className="svc-dot"/>01 · Targeted SEO</span>
          <h3>Rank where the jobs come from.</h3>
          <p>Hyper-local keyword strategy, on-page rebuilds, technical fixes, and content engineered for "near me" intent. We move you up the map pack and the organic results — in that order.</p>
          <div className="svc-stats">
            <div><div className="stat-num">+147%</div><div className="stat-label">avg organic traffic, yr 1</div></div>
            <div><div className="stat-num">3.2x</div><div className="stat-label">map-pack appearances</div></div>
          </div>
        </div>
        <div className="svc-big-vis"><KeywordsMock /></div>
      </div>
      <div className="svc-grid">
        <div className="svc-card reveal reveal-delay-1"><span className="svc-tag"><span className="svc-dot"/>02 · Google Business Profile</span><h3>Own the map pack.</h3><p>Weekly posts, photo uploads, review acquisition, Q&A management, and category surgery. The 3-pack is real estate — we make sure you own a parcel.</p><div className="svc-vis"><GBPMock /></div></div>
        <div className="svc-card reveal reveal-delay-2"><span className="svc-tag"><span className="svc-dot"/>03 · Google Paid Ads</span><h3>Ads that pay rent.</h3><p>Search and LSA campaigns built around call-tracked, profitable keywords. Negative-keyword discipline. Bid strategies tied to your real margin — not vanity clicks.</p><div className="svc-vis"><AdsMock /></div></div>
        <div className="svc-card reveal reveal-delay-3"><span className="svc-tag"><span className="svc-dot"/>04 · Heat-Map Tracking</span><h3>See your rankings from every block.</h3><p>Grid-based local rank tracking shows exactly where you win — and where competitors edge you out — across your service area. We optimize the cold spots, week by week.</p><div className="svc-vis"><HeatmapMock /></div></div>
        <div className="svc-card reveal reveal-delay-4"><span className="svc-tag"><span className="svc-dot"/>05 · Lead Reporting</span><h3>Every lead, sourced and priced.</h3><p>Call tracking, form attribution, and weekly reports that tie every booking back to the channel, keyword, and ad that earned it. No more "marketing did something."</p><div className="svc-vis"><LeadsMock /></div></div>
      </div>
    </section>
  )
}

const TIERS = [
  { name:'Launch', price:'1,500', desc:'Get on the map. Built for owner-operators ready to grow past referrals.', features:['Local SEO foundation','Google Business Profile management','Heat-map tracking (1 location)','Monthly performance report','Call & form tracking'], cta:'Start with Launch', featured:false },
  { name:'Orbit', price:'3,200', desc:'Most-picked. SEO + paid working in lockstep with full attribution.', features:['Everything in Launch','Google Paid Ads management','Weekly heat-map snapshots','Lead source attribution','Bi-weekly strategy calls','Up to 3 locations'], cta:'Choose Orbit', featured:true },
  { name:'Apex', price:'5,800', desc:'Multi-location operators serious about owning their market.', features:['Everything in Orbit','Unlimited locations','Dedicated growth strategist','Custom dashboards','Competitor displacement plays','Priority response SLA'], cta:'Talk to Sales', featured:false },
]

function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="section-head reveal">
        <span className="kicker">PRICING</span>
        <h2>Pick your trajectory.</h2>
        <p>Flat monthly retainers. No long-term contracts. Cancel anytime after the first 90 days — but most clients stay because the math works.</p>
      </div>
      <div className="pricing-grid">
        {TIERS.map((t, i) => (
          <div key={t.name} className={`tier-card reveal reveal-delay-${i+1}${t.featured?' tier-featured':''}`}>
            {t.featured && <span className="tier-badge">MOST PICKED</span>}
            <div className="tier-name">{t.name}</div>
            <div className="tier-desc">{t.desc}</div>
            <div className="tier-price"><span className="tier-dollar">$</span><span className="tier-amt">{t.price}</span><span className="tier-per">/mo</span></div>
            <ul className="tier-features">{t.features.map(f => <li key={f}><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>{f}</li>)}</ul>
            <button className={t.featured?'btn-primary tier-cta':'btn-ghost tier-cta'}>{t.cta}</button>
          </div>
        ))}
      </div>
      <div className="pricing-note reveal">ALL TIERS · ONE-TIME SETUP $1,000 · WAIVED ON 6-MONTH COMMIT</div>
    </section>
  )
}

const TEAM = [
  { name:'Ronnie Knuckles', role:'CEO & Founder', color:'#7c3aed', stats:[['Vision','99'],['Leadership','97'],['Strategy','95']], init:'RK', num:'01' },
  { name:'Dakota Straub', role:'Vice President', color:'#2563eb', stats:[['Operations','94'],['Growth','92'],['Execution','96']], init:'DS', num:'02' },
  { name:'Ryan Woosley', role:'Paid Ads Manager', color:'#0891b2', stats:[['ROAS','98'],['Targeting','95'],['Budget IQ','93']], init:'RW', num:'03' },
  { name:'Eden Dasok', role:'Administrative Assistant', color:'#059669', stats:[['Efficiency','97'],['Precision','94'],['Comms','96']], init:'ED', num:'04' },
  { name:'Rhiyana Padua', role:'Lead Developer', color:'#dc2626', stats:[['Code','98'],['Speed','95'],['Problem Solving','97']], init:'RP', num:'05' },
  { name:'Joahan Martos', role:'Lead SEO Specialist', color:'#d97706', stats:[['Rankings','99'],['Keywords','96'],['Local SEO','98']], init:'JM', num:'06' },
  { name:'Sergio Encabo', role:'Developer', color:'#7c3aed', stats:[['Frontend','94'],['Performance','92'],['UX','93']], init:'SE', num:'07' },
]

function AstronautAvatar({ color, init }) {
  return (
    <svg viewBox="0 0 120 120" className="team-avatar" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#0a0f2e"/>
      <circle cx="15" cy="20" r="1" fill="white" opacity="0.8"/>
      <circle cx="95" cy="15" r="1.5" fill="white" opacity="0.6"/>
      <circle cx="105" cy="45" r="1" fill="white" opacity="0.7"/>
      <circle cx="10" cy="70" r="1" fill="white" opacity="0.5"/>
      <circle cx="100" cy="80" r="1.5" fill="white" opacity="0.6"/>
      <ellipse cx="60" cy="95" rx="28" ry="20" fill={color} opacity="0.9"/>
      <ellipse cx="60" cy="85" rx="22" ry="18" fill={color}/>
      <rect x="52" y="78" width="16" height="10" rx="3" fill="rgba(255,255,255,0.15)"/>
      <circle cx="60" cy="83" r="3" fill="rgba(255,255,255,0.3)"/>
      <circle cx="60" cy="52" r="26" fill={color} opacity="0.95"/>
      <circle cx="60" cy="50" r="18" fill="#0a1a3e"/>
      <defs>
        <radialGradient id={`v-${init}`} cx="40%" cy="35%">
          <stop offset="0%" stopColor="rgba(100,160,255,0.4)"/>
          <stop offset="100%" stopColor="rgba(10,26,62,0.95)"/>
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="50" rx="18" ry="18" fill={`url(#v-${init})`}/>
      <text x="60" y="56" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Space Grotesk, sans-serif" opacity="0.9">{init}</text>
      <ellipse cx="52" cy="40" rx="7" ry="5" fill="rgba(255,255,255,0.12)" transform="rotate(-20 52 40)"/>
      <circle cx="60" cy="52" r="26" fill="none" stroke={color} strokeWidth="2" opacity="0.5"/>
    </svg>
  )
}

function TeamCard({ member, index }) {
  return (
    <div className={`team-card reveal reveal-delay-${(index % 4) + 1}`} style={{'--card-color': member.color}}>
      <div className="team-card-num">{member.num}</div>
      <div className="team-card-avatar"><AstronautAvatar color={member.color} init={member.init} /></div>
      <div className="team-card-info">
        <div className="team-card-name">{member.name}</div>
        <div className="team-card-role">{member.role}</div>
      </div>
      <div className="team-card-stats">
        {member.stats.map(([label, val]) => (
          <div key={label} className="team-stat">
            <div className="team-stat-label">{label}</div>
            <div className="team-stat-bar"><div className="team-stat-fill" style={{width:val+'%', background:member.color}}/></div>
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
      <div className="section-head reveal">
        <span className="kicker">MISSION CREW</span>
        <h2>The team behind your growth.</h2>
        <p>Seven specialists. One mission — put your business on the map and keep it there.</p>
      </div>
      <div className="team-grid">
        {TEAM.map((member, i) => <TeamCard key={member.name} member={member} index={i} />)}
      </div>
    </section>
  )
}

const PORTFOLIO = [
  { name:'American AF Dumpsters', industry:'Dumpster Rental', url:'#', color:'#ef4444', tag:'MOBILE-FIRST RESPONSIVE' },
  { name:'Bradley Operations', industry:'Dumpster Rental', url:'#', color:'#f97316', tag:'LOCAL SEO OPTIMIZED' },
  { name:'Operation Dumpster', industry:'Dumpster Rental', url:'#', color:'#22c55e', tag:'CONVERSION FOCUSED' },
  { name:'Lone Star HVAC', industry:'HVAC', url:'#', color:'#5b6ef5', tag:'MAP PACK #1' },
  { name:'Elite Roofing Co', industry:'Roofing', url:'#', color:'#a855f7', tag:'MOBILE-FIRST RESPONSIVE' },
  { name:'Cruz Plumbing', industry:'Plumbing', url:'#', color:'#06b6d4', tag:'LOCAL SEO OPTIMIZED' },
]

function WebBuilds() {
  return (
    <section id="web-builds" className="section">
      <div className="section-head reveal">
        <span className="kicker">WEB DESIGN & DEVELOPMENT</span>
        <h2>Sites built to rank, convert, and close.</h2>
        <p>We don't just run your marketing — we build the foundation it runs on. Every site is engineered for speed, local SEO, and one thing: booked jobs.</p>
      </div>
      <div className="portfolio-stats reveal">
        {[
          { num:'$27M+', label:'client revenue generated in 2025' },
          { num:'70%', label:'rank page 1 without ongoing SEO' },
          { num:'2–14', label:'day delivery (industry avg: 60–90)' },
          { num:'3%', label:'of all US dumpster businesses are clients' },
        ].map(s => (
          <div key={s.label} className="portfolio-stat">
            <div className="portfolio-stat-num">{s.num}</div>
            <div className="portfolio-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="portfolio-grid">
        {PORTFOLIO.map((p, i) => (
          <div key={p.name} className={`portfolio-card reveal reveal-delay-${(i % 2) + 1}`} style={{'--p-color': p.color}}>
            <div className="portfolio-screen">
              <div className="portfolio-screen-inner">
                <div className="portfolio-mock-nav"/>
                <div className="portfolio-mock-hero" style={{background:`linear-gradient(135deg, ${p.color}33 0%, rgba(8,12,26,0.9) 100%)`}}>
                  <div className="portfolio-mock-lines">
                    <div className="portfolio-mock-line" style={{width:'60%', background:p.color+'66'}}/>
                    <div className="portfolio-mock-line" style={{width:'40%', background:p.color+'44'}}/>
                    <div className="portfolio-mock-line" style={{width:'80px', height:'28px', borderRadius:'6px', background:p.color}}/>
                  </div>
                </div>
                <div className="portfolio-mock-body">
                  {[70,50,85,60].map((w,j) => (
                    <div key={j} className="portfolio-mock-line" style={{width:w+'%'}}/>
                  ))}
                </div>
              </div>
            </div>
            <div className="portfolio-card-footer">
              <div>
                <div className="portfolio-tag" style={{color:p.color, background:p.color+'18', border:`1px solid ${p.color}33`}}>{p.tag}</div>
                <div className="portfolio-name">{p.name}</div>
                <div className="portfolio-industry">{p.industry}</div>
              </div>
              <a href={p.url} className="portfolio-visit">
                VISIT SITE
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function CtaBand() {
  const [form, setForm] = useState({ name:'', business:'', email:'', phone:'', city:'', state:'' })
  const [sent, setSent] = useState(false)
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async (e) => {
    e.preventDefault()
    try {
      await fetch('https://formspree.io/f/mgodgwvw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch (err) { console.error(err) }
    setSent(true)
  }

  return (
    <section id="contact" className="cta-section">
      <div className="cta-band reveal">
        <div className="cta-body">
          <h2>Plant your flag in the search results.</h2>
          <p>30-minute strategy call. We audit your local presence on the spot and tell you, plainly, if we can help. No sales theater.</p>
          {sent ? (
            <div className="cta-success">
              <span className="cta-success-icon">🚀</span>
              <div>
                <div className="cta-success-title">You're on the launchpad.</div>
                <div className="cta-success-sub">We'll reach out within 24 hours to schedule your free audit.</div>
              </div>
            </div>
          ) : (
            <form className="cta-form" onSubmit={submit}>
              <div className="cta-form-row">
                <input className="cta-input" name="name" placeholder="Your Name" value={form.name} onChange={handle} required />
                <input className="cta-input" name="business" placeholder="Business Name" value={form.business} onChange={handle} required />
              </div>
              <div className="cta-form-row">
                <input className="cta-input" name="email" type="email" placeholder="Email Address" value={form.email} onChange={handle} required />
                <input className="cta-input" name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handle} required />
              </div>
              <div className="cta-form-row">
                <input className="cta-input" name="city" placeholder="City" value={form.city} onChange={handle} required />
                <input className="cta-input" name="state" placeholder="State" value={form.state} onChange={handle} required />
              </div>
              <button type="submit" className="btn-primary" style={{width:'100%', justifyContent:'center', padding:'13px'}}>Book a Free Strategy Call →</button>
            </form>
          )}
        </div>
        <img src="/astronaut.png" alt="" className="cta-astronaut" aria-hidden="true" />
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer reveal">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/sc-logo.png" alt="SpearCrest" className="nav-logo-img" />
            <span className="footer-wordmark">SpearCrest.</span>
          </div>
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

function App() {
  useReveal()
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Industries />
      <DumpsterRental />
      <ReviewsCarousel />
      <Services />
      <Pricing />
      <Team />
      <WebBuilds />
      <CtaBand />
      <Footer />
    </>
  )
}

export default App
