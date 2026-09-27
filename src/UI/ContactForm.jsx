import { SendHorizonal, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/tushardeshmukh354@gmail.com";

export const ContactForm = () => {
  const [contact, setContact] = useState({
    userName: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: contact.userName,
          email: contact.email,
          message: contact.message,
          _subject: `New message from ${contact.userName}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json();

      if (result.success === "true" || response.ok) {
        setContact({ userName: "", email: "", message: "" });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 1500);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="contact-label">
            <label htmlFor="userName">Your name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="ENTER YOUR NAME"
              value={contact.userName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="contact-label">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ENTER YOUR EMAIL"
              value={contact.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
        </div>

        <div className="contact-label">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me a little about your project or opportunity..."
            value={contact.message}
            onChange={handleChange}
            required
            autoComplete="off"
          ></textarea>
        </div>

        {error && <p className="form-error">{error}</p>}

        <button
          type="submit"
          className="contact-btn"
          disabled={isSubmitting}
        >
          <p>{isSubmitting ? "Sending..." : "Send message"}</p>
          <SendHorizonal className="btn-icon" />
        </button>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <CheckCircle2 className="popup-icon" size={48} />
            <h3 className="popup-title">Message Sent!</h3>
            <p className="popup-message">
              Thanks for reaching out. I'll get back to you soon.
            </p>
          </div>
        </div>
      )}
    </>
  );
};