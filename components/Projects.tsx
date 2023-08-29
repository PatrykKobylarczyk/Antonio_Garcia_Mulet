import { projectsData } from "@/data/projectsData";
import React from "react";

interface IStack {
  name: string;
  icon: JSX.Element;
}
interface ILink {
  name: string;
  link: string;
}

const Projects = ({ language }: any) => {
  const lang = language === "EN";

  const projects = projectsData.map(
    ({
      name,
      titlePL,
      titleEN,
      date,
      descriptionPL,
      descriptionEN,
      stack,
      id,
      links,
    }: any) => {
      return (
        <div key={id} id={id} className="flex px-3 md:px-16 text-base">
          <div className="w-full py-10 col-span-1  border-r-[1px] br-gray-700 flex justify-end items-start">
            <div className="flex flex-col items-end mr-5 gap-5">
              <h2 className="font-bold">{name}</h2>
              <p>{date}</p>
            </div>
          </div>
          <div className="w-full py-10 col-span-1  ml-5">
            <div className="flex flex-col items-start gap-5">
              <div className="w-full flex justify-between items-start">
                <h2 className="font-bold">{lang ? titleEN : titlePL}</h2>
              </div>
              <p>{lang ? descriptionEN : descriptionPL}</p>
              <ul className="flex flex-wrap text-lg gap-2">
                {stack.map((el: IStack, i: number) => (
                  <li key={i} className="tooltip cursor-pointer">
                    {el.icon}{" "}
                    <span className="tooltiptext mb-2">{el.name}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 ">
                {links.map(
                  (link: ILink, i: number) => (
                    <a
                      className="w-auto h-auto  bg-transparent font-bold underline"
                      key={i}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  return <>{projects}</>;
};

export default Projects;
