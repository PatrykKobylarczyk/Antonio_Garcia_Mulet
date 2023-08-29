import React from "react";

const languages = [
  { name: "Angielski", level: 3 },
  { name: "Niemiecki", level: 3 },
  { name: "Rosyjski", level: 2 },
];

const skillRange = [1, 2, 3, 4, 5];

const Languages = () => {
  return (
    <div className="text-xs md:text-base w-full flex justify-center py-10 px-5">
      <ul>
        {languages.map((lang: { name: string; level: number }, i: number) => {
          return (
            <li
              key={i}
              className="w-80 sm:w-72 md:w-80 lg:w-96  flex justify-between items-center gap-10 mb-2"
            >
              <p className="w-20 md:36 font-semibold">{lang.name}</p>
              <div className="flex gap-2">
                {skillRange.map((el: number) => {
                  return (
                    <span
                      key={el}
                      className={`w-5 h-2 rounded-lg ${
                        el <= lang.level ? "bg-slate-700" : "bg-slate-300"
                      } `}
                    ></span>
                  );
                })}
              </div>
              <p>{lang.level}/5</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Languages;
