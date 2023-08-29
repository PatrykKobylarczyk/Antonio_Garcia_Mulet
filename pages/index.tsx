import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import profile from "../assets/images/profile2.jpg";
import SocialMedia from "@/components/SocialMedia";
import About from "@/components/About";
import ContactButtons from "@/components/ContactButtons";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import Hobby from "@/components/Hobby";
import Experience from "@/components/Experience";
import Bookcase from "@/components/Bookcase";
import { langEN, langPL } from "@/data/langPack";

interface ILang {
  about_paragraph_1: string;
  about_paragraph_2: string;
  about_paragraph_3: string;
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
        <title>Patryk Kobylarczyk | CV</title>
        <meta
          name="description"
          content="Curriculum Vitae | Patryk Kobylarczyk | Frontend developer"
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
              <ContactButtons />
            </div>
          </div>
        </section>

        {/* Section Projects&Skills */}
        <section className="grid grid-cols-1 md:grid-cols-2 mb-20">
          <div className="flex flex-col pt-10">
            <h2 className="font-bold text-lg ml-8 md:ml-16">
              {language === "EN" ? "Projects" : "Projekty"}
            </h2>
            <Projects language={language} />
            <h2 className="font-bold text-lg ml-8 md:ml-16 mt-10">
              {language === "EN" ? "Experience" : "Doświadczenie"}
            </h2>
            <Experience language={language} />
          </div>
          <div className="w-full pt-10">
            <h2 className="font-bold text-lg ml-8 md:ml-16 ">
              {language === "EN" ? "Skills" : "Umiejętności"}
            </h2>
            <Skills />
            <h2 className="font-bold text-lg ml-8 md:ml-16 ">
              {language === "EN" ? "Languages" : "Języki"}
            </h2>
            <Languages/>
            <h2 className="font-bold text-lg ml-8 md:ml-16 ">
              {language === "EN" ? "Hobby" : "Zainteresowania"}
            </h2>
            <Hobby language={language} />
          </div>
        </section>

        {/* Section Bookcase */}
        <section className="relative w-full bg-gray-100 px-8 lg:px-20 pt-20">
          <h2 className="font-bold text-lg  md:ml-8 mb-8">
            {language === "EN" ? "Bookcase" : "Biblioteczka"}
          </h2>
          <Bookcase />
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
