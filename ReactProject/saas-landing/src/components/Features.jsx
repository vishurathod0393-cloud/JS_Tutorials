import {
  ChartIcon,
  LayersIcon,
  PlugIcon,
  ShieldIcon,
  UsersIcon,
  ZapIcon,
} from "./Icons.jsx";

const features = [
  {
    icon: ChartIcon,
    title: "Real-time analytics",
    text: "Watch signups, revenue, and engagement update by the second with live dashboards your whole team can read at a glance.",
  },
  {
    icon: ZapIcon,
    title: "Smart automation",
    text: "Automate onboarding emails, alerts, and workflows with no-code triggers that save your team hours every week.",
  },
  {
    icon: ShieldIcon,
    title: "Enterprise-grade security",
    text: "SOC 2 Type II compliance, SSO, and granular roles keep your data locked down without slowing your team down.",
  },
  {
    icon: PlugIcon,
    title: "50+ native integrations",
    text: "Connect Stripe, Slack, HubSpot, and your entire stack in minutes — no engineering work required.",
  },
  {
    icon: UsersIcon,
    title: "Built for collaboration",
    text: "Share dashboards, leave comments, and assign action items so decisions happen exactly where the data lives.",
  },
  {
    icon: LayersIcon,
    title: "Custom reporting",
    text: "A drag-and-drop report builder with unlimited saved views, scheduled exports, and shareable links.",
  },
];

function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">Features</span>
          <h2 className="section-title">Everything you need to run your SaaS</h2>
          <p className="section-sub">
            One platform to replace the messy pile of spreadsheets, dashboards,
            and sticky notes your team juggles today.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className={`feature-card reveal reveal-delay-${i % 3}`}
              >
                <span className="feature-icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;