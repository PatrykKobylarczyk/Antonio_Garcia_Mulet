import React from "react";
import Image from "next/image";
import { imageData } from "@/data/imagesData";

const Gallery = () => {
  const pictures = imageData.map((pic, i): any => {
    return <Image src={pic} alt="Profile" className="w-2/3"/>;
  });

  return <div className="w-full flex flex-col justify-center items-center gap-3">{pictures}</div>;
};

export default Gallery;
