import React from "react";
import { FiScissors, FiUser, FiHeart, FiAward } from "react-icons/fi";
import { GiLipstick } from "react-icons/gi";
import imgabout from "../assets/SalonBanner1.png";
import { GiFingernail } from "react-icons/gi";

const About = () => {
  const features = [
    {
      icon: <GiFingernail />,
      title: "Expert Stylists",
      desc: "Certified professionals with artistic vision",
      num: "01",
    },
    {
      icon: <GiLipstick />,
      title: "Premium Products",
      desc: "Luxury brands for ultimate beauty experience",
      num: "02",
    },
    {
      icon: <FiUser />,
      title: "Custom Care",
      desc: "Personalized beauty solutions for you",
      num: "03",
    },
    {
      icon: <FiHeart />,
      title: "Passionate Team",
      desc: "Dedicated to enhancing your natural beauty",
      num: "04",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .about-root {
          background: #0a0612;
          padding: 8rem 0;
          overflow: hidden;
          position: relative;
        }

        .about-glow {
          position: absolute;
          top: 20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        /* IMAGE SIDE */
        .about-img-side {
          position: relative;
        }

        .about-img-frame {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
        }

        .about-img-frame::before {
          content: '';
          position: absolute;
          inset: -1px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          z-index: 2;
          pointer-events: none;
        }

        .about-img-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: saturate(0.85) brightness(0.9);
          transition: all 0.8s ease;
        }

        .about-img-frame:hover img {
          transform: scale(1.04);
          filter: saturate(1) brightness(0.95);
        }

        .about-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(200deg, transparent 50%, rgba(10, 6, 18, 0.6) 100%);
          z-index: 1;
        }

        .about-img-badge {
          position: absolute;
          bottom: 2rem;
          right: -2rem;
          background: #d4af37;
          color: #06020e;
          padding: 1.5rem;
          z-index: 3;
          text-align: center;
          min-width: 120px;
        }

        .badge-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 300;
          line-height: 1;
          display: block;
        }

        .badge-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          display: block;
          margin-top: 0.25rem;
          opacity: 0.8;
        }

        .about-img-tag {
          position: absolute;
          top: 2rem;
          left: -1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(10, 6, 18, 0.9);
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: 0.6rem 1rem;
          z-index: 3;
        }

        .about-img-tag svg { color: #d4af37; font-size: 0.9rem; }

        .about-img-tag span {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(212, 175, 55, 0.9);
        }

        .about-corner-deco {
          position: absolute;
          top: -1rem;
          left: -1rem;
          width: 48px;
          height: 48px;
          border-top: 2px solid rgba(212, 175, 55, 0.4);
          border-left: 2px solid rgba(212, 175, 55, 0.4);
        }

        .about-corner-deco.br {
          top: auto; left: auto;
          bottom: -1rem; right: -1rem;
          border-top: none; border-left: none;
          border-bottom: 2px solid rgba(212, 175, 55, 0.4);
          border-right: 2px solid rgba(212, 175, 55, 0.4);
        }

        /* CONTENT SIDE */
        .about-content-side {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #d4af37;
        }

        .about-eyebrow-line { width: 24px; height: 1px; background: #d4af37; }

        .about-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 4.5vw, 4rem);
          font-weight: 300;
          color: #f5e6c8;
          line-height: 1.1;
          margin: 0;
        }

        .about-title em {
          font-style: italic;
          color: #d4af37;
        }

        .about-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 300;
          color: rgba(245, 230, 200, 0.5);
          line-height: 1.8;
          max-width: 480px;
        }

        .about-divider {
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, #d4af37, transparent);
        }

        .about-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5px;
          border: 1px solid rgba(212, 175, 55, 0.08);
        }

        .feature-card {
          background: rgba(245, 230, 200, 0.02);
          padding: 1.5rem;
          position: relative;
          cursor: default;
          transition: background 0.3s ease;
          border: 1px solid rgba(212, 175, 55, 0.08);
        }

        .feature-card:hover {
          background: rgba(212, 175, 55, 0.04);
        }

        .feature-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          color: rgba(212, 175, 55, 0.3);
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.75rem;
        }

        .feature-icon {
          color: #d4af37;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .feature-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: #f5e6c8;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 0.25rem;
        }

        .feature-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.75rem;
          color: rgba(245, 230, 200, 0.4);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-img-badge { right: 0; }
          .about-img-tag { left: 0; }
        }

        @media (max-width: 520px) {
          .about-features { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="about" className="about-root">
        <div className="about-glow" />

        <div className="about-inner">
          {/* Image */}
          <div className="about-img-side">
            <div className="about-corner-deco" />
            <div className="about-corner-deco br" />

            <div className="about-img-tag">
              <FiAward />
              <span>Quality Service Salon</span>
            </div>

            <div className="about-img-frame">
              <img src={imgabout} alt="About Ziona Salon" />
              <div className="about-img-overlay" />
            </div>

            <div className="about-img-badge">
              <span className="badge-num">+2</span>
              <span className="badge-label">
                Years of
                <br />
                Excellence
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="about-content-side">
            <div className="about-eyebrow">
              <span className="about-eyebrow-line" />
              Our Story
            </div>

            <h2 className="about-title">
              Redefining
              <br />
              <em>Beauty Standards</em>
            </h2>

            <div className="about-divider" />

            <p className="about-body">
              At Ziona, we redefine beauty through the art of nails and lashes.
              Our specialists blend precision with creativity to craft flawless
              manicures, bold nail designs, and captivating lash styles — all in
              a space designed for pure indulgence.
            </p>

            <div className="about-features">
              {features.map((f, i) => (
                <div className="feature-card" key={i}>
                  <span className="feature-num">{f.num}</span>
                  <div className="feature-icon">{f.icon}</div>
                  <span className="feature-title">{f.title}</span>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
