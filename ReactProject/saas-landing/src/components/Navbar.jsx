import { useState } from "react";
import { LogoIcon } from "./Icons.jsx";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <nav className="nav-container" aria-label="Primary">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-logo" aria-hidden="true">
            <LogoIcon />
          </span>
          Nimbus
        </a>

        <button
          type="button"
          className={`nav-toggle ${open ? "open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={`nav-actions ${open ? "open" : ""}`}>
          <a href="#contact" className="btn btn-ghost" onClick={closeMenu}>
            Sign in
          </a>
          <a href="#pricing" className="btn btn-primary" onClick={closeMenu}>
            Start free trial
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;