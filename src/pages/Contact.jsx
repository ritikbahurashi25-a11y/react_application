import "./Pages.css";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="page-container">
      <div className="content-card contact-grid">

        <div>
          <h1 className="title">contact me</h1>
          <p>Feel free to reach out for collaboration or opportunities!</p>

          <ul className="info-list">
            <li>📧 Email: ritik.bahurashi@spit.ac.in</li>
            <li>📞 Phone: +91 9112884017 </li>
            <li>📍 Mumbai, Maharashtra</li>
          </ul>
        </div>

        <form className="form-card">
          <label>Your Name</label>
          <input type="text" />

          <label>Your Email</label>
          <input type="email" />

          <label>Message</label>
          <textarea></textarea>

          <button className="btn-primary">Send Message</button>
        </form>

      </div>
    </div>
  );
}
