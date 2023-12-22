import React from "react";
import logo from "./p.jpg"

function About(){
    return(
    <section id="about" className="bg-white">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Kanav.
            <br className="hidden lg:inline-block"/>I am a sophomore(undergrad) majoring in Computer Science at Arizona State University.
          </h1>
          <p className="mb-8 leading-relaxed text-black">
            This is a website I desgined myself to showcase more about me and my interests!
          </p>
          <div className="flex justify-center">
            
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={logo}
          />
        </div>
      </div>
    </section>
  );
}

export default About;