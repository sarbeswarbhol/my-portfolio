
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigation = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/Sibssssssss/",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/bholsarbeswar",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sarbeswarbhol",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/sibssssssss/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/sarbeswarbhol",
    },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-[#050414]/80 px-[7vw] py-12 font-sans backdrop-blur-xl md:px-[7vw] lg:px-[12vw]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-[#8245ec]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Brand */}
        <div className="text-center">
          <button
            onClick={() => handleScroll("about")}
            className="text-2xl font-bold text-white transition-colors duration-300 hover:text-purple-300"
          >
            Sarbeswar <span className="text-[#8245ec]">Bhol.</span>
          </button>

          <p className="mt-3 text-sm text-gray-400">
            Building, Learning & Exploring Technology.
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-4">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-sm text-gray-400 transition-colors duration-300 hover:text-[#a78bfa]"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              title={item.name}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#8245ec]/50 hover:bg-[#8245ec]/10 hover:text-purple-300 hover:shadow-[0_0_20px_rgba(130,69,236,0.15)]"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-[#8245ec]/40 to-transparent" />

        {/* Copyright and Back to Top */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Sarbeswar Bhol. All rights reserved.
          </p>

          <button
            onClick={() => handleScroll("about")}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-xs font-medium text-gray-400 transition-colors hover:text-purple-300"
          >
            Back to Top

            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-[#8245ec]/50 group-hover:bg-[#8245ec]/10">
              <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
