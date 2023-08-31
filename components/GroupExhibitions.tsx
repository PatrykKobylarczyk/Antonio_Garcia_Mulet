import { groupExhibitions } from "@/data/projectsData";
import React from "react";

interface IStack {
  name: string;
  icon: JSX.Element;
}
interface ILink {
  name: string;
  link: string;
}

const GroupExhibitions = ({ language }: any) => {
  const lang = language === "EN";

  

  const personal = groupExhibitions.map(({ date, exhibitions, id }: any, i) => {
    return (
      <div
        key={id}
        id={id}
        className="grid grid-cols-3 px-3 md:px-16 text-base"
      >
        <div className="w-full py-5 col-span-1  border-r-[1px] br-gray-700 flex justify-end items-start">
          <div className="flex flex-col items-end mr-5 gap-5">
            <p>{date}</p>
          </div>
        </div>
        <div className="w-full py-5 col-span-1  ml-5">
          <div className="flex flex-col items-start gap-5">
            {exhibitions.map( (ex:any) => lang ? <p>{ex.descriptionEN}</p> : <p>{ex.descriptionPL}</p>)}
          </div> 
        </div>
      </div>
    );
  });

  return <>{personal}</>;
};

export default GroupExhibitions;

