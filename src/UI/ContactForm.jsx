import { SendHorizonal } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const ContactForm = () => {
  const [contact, setContact] = useState({
    userName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="contact-label">
          <label htmlFor="username">Your name</label>
          <input
            type="text"
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
          name="message"
          placeholder="Message me"
          value={contact.message}
          onChange={handleChange}
          required
          autoComplete="off"
        ></textarea>
      </div>

      <NavLink to="/" className="contact-btn">
        <button className="contact-description">Send message</button>
        <SendHorizonal className="btn-icon" />
      </NavLink>
    </form>
  );
};
