import React, { useEffect, useRef } from "react";
import BannerImage from "../assets/SalonBanner.png";
import { Link } from "react-scroll";

const Banner = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .banner-root {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #06020e;
        }

        .banner-bg {
          position: absolute;
          inset: 0;
          background-image: url(${BannerImage});
          background-size: cover;
          background-position: center 30%;
          opacity: 0.35;
          transform: scale(1.05);
          animation: slowZoom 18s ease-in-out infinite alternate;
        }

        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.12); }
        }

        .banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            170deg,
            rgba(6, 2, 14, 0.4) 0%,
            rgba(6, 2, 14, 0.2) 40%,
            rgba(6, 2, 14, 0.7) 100%
          );
        }

        .banner-noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 150px;
        }

        .banner-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .banner-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #d4af37;
        }

        .banner-eyebrow-line {
          width: 32px;
          height: 1px;
          background: #d4af37;
        }

        .banner-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.5rem, 9vw, 8rem);
          font-weight: 300;
          line-height: 1;
          color: #f5e6c8;
          margin: 0 0 0.15em;
          letter-spacing: -0.02em;
        }

        .banner-title em {
          font-style: italic;
          font-weight: 300;
          color: transparent;
          -webkit-text-stroke: 1px rgba(212, 175, 55, 0.8);
        }

        .banner-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
        }

        .banner-divider-line {
          height: 1px;
          width: 80px;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.6));
        }

        .banner-divider-line.right {
          transform: scaleX(-1);
        }

        .banner-divider-diamond {
          width: 6px;
          height: 6px;
          background: #d4af37;
          transform: rotate(45deg);
        }

        .banner-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: 300;
          font-style: italic;
          color: rgba(245, 230, 200, 0.65);
          margin-bottom: 3rem;
          letter-spacing: 0.03em;
          line-height: 1.5;
        }

        .banner-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .banner-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #d4af37;
          color: #06020e;
          padding: 1rem 2.5rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          clip-path: polygon(16px 0, 100% 0, calc(100% - 16px) 100%, 0 100%);
        }

        .banner-btn-primary:hover {
          background: #f0d060;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(212, 175, 55, 0.35);
        }

        .banner-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          border: 1px solid rgba(245, 230, 200, 0.3);
          color: rgba(245, 230, 200, 0.75);
          padding: 1rem 2.2rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          background: transparent;
          transition: all 0.4s ease;
        }

        .banner-btn-secondary:hover {
          border-color: rgba(212, 175, 55, 0.5);
          color: #d4af37;
          background: rgba(212, 175, 55, 0.05);
        }

        .banner-stats {
          position: absolute;
          bottom: 3rem;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 4rem;
          z-index: 10;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          font-weight: 300;
          color: #d4af37;
          line-height: 1;
          display: block;
        }

        .stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(245, 230, 200, 0.45);
          margin-top: 0.3rem;
          display: block;
        }

        .banner-scroll-indicator {
          position: absolute;
          bottom: 2rem;
          right: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          z-index: 10;
        }

        .scroll-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(212, 175, 55, 0.5);
          writing-mode: vertical-rl;
        }

        .scroll-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(180deg, rgba(212, 175, 55, 0.5), transparent);
          animation: scrollDown 2s ease-in-out infinite;
        }

        @keyframes scrollDown {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }

        @media (max-width: 640px) {
          .banner-stats { gap: 2rem; bottom: 2rem; }
          .stat-number { font-size: 1.6rem; }
          .banner-scroll-indicator { display: none; }
        }
      `}</style>

      <div id="home" className="banner-root">
        <div className="banner-bg" />
        <div className="banner-overlay" />
        <div className="banner-noise" />

        <div className="banner-content" ref={textRef}>
          <div className="banner-eyebrow">
            <span className="banner-eyebrow-line" />
            Luxury Beauty & Nail
            <span className="banner-eyebrow-line" />
          </div>

          <h1 className="banner-title">
            Ziona
            <br />
            <em>Nail & eyelashes</em>
          </h1>

          <div className="banner-divider">
            <span className="banner-divider-line" />
            <span className="banner-divider-diamond" />
            <span className="banner-divider-line right" />
          </div>

          <p className="banner-subtitle">
            You are not perfect but your 💅
            <br />
            can !
          </p>

          <div className="banner-actions">
            <Link to="contact" smooth className="banner-btn-primary">
              ✦ &nbsp;Book Appointment
            </Link>
            <Link to="services" smooth className="banner-btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="banner-stats">
          {[
            { num: "2+", label: "Years Experience" },
            { num: "500+", label: "Happy Clients" },
            { num: "10+", label: "Expert Artists" },
          ].map(({ num, label }) => (
            <div className="stat-item" key={label}>
              <span className="stat-number">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="banner-scroll-indicator">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </>
  );
};

export default Banner;
