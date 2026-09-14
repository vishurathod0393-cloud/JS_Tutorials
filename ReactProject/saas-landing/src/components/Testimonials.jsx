import { StarIcon } from "./Icons.jsx";

const testimonials = [
  {
    quote:
      "Nimbus replaced three tools for us. We cut our reporting time by 70% and finally have one source of truth the whole company actually uses.",
    name: "Sarah Chen",
    role: "VP of Product, Vertex Labs",
    initials: "SC",
    color: "c0",
  },
  {
    quote:
      "The automation engine alone is worth the price. Our onboarding flow used to take a full engineer a week to maintain — now it just runs itself.",
    name: "Marcus Webb",
    role: "CTO, Northwind",
    initials: "MW",
    color: "c1",
  },
  {
    quote:
      "We migrated 40+ dashboards in a single weekend and haven't looked back. Honestly, the support team is the best I've ever experienced.",
    name: "Amelia Ortiz",
    role: "Head of Growth, Lumina",
    initials: "AO",
    color: "c2",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">Testimonials</span>
          <h2 className="section-title">Loved by product teams everywhere</h2>
          <p className="section-sub">
            From two-person startups to public companies — here's what teams
            say after switching to Nimbus.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, i) => (
            <article
              key={item.name}
              className={`testimonial-card reveal reveal-delay-${i % 3}`}
            >
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>
              <blockquote>“{item.quote}”</blockquote>
              <div className="testimonial-person">
                <span
                  className={`testimonial-avatar avatar-${item.color}`}
                  aria-hidden="true"
                >
                  {item.initials}
                </span>
                <div>
                  <p className="testimonial-name">{item.name}</p>
                  <p className="testimonial-role">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;