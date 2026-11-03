import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/sarbeswarbhol",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/sarbeswarbhol",
    },
  ];

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = menuItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let currentSection = "about";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 180) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scrolling
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full px-[7vw] transition-all duration-300 md:px-[7vw] lg:px-[12vw] ${
        isScrolled
          ? "border-b border-white/[0.06] bg-[#050414]/55 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm"
          : "bg-transparent"
      }`}>
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <button
          onClick={() => handleMenuItemClick("about")}
          className="group text-lg font-bold tracking-wide text-white transition duration-300"
          aria-label="Go to About section">
          <span className="text-[#8245ec]">&lt;</span>
          Sarbeswar
          <span className="text-[#8245ec]">/</span>
          Bhol
          <span className="text-[#8245ec]">&gt;</span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-[#a78bfa]"
                    : "text-gray-400 hover:text-white"
                }`}>
                {item.label}

                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-[#8245ec] transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Links */}
        <div className="hidden items-center gap-3 md:flex">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              title={item.name}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-lg text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8245ec]/50 hover:bg-[#8245ec]/10 hover:text-purple-300">
              {item.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-2xl text-purple-300 transition hover:border-[#8245ec]/50 hover:bg-[#8245ec]/10 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-[450px] pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="rounded-2xl border border-white/10 bg-[#100b20]/95 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <ul className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-[#8245ec]/15 text-purple-300"
                      : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                  }`}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Social Links */}
          <div className="mt-5 flex justify-center gap-4 border-t border-white/10 pt-5">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-lg text-gray-400 transition hover:border-[#8245ec]/50 hover:text-purple-300">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
