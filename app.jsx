/* SpearCrest Digital — homepage app */
const { useState, useEffect, useRef } = React;

/* ---------- SC logo mark ---------- */
function SCLogo({ size = 36, hovered }) {
  // Stylized SC with arrow piercing through.
  return (
    <svg className="sc-mark" viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
      <defs>
        <linearGradient id="sc-border" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a1255" />
          <stop offset="1" stopColor="#4533ff" />
        </linearGradient>
        <linearGradient id="sc-c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7a6bff" />
          <stop offset="1" stopColor="#4533ff" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="58" height="58" rx="12" fill="none" stroke="url(#sc-border)" strokeWidth="2.5" />
      {/* S */}
      <path d="M30 18 C 22 18, 18 22, 18 26 C 18 30, 22 31, 28 32 C 34 33, 38 34, 38 38 C 38 42, 34 46, 26 46"
            stroke="#eef0ff" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* C */}
      <path d="M46 24 C 42 21, 36 22, 34 26 C 32 30, 32 36, 34 40 C 36 44, 42 45, 46 42"
            stroke="url(#sc-c)" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* arrow piercing */}
      <g>
        <line x1="14" y1="50" x2="50" y2="14" stroke="#eef0ff" strokeWidth="2" strokeLinecap="round" />
        <polygon points="50,14 44,15 47,18" fill="#eef0ff" />
        <polygon points="14,50 20,49 17,46" fill="#7a6bff" />
      </g>
    </svg>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="brand">
          <SCLogo />
          <span className="wordmark">SpearCrest<span>.</span></span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="btn btn-primary">Book a Call</a>
      </div>
    </nav>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const wrapRef = useRef(null);
  const astroRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (!astroRef.current || !wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const mx = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const my = (e.clientY - rect.top - rect.height / 2) / rect.height;
      astroRef.current.style.transform =
        `translate(${mx * 24}px, ${my * 18}px) rotate(${mx * 4}deg)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <header ref={wrapRef} className="hero shell">
      <div className="astronaut float-anim" ref={astroRef}>
        <img src="assets/astronaut.png" alt="" />
      </div>
      <div className="eyebrow">
        <span className="tag">New</span>
        Local SEO for home services
      </div>
      <h1>
        More leads.<br />
        <span className="accent">Less wasted ad spend.</span>
      </h1>
      <p className="hero-sub">
        We engineer search, ads, and tracking that put home service businesses
        on the map — literally — and turn local intent into booked jobs.
      </p>
      <div className="hero-ctas">
        <a href="#contact" className="btn btn-primary">
          Book a Free Strategy Call
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
        <a href="#services" className="btn btn-ghost">See Services</a>
      </div>
      <AuditWidget />
      <div className="logos">
        <span>SERVING HOME SERVICES ACROSS</span>
        <span className="dot"></span>
        <span>TEXAS</span>
        <span className="dot"></span>
        <span>OKLAHOMA</span>
        <span className="dot"></span>
        <span>ARKANSAS</span>
        <span className="dot"></span>
        <span>+ 12 STATES</span>
      </div>
    </header>
  );
}

function AuditWidget() {
  const [value, setValue] = useState('');
  const [sent, setSent] = useState(false);
  const placeholders = [
    "Enter your business name or website…",
    "e.g. acme-plumbing.com",
    "We'll audit your local SEO in 60 seconds…",
  ];
  const [pIdx, setPIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPIdx(i => (i + 1) % placeholders.length), 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <form className="audit" onSubmit={(e) => { e.preventDefault(); if (value.trim()) setSent(true); }}>
      <div className="audit-row">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{marginLeft:6,color:'var(--ink-3)'}}><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        <input
          className="audit-input"
          placeholder={sent ? "Audit queued — we'll email it within 24 hours." : placeholders[pIdx]}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={sent}
        />
        <button type="submit" className="audit-send" aria-label="Run audit">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      <div className="audit-chips">
        {[
          ['SEO', '🔭'],
          ['Google Business Profile', '📍'],
          ['Paid Ads', '🎯'],
          ['Heat-Map Tracking', '🌡'],
          ['Lead Reporting', '📈'],
        ].map(([t,i]) => (
          <button key={t} type="button" className="chip" onClick={() => setValue(t)}>
            <span style={{fontSize:11}}>{i}</span>{t}
          </button>
        ))}
      </div>
      <div className="audit-foot">
        <span>FREE · NO SIGN-UP · 60 SECONDS</span>
        <span>SC-AUDIT v2.4</span>
      </div>
    </form>
  );
}

/* ---------- Industries ---------- */
const INDUSTRIES = [
  { name: 'HVAC', icon: 'wind' },
  { name: 'Plumbing', icon: 'drop' },
  { name: 'Electrical', icon: 'bolt' },
  { name: 'Roofing', icon: 'roof' },
  { name: 'Landscaping', icon: 'leaf' },
  { name: 'Dumpster Rental', icon: 'box' },
  { name: 'Demolition', icon: 'hammer' },
];

function IndustryIcon({ k }) {
  const c = "currentColor";
  const stroke = { stroke: c, strokeWidth: 1.6, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (k) {
    case 'wind': return <svg viewBox="0 0 32 32" className="ico"><path {...stroke} d="M4 11h14a3 3 0 100-6 3 3 0 00-3 3M4 21h22a3 3 0 110 6 3 3 0 01-3-3M4 16h18"/></svg>;
    case 'drop': return <svg viewBox="0 0 32 32" className="ico"><path {...stroke} d="M16 4c4 6 8 10 8 15a8 8 0 11-16 0c0-5 4-9 8-15z"/></svg>;
    case 'bolt': return <svg viewBox="0 0 32 32" className="ico"><path {...stroke} d="M18 3L7 18h7l-2 11 11-15h-7l2-11z"/></svg>;
    case 'roof': return <svg viewBox="0 0 32 32" className="ico"><path {...stroke} d="M3 16L16 5l13 11M7 16v12h18V16M14 28v-7h4v7"/></svg>;
    case 'leaf': return <svg viewBox="0 0 32 32" className="ico"><path {...stroke} d="M27 5c-12 0-20 6-20 16 0 4 2 7 5 7 9 0 15-8 15-23zM7 28L19 16"/></svg>;
    case 'box': return <svg viewBox="0 0 32 32" className="ico"><path {...stroke} d="M4 10h24v18H4zM4 10l4-5h16l4 5M11 16h10"/></svg>;
    case 'hammer': return <svg viewBox="0 0 32 32" className="ico"><path {...stroke} d="M15 4l8 8-4 4-8-8zM18 12L6 24l3 3 12-12M22 10l6 6"/></svg>;
    default: return null;
  }
}

function Industries() {
  return (
    <section id="industries" className="section shell">
      <div className="sec-head">
        <span className="kicker">WHO WE WORK WITH</span>
        <h2>Built for home service operators.</h2>
        <p>We don't dabble in everything. We obsess over the seven verticals where local intent moves
        revenue — and we know what works for each.</p>
      </div>
      <div className="industries">
        {INDUSTRIES.map((ind, i) => (
          <div key={ind.name} className="ind-card">
            <span className="num">{String(i+1).padStart(2,'0')}</span>
            <IndustryIcon k={ind.icon} />
            <div className="label">{ind.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Divider ---------- */
function OrbitDivider({ icon = 'arrow' }) {
  return (
    <div className="divider shell">
      <svg viewBox="0 0 1000 140" preserveAspectRatio="none">
        <path d="M0 70 C 200 10, 800 130, 1000 70" stroke="rgba(180,190,255,.18)" strokeWidth="1" fill="none" strokeDasharray="2 4"/>
      </svg>
      <div className="node">
        {icon === 'arrow' && (
          <svg viewBox="0 0 24 24" fill="none"><path d="M5 19L19 5M19 5v9M19 5h-9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        )}
      </div>
      <div className="spark"></div>
    </div>
  );
}

/* ---------- Services ---------- */
function Services() {
  return (
    <section id="services" className="section shell">
      <div className="sec-head">
        <span className="kicker">WHAT WE DO</span>
        <h2>The full stack to dominate your service area.</h2>
        <p>Five services, one playbook. Each piece compounds the others — so every dollar works harder
        than it would alone.</p>
      </div>

      {/* Big SEO card */}
      <div className="services">
        <div className="svc lg">
          <div className="svc-body">
            <span className="svc-tag"><span className="dot"></span>01 · Targeted SEO</span>
            <div>
              <h3>Rank where the jobs come from.</h3>
              <p>Hyper-local keyword strategy, on-page rebuilds, technical fixes, and content engineered
              for "near me" intent. We move you up the map pack and the organic results — in that order.</p>
            </div>
            <div style={{display:'flex',gap:24,marginTop:8}}>
              <div><div style={{fontFamily:'Space Grotesk',fontSize:28,letterSpacing:'-.02em'}}>+147%</div><div style={{fontSize:12,color:'var(--ink-3)',marginTop:2}}>avg organic traffic, yr 1</div></div>
              <div><div style={{fontFamily:'Space Grotesk',fontSize:28,letterSpacing:'-.02em'}}>3.2×</div><div style={{fontSize:12,color:'var(--ink-3)',marginTop:2}}>map-pack appearances</div></div>
            </div>
          </div>
          <div className="svc-vis">
            <KeywordsMock />
          </div>
        </div>

        {/* GBP */}
        <div className="svc">
          <span className="svc-tag"><span className="dot"></span>02 · Google Business Profile</span>
          <h3>Own the map pack.</h3>
          <p>Weekly posts, photo uploads, review acquisition, Q&amp;A management, and category surgery.
          The 3-pack is real estate — we make sure you own a parcel.</p>
          <div className="svc-vis"><GBPMock /></div>
        </div>

        {/* Paid Ads */}
        <div className="svc">
          <span className="svc-tag"><span className="dot"></span>03 · Google Paid Ads</span>
          <h3>Ads that pay rent.</h3>
          <p>Search and LSA campaigns built around call-tracked, profitable keywords. Negative-keyword
          discipline. Bid strategies tied to your real margin — not vanity clicks.</p>
          <div className="svc-vis"><AdsMock /></div>
        </div>

        {/* Heatmap */}
        <div className="svc">
          <span className="svc-tag"><span className="dot"></span>04 · Heat-Map Tracking</span>
          <h3>See your rankings from every block.</h3>
          <p>Grid-based local rank tracking shows exactly where you win — and where competitors edge you
          out — across your service area. We optimize the cold spots, week by week.</p>
          <div className="svc-vis"><HeatmapMock /></div>
        </div>

        {/* Lead reporting */}
        <div className="svc">
          <span className="svc-tag"><span className="dot"></span>05 · Lead Reporting</span>
          <h3>Every lead, sourced and priced.</h3>
          <p>Call tracking, form attribution, and weekly reports that tie every booking back to the
          channel, keyword, and ad that earned it. No more "marketing did something."</p>
          <div className="svc-vis"><LeadsMock /></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Service Mocks ---------- */
function KeywordsMock() {
  const rows = [
    ['hvac repair near me', 8, 2, 78],
    ['ac installation austin', 14, 4, 62],
    ['emergency furnace repair', 21, 6, 54],
    ['hvac company austin', 6, 1, 88],
    ['air conditioner tune up', 18, 5, 48],
  ];
  return (
    <div className="mock" style={{maxWidth:400}}>
      <div className="mock-bar">
        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
        <span className="url">/keywords · austin tx</span>
      </div>
      {rows.map(([kw,pos,delta,bar]) => (
        <div className="kw-row" key={kw}>
          <span className="kw-name">{kw}</span>
          <span className="kw-pos">
            <span className="kw-bar"><div style={{width:bar+'%'}}/></span>
            <span>#{pos}</span>
            <span className="kw-up">↑{delta}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

function GBPMock() {
  return (
    <div className="gbp">
      <div className="biz">
        <div className="ic">A</div>
        <div>
          <div className="name">Acme HVAC & Cooling</div>
          <div className="meta">HVAC contractor · Open · Closes 8 PM</div>
        </div>
      </div>
      <div className="stars">★★★★★ <span style={{color:'#5f6368'}}>4.9 (412)</span></div>
      <div className="actions">
        <span>Call</span><span>Directions</span><span>Website</span>
      </div>
    </div>
  );
}

function AdsMock() {
  return (
    <div className="mock">
      <div className="mock-bar">
        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
        <span className="url">google.com/search?q=plumber+near+me</span>
      </div>
      <div className="ads-rows">
        <div className="ad">
          <div className="u"><b style={{color:'#5ee0a0'}}>Ad</b> · acme-plumbing.com</div>
          <div className="t">24/7 Emergency Plumber — On-Site in 60 Min</div>
          <div className="d">Licensed &amp; bonded. Flat-rate pricing. 4.9★ on 800+ reviews.</div>
        </div>
        <div className="ad">
          <div className="u"><b style={{color:'#5ee0a0'}}>Ad</b> · acme-plumbing.com/drains</div>
          <div className="t">Drain Cleaning Special — $89 Any Drain</div>
          <div className="d">Same-day appointments. Free camera inspection on tough clogs.</div>
        </div>
      </div>
    </div>
  );
}

function HeatmapMock() {
  // 7x5 grid of cells; assigned ranks color cells
  const cells = [];
  const ranks = [
    [1,1,2,1,2,3,5],
    [1,1,1,2,2,4,6],
    [2,1,1,1,3,5,8],
    [3,2,1,2,4,7,10],
    [5,4,3,5,8,12,15],
  ];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 7; c++) {
      cells.push({ r, c, rank: ranks[r][c] });
    }
  }
  const colorFor = (rank) => {
    if (rank <= 3) return '#5ee0a0';
    if (rank <= 6) return '#a4b4ff';
    if (rank <= 10) return '#ffd166';
    return '#ff6b6b';
  };
  return (
    <div className="heatmap" style={{padding:14}}>
      <div style={{position:'absolute',inset:14,display:'grid',gridTemplateColumns:'repeat(7, 1fr)',gridTemplateRows:'repeat(5,1fr)',gap:6}}>
        {cells.map(({r,c,rank},i) => (
          <div key={i} style={{
            borderRadius:8,
            background: colorFor(rank) + '22',
            border: '1px solid ' + colorFor(rank) + '55',
            display:'flex',alignItems:'center',justifyContent:'center',
            fontFamily:'JetBrains Mono',fontSize:11,color:colorFor(rank),fontWeight:600
          }}>{rank}</div>
        ))}
      </div>
      <div style={{position:'absolute',bottom:10,left:14,right:14,display:'flex',justifyContent:'space-between',fontFamily:'JetBrains Mono',fontSize:10,color:'var(--ink-3)'}}>
        <span>● TOP 3</span><span>● 4–6</span><span>● 7–10</span><span>● 10+</span>
      </div>
    </div>
  );
}

function LeadsMock() {
  const leads = [
    ['MJ','Marcus J.','Google · "ac repair near me",','$1,240'],
    ['SR','Sarah R.','LSA · Plumbing','$680'],
    ['DP','Diego P.','Organic · "furnace tune up"','$220'],
    ['EL','Emma L.','GBP · Map pack','$1,890'],
  ];
  return (
    <div className="mock">
      <div className="leads-head">
        <span className="h">This week · 47 leads</span>
        <span className="pill">+22% WoW</span>
      </div>
      {leads.map(([i,n,s,v],idx) => (
        <div className="lead-row" key={idx}>
          <span className="lead-name">
            <span className="lead-av">{i}</span>
            <span>{n}<div className="lead-src">{s}</div></span>
          </span>
          <span className="lead-val">{v}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  const tiers = [
    {
      name: 'Launch',
      desc: 'Get on the map. Built for owner-operators ready to grow past referrals.',
      price: '1,500',
      features: [
        'Local SEO foundation',
        'Google Business Profile management',
        'Heat-map tracking (1 location)',
        'Monthly performance report',
        'Call & form tracking',
      ],
      cta: 'Start with Launch',
    },
    {
      name: 'Orbit',
      desc: 'Most-picked. SEO + paid working in lockstep with full attribution.',
      price: '3,200',
      featured: true,
      features: [
        'Everything in Launch',
        'Google Paid Ads management',
        'Weekly heat-map snapshots',
        'Lead source attribution',
        'Bi-weekly strategy calls',
        'Up to 3 locations',
      ],
      cta: 'Choose Orbit',
    },
    {
      name: 'Apex',
      desc: 'Multi-location operators serious about owning their market.',
      price: '5,800',
      features: [
        'Everything in Orbit',
        'Unlimited locations',
        'Dedicated growth strategist',
        'Custom dashboards',
        'Competitor displacement plays',
        'Priority response SLA',
      ],
      cta: 'Talk to Sales',
    },
  ];
  return (
    <section id="pricing" className="section shell">
      <div className="sec-head">
        <span className="kicker">PRICING</span>
        <h2>Pick your trajectory.</h2>
        <p>Flat monthly retainers. No long-term contracts. Cancel anytime after the first 90 days —
        but most clients stay because the math works.</p>
      </div>
      <div className="pricing-grid">
        {tiers.map(t => (
          <div key={t.name} className={"tier" + (t.featured ? ' featured' : '')}>
            {t.featured && <span className="badge">Most Picked</span>}
            <div>
              <div className="name">{t.name}</div>
              <div className="desc">{t.desc}</div>
            </div>
            <div className="price">
              <span style={{fontSize:18,color:'var(--ink-3)',marginRight:2}}>$</span>
              <span className="amt">{t.price}</span>
              <span className="per">/mo</span>
            </div>
            <ul>
              {t.features.map(f => (
                <li key={f}>
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className={"btn " + (t.featured ? "btn-primary" : "btn-ghost")}>{t.cta}</a>
          </div>
        ))}
      </div>
      <div style={{textAlign:'center',marginTop:32,fontSize:13,color:'var(--ink-3)',fontFamily:'JetBrains Mono'}}>
        ALL TIERS · ONE-TIME SETUP $1,000 · WAIVED ON 6-MONTH COMMIT
      </div>
    </section>
  );
}

/* ---------- CTA Band ---------- */
function CtaBand() {
  return (
    <section id="contact" className="shell">
      <div className="cta-band">
        <div>
          <h2>Plant your flag in the search results.</h2>
          <p>30-minute strategy call. We audit your local presence on the spot and tell you, plainly,
          if we can help. No sales theater.</p>
          <div style={{marginTop:28,display:'flex',gap:12,flexWrap:'wrap'}}>
            <a href="#" className="btn btn-primary">Book a Free Call</a>
            <a href="mailto:hello@spearcrestdigital.com" className="btn btn-ghost">hello@spearcrestdigital.com</a>
          </div>
        </div>
        <div className="cta-flag float-anim">
          <img src="assets/astronaut.png" alt="Astronaut planting SpearCrest flag" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="shell">
      <div className="foot">
        <div>
          <div className="brand">
            <SCLogo size={32} />
            <span className="wordmark">SpearCrest<span>.</span></span>
          </div>
          <p>Local SEO &amp; paid media for home service operators who want the leads, not the runaround.</p>
        </div>
        <div className="foot-cols">
          <div className="foot-col">
            <h4>SERVICES</h4>
            <a href="#services">Targeted SEO</a>
            <a href="#services">GBP Management</a>
            <a href="#services">Google Paid Ads</a>
            <a href="#services">Heat-Map Tracking</a>
            <a href="#services">Lead Reporting</a>
          </div>
          <div className="foot-col">
            <h4>INDUSTRIES</h4>
            <a href="#industries">HVAC</a>
            <a href="#industries">Plumbing</a>
            <a href="#industries">Electrical</a>
            <a href="#industries">Roofing</a>
            <a href="#industries">Landscaping</a>
          </div>
          <div className="foot-col">
            <h4>COMPANY</h4>
            <a href="#">About</a>
            <a href="#">Case Studies</a>
            <a href="#">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© SPEARCREST DIGITAL · {new Date().getFullYear()}</span>
        <span>HELLO@SPEARCRESTDIGITAL.COM</span>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <OrbitDivider />
      <Industries />
      <Services />
      <Pricing />
      <CtaBand />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
