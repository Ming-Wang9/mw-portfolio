import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";
import surfingImage from '../background_image/surfing.jpg';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ouj7dqh', 
      'template_ooeggu8', 
      form.current,
      'HcXfWtgMxaopsbFun' 
    ).then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        alert('Email sent successfully!');
      },
      (error) => {
        console.error('Failed to send email:', error.text);
        alert('Failed to send email, please try again.');
      }
    );

    e.target.reset(); // Reset the form
  };

  return (
    <div className="contact-page">
      <div className="contact-image">
        <img src={surfingImage} alt="Surfing" />
      </div>
      <div className="text-zone">
        <h1>Contact Me</h1>
        <p>Use the form below to send me a message!</p>
        <div className="contact-form">
          <form ref={form} onSubmit={handleSubmit}>
            <ul>
              <li className="half">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  required
                />
              </li>
              <li className="half">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
              <li>
                <input
                  type="submit"
                  className="flat-button"
                  value="Send"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
