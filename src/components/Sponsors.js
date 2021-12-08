import React, { useEffect } from "react";

import SosmedSponsors from "./SosmedSponsors";

// import ScrollAnimation from "react-animate-on-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Sponsors = () => {
  return (
    <>
      <h4 className="text-white text-center font-teko font-light text-6xl p-10 md:relative md:top-40 w-full">
        {" "}
        Our Beloved Sponsors{" "}
      </h4>

      <div className="sponsors h-full flex justify-center items-center self-center w-4/5 md:w-full ">
        <div className="flex justify-around items-center flex-col h-full md:flex-row">
          <div className="flex flex-col justify-center items-center md:w-2/5">
            <LazyLoadImage
              className="w-full md:h-28 md:px-4 "
              src="images/sponsors/adhi-1.webp"
              effect="blur"
            />
            <SosmedSponsors />
          </div>

          <div className="flex flex-col justify-center items-center md:w-2/5">
            <LazyLoadImage
              className="w-full md:h-28 md:px-4 "
              src="images/sponsors/BG.webp"
              effect="blur"
            />
            <SosmedSponsors />
          </div>

          <div className="flex flex-col justify-center items-center md:w-2/5">
            <LazyLoadImage
              className="w-full md:h-28 md:px-4 "
              src="images/sponsors/RKApparel2.png"
              effect="blur"
            />
            <SosmedSponsors />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
