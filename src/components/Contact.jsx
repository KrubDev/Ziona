import React, { useCallback, useMemo, useState } from "react";
import {
  FiInfo,
  FiPhone,
  FiUser,
  FiX,
  FiCheck,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  const services = useMemo(
    () => [
      "Hair Styling",
      "Facial Treatment",
      "Manicure/Pedicure",
      "Massage Therapy",
      "Makeup Artistry",
      "Hair Coloring",
      "Waxing",
      "Skin Care",
      "Body Treatment",
      "Others",
    ],
    [],
  );

  const validateForm = useCallback(() => {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!phone.trim()) errs.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone)) errs.phone = "Must be exactly 10 digits";
    if (selectedServices.length === 0)
      errs.services = "Select at least one service";
    if (!date) errs.date = "Date is required";
    if (!time) errs.time = "Time is required";
    return errs;
  }, [name, phone, selectedServices, date, time]);

  const toggleService = useCallback((service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  }, []);

 const handleSubmit = useCallback(
   (e) => {
     e.preventDefault();

     const validationErrors = validateForm();
     if (Object.keys(validationErrors).length) {
       setErrors(validationErrors);
       return;
     }

     setErrors({});
     setIsSubmitting(true);

     const message = `
✨ New Booking Request

👤 Name: ${name}
📞 Phone: ${phone}
💅 Services: ${selectedServices.join(", ")}
📅 Date: ${date}
⏰ Time: ${time}
  `;

     const encodedMessage = encodeURIComponent(message);

     setTimeout(() => {
       window.open(`https://t.me/zionanail?text=${encodedMessage}`, "_blank");

       // Reset form
       setName("");
       setPhone("");
       setSelectedServices([]);
       setDate("");
       setTime("");

       setIsSubmitting(false);
     }, 500);
   },
   [name, phone, selectedServices, date, time, validateForm],
 );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-root {
          background: #06020e;
          padding: 8rem 0;
          position: relative;
          overflow: hidden;
        }

        .contact-bg-glow {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .contact-inner {
          max-width: 820px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-eyebrow {
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

        .contact-eyebrow-line { width: 24px; height: 1px; background: #d4af37; }

        .contact-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          color: #f5e6c8;
          margin: 0 0 1rem;
          line-height: 1.1;
        }

        .contact-title em { font-style: italic; color: #d4af37; }

        .contact-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(245, 230, 200, 0.4);
          line-height: 1.7;
        }

        .contact-form {
          background: rgba(245, 230, 200, 0.02);
          border: 1px solid rgba(212, 175, 55, 0.12);
          padding: 3rem;
          position: relative;
        }

        .contact-form::before {
          content: '';
          position: absolute;
          top: -1px; left: 2rem; right: 2rem;
          height: 2px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-field.full { grid-column: 1 / -1; }

        .field-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(212, 175, 55, 0.7);
        }

        .field-input-wrap {
          position: relative;
        }

        .field-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(212, 175, 55, 0.4);
          font-size: 0.9rem;
          pointer-events: none;
          transition: color 0.3s;
        }

        .field-input {
          width: 100%;
          background: rgba(245, 230, 200, 0.03);
          border: 1px solid rgba(212, 175, 55, 0.15);
          color: #f5e6c8;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          padding: 0.9rem 1rem 0.9rem 2.75rem;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
          appearance: none;
          -webkit-appearance: none;
        }

        .field-input::placeholder { color: rgba(245, 230, 200, 0.2); }

        .field-input:focus {
          border-color: rgba(212, 175, 55, 0.5);
          background: rgba(212, 175, 55, 0.03);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.05);
        }

        .field-input:focus + .field-icon,
        .field-input-wrap:focus-within .field-icon {
          color: rgba(212, 175, 55, 0.8);
        }

        .field-error {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          color: rgba(255, 120, 120, 0.7);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        /* SERVICES SECTION */
        .services-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(212, 175, 55, 0.7);
          margin-bottom: 1rem;
        }

        .selected-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
          min-height: 0;
        }

        .selected-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: #d4af37;
          padding: 0.3rem 0.8rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.05em;
        }

        .selected-tag button {
          background: none;
          border: none;
          color: rgba(212, 175, 55, 0.5);
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          transition: color 0.2s;
        }

        .selected-tag button:hover { color: #d4af37; }

        .services-options {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2px;
        }

        .service-option {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.65rem 0.5rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 400;
          text-align: center;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1px solid rgba(212, 175, 55, 0.1);
          background: rgba(245, 230, 200, 0.02);
          color: rgba(245, 230, 200, 0.45);
          user-select: none;
        }

        .service-option:hover {
          background: rgba(212, 175, 55, 0.05);
          border-color: rgba(212, 175, 55, 0.25);
          color: rgba(245, 230, 200, 0.75);
        }

        .service-option.active {
          background: rgba(212, 175, 55, 0.12);
          border-color: rgba(212, 175, 55, 0.4);
          color: #d4af37;
        }

        .service-option .check-icon {
          width: 12px;
          height: 12px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s;
        }

        .service-option.active .check-icon {
          background: #d4af37;
          border-color: #d4af37;
        }

        .submit-btn {
          width: 100%;
          margin-top: 2.5rem;
          background: #d4af37;
          color: #06020e;
          border: none;
          padding: 1.2rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.35s ease;
          clip-path: polygon(20px 0, 100% 0, calc(100% - 20px) 100%, 0 100%);
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.1);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }

        .submit-btn:hover::before { transform: translateX(0); }

        .submit-btn:hover:not(:disabled) {
          background: #e8c448;
          transform: translateY(-1px);
          box-shadow: 0 12px 40px rgba(212, 175, 55, 0.25);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .form-grid { grid-template-columns: 1fr; }
          .services-options { grid-template-columns: repeat(2, 1fr); }
          .contact-form { padding: 2rem 1.5rem; }
        }

        @media (max-width: 480px) {
          .services-options { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <section id="contact" className="contact-root">
        <div className="contact-bg-glow" />

        <div className="contact-inner">
          <div className="contact-header">
            <div className="contact-eyebrow">
              <span className="contact-eyebrow-line" />
              Reserve Your Time
              <span className="contact-eyebrow-line" />
            </div>
            <h2 className="contact-title">
              Book Your <em>Beauty Session</em>
            </h2>
            <p className="contact-subtitle">
              Let us create your perfect beauty experience. Complete the form
              and we'll confirm via Telegram & Phone Call.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Name */}
              <div className="form-field">
                <label className="field-label">Full Name</label>
                <div className="field-input-wrap">
                  <input
                    type="text"
                    className="field-input"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                  />
                  <FiUser className="field-icon" />
                </div>
                {errors.name && (
                  <p className="field-error">
                    <FiInfo size={11} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="form-field">
                <label className="field-label">Phone Number</label>
                <div className="field-input-wrap">
                  <input
                    type="tel"
                    className="field-input"
                    placeholder="10-digit number"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                  />
                  <FiPhone className="field-icon" />
                </div>
                {errors.phone && (
                  <p className="field-error">
                    <FiInfo size={11} />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Services */}
              <div className="form-field full">
                <div className="services-label">Select Services</div>

                {selectedServices.length > 0 && (
                  <div className="selected-tags">
                    {selectedServices.map((s) => (
                      <span className="selected-tag" key={s}>
                        {s}
                        <button type="button" onClick={() => toggleService(s)}>
                          <FiX size={10} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                <div className="services-options">
                  {services.map((s) => (
                    <div
                      key={s}
                      className={`service-option ${selectedServices.includes(s) ? "active" : ""}`}
                      onClick={() => toggleService(s)}
                    >
                      <span className="check-icon">
                        {selectedServices.includes(s) && (
                          <FiCheck size={8} style={{ color: "#06020e" }} />
                        )}
                      </span>
                      {s}
                    </div>
                  ))}
                </div>
                {errors.services && (
                  <p className="field-error" style={{ marginTop: "0.5rem" }}>
                    <FiInfo size={11} />
                    {errors.services}
                  </p>
                )}
              </div>

              {/* Date */}
              <div className="form-field">
                <label className="field-label">Preferred Date</label>
                <div className="field-input-wrap">
                  <input
                    type="date"
                    className="field-input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <FiCalendar className="field-icon" />
                </div>
                {errors.date && (
                  <p className="field-error">
                    <FiInfo size={11} />
                    {errors.date}
                  </p>
                )}
              </div>

              {/* Time */}
              <div className="form-field">
                <label className="field-label">Preferred Time</label>
                <div className="field-input-wrap">
                  <input
                    type="time"
                    className="field-input"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                  <FiClock className="field-icon" />
                </div>
                {errors.time && (
                  <p className="field-error">
                    <FiInfo size={11} />
                    {errors.time}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Scheduling Your Appointment..."
                : "✦  Confirm Booking "}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
