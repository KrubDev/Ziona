import React from "react";
import {
  FiFacebook,
  FiHeart,
  FiInstagram,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    {
      icon: <FiInstagram size={16} />,
      href: "https://www.instagram.com/ziona_nails_eyelashes/",
      label: "Instagram",
    },
    {
      icon: <FiFacebook size={16} />,
      href: "https://web.facebook.com/profile.php?id=61585659518986",
      label: "Facebook",
    },
    {
      icon: <FaTiktok size={15} />,
      href: "https://www.tiktok.com/@zionanails",
      label: "TikTok",
    },
  ];

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Book Appointment", to: "contact" },
  ];

const hours = [
  { day: "Monday – Saturday", time: "9:00 AM – 6:00 PM" },
  // { day: "Saturday", time: "10:00 AM – 8:00 PM" },
  { day: "Sunday", time: "Closed" },
];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-root {
          background: #04010a;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
          font-family: 'DM Sans', sans-serif;
        }

        .footer-top {
          max-width: 1280px;
          margin: 0 auto;
          padding: 5rem 2rem 4rem;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 4rem;
        }

        /* Brand */
        .footer-brand-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          font-weight: 300;
          color: #f5e6c8;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          display: block;
        }

        .footer-brand-logo em {
          font-style: italic;
          color: #d4af37;
        }

        .footer-brand-tagline {
          font-size: 0.85rem;
          font-weight: 300;
          color: rgba(245, 230, 200, 0.4);
          line-height: 1.7;
          max-width: 260px;
          margin-bottom: 2rem;
        }

        .footer-social-row {
          display: flex;
          gap: 0.75rem;
        }

        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          color: rgba(212, 175, 55, 0.5);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-social-btn:hover {
          border-color: #d4af37;
          color: #d4af37;
          background: rgba(212, 175, 55, 0.06);
          transform: translateY(-2px);
        }

        /* Column headings */
        .footer-col-heading {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-col-heading::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(212, 175, 55, 0.15);
        }

        /* Links */
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-link {
          font-size: 0.85rem;
          font-weight: 300;
          color: rgba(245, 230, 200, 0.45);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-link::before {
          content: '';
          width: 0;
          height: 1px;
          background: #d4af37;
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: rgba(245, 230, 200, 0.85);
          padding-left: 0.25rem;
        }

        .footer-link:hover::before { width: 12px; }

        /* Hours */
        .hours-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .hours-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .hours-day {
          font-size: 0.75rem;
          font-weight: 400;
          color: rgba(245, 230, 200, 0.6);
          letter-spacing: 0.05em;
        }

        .hours-time {
          font-size: 0.82rem;
          font-weight: 300;
          color: rgba(212, 175, 55, 0.7);
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
        }

        .hours-time.closed { color: rgba(245, 230, 200, 0.25); font-style: normal; }

        /* Contact info */
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          color: rgba(245, 230, 200, 0.4);
          font-size: 0.82rem;
          font-weight: 300;
          line-height: 1.5;
        }

        .contact-info-item svg { color: rgba(212, 175, 55, 0.5); margin-top: 2px; flex-shrink: 0; }

        /* Bottom bar */
        .footer-bottom {
          border-top: 1px solid rgba(212, 175, 55, 0.06);
        }

        .footer-bottom-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .footer-copyright {
          font-size: 0.72rem;
          font-weight: 300;
          color: rgba(245, 230, 200, 0.25);
          letter-spacing: 0.05em;
        }

        .footer-credit {
          font-size: 0.72rem;
          font-weight: 300;
          color: rgba(245, 230, 200, 0.25);
          display: flex;
          align-items: center;
          gap: 0.35rem;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-credit:hover { color: rgba(212, 175, 55, 0.6); }

        .footer-heart { color: rgba(212, 175, 55, 0.5); }

        @media (max-width: 1024px) {
          .footer-top { grid-template-columns: 1fr 1fr; gap: 3rem; }
        }

        @media (max-width: 600px) {
          .footer-top { grid-template-columns: 1fr; gap: 2.5rem; padding: 3rem 1.5rem; }
          .footer-bottom-inner { flex-direction: column; align-items: center; text-align: center; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-top">
          {/* Brand */}
          <div>
            <span className="footer-brand-logo">
              Zi<em>ona</em>
            </span>
            <p className="footer-brand-tagline">
              Discover your natural glow with premium beauty treatments and
              expert care, crafted for every soul.
            </p>
            <div className="footer-social-row">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <div className="footer-col-heading">Navigate</div>
            <ul className="footer-links">
              {links.map((l) => (
                <li key={l.name}>
                  <Link to={l.to} smooth className="footer-link">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <div className="footer-col-heading">Hours</div>
            <div className="hours-list">
              {hours.map((h) => (
                <div className="hours-item" key={h.day}>
                  <span className="hours-day">{h.day}</span>
                  <span
                    className={`hours-time ${h.time === "Closed" ? "closed" : ""}`}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-heading">Contact</div>
            <div className="contact-info-list">
              <div
                className="contact-info-item"
                style={{ flexDirection: "column", gap: "0.5rem" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                  }}
                >
                  <FiMapPin size={14} />
                  Addis Ababa, Ethiopia
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29965.409305536574!2d38.77029914221419!3d9.003714327608687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b032f352845%3A0x16f0870bbb8db26f!2sZiona%E2%80%99s%20Nail%20and%20eyelashes!5e1!3m2!1sen!2set!4v1777897492051!5m2!1sen!2set%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
                  width="100%"
                  height="120"
                  style={{ border: 0, borderRadius: "6px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/*<div className="contact-info-item">
                <FiMapPin size={14} />
                Addis Ababa, Ethiopia
              </div>*/}

              <div className="contact-info-item">
                <FiPhone size={14} />
                +251 978 372 521
              </div>
              {/*<div className="contact-info-item">
                <FiMail size={14} />
                hello@zionasalon.com
              </div>*/}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <span className="footer-copyright">
              © {year} Ziona. All rights reserved.
            </span>
            <a
              href="https://krubdev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit"
            >
              Crafted with <FiHeart size={11} className="footer-heart" />{" "}
              KrubDev
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
