import React, { useState, useEffect, useRef } from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  const [activeLogo, setActiveLogo] = useState(null);
  const popupRef = useRef(null);

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActiveLogo(null);
      }
    };
    if (activeLogo) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeLogo]);

  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div
              onMouseEnter={() => setActiveLogo(edu)} // Hover to open
              onClick={() => setActiveLogo(edu)} // Tap to open
              className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 cursor-pointer hover:scale-105 transition"
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ml-8 ${
                index % 2 === 0 ? "sm:pl-20" : "sm:pr-20"
              }`}
            >
              <div className="flex items-center space-x-6">
                {/* Logo Box */}
                <div
                  onMouseEnter={() => setActiveLogo(edu)} // Hover to open
                  onClick={() => setActiveLogo(edu)} // Tap to open
                  className="w-24 h-16 bg-white rounded-md overflow-hidden flex justify-center items-center cursor-pointer hover:scale-105 transition"
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {activeLogo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div
            ref={popupRef}
            className="bg-white rounded-xl p-6 max-w-sm w-full text-center relative shadow-lg transition-transform duration-300 scale-100"
          >
            <button
              className="absolute top-2 right-2 text-black font-bold text-xl hover:text-red-600"
              onClick={() => setActiveLogo(null)}
            >
              ×
            </button>
            <img
              src={activeLogo.img}
              alt="School Logo"
              className="w-32 h-32 mx-auto mb-4 object-contain"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {activeLogo.school}
            </h2>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
