import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <ul className="flex gap-2 justify-center md:justify-start">
      <Link href="https://www.instagram.com/antonio_garcia_mulet/" target='_blank'>
        <BsInstagram size={"18px"} />
      </Link>
      <Link href="https://www.facebook.com/antonio.garciamulet" target='_blank'>
        <FaFacebookSquare size={"21px"} />
      </Link>
    </ul>
  );
};

export default SocialMedia;
