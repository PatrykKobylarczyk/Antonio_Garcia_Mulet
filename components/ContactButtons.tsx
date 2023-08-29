import React from "react";

const ContactButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-5">
      <a
        className="w-auto text-xs md:text-base px-6 font-semibold rounded-[8px]"
        href="mailto:patryk.kobylarczyk@gmail.com"
      >
        patryk.kobylarczyk@gmail.com
      </a>
      <a
        className="w-auto text-xs md:text-base px-6 font-semibold rounded-[8px]"
        href="tel:+48737747638"
      >
        +48737747638
      </a>
      <a
        className="w-auto text-xs md:text-base px-6 font-semibold rounded-[8px]"
        href="https://wa.me/48737747638"
      >
        whatsapp
      </a>
    </div>
  );
};

export default ContactButtons;
