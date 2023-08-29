import React from "react";

const hobbiesPL = [
  "Podróże ( niepopularne kierunki )",
  "Żeglarstwo ( od urodzenia )",
  "Fotografia ( nieruchomości )",
  "Psychologia",
  "Gra na gitarze",
  "Gra na fortepianie",
  "Muzyka klasyczna",
  "Gry komputerowe ( seria FIFA )",
];

const hobbiesEN = [
  "Travel ( unpopular destinations )",
  "Sailing ( since I was born )",
  "Photograpy ( real estate )",
  "Psychology",
  "Playing the guitar",
  "Play the piano",
  "Classical music",
  "Computer games (FIFA series)",
];

const Hobby = ({ language }: any) => {
  const lang = language === "EN";
  return (
    <div className="text-xs md:text-base w-full flex justify-center py-10 px-5">
      <ul>
        {(lang ? hobbiesEN : hobbiesPL).map((hobby: string, i: number) => {
          return (
            <li
              key={i}
              className="w-80 sm:w-72 md:w-80 lg:w-96 flex items-center gap-10 mb-2"
            >
              <p className="">{hobby}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Hobby;
