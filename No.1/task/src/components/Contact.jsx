import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-blue-400">
      <Navbar />

      <div className="bg-blue-900 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Contact Volkswagen</h1>
        <p className="mt-2 text-lg">Your connection to excellence.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <form className="bg-white p-8 shadow-lg rounded-lg space-y-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Send us a Message</h2>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Have questions or feedback? Reach out and our team will get back to you shortly.
          </p>

          <div className="text-gray-800 space-y-4">
            <p><strong>📍 Address:</strong> Berliner Ring 2, 38440 Wolfsburg, Germany</p>
            <p><strong>📞 Phone:</strong> +49 5361 9-0</p>
            <p><strong>✉️ Email:</strong> contact@volkswagen.com</p>
            <p><strong>🕒 Hours:</strong> Mon – Fri: 8am – 6pm CET</p>
          </div>

         
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-6">Our Location</h2>
        <div className="w-full h-96">
          <iframe
            title="Volkswagen HQ Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.078016793869!2d10.798671515588172!3d52.4344346797991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1f1898b1d1697%3A0x5e4c59c0c3c728c5!2sVolkswagen%20AG!5e0!3m2!1sen!2sde!4v1614882421662!5m2!1sen!2sde"
            className="w-full h-full border-0 rounded-lg shadow-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <footer className="mt-16 bg-blue-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Volkswagen AG. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;


