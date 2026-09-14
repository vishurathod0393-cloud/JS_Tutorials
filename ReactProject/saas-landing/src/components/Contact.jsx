import { useState } from "react";
import {
  CheckCircleIcon,
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
  XSocialIcon,
} from "./Icons.jsx";

const initialForm = { name: "", email: "", company: "", message: "" };

const contactChannels = [
  {
    icon: MailIcon,
    label: "Email us",
    value: "hello@nimbus.app",
    href: "mailto:hello@nimbus.app",
  },
  {
    icon: PhoneIcon,
    label: "Call us",
    value: "+1 (555) 010-2030",
    href: "tel:+15550102030",
  },
  {
    icon: MapPinIcon,
    label: "Visit us",
    value: "548 Market Street, Suite 900, San Francisco, CA",
    href: null,
  },
];

const socials = [
  { icon: XSocialIcon, label: "X (Twitter)", href: "https://x.com/" },
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/" },
];

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";

  const email = values.email.trim();
  if (!email) errors.email = "Please enter your work email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "That email doesn't look right — try again.";

  const message = values.message.trim();
  if (!message) errors.message = "Please tell us a little about your project.";
  else if (message.length < 10)
    errors.message = "Your message should be at least 10 characters long.";

  return errors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStatus("sending");
    window.setTimeout(() => setStatus("success"), 1100);
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <span className="kicker">Contact</span>
            <h2 className="section-title">Let's build something great together</h2>
            <p className="section-sub contact-info-sub">
              Questions about plans, migrations, or integrations? Our team
              replies within one business day — usually much faster.
            </p>

            <div className="contact-methods">
              {contactChannels.map(({ icon: Icon, label, value, href }) => (
                <div className="contact-method" key={label}>
                  <span className="contact-method-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <strong>{label}</strong>
                    {href ? <a href={href}>{value}</a> : <span>{value}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-card reveal reveal-delay-2">
            {status === "success" ? (
              <div className="success-panel" role="status">
                <span className="success-icon" aria-hidden="true">
                  <CheckCircleIcon />
                </span>
                <h3>Message sent — thanks! 🎉</h3>
                <p>
                  We've got your note and will get back to you at{" "}
                  <strong>{form.email}</strong> within one business day.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={resetForm}
                >
                  Send another message
                </button>
              </div>
            ) : (
<form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="contact-name">
                      Full name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Jane Appleseed"
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      className={errors.name ? "input-error" : ""}
                      disabled={status === "sending"}
                    />
                    {errors.name && (
                      <p className="field-error" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="field">
                    <label htmlFor="contact-email">
                      Work email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      className={errors.email ? "input-error" : ""}
                      disabled={status === "sending"}
                    />
                    {errors.email && (
                      <p className="field-error" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="field field-full">
                    <label htmlFor="contact-company">
                      Company <span className="optional">(optional)</span>
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="Acme Inc."
                      value={form.company}
                      onChange={handleChange}
                      disabled={status === "sending"}
                    />
                  </div>
<div className="field field-full">
                    <label htmlFor="contact-message">
                      How can we help? <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      placeholder="Tell us about your project, timeline, and any questions you have…"
                      value={form.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.message)}
                      className={errors.message ? "input-error" : ""}
                      disabled={status === "sending"}
                    />
                    {errors.message && (
                      <p className="field-error" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <p className="form-note">
                    By submitting, you agree to our privacy policy. We'll only
                    use your details to respond to your enquiry.
                  </p>

                  <div className="field field-full">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending…" : "Send message"}
                      {status !== "sending" && <SendIcon />}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;