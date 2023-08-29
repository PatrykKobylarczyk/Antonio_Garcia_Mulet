import { experienceData } from "@/data/experienceData";
import React from "react";

interface IExperience {
  id: number;
  name: string;
  date: string;
  rolePL: string;
  roleEN: string;
  gainsPL: string;
  gainsEN: string;
}

const Experience = ({ language }: any) => {
  const lang = language === "EN";

  const experience = experienceData.map(
    ({ id, name, date, rolePL, roleEN, gainsPL, gainsEN }: IExperience) => {
      return (
        <div key={id} className="flex px-3 md:px-16 text-base">
          <div className="w-full py-10 col-span-1  border-r-[1px] br-gray-700 flex justify-end items-start">
            <div className="flex flex-col items-end mr-5 gap-5">
              <h2 className="font-bold">{name}</h2>
              <p>{date}</p>
            </div>
          </div>
          <div className="w-full py-10 col-span-1  ml-5">
            <div className="flex flex-col items-start gap-5">
              <div className="w-full flex justify-between items-start">
                <h2 className="font-bold">{lang ? roleEN : rolePL}</h2>
              </div>
              <p>
                <span className="font-semibold">
                  {lang ? "gains: " : "korzyści: "}
                </span>
                {lang ? gainsEN : gainsPL}
              </p>
            </div>
          </div>
        </div>
      );
    }
  );

  return <>{experience}</>;
};

export default Experience;
