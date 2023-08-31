import React from "react";
import { biographyPL, biographyEN } from "@/data/biographyData";

const Biography = ({language}:any) => {
  const biography = language === 'EN' ? biographyEN : biographyPL;

  const biographyParagraphs = biography.map((paraghraph, i): any => {
    return <p key={i} className="my-6">{paraghraph}</p>;
  });

  return (
    <div className="text-xs md:text-base w-full flex flex-col justify-center py-3 px-16">
      {biographyParagraphs}
    </div>
  );
};

export default Biography;
