import React from 'react';

const ContactSection: React.FC = () => {
  const whatsappNumber = '+919999200327'; // Your WhatsApp number in international format
  const whatsappMessage = encodeURIComponent('Hello! I would like to get in touch.'); // Optional pre-filled message

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-2">E7, Arera Colony, Bhopal (M.P.)</p>
        <p className="text-lg mb-2">Phone: +91 9999 200 327 / +91 99265 115 19</p>
        <p className="text-lg">Email: mandalagreens.in@gmail.com</p>
        <p className="text-lg"><a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded bg-green-500 px-6 py-3 text-white font-semibold hover:bg-green-600 transition"
          >
            Chat with us on WhatsApp
          </a></p>
      </div>
    </section>
  );
};

export default ContactSection;
