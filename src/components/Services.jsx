import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  GiFlowerTwirl,
  GiLipstick,
  GiMirrorMirror,
  GiSpray,
} from "react-icons/gi";
import { FaSpa, FaSmile } from "react-icons/fa";
import { MdFace, MdOutlineSelfImprovement } from "react-icons/md";

import LuxuryFacial from "../assets/1.jpg";
import HairStyling from "../assets/2.jpg";
import BodyMassage from "../assets/5.jpg";
import BridalMakeup from "../assets/4.jpg";
import Manicure from "../assets/5.jpg";
import LaserHairRemoval from "../assets/L1.jpeg";
import Microblading from "../assets/L2.jpeg";
import BodyScrub from "../assets/L3.jpeg";
import { GiFingernail } from "react-icons/gi";
import { GiEyelashes } from "react-icons/gi";

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const services = [
    {
      id: 1,
      title: "Classic Manicure & Pedicure",
      price: "1000 ETB",
      image: LuxuryFacial,
      tags: ["Nailcare", "Relaxation"],
      description:
        "Essential nail care with shaping, cuticle treatment, and polish finish  ",
      icon: <GiFingernail />,
    },
    {
      id: 2,
      title: "Gel Polish Manicure ",
      price: "1000 ETB",
      image: HairStyling,
      tags: ["Gel Nails", "Durability"],
      description:
        "Chip‑resistant gel polish cured under LED light for lasting shine  ",
      icon: <GiFingernail />,
    },
    {
      id: 3,
      title: "Acrylic Nail Extensions ",
      price: "1500 ETB",
      image: BodyMassage,
      tags: ["Extensions", "Style "],
      description:
        "Custom‑sculpted extensions for added length, strength, and style  ",
      icon: <GiFingernail />,
    },
    {
      id: 4,
      title: "Bridal Nail & Lash Glam ",
      price: "5000 ETB",
      image: BridalMakeup,
      tags: ["Bridal", "Special Events"],
      description:
        "Complete bridal beauty with luxury manicure, pedicure, custom nail art, and full lash extensions for your big day",
      icon: <GiFingernail />,
    },
    {
      id: 5,
      title: "Classic Lash Extensions ",
      price: "1200 ETB",
      image: Manicure,
      tags: ["Lashes", "Confidence "],
      description:
        "Natural‑looking extensions applied lash‑by‑lash for subtle elegance ",
      icon: <GiEyelashes />,
    },
    {
      id: 6,
      title: "Volume Lash Extensions ",
      price: "2000 ETB",
      image: LaserHairRemoval,
      tags: ["Luxury", "Lashes"],
      description: "Advanced laser technology for smooth, hair-free skin",
      icon: <GiEyelashes />,
    },
    {
      id: 7,
      title: "Hybrid Lash Extensions  ",
      price: "2500 ETB",
      image: Microblading,
      tags: ["Eyebrows", "Hybrid Style"],
      description:
        "Blend of classic and volume techniques for a textured, glamorous look  ",
      icon: <MdOutlineSelfImprovement />,
    },
    {
      id: 8,
      title: "Lash Lift & Tint ",
      price: "1500 ETB",
      image: BodyScrub,
      tags: [" Natural Beauty", "Low Maintenance"],
      description:
        "Semi‑permanent curl and tint to enhance natural lashes effortlessly  ",
      icon: <FaSmile />,
    },
  ];

  const visible = showAll ? services : services.slice(0, 6);

  const toggleServices = () => {
    setShowAll(!showAll);
    if (!showAll) scroll.scrollMore(400, { smooth: true });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .services-root {
          background: #07040f;
          padding: 8rem 0 6rem;
          position: relative;
          overflow: hidden;
        }

        .services-deco {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 80px;
          background: linear-gradient(180deg, transparent, rgba(212, 175, 55, 0.4));
        }

        .services-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .services-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .services-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 1.5rem;
        }

        .services-eyebrow-line { width: 24px; height: 1px; background: #d4af37; }

        .services-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 300;
          color: #f5e6c8;
          margin: 0 0 1rem;
          line-height: 1.1;
        }

        .services-title em {
          font-style: italic;
          color: #d4af37;
        }

        .services-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          color: rgba(245, 230, 200, 0.4);
          letter-spacing: 0.05em;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5px;
          background: rgba(212, 175, 55, 0.06);
          border: 1px solid rgba(212, 175, 55, 0.06);
        }

        .service-card {
          background: #09060f;
          position: relative;
          overflow: hidden;
          cursor: default;
          display: flex;
          flex-direction: column;
          transition: background 0.4s ease;
        }

        .service-card:hover {
          background: #0d0918;
        }

        .service-img-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .service-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.7) brightness(0.75);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-card:hover .service-img-wrap img {
          transform: scale(1.08);
          filter: saturate(0.9) brightness(0.85);
        }

        .service-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(9, 6, 15, 0.85) 100%);
        }

        .service-price-tag {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(9, 6, 15, 0.85);
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: 0.3rem 0.75rem;
          display: flex;
          align-items: baseline;
          gap: 0.15rem;
          backdrop-filter: blur(8px);
        }

        .price-dollar {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          color: #d4af37;
          font-weight: 400;
        }

        .price-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 300;
          color: #d4af37;
          line-height: 1;
        }

        .service-icon-wrap {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          color: rgba(212, 175, 55, 0.6);
          font-size: 1.2rem;
          transition: color 0.3s;
        }

        .service-card:hover .service-icon-wrap { color: #d4af37; }

        .service-body {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .service-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .service-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(212, 175, 55, 0.6);
          border: 1px solid rgba(212, 175, 55, 0.2);
          padding: 0.2rem 0.55rem;
          transition: all 0.3s;
        }

        .service-card:hover .service-tag {
          border-color: rgba(212, 175, 55, 0.4);
          color: #d4af37;
        }

        .service-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 400;
          color: #f5e6c8;
          line-height: 1.2;
          transition: color 0.3s;
        }

        .service-card:hover .service-title { color: #fff; }

        .service-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 300;
          color: rgba(245, 230, 200, 0.4);
          line-height: 1.65;
          flex: 1;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(212, 175, 55, 0.4);
          text-decoration: none;
          border-top: 1px solid rgba(212, 175, 55, 0.08);
          padding-top: 0.75rem;
          margin-top: 0.25rem;
          transition: color 0.3s, gap 0.3s;
          cursor: pointer;
        }

        .service-card:hover .service-link {
          color: #d4af37;
          gap: 0.7rem;
        }

        .services-toggle {
          text-align: center;
          margin-top: 4rem;
        }

        .toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: rgba(212, 175, 55, 0.8);
          background: transparent;
          padding: 0.9rem 2.5rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.35s ease;
          clip-path: polygon(14px 0, 100% 0, calc(100% - 14px) 100%, 0 100%);
        }

        .toggle-btn:hover {
          background: rgba(212, 175, 55, 0.06);
          border-color: #d4af37;
          color: #d4af37;
        }

        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
          .service-img-wrap { height: 180px; }
        }
      `}</style>

      <section id="services" className="services-root">
        <div className="services-deco" />

        <div className="services-inner">
          <div className="services-header">
            <div className="services-eyebrow">
              <span className="services-eyebrow-line" />
              What We Offer
              <span className="services-eyebrow-line" />
            </div>
            <h2 className="services-title">
              Our <em>Beauty Services</em>
            </h2>
            <p className="services-subtitle">
              Indulge in exclusive treatments crafted for royalty, where every
              detail is designed to elevate your senses.
            </p>
          </div>

          <div className="services-grid">
            {visible.map((s) => (
              <div
                key={s.id}
                className="service-card"
                onMouseEnter={() => setHoveredId(s.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="service-img-wrap">
                  <img src={s.image} alt={s.title} loading="lazy" />
                  <div className="service-img-overlay" />
                  <div className="service-price-tag">
                    <span className="price-dollar"></span>
                    <span className="price-num">{s.price}</span>
                  </div>
                  <div className="service-icon-wrap">{s.icon}</div>
                </div>

                <div className="service-body">
                  <div className="service-tags">
                    {s.tags.map((t) => (
                      <span className="service-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.description}</p>
                  <div className="service-link">Explore Service &nbsp;→</div>
                </div>
              </div>
            ))}
          </div>

          <div className="services-toggle">
            <button className="toggle-btn" onClick={toggleServices}>
              {showAll ? "← Show Less" : "Explore All Services →"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
