import React from "react";

const About: React.FC = () => {
  return (
    <section id="#about" className="bg-white p-10 flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h1 className="max-w-96 text-2xl font-semibold">We offer a wide range of services to meet your needs</h1>
        <div className="flex flex-col">
          <h1 className="text-right background text-transparent bg-clip-text text-xl">25k+</h1>
          <p className="text-right text-xs">Distributed health services</p>
        </div>
      </div>
      <div className="">
        <div>
          <img src="" alt="" />
        </div>
        <div className="flex flex-col gap-10 md:gap-14">
          <h1 className="text-4xl md:text-5xl max-w-xl font-semibold">
            Our services are designed to provide the best healthcare services.
          </h1>
          <p className="max-w-xl text-xl">
            We are commited to providing the best healthcare services tailored to your needs. With a team of experienced medical professionals and state-of-the-art technology, we ensure that every aspect of your care delivered with the utmost care and exceptional expertise. From initial consultation to follow-up treatment.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="background text-white px-6 py-4 rounded-full"
            >
              Book Now
            </a>
            <a
              href="#about"
              className="bg-white px-6 py-4 rounded-full border-2 border-blue-400"
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
