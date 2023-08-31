import Image from "next/image";
import React from "react";
import { artworks } from "@/data/artworksData";



          


const Artworks = () => {
const artworksPicture = artworks.map(
  (pic, i) => { return <Image className="w-[300px]" key={i} src={pic} alt="Antonio's artwork"  />}
)

  return (
    <div className="flex justify-center flex-wrap gap-8">
      {artworksPicture}
    </div>
  );
};

export default Artworks;
