import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-2">123 Green Street, Agriculture City</p>
        <p className="text-lg mb-2">Phone: (123) 456-7890</p>
        <p className="text-lg">Email: info@example.com</p>
      </div>
    </section>
  );
};

export default ContactSection;
