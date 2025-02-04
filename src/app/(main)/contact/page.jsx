'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        'service_p5vtbeo',  // Replace with your service ID
        'template_cxzk7xr',  // Replace with your template ID
        e.target,
        'QMyTR54nwEYUqRZSL'       // Replace with your user ID
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('There was an error. Please try again.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-main rounded-lg">
      <header className="text-center py-10">
        <h1 className="text-4xl font-display  mb-4">Contact Us</h1>
        <p className="text-lg">We'd love to hear from you!</p>
      </header>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-10 space-y-8">
        <h2 className="text-3xl font-display ">Get in Touch</h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg  mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-accent-secondary  rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-lg  mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-accent-secondary text-white rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-lg  mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full p-4 bg-accent-secondary  rounded-md focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary rounded-md hover:bg-accent transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <div className="mt-6 text-center ">
            <p>{status}</p>
          </div>
        )}
      </section>

    </div>
  );
};

export default Contact;
