import {
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
  LogoIcon,
  XSocialIcon,
} from "./Icons.jsx";

const columns = [
  {
    heading: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Blog", "Press kit"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "Help center", "API reference", "Community"],
  },
  {
    heading: "Legal",
    links: ["Privacy policy", "Terms of service", "Security", "Cookies"],
  },
];

const socials = [
  { icon: XSocialIcon, label: "X (Twitter)", href: "https://x.com/" },
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container cta-wrap">
        <div className="cta-banner reveal">
          <h2>Ready to launch your SaaS?</h2>
          <p>
            Join 12,000+ teams building products faster with Nimbus. Start free
            and upgrade only when you're ready.
          </p>
          <div className="hero-cta">
            <a href="#pricing" className="btn btn-primary btn-lg">
              Start free trial
            </a>
            <a href="#contact" className="btn btn-light btn-lg">
              Talk to sales
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-top">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <span className="brand-logo" aria-hidden="true">
              <LogoIcon />
            </span>
            Nimbus
          </a>
          <p>
            The all-in-one workspace for modern SaaS teams — analytics,
            automation, and collaboration in one place.
          </p>
          <div className="footer-socials">
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

        {columns.map((column) => (
          <div className="footer-col" key={column.heading}>
            <h4>{column.heading}</h4>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#home">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Nimbus Inc. All rights reserved.
          </span>
          <span className="footer-status">
            <i aria-hidden="true" /> All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;