import React from "react";

const skills = [
  { name: "HTML", level: 4 },
  { name: "CSS", level: 4 },
  { name: "Sass", level: 4 },
  { name: "JavaScript", level: 3 },
  { name: "TypeScript", level: 1 },
  { name: "React", level: 3 },
  { name: "NextJS", level: 3 },
  { name: "NodeJS", level: 2 },
  { name: "Tailwind CSS", level: 4 },
  { name: "git", level: 3 },
  { name: "SEO", level: 3 },
  { name: "UX", level: 4 },
  { name: "Figma", level: 4 },
  { name: "Photoshop", level: 4 },
  { name: "Lightroom", level: 4 },
];

const skillRange = [1, 2, 3, 4, 5];

const Skills = () => {
  return (
    <div className="text-xs md:text-base w-full flex justify-center py-10 px-5">
      <ul>
        {skills.map((skill: { name: string; level: number }, i: number) => {
          return (
            <li
              key={i}
              className="w-80 sm:w-72 md:w-80 lg:w-96 flex justify-between items-center mb-2"
            >
              <p className="w-20 md:36 font-semibold">{skill.name}</p>
              <div className="flex gap-2">
                {skillRange.map((el: number) => {
                  return (
                    <span
                      key={el}
                      className={`w-5 h-2 rounded-lg ${
                        el <= skill.level ? "bg-slate-700" : "bg-slate-300"
                      } `}
                    ></span>
                  );
                })}
              </div>
              <p>{skill.level}/5</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
