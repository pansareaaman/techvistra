import { Avatar } from "@mantine/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();

  const links = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
    { name: "Services", url: "/services" },
    { name: "Testimonials", url: "/testimonials" },
    { name: "Contact", url: "/contact" }
  ];

  return (
    <div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        { links.map((item) => (
          <li key={item.name}>
            <Link
              to={item.url}
              className={`relative px-2 transition duration-300 ${
                location.pathname === item.url
                  ? "text-purple-400"
                  : "hover:text-purple-400"
              }`}
            >
              {item.name}
              {location.pathname === item.url && (
                <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-8 h-[2px] bg-gradient-to-r from-[#b993d6] to-[#8ca6db]"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
