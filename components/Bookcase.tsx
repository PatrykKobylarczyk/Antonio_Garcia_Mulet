import { booksIT, booksOther } from "@/data/booksData";
import Image from "next/image";
import React from "react";

interface IBook {
  id: number,
  title: string , 
  author: string ,
  authorLink: string,
  imageLink: string,
  link: string
}

export const Book = ({ title, author, authorLink, imageLink, link }: IBook) => {
  const resetStyle = "bg-transparent rounded-none w-auto h-auto";

  return (
    <div className="w-64 flex gap-2 mb-6">
      <a
        href={link}
        className={`${resetStyle} `}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative w-20 h-28">
          <Image className="absolute" src={imageLink} alt={title} fill />
        </div>
      </a>

      <div className="flex flex-col gap-2 items-start">
        <a
          href={link}
          className={`${resetStyle} text-sm`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <a
          href={authorLink}
          className={`${resetStyle} text-xs font-semibold`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {author}
        </a>
      </div>
    </div>
  );
};

const Bookcase = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {booksOther.map(
        ({ id, title, author, authorLink, imageLink, link }: IBook) => {
          return (
            <Book
              key={id}
              id={id}
              title={title}
              author={author}
              authorLink={authorLink}
              imageLink={imageLink}
              link={link}
            />
          );
        }
      )}
    </div>
  );
};

export default Bookcase;
