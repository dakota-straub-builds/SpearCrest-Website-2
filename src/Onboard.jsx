import { useState } from 'react'
import './App.css'
import './Onboard.css'

const STEPS = ['Welcome', 'Hosting', 'Google Business', 'Lead Routing', 'Social Media', 'Done']

function ProgressBar({ step, total }) {
  return (
    <div className="ob-progress">
      {Array.from({ length: total - 1 }).map((_, i) => (
        <div key={i} className={`ob-progress-step${i < step ? ' done' : i === step ? ' active' : ''}`}>
          <div className="ob-progress-dot">{i < step ? '✓' : i + 1}</div>
          {i < total - 2 && <div className="ob-progress-line"/>}
        </div>
      ))}
    </div>
  )
}

export default function Onboard() {
  const [step, setStep] = useState(0)
  const [hasGBP, setHasGBP] = useState(null)
  const [form, setForm] = useState({
    // Hosting
    currentUrl: '', hostingPlatform: '', hostingUser: '', hostingPass: '',
    dudaUser: '', dudaPass: '',
    // GBP
    gbpManagerEmail: 'spearcrestdigital@gmail.com',
    gbpLoginUser: '', gbpLoginPass: '',
    businessAddress: '', billingAddress: '',
    gmailRecoveryEmail: '', gmailRecoveryPhone: '',
    // Lead routing
    emailLeads: '', phoneLeads: '',
    // Social
    facebook: '', linkedin: '', instagram: '', twitter: '', youtube: '',
    // Meta
    clientName: '', businessName: '', contactEmail: '', contactPhone: '',
  })

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const input = (k, placeholder, type='text', required=false) => (
    <div className="ob-field">
      <input
        className="ob-input"
        type={type}
        placeholder={placeholder}
        value={form[k]}
        onChange={e => set(k, e.target.value)}
        required={required}
      />
    </div>
  )

  const next = () => setStep(s => s + 1)
  const back = () => setStep(s => s - 1)

  const submit = async (e) => {
    e.preventDefault()
    // Replace YOUR_FORM_ID with your Formspree form ID
    try {
      await fetch('https://formspree.io/f/xgodgwew', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, hasGBP }),
      })
    } catch (err) {
      console.error(err)
    }
    setStep(5)
  }

  return (
    <div className="ob-wrap">
      {/* Nav */}
      <nav className="ob-nav">
        <a href="/" className="nav-logo">
          <img src="/sc-logo.png" alt="SpearCrest" className="nav-logo-img" />
          Spear Crest Digital
        </a>
        <span className="ob-nav-label">Client Onboarding</span>
      </nav>

      <div className="ob-container">
        {step < 5 && <ProgressBar step={step} total={STEPS.length} />}

        {/* Step 0 — Welcome */}
        {step === 0 && (
          <div className="ob-card ob-welcome">
            <div className="ob-welcome-icon">🚀</div>
            <h1>Welcome to SpearCrest Digital!</h1>
            <p>Thank you for choosing us for your Website Design, SEO, and Lead Generation needs. We're beyond excited to kick off your project.</p>
            <p>This form takes about <strong>5 minutes</strong> to complete. Have your website login info and social media handles handy.</p>
            <p className="ob-contact-note">Questions? Reach us at <a href="mailto:ronnie@spearcrestdigital.com">ronnie@spearcrestdigital.com</a> or <a href="tel:5026153173">502-615-3173</a>.</p>
            <div className="ob-fields">
              {input('clientName', 'Your Full Name', 'text', true)}
              {input('businessName', 'Business Name', 'text', true)}
              {input('contactEmail', 'Your Email Address', 'email', true)}
              {input('contactPhone', 'Your Phone Number', 'tel', true)}
            </div>
            <button className="btn-primary ob-btn" onClick={next}
              disabled={!form.clientName || !form.businessName || !form.contactEmail}>
              Let's Get Started →
            </button>
          </div>
        )}

        {/* Step 1 — Hosting */}
        {step === 1 && (
          <div className="ob-card">
            <div className="ob-step-label">Step 1 of 4</div>
            <h2>Website Hosting Info</h2>
            <p>We need access to your current website and hosting to get started. All credentials are encrypted and stored securely.</p>

            <div className="ob-section">
              <div className="ob-section-title">Current Website</div>
              {input('currentUrl', 'Your current website URL (e.g. example.com)')}
              {input('hostingPlatform', 'Hosting platform (GoDaddy, Wix, WordPress, etc.)')}
            </div>

            <div className="ob-section">
              <div className="ob-section-title">Current Hosting Login</div>
              {input('hostingUser', 'Username / Email')}
              {input('hostingPass', 'Password', 'password')}
            </div>

            <div className="ob-section">
              <div className="ob-section-title">Duda Login (if applicable)</div>
              {input('dudaUser', 'Duda Username / Email')}
              {input('dudaPass', 'Duda Password', 'password')}
            </div>

            <div className="ob-actions">
              <button className="btn-ghost ob-btn" onClick={back}>← Back</button>
              <button className="btn-primary ob-btn" onClick={next}>Continue →</button>
            </div>
          </div>
        )}

        {/* Step 2 — GBP */}
        {step === 2 && (
          <div className="ob-card">
            <div className="ob-step-label">Step 2 of 4</div>
            <h2>Google Business Profile</h2>
            <p>Do you currently have a Google Business Profile set up?</p>

            <div className="ob-toggle-row">
              <button
                className={`ob-toggle${hasGBP === true ? ' active' : ''}`}
                onClick={() => setHasGBP(true)}
              >
                ✓ Yes, I have one
              </button>
              <button
                className={`ob-toggle${hasGBP === false ? ' active' : ''}`}
                onClick={() => setHasGBP(false)}
              >
                ✗ No, I need one
              </button>
            </div>

            {hasGBP === true && (
              <div className="ob-section">
                <div className="ob-section-title">Add us as Manager</div>
                <p className="ob-hint">Please add <strong>spearcrestdigital@gmail.com</strong> as a "Manager" on your Google Business Profile. This gives us access without needing your password.</p>
                <div className="ob-copy-field">
                  <span>spearcrestdigital@gmail.com</span>
                  <button className="ob-copy-btn" onClick={() => navigator.clipboard.writeText('spearcrestdigital@gmail.com')}>Copy</button>
                </div>
                <div className="ob-section-title" style={{marginTop:'24px'}}>Business Details</div>
                {input('businessAddress', 'Business address as shown on Google')}
                {input('billingAddress', 'Billing address (if different)')}
              </div>
            )}

            {hasGBP === false && (
              <div className="ob-section">
                <div className="ob-section-title">We'll create it for you</div>
                <p className="ob-hint">Provide your Google account login so we can set up your Google Business Profile.</p>
                {input('gbpLoginUser', 'Google Account Email')}
                {input('gbpLoginPass', 'Google Account Password', 'password')}
                {input('gmailRecoveryEmail', 'Recovery Email')}
                {input('gmailRecoveryPhone', 'Recovery Phone Number', 'tel')}
                {input('businessAddress', 'Business Address')}
                {input('billingAddress', 'Billing Address (if different)')}
              </div>
            )}

            <div className="ob-actions">
              <button className="btn-ghost ob-btn" onClick={back}>← Back</button>
              <button
                className="btn-primary ob-btn"
                onClick={next}
                disabled={hasGBP === null}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — Lead Routing */}
        {step === 3 && (
          <div className="ob-card">
            <div className="ob-step-label">Step 3 of 4</div>
            <h2>Lead Routing</h2>
            <p>Where should we send your leads? We'll route form submissions and calls to these destinations.</p>

            <div className="ob-section">
              {input('emailLeads', 'Email address for lead notifications', 'email')}
              {input('phoneLeads', 'Phone number for call leads (if different from main number)', 'tel')}
            </div>

            <div className="ob-actions">
              <button className="btn-ghost ob-btn" onClick={back}>← Back</button>
              <button className="btn-primary ob-btn" onClick={next}>Continue →</button>
            </div>
          </div>
        )}

        {/* Step 4 — Social Media */}
        {step === 4 && (
          <form className="ob-card" onSubmit={submit}>
            <div className="ob-step-label">Step 4 of 4</div>
            <h2>Social Media Links</h2>
            <p>Add any social media profiles you have. These will be linked on your website and help with local SEO.</p>

            <div className="ob-section">
              {[
                ['facebook', '🔵 Facebook URL'],
                ['linkedin', '🔷 LinkedIn URL'],
                ['instagram', '🟣 Instagram URL'],
                ['twitter', '🐦 Twitter / X URL'],
                ['youtube', '🔴 YouTube Channel URL'],
              ].map(([k, placeholder]) => input(k, placeholder))}
            </div>

            <div className="ob-actions">
              <button type="button" className="btn-ghost ob-btn" onClick={back}>← Back</button>
              <button type="submit" className="btn-primary ob-btn">Submit Onboarding ✓</button>
            </div>
          </form>
        )}

        {/* Step 5 — Done */}
        {step === 5 && (
          <div className="ob-card ob-done">
            <div className="ob-done-icon">🎉</div>
            <h1>You're on the launchpad!</h1>
            <p>We've received your onboarding information. Our team will review everything and reach out within <strong>1 business day</strong> to schedule your kickoff call.</p>
            <div className="ob-done-next">
              <div className="ob-done-step">
                <span className="ob-done-num">1</span>
                <span>We review your info and set up your accounts</span>
              </div>
              <div className="ob-done-step">
                <span className="ob-done-num">2</span>
                <span>Kickoff call to align on goals and timeline</span>
              </div>
              <div className="ob-done-step">
                <span className="ob-done-num">3</span>
                <span>We start building — you start ranking</span>
              </div>
            </div>
            <a href="/" className="btn-primary ob-btn">Back to Home</a>
          </div>
        )}
      </div>
    </div>
  )
}
