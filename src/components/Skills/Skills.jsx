
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="relative px-[7vw] py-20 pb-24 font-sans md:px-[7vw] lg:px-[12vw]"
  >
    {/* Section Heading */}
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        SKILLS
      </h2>

      <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#8245ec]" />

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
        Technologies and tools I use to build applications,
        work with databases, and develop practical software solutions.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">

      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <div className="h-full rounded-2xl border border-[#8245ec]/30 bg-gray-900/70 p-6 shadow-[0_0_20px_rgba(130,69,236,0.12)] backdrop-blur-md transition-all duration-300 hover:border-[#8245ec]/70 hover:shadow-[0_0_30px_rgba(130,69,236,0.22)] sm:p-7">

            {/* Category Title */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-7 w-1 rounded-full bg-[#8245ec]" />

              <h3 className="text-xl font-semibold text-gray-200">
                {category.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex min-h-[52px] items-center gap-2 rounded-xl border border-gray-700/80 bg-[#050414]/60 px-3 py-3 transition-all duration-300 hover:border-[#8245ec]/60 hover:bg-[#8245ec]/10"
                >
                  {skill.logo ? (
                    <img
                      src={skill.logo}
                      alt=""
                      className="h-6 w-6 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#8245ec]/15 text-[10px] font-bold text-purple-300">
                      {skill.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}

                  <span className="text-xs font-medium leading-tight text-gray-300 transition-colors group-hover:text-purple-300 sm:text-sm">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </Tilt>
      ))}

    </div>
  </section>
);

export default Skills;
