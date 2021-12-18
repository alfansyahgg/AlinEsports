import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../TransNavbar";

const About = () => {
  return (
    <div className="h-full overflow-hidden animate__animated animate__fadeIn">
      <Navbar />
      <div className="h-screen flex-col bg-gradient-prime flex justify-center items-center">
          <h4 className="text-white font-teko text-center text-5xl md:text-6xl font-bold uppercase ">
            Join us to make history!
          </h4>
          <p className="text-white font-teko text-center text-2xl md:text-3xl font-bold uppercase">
            #1 Esports Community in Yogyakarta
          </p>
          <Link to="/contact" className="bg-red-500 text-white text-2xl font-teko font-bold px-7 py-3 rounded-sm mt-3 " >
            Contact Us
          </Link>
      </div>
    </div>
  );
};

export default About;
