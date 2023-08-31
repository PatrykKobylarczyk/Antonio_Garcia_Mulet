import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import profile from "../assets/images/profile2.jpg";
import SocialMedia from "@/components/SocialMedia";
import About from "@/components/About";
import ContactButtons from "@/components/ContactButtons";
import Artworks from "@/components/Artworks";
import { langEN, langPL } from "@/data/langPack";
import PersonalExhibitions from "@/components/PersonalExhibitions";
import GroupExhibitions from "@/components/GroupExhibitions";
import Biography from "@/components/Biography";
import Gallery from "@/components/Gallery";

interface ILang {
  title: string;
  about_paragraph_1: string;
  about_paragraph_2: string;
}

const Home = () => {
  const [language, setLanguage] = useState<string>("EN");
  const [lang, setLang] = useState<ILang>(langEN);

  const handleChooseLanguage = () => {
    setLanguage(language === "EN" ? "PL" : "EN");
  };

  useEffect(() => {
    if (language === "EN") {
      setLang(langEN);
    } else {
      setLang(langPL);
    }
  }, [language]);

  return (
    <>
      <Head>
        <title>Antonio Garcia Mulet | Artist | Painter</title>
        <meta
          name="description"
          content="CAntonio Garcia Mulet | Artist | Painter"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="w full flex flex-col ">
        {/* Section About */}
        <section>
          <div className=" w-full lg:h-[80vh] grid grid-cols-1 lg:grid-cols-2">
            <div className="relative w-full h-[60vh] lg:h-[80vh]">
              <Image
                className="md:absolute position h-full"
                src={profile}
                alt="Profile"
                priority
              />
            </div>
            <div className="w-full md:h-[80vh] bg-gray-100 p-16 flex flex-col justify-center gap-12">
              <SocialMedia />
              <About lang={lang} />
              <ContactButtons lang={lang}/>
            </div>
          </div>
        </section>

        {/* Section Projects&Skills */}
        <section className="grid grid-cols-1 md:grid-cols-2 mb-20">
          <div className="w-full pt-10">
            <h2 className="font-bold text-lg ml-8 md:ml-16 ">
              {language === "EN" ? "Biography" : "Biografia"}
            </h2>
            <Biography language={language}/>
            <h2 className="font-bold text-lg ml-8 md:ml-16 mb-10">
              {language === "EN" ? "Gallery" : "Galeria"}
            </h2>
            <Gallery/>
          </div>
          <div className="flex flex-col pt-10">
            <h2 className="font-bold text-lg ml-8 md:ml-16 mb-3">
              {language === "EN" ? "Personal Exhibitions" : "Wystawy personalne"}
            </h2>
            <PersonalExhibitions language={language} />
            <h2 className="font-bold text-lg ml-8 md:ml-16 my-10">
              {language === "EN" ? "Group Exhibitions" : "Wystawy grupowe"}
            </h2>
            <GroupExhibitions language={language} />
          </div>
        </section>

        {/* Section Bookcase */}
        <section className="relative w-full bg-gray-100 px-8 lg:px-20 pt-20">
          <h2 className="font-bold text-lg  md:ml-8 mb-8">
            {language === "EN" ? "Artworks" : "Dzieła"}
          </h2>
          <Artworks/>
        </section>
        <section className="relative w-full bg-gray-100 px-8 lg:px-20 py-20">
          <button
            className="absolute bottom-10 right-10 w-12 h-12 grid place-items-center text-xs font-semibold px-0"
            onClick={handleChooseLanguage}
          >
            {language}
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;
