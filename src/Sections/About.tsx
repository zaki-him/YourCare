import React from "react";
import { assets } from "../assets/assets";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-8 md:gap-10 lg:gap-12">
      {/* Stats Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <h2 className="max-w-xl text-xl sm:text-2xl md:text-3xl font-semibold">
          We offer a wide range of services to meet your needs
        </h2>
        <div className="flex flex-col min-w-fit">
          <span className="text-left sm:text-right background text-transparent bg-clip-text text-2xl md:text-3xl font-bold">
            25k+
          </span>
          <p className="text-left sm:text-right text-xs md:text-sm text-gray-600">
            Distributed health services
          </p>
        </div>
      </div>

      <hr className="border-zinc-300" />

      {/* Main Content */}
      <div className="flex lg:flex-row-reverse flex-col gap-8 lg:gap-12 items-center">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src={assets.hero_img} 
            alt="Healthcare services illustration" 
            className="w-full max-w-lg rounded-lg shadow-sm"
          />
        </div>
        
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl max-w-2xl font-semibold leading-tight">
            Our services are designed to provide the best healthcare services.
          </h2>
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            We are committed to providing the best healthcare services tailored to your needs. 
            With a team of experienced medical professionals and state-of-the-art technology, 
            we ensure that every aspect of your care is delivered with the utmost care and 
            exceptional expertise. From initial consultation to follow-up treatment.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="background text-white px-6 py-3 md:py-4 rounded-full text-center font-medium hover:opacity-90 transition-opacity"
            >
              Book Now
            </a>
            <a
              href="#services"
              className="bg-white px-6 py-3 md:py-4 rounded-full border-2 border-blue-400 text-center font-medium hover:bg-blue-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;