import React from "react";
import Image from "next/image";

import AboutImage from "../../../public/images/jean-christian-about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import angular from "../../../public/images/angular.png";
import react from "../../../public/images/react.png";
import nest from "../../../public/images/nest.png";
import express from "../../../public/images/express.png";
import nodejs from "../../../public/images/nodejs.png";

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
        <div className=" flex flex-col justify-between max-w-xl ">
          <div className="font-bold mb-4 text-xl">
            My name is RAZANAMIHOATRA Jean Christian.
            <FontAwesomeIcon
              className="text-principal text-8xl pl-3 animate-gelatineSlow"
              icon={faQuestion}
            />
          </div>{" "}
          <div className="mb-8">
            I am{" "}
            <span className="text-principal font-semibold">passionate</span>{" "}
            about everything that is{" "}
            <span className="text-principal font-semibold">
              digital creation
            </span>
            and specifically IT
            {`development, that's why I can help a company or an \n
            entrepreneur to counter their projects.`}
            I specialized in{" "}
            <span className="text-principal font-semibold">
              web development
            </span>{" "}
            {`but that does not limit my 
            interests for other platforms. In terms of technology, I'm more on
            the`}
            <span className="text-principal font-semibold">
              Javascript/Typescript/NodeJS
            </span>{" "}
            environment.
          </div>
          <div>
            {/* My flagship frameworks are: */}
            <div className="flex flex-row justify-between w-5/6">

            <div className="text-principal font-semibold ">
                {/* <span className="">*</span>
                <span>Angular</span> */}
                <Image src={nodejs} alt="" className="w-auto h-16" />
              </div>

              <div className="text-principal font-semibold ">
                {/* <span className="">*</span>
                <span>Angular</span> */}
                <Image src={angular} alt="" className="w-auto h-12" />
              </div>

              <div className="text-principal font-semibold">
                {/* <span>*</span>
                <span>ReactJS/NextJS</span> */}
                <Image src={react} alt="" className="w-auto h-12" />
              </div>

              <div className="text-principal font-semibold">
                {/* <span>*</span>
                <span>ExpressJS</span> */}
                <Image src={express} alt="" className="w-auto h-12" />
              </div>

              <div className="text-principal font-semibold">
                {/* <span>*</span>
                <span>NestJS</span> */}
                <Image src={nest} alt="" className="w-auto h-12" />
              </div>
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
