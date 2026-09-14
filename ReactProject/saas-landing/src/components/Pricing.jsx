import { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "./Icons.jsx";

const plans = [
  {
    name: "Starter",
    tagline: "For individuals finding their footing",
    monthly: 0,
    yearly: 0,
    features: [
      "1 active project",
      "Up to 3 seats",
      "10k events / month",
      "Core analytics dashboard",
      "Community support",
    ],
    cta: "Start for free",
    featured: false,
  },
  {
    name: "Growth",
    tagline: "For teams shipping every week",
    monthly: 19,
    yearly: 15,
    features: [
      "Unlimited projects",
      "Up to 20 seats",
      "250k events / month",
      "Advanced analytics & funnels",
      "No-code automations",
      "Priority support",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Enterprise",
    tagline: "For organizations at scale",
    monthly: 49,
    yearly: 39,
    features: [
      "Everything in Growth",
      "Unlimited seats & events",
      "SSO / SAML & audit logs",
      "99.99% uptime SLA",
      "Dedicated success manager",
      "Custom integrations",
    ],
    cta: "Contact sales",
    featured: false,
  },
];

function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">Pricing</span>
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-sub">
            Start free and scale as you grow. Every paid plan comes with a
            14-day trial — no credit card required.
          </p>

          <div className="billing-toggle" role="group" aria-label="Billing period">
            <button
              type="button"
              className={!yearly ? "is-active" : ""}
              aria-pressed={!yearly}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={yearly ? "is-active" : ""}
              aria-pressed={yearly}
              onClick={() => setYearly(true)}
            >
              Yearly <span className="save-badge">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;
            return (
              <article
                key={plan.name}
                className={`price-card reveal ${plan.featured ? "featured" : ""}`}
              >
                {plan.featured && <span className="price-flag">⭐ Most popular</span>}

                <h3 className="price-name">{plan.name}</h3>
                <p className="tagline">{plan.tagline}</p>

                <div className="price-amount-row">
                  {price === 0 ? (
                    <>
                      <span className="price-amount">Free</span>
                      <span className="price-period">/ forever</span>
                    </>
                  ) : (
                    <>
                      <span className="price-amount">${price}</span>
                      <span className="price-period">/ user / month</span>
                    </>
                  )}
                </div>
                {price > 0 && (
                  <span className="price-sub">
                    {yearly
                      ? `Billed annually ($${price * 12}/user/yr)`
                      : "Billed monthly — switch anytime"}
                  </span>
                )}

                <div className="price-divider" aria-hidden="true" />

                <ul className="price-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`btn btn-lg ${plan.featured ? "btn-primary" : "btn-outline"}`}
                >
                  {plan.cta}
                  {plan.featured && <ArrowRightIcon />}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;