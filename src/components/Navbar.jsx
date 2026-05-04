import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiCalendar, FiHome, FiMenu, FiUser, FiX } from "react-icons/fi";
import { GiScissors } from "react-icons/gi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "home", label: "Home", icon: <FiHome /> },
    { to: "about", label: "About", icon: <FiUser /> },
    { to: "services", label: "Services", icon: <GiScissors /> },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'DM Sans', sans-serif;
        }

        .nav-bg {
          position: absolute;
          inset: 0;
          transition: all 0.5s ease;
          background: ${scrolled ? "rgba(8, 4, 14, 0.85)" : "transparent"};
          backdrop-filter: ${scrolled ? "blur(24px) saturate(180%)" : "none"};
          border-bottom: ${scrolled ? "1px solid rgba(212, 175, 55, 0.15)" : "none"};
          box-shadow: ${scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none"};
        }

        .nav-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 72px;
        }

        .nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 300;
          letter-spacing: 0.08em;
          color: #f5e6c8;
          text-decoration: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-logo .logo-accent {
          color: #d4af37;
          font-style: italic;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: rgba(245, 230, 200, 0.75);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s ease;
          position: relative;
          padding-bottom: 4px;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #d4af37, #f5e6c8);
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link:hover {
          color: #f5e6c8;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-cta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid rgba(212, 175, 55, 0.5);
          color: #d4af37;
          padding: 0.55rem 1.4rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.35s ease;
          clip-path: polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%);
        }

        .nav-cta:hover {
          background: rgba(212, 175, 55, 0.12);
          border-color: #d4af37;
          color: #f5e6c8;
          transform: translateY(-1px);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: #f5e6c8;
          cursor: pointer;
          padding: 0.25rem;
          transition: color 0.3s;
        }

        .mobile-toggle:hover { color: #d4af37; }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(8, 4, 14, 0.97);
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }

        .mobile-link {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 300;
          color: rgba(245, 230, 200, 0.7);
          text-decoration: none;
          cursor: pointer;
          letter-spacing: 0.05em;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .mobile-link:hover { color: #d4af37; transform: translateX(8px); }

        .mobile-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: rgba(245, 230, 200, 0.5);
          cursor: pointer;
          transition: color 0.3s;
        }

        .mobile-close:hover { color: #d4af37; }

        .mobile-cta-link {
          border: 1px solid rgba(212, 175, 55, 0.4);
          padding: 1rem 2.5rem;
          color: #d4af37;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 1rem;
        }

        .mobile-cta-link:hover {
          background: rgba(212, 175, 55, 0.1);
          color: #f5e6c8;
        }

        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>

      <div className="nav-root">
        <div className="nav-bg" />
        <div className="nav-inner">
          <div className="nav-logo">
            Zi<span className="logo-accent">ona</span>
            {/*<span style={{ letterSpacing: "0" }}>
              Zi<span style={{ color: "#d4af37" }}>ona</span>
            </span>*/}
          </div>

          <div className="nav-links">
            {navLinks.map(({ to, label, icon }) => (
              <Link key={to} to={to} spy smooth className="nav-link">
                {icon} {label}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link to="contact" spy smooth className="nav-cta">
              <FiCalendar size={13} /> Book Now
            </Link>
            <button
              className="mobile-toggle"
              onClick={() => setIsMenuOpen(true)}
            >
              <FiMenu size={26} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-overlay">
          <button className="mobile-close" onClick={() => setIsMenuOpen(false)}>
            <FiX size={28} />
          </button>

          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.7rem",
              letterSpacing: "0.4em",
              color: "#d4af37",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Navigation
          </div>

          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              spy
              smooth
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {icon} {label}
            </Link>
          ))}

          <Link
            to="contact"
            spy
            smooth
            className="mobile-cta-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiCalendar style={{ display: "inline", marginRight: 6 }} /> Book
            Appointment
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
