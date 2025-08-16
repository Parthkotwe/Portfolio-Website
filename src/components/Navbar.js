import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../data/data";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // handle scroll background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="z-[999] relative">
      {/* Floating navbar container (background + links inside) */}
      <div
        className={`fixed top-0 left-1/2 w-full border border-white/40 
        shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] transition-all duration-300
        sm:top-6 sm:w-[36rem] sm:rounded-full
        ${scrolled ? "bg-white/90" : "bg-white/70"}`}
        style={{ transform: "translateX(-50%)" }}
      >
        {/* Navbar links inside background */}
        <nav className="flex justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.95rem] font-medium text-gray-600 sm:flex-nowrap sm:gap-5 py-2">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="relative flex items-center justify-center"
              >
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setActive(link.id)}
                  className={`flex items-center justify-center px-3 py-2 cursor-pointer rounded-full transition-colors duration-200 ${
                    active === link.id
                      ? "text-gray-900 bg-gray-100"
                      : "hover:text-gray-900"
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
