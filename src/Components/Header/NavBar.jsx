import { Avatar } from "@mantine/core";
import React, { useState } from "react";

const NavBar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed backdrop-blur-lg top-0 left-1/2 transform -translate-x-1/2 mt-11 bg-[#3b1d6b62] z-[1000] text-white py-2 px-6 flex justify-between items-center w-[85%] rounded-3xl">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Avatar size="lg" src="/assets/logo-img.png" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#a377d2] to-[#c2a2e3] bg-clip-text text-transparent">
          Techvistra
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        {["Home", "About Us", "Services", "Testimonials", "Contact"].map(
          (item) => (
            <li key={item}>
              <a
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                className={`relative px-2 transition duration-300 ${
                  active === item ? "text-purple-400" : "hover:text-purple-400"
                }`}
                onClick={() => setActive(item)}
              >
                {item}
                {active === item && (
                  <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-8 h-[2px] bg-gradient-to-r from-[#b993d6] to-[#8ca6db]"></span>
                )}
              </a>
            </li>
          )
        )}
      </ul>

      {/* Discover Button */}
      <button className="bg-[#6b5cb2] text-white px-6 py-2 rounded-lg border border-[#5a4a9c] hover:bg-[#5a4a9c] transition">
        Discover the Platform
      </button>
    </nav>
  );
};

export default NavBar;
