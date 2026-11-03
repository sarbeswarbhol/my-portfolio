
import { useEffect, useRef, useState } from "react";
import { education } from "../../constants";

const Education = () => {
  const [activeLogo, setActiveLogo] = useState(null);
  const popupRef = useRef(null);

  // Close popup when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        setActiveLogo(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveLogo(null);
      }
    };

    if (activeLogo) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeLogo]);

  return (
    <section
      id="education"
      className="relative px-[7vw] py-20 font-sans md:px-[7vw] lg:px-[12vw]"
    >
      {/* Section Heading */}
      <div className="mb-16 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#a78bfa]">
          My Academic Journey
        </p>

        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Education
        </h2>

        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#8245ec]" />

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
          My academic journey has helped me build a strong foundation
          in technology, problem-solving, and continuous learning.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative mx-auto max-w-5xl">
        {/* Timeline Line */}
        <div className="absolute bottom-0 left-7 top-0 w-px bg-gradient-to-b from-[#8245ec] via-purple-500/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={edu.id || index}
              className={`relative flex items-center ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Clickable School Logo */}
              <button
                type="button"
                onClick={() => setActiveLogo(edu)}
                aria-label={`View ${edu.school} logo`}
                className="absolute left-7 z-20 flex h-14 w-14 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border-[3px] border-[#8245ec] bg-white p-2 shadow-[0_0_20px_rgba(130,69,236,0.35)] transition duration-300 hover:scale-110 hover:shadow-[0_0_28px_rgba(130,69,236,0.65)] md:left-1/2"
              >
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="h-full w-full rounded-full object-contain"
                />
              </button>

              {/* Education Card */}
              <div
                className="ml-16 w-[calc(100%-4rem)] rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_20px_rgba(130,69,236,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#8245ec]/50 hover:shadow-[0_0_30px_rgba(130,69,236,0.15)] md:ml-0 md:w-[calc(50%-3rem)] md:p-7"
              >
                {/* Date */}
                <div className="mb-5">
                  <span className="rounded-full border border-[#8245ec]/30 bg-[#8245ec]/10 px-3 py-1.5 text-xs font-medium text-purple-300">
                    {edu.date}
                  </span>
                </div>

                {/* Degree */}
                <h3 className="text-lg font-bold leading-snug text-white md:text-xl">
                  {edu.degree}
                </h3>

                {/* School */}
                <h4 className="mt-2 text-sm font-medium leading-relaxed text-gray-300">
                  {edu.school}
                </h4>

                {/* Grade */}
                {edu.grade && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
                    <span className="text-xs text-gray-400">
                      Grade
                    </span>

                    <span className="text-sm font-semibold text-purple-300">
                      {edu.grade}
                    </span>
                  </div>
                )}

                {/* Description */}
                {edu.desc && (
                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {edu.desc}
                  </p>
                )}

                {/* Bottom Accent */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-[#8245ec]/50 via-purple-400/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* School Logo Popup */}
      {activeLogo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-5 backdrop-blur-sm">
          <div
            ref={popupRef}
            className="relative w-full max-w-sm rounded-2xl border border-[#8245ec]/40 bg-[#100b20] p-8 text-center shadow-[0_0_50px_rgba(130,69,236,0.2)]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveLogo(null)}
              aria-label="Close popup"
              className="absolute right-4 top-3 text-2xl text-gray-400 transition hover:text-white"
            >
              ×
            </button>

            {/* Large School Logo */}
            <div className="mx-auto mb-5 flex h-36 w-36 items-center justify-center rounded-2xl bg-white p-4 shadow-[0_0_25px_rgba(130,69,236,0.2)]">
              <img
                src={activeLogo.img}
                alt={activeLogo.school}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* School Name */}
            <h3 className="text-lg font-bold text-white">
              {activeLogo.school}
            </h3>

            <p className="mt-2 text-sm text-purple-300">
              {activeLogo.degree}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
