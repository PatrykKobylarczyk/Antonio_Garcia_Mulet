import React from "react";

const ContactButtons = ({lang}:any) => {
  
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-5">
      <a
        className="w-auto text-xs md:text-base px-6 font-semibold rounded-[8px]"
        href="mailto:patryk.kobylarczyk@gmail.com"
      >
        {lang.contact}
      </a>
    </div>
  );
};

export default ContactButtons;
