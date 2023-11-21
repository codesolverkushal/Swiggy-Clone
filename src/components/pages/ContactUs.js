// ContactUs.js

import React, { useState } from 'react';
import './ContactUs.css'; // Import your styles

const ContactUs = () => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
  };

  return (
    <div className={`contact-us-container ${feedbackSubmitted ? 'feedback-submitted' : ''}`}>
      {feedbackSubmitted ? (
        <div className="thanks-message">
          <h2>Thanks for your valuable feedback!</h2>
        </div>
      ) : (
        <>
          <h2>Contact Us</h2>
          <p>We value your feedback. Reach out to us using the contact information below:</p>

          <div className="contact-info">
            <div>
              <h3>Email:</h3>
              <p>mohitsinghkpsc@gmail.com</p>
            </div>
            <div>
              <h3>Phone:</h3>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactUs;
