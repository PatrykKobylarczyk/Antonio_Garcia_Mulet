import React from "react";

const About = ({ lang }: any) => {
  return (
    <div className="flex flex-col ">
      <p className="text-xs md:text-sm mb-2">{lang.title}</p>
      <h2 className="text-3xl 2xl:text-4xl font-extrabold mb-4 2xl:mb-8 ">
        Antonio Garcia Mulet
      </h2>
      <div className="text-sm 2xl:text-base flex flex-col gap-4">
        <p>{lang.about_paragraph_1}</p>
        <p>{lang.about_paragraph_2}</p>
        <p>{lang.about_paragraph_3}</p>
      </div>
    </div>
  );
};

export default About;
