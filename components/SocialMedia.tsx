import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const SocialMedia = () => {
  return (
    <ul className="flex gap-2 justify-center md:justify-start">
      <Link href="https://www.linkedin.com/in/patrykkobylarczyk/">
        <FaLinkedinIn size={"18px"} />
      </Link>
      <Link href="https://github.com/PatrykKobylarczyk/">
        <FaGithub size={"21px"} />
      </Link>
      <Link href="https://www.codewars.com/users/PatrykKobylarczyk">
        <SiCodewars size={"18px"} />
      </Link>
    </ul>
  );
};

export default SocialMedia;
