import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { FaArrowRight, FaDownload } from "react-icons/fa";

import pfpImage from "../../assets/profile/pfp-img.png";

const About = () => {
  const skills = [
    "Python",
    "Django",
    "Flask",
    "SQL",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Selenium",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen px-[7vw] py-16 md:px-[7vw] md:py-20 lg:px-[12vw] lg:py-24">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-10 lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="order-2 md:order-1">
          {/* Availability */}
          {/* Availability */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-green-400/20 bg-green-400/[0.06] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-green-400" />

            <span className="text-xs font-medium tracking-wide text-green-300 sm:text-sm">
              Open to Opportunities
            </span>
          </div>

          {/* Greeting */}
          <p className="mb-3 text-sm font-medium tracking-[4px] text-gray-400 sm:text-lg">
            HELLO, I'M
          </p>

          {/* Name */}
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Sarbeswar
            <span className="mt-2 block bg-gradient-to-r from-[#8245ec] via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Bhol.
            </span>
          </h1>

          {/* Typing Effect */}
          <div className="mt-6 flex min-h-[40px] flex-wrap items-center gap-x-2 gap-y-1 text-lg font-semibold sm:text-2xl">
            <span className="text-gray-300">I'm passionate about</span>

            <span className="text-[#a78bfa]">
              <ReactTypingEffect
                text={[
                  "Python Development",
                  "Django Applications",
                  "Backend Engineering",
                  "Software Testing",
                  "Web Technologies",
                ]}
                speed={80}
                eraseSpeed={40}
                typingDelay={400}
                eraseDelay={1600}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 lg:text-lg">
            I'm a Computer Science graduate interested in building practical
            software solutions. Through personal and academic projects, I've
            explored Python, Django, database management, web technologies, and
            software testing. I enjoy solving technical problems, understanding
            how systems work, and continuously developing my skills through
            hands-on projects.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="https://drive.google.com/file/d/1_DIZMhijVbNnU2Tu7Hqegb3QxMnfxCaI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#8245ec] to-[#a855f7] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(130,69,236,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(130,69,236,0.45)] sm:px-7 sm:py-4 sm:text-base">
              <FaDownload />
              Download CV
            </a>

            <a
              href="#work"
              className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-[#8245ec]/60 hover:text-white sm:px-7 sm:py-4 sm:text-base">
              View Projects
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* RIGHT PROFILE */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative">
            {/* Decorative Rings */}
            <div className="absolute -inset-4 rounded-full border border-[#8245ec]/20 sm:-inset-6" />

            <div className="absolute -inset-8 rounded-full border border-purple-400/10 sm:-inset-11" />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-[#8245ec]/30 blur-[75px] sm:blur-[100px]" />

            {/* Profile Image */}
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.04}
              transitionSpeed={1000}
              gyroscope={true}
              className="relative h-56 w-56 rounded-full border-[3px] border-[#8245ec]/70 bg-gradient-to-br from-[#8245ec]/30 to-indigo-500/20 p-2 shadow-[0_0_50px_rgba(130,69,236,0.3)] sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[26rem] lg:w-[26rem]">
              <img
                src={pfpImage}
                alt="Sarbeswar Bhol"
                className="h-full w-full rounded-full object-cover"
              />
            </Tilt>

            {/* Profile Information */}
            <div className="absolute -bottom-6 left-1/2 z-20 w-max -translate-x-1/2 rounded-xl border border-white/10 bg-[#100b1d]/95 px-5 py-3 text-center shadow-xl backdrop-blur-xl sm:px-6">
              <p className="text-xs font-semibold text-white sm:text-sm">
                B.Tech · Computer Science
              </p>

              <p className="mt-1 text-[10px] text-purple-300 sm:text-xs">
                Problem Solver & Tech Enthusiast
              </p>
            </div>

            {/* Floating Focus Card - Desktop */}
            <div className="absolute -right-12 top-12 hidden rounded-xl border border-[#8245ec]/30 bg-[#100b1d]/95 px-4 py-3 shadow-lg backdrop-blur-xl sm:block">
              <p className="text-xs text-gray-400">Focus Area</p>

              <p className="text-sm font-semibold text-purple-300">
                Python & Backend
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
