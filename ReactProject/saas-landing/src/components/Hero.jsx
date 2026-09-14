import { ArrowRightIcon, StarIcon } from "./Icons.jsx";

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "12k+", label: "Teams onboard" },
  { value: "4.9/5", label: "Average rating" },
  { value: "50+", label: "Integrations" },
];

const bars = [34, 58, 42, 70, 52, 82, 64, 92, 74, 46, 86, 100];
const initials = ["VK", "AM", "RS"];
const kpis = [
  ["Revenue", "+32%"],
  ["Active users", "+18%"],
  ["Conversion", "+7.5%"],
];

function DashboardMock() {
  return (
    <div className="dash-frame">
      <div className="dash-top">
        <span className="dash-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="dash-url">app.nimbus.app/dashboard</span>
        <span className="dash-avatar" aria-hidden="true">
          VK
        </span>
      </div>

      <div className="dash-body">
        <div className="dash-sidebar" aria-hidden="true">
          <span className="dash-logo" />
          {[true, false, false, false, false].map((active, i) => (
            <span
              key={i}
              className={`dash-menu-item ${active ? "is-active" : ""}`}
            />
          ))}
          <span className="dash-profile" />
        </div>

        <div className="dash-main">
          <div className="dash-heading" aria-hidden="true">
            <span className="dash-h1" />
            <span className="dash-h2" />
          </div>

          <div className="dash-kpis">
            {kpis.map(([label, value]) => (
              <div className="dash-kpi" key={label}>
                <span className="dash-kpi-label">{label}</span>
                <span className="dash-kpi-value">{value}</span>
                <span className="dash-kpi-trend" />
              </div>
            ))}
          </div>

          <div className="dash-chart">
            <div className="dash-chart-head">
              <span className="dash-chart-title">Monthly growth</span>
              <span className="dash-chart-legend">
                <i /> This year <i /> Last year
              </span>
            </div>
            <div className="dash-chart-bars" aria-hidden="true">
              {bars.map((height, i) => (
                <span key={i} className="dash-bar" style={{ "--h": `${height}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="dash-float dash-float-a" role="presentation">
        <span className="float-icon" aria-hidden="true">
          ↑
        </span>
        <span>
          <strong>+32%</strong> revenue this month
        </span>
      </div>

      <div className="dash-float dash-float-b" role="presentation">
        <span className="float-avatar" aria-hidden="true">
          AM
        </span>
        <span>
          <strong>Alex</strong> joined your workspace
        </span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <a href="#features" className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
              New: Nimbus AI Copilot is here
              <ArrowRightIcon />
            </a>

            <h1 className="hero-title">
              Build, launch &amp; scale your SaaS <span className="grad">faster</span>
            </h1>

            <p className="hero-subtitle">
              Nimbus brings analytics, automation, and collaboration into one
              beautiful workspace — so your team ships features instead of
              putting out fires.
            </p>

            <div className="hero-cta">
              <a href="#pricing" className="btn btn-primary btn-lg">
                Start free trial
                <ArrowRightIcon />
              </a>
              <a href="#contact" className="btn btn-outline btn-lg">
                Book a demo
              </a>
            </div>

            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                {initials.map((text, i) => (
                  <span key={text} className={`avatar avatar-${i}`}>
                    {text}
                  </span>
                ))}
              </div>
              <div className="hero-rating">
                <span className="stars" aria-label="Rated 4.9 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </span>
                <span className="hero-rating-text">
                  <strong>4.9/5</strong> from 2,300+ reviews
                </span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-2">
            <DashboardMock />
          </div>
        </div>

        <div className="hero-stats reveal">
          {stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;