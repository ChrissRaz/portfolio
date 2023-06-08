"use client";

import ReactPageScroller from "react-page-scroller";
import { useState, useCallback, Suspense } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCoffee, faBlog} from "@fortawesome/free-solid-svg-icons";

import Home from "./sections/home";
import About from "./sections/about";
import Services from "./sections/services";
import Portfolio from "./sections/portfolio";
import Contact from "./sections/contact";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import {faMailReply} from "@fortawesome/free-solid-svg-icons";
import { T_INTREST } from "@/app/types";
import Loading from "@/app/loading";


const Page = () => {
  const [currentPage, handlePageChange] = useState<number>(0);

  const [userIntrest, handleIntrest] = useState<T_INTREST>(undefined)

  let handleBeforePageChange = (number: number) => {
    console.log(number);
  };

  let handlePageChangeWithIntrest = (pageNumber: number, intrest?: T_INTREST) => {

    handleIntrest(intrest);

    handlePageChange(pageNumber);


  }

  //particles
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <main className="max-h-screen relative selection:text-principal">
        <nav className="flex justify-evenly items-center w-full fixed z-40 top-10 ">
          <div>
            <a onClick={() => handlePageChange(0)} className="animate-pulse ">
              <FontAwesomeIcon
                className="text-principal text-4xl"
                icon={faBlog}
              />
            </a>
          </div>

          <ul className="flex flex-row justify-around w-3/5 justify-self-start ">
            <li>
              <div
                // href=""
                className={
                  (currentPage == 0 ? "text-principal" : "text-secondaire") +
                  " font-bold cursor-pointer"
                }
                onClick={() => handlePageChange(0)}
              >
                Home
              </div>
            </li>
            <li>
              <div
                // href=""
                className={
                  (currentPage == 1 ? "text-principal" : "text-secondaire") +
                  " font-bold cursor-pointer "
                }
                onClick={() => handlePageChange(1)}
              >
                About
              </div>
            </li>
            <li>
              <div
                className={
                  (currentPage == 2 ? "text-principal" : "text-secondaire") +
                  " font-bold cursor-pointer"
                }
                onClick={() => handlePageChange(2)}
              >
                Services
              </div>
            </li>
            <li>
              <div
                className={
                  (currentPage == 3 ? "text-principal" : "text-secondaire") +
                  " font-bold cursor-pointer"
                }
                onClick={() => handlePageChange(3)}
              >
                Portfolio
              </div>
            </li>
            <li>
              <div
                className={
                  (currentPage == 4 ? "text-principal" : "text-secondaire") +
                  " font-bold cursor-pointer animate-pulse "
                }
                onClick={() => handlePageChange(4)}
              >
                Contact

                <span className="pl-2">
                  <FontAwesomeIcon className="text-[#15d7d7] mr-3 animate-gelatine" icon={faMailReply} />
                </span>

              </div>
              
            </li>

            {/* <li>
              <span>
                <Image src={LinkedinIco} alt="" className="w-11 h-auto z-40" />
              </span>
              <span>
                <Image src={LinkedinIco} alt="" className="w-auto" />
              </span>
            </li> */}

          </ul>
        </nav>

        <ReactPageScroller
          pageOnChange={handlePageChange}
          onBeforePageScroll={handleBeforePageChange}
          customPageNumber={currentPage}
          animationTimer={500}
          containerHeight="100vh"
        >
          <Home navigateToContactEvent={() => handlePageChange(4)}></Home>

          <About></About>

          <Services navigateToContactEvent={handlePageChangeWithIntrest}></Services>

          <Portfolio></Portfolio>

          <Contact userIntrest={userIntrest}></Contact>

        </ReactPageScroller>

        <Particles
          className="w-screen h-screen absolute top-0 left-0 -z-10"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 2,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.5,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 15,
              },
              opacity: {
                value: 0.1,
              },
              shape: {
                type: "polygon",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
    </main>
   
  );
};

export default Page;
