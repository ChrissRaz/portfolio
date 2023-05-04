import React from "react";
import Image from "next/image";

import AboutImage from "../../../public/images/jean-christian-about.png";

const About = () => {

  return (
    <section className="flex justify-between content-end align-bottom h-screen relative">

      <div className=" absolute bottom-28 right-40 w-32 h-32">
        <div className="relative w-full h-full">
          <div className="w-16 h-16 bg-secondaire rounded absolute bottom-0 right-0"></div>
          <div className="w-28 h-28 bg-principal rounded absolute top-0 left-0"></div>
        </div>
      </div>
    
      <div className="w-1/2 h-screen relative">
        <Image
          src={AboutImage}
          alt=""
          className="w-auto opacity-90 absolute bottom-0 left-0"
          priority
        />
      </div>

      <div className="w-1/2 flex flex-col justify-center about-me">
        <div className=" flex flex-col justify-between ">
          <div className="font-bold">
            My name is RAZANAMIHOATRA Jean Christian.
          </div>{" "}
          <br />
          <div>
            I am{" "}
            <span className="text-principal font-semibold">passionate</span>{" "}
            about everything that is{" "}
            <span className="text-principal font-semibold">
              digital creation
            </span>{" "}
            and specifically IT <br />
            development, that's why I can help a company or an <br />
            entrepreneur to counter their projects.
            <br />I specialized in{" "}
            <span className="text-principal font-semibold">
              web development
            </span>{" "}
            but that does not limit my <br />
            interests for other platforms. In terms of technology, I'm more on
            the{" "}
            <span className="text-principal font-semibold">
              Javascript/Typescript/NodeJS
            </span>{" "}
            environment.
          </div>
          <br />
          <div>
            My flagship frameworks are:
            <br />
            <div className="text-principal font-semibold ">
              <span className="">*</span>
              <span>Angular</span>
            </div>
            <div className="text-principal font-semibold">
              <span>*</span>
              <span>ReactJS/NextJS</span>
            </div>
            <div className="text-principal font-semibold">
              <span>*</span>
              <span>NestJS</span>
            </div>
          </div>
        </div>
      </div>

      {/* <span className="sticky text-principal font-bold text-9xl  origin-center animate-spin box-content">
        *
      </span> */}
    </section>
  );
  
};

export default About;
