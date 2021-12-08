/* CSS */
import "../css/home.css";

// import "../index.css";

/* JS */
// import "../js/navbir";

import React from "react";
import { useState } from "react";

import TransNavbar from "./TransNavbar";
import Slider from "./Slider";
import Sponsors from "./Sponsors";

const Home = () => {
  const [ChampImages, setChampImages] = useState([
    "sea-1",
    "sea-2",
    "sea-3",
    "champion-1",
    "champ-2",
    "champ-3",
    "champ-4",
  ]);

  return (
    <>
      <div className="wrapper animate__animated animate__fadeIn">
        <TransNavbar />
        <div id="section-1">
          <div className="h-full flex justify-center items-center">
            <p className="tagline text-white text-5xl md:text-8xl font-teko pt-72 text-center uppercase font-bold animate__animated animate__bounceInUp">
              Sekti Kalintang <br /> Jaya Ning Perang
            </p>
          </div>
        </div>
        <div id="section-2">
          <Slider list={ChampImages} dir="images/" />
        </div>
        <div id="section-3" className="flex flex-col h-full">
          <Sponsors />
        </div>
      </div>
    </>
  );
};

export default Home;
