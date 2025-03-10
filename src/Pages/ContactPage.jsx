import React from "react";

const ContactPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white relative px-4"
      style={{ backgroundImage: "url('./assets/contactBackground.png')" }} // Ensure the correct path
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-300 mb-6 text-lg">Get in Touch with Us</p>

        {/* Icon */}
        <div className="text-2xl">👥</div>

        {/* Description */}
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          We’re here to answer your questions, discuss your projects, and help bring your ideas to life.
        </p>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-6xl md:text-8xl font-extrabold text-gray-700 opacity-30">
        TECHVISTRA
      </div>
    </div>
  );
};

export default ContactPage;
