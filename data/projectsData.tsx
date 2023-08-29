import {
  SiFirebase,
  SiGatsby,
  SiGraphql,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiAxios,
  SiFramer
} from "react-icons/si";
import { BsStripe } from "react-icons/bs";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { AiOutlineForm } from "react-icons/ai";

export const projectsData = [
  {
    id: 1,
    name: "Dashboard",
    date: "02/2023-03/2023",
    titlePL: "Dashboard",
    titleEN: "Dashboard.",
    descriptionPL:
      "Celem projektu było odtworzenie Dashboardu wzorując się na projekcie znalezionym na Behance. Do obsługi wykresów zaimplementowałem bibliotekę charts.js, do logowania Firebase Authentication. Do przechowywania danych połączyłem aplikację z Bazą danych Firestore. Formularze obsługuje bibliotek React-hook-form.",
    descriptionEN:
      "The aim of the project was to recreate the Dashboard based on the project found on Behance. I implemented the charts.js library to handle charts, Firebase Authentication to log in. I connected the application to the Firestore Database to store data. Forms are supported by React-hook-form libraries.",
    stack: [
      { name: "Next", icon: <SiNextdotjs /> },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Charts JS", icon: <HiOutlineChartSquareBar /> },
      { name: "React hook form", icon: <AiOutlineForm /> },
    ],
    links: [
      {
        name: "github",
        link: "https://github.com/PatrykKobylarczyk/dashboard-next-tailwind",
      },
      {
        name: "live",
        link: "https://dashboard-next-tailwind-liart.vercel.app/",
      },
    ],
  },
  {
    id: 2,
    name: "Fishky",
    date: "02/2023-03/2023",
    titlePL: "Popularne fiszki",
    titleEN: "Popular Flashcards.",
    descriptionPL:
      "Aplikacja z popularnymi fiszkami do nauki języków lub cokolwiek sobie wymarzysz.",
    descriptionEN:
      "An app with popular flashcards for learning languages or whatever category you can think of. ",
    stack: [
      { name: "Next", icon: <SiNextdotjs /> },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Framer motion", icon: <SiFramer /> },
      { name: "React hook form", icon: <AiOutlineForm /> },
      { name: "Sass", icon: <SiSass /> },
    ],
    links: [
      {
        name: "github",
        link: "https://github.com/PatrykKobylarczyk/fishky-v2",
      },
      {
        name: "live",
        link: "https://fishky-v2.vercel.app",
      },
    ],
  },
  {
    id: 3,
    name: "Duo Milonga",
    date: "12/2022-01/2023",
    titlePL: "Strona internetowa zespołu muzycznego.",
    titleEN: "Music group website.",
    descriptionPL:
      "Głównym celem była gra zdjęciami oraz możliwość słuchania muzyki.",
    descriptionEN:
      "The main goals were to play with pictures and to be able to listen to music.",
    stack: [
      { name: "Gatsby", icon: <SiGatsby /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer motion", icon: <SiFramer /> },
    ],
    links: [
      {
        name: "github",
        link: "https://github.com/PatrykKobylarczyk/duo-milonga",
      },
      {
        name: "live",
        link: "https://duomilonga.pl/",
      },
    ],
  },
  {
    id: 4,
    name: "Netflix clone",
    date: "11/2022-12/2022",
    titlePL: "Klon Platformy Netflix.",
    titleEN: "Netflix clone.",
    descriptionPL:
      "Głównym celem było połączenie aplikacji z Firebase, podłączenie płatności, odwzorowanie oryginalnej strony.",
    descriptionEN:
      "The main goals were connection to Firebase, possibility of payment, mapping the original.",
    stack: [
      { name: "Next JS", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "MUI", icon: <SiMui /> },
      { name: "Stripe", icon: <BsStripe /> },
    ],
    links: [
      {
        name: "github",
        link: "https://github.com/PatrykKobylarczyk/Netflix",
      },
      {
        name: "live",
        link: "https://netflix-peach-ten.vercel.app/",
      },
    ],
  },
  {
    id: 5,
    name: "Weather App",
    date: "07/2022",
    titlePL: "Aplikacja pogodowa.",
    titleEN: "Weather App.",
    descriptionPL:
      "Aplikacja pogodowa wykorzystująca dane z serwisu OpenWeatherMap. Wpisz nazwę miasta i sprawdź aktualną pogodę, jak również na następny tydzień.",
    descriptionEN:
      "Weather app using data from OpenWeatherMap. Write a city name and check actual weather and forecast for following week.",
    stack: [
      { name: "React", icon: <SiReact /> },
      { name: "Sass", icon: <SiSass /> },
      { name: "Axios", icon: <SiAxios /> },
    ],
    links: [
      {
        name: "github",
        link: "https://github.com/PatrykKobylarczyk/weather-app",
      },
      {
        name: "live",
        link: "https://weather-app-patrykkobylarczyk.vercel.app/",
      },
    ],
  },
  {
    id: 6,
    name: "Pixel art App",
    date: "06/2022",
    titlePL: "Pixel art App.",
    titleEN: "Pixel art App.",
    descriptionPL:
      "Jest to moja pierwsza aplikacja - pixel art drawing editor. Dynamicznie konfiguruj wymiary panelu rysunkowego, pokoloruj piksele według własnych upodobań i wyeksportuj gotowy element jako obraz PNG.",
    descriptionEN:
      "This is my first App - pixel art drawing editor in React. Dynamically set up drawing panel dimensions, color the pixels to your liking and export your finished piece as a PNG sprite.",
    stack: [
      { name: "React", icon: <SiReact /> },
      { name: "Sass", icon: <SiSass /> },
  
    ],
    links: [
      {
        name: "github",
        link: "https://github.com/PatrykKobylarczyk/pixel-art",
      },
      {
        name: "live",
        link: "https://patrykkobylarczyk.github.io/pixel-art/",
      },
    ],
  },
];
