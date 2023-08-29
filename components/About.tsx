import React from "react";

const About = ({ lang }: any) => {
  return (
    <div className="flex flex-col ">
      <p className="text-xs md:text-sm mb-4">Front End Developer</p>
      <h2 className="text-4xl 2xl:text-5xl font-extrabold mb-6 2xl:mb-10 ">
        Patryk Kobylarczyk
      </h2>
      <div className="text-sm 2xl:text-base flex flex-col gap-6">
        <p>{lang.about_paragraph_1}</p>
        <p>{lang.about_paragraph_2}</p>
        <p>{lang.about_paragraph_3}</p>
      </div>
    </div>
  );
};

export default About;
