import React, { useCallback } from "react";
import Image from "next/image";

import ReliaLogo from "../../../public/images/relia-logo.png";
import IGYLogo from "../../../public/images/ingenosya-logo.png";
import GadouLogo from "../../../public/images/logo-gadou-studio.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faServer, faCocktail, faCoffee, faSpider, faMobile , faLaptop} from "@fortawesome/free-solid-svg-icons";

const Services = ({navigateToContactEvent}:any) => {
  return (
    <section className="h-5/6 relative pb-10">

      <div className="bg-principal w-52 h-52 rounded-full absolute -z-20 bottom-20 right-0 opacity-50"></div>

        {/* services */}
      <div className="flex justify-evenly h-full relative">

        <div className="self-start relative pt-40  h-[600px] ">
          <h2 className="font-bold text-principal text-2xl"><FontAwesomeIcon className="text-principal mr-3 origin-bottom text-5xl" icon={faLaptop} />WEB DEVELOPMENT</h2>

          <br />

          <p className="w-64">
            Web development is an{" "}
            <span className="text-principal font-semibold">essential </span>
            service for any business or entrepreneur who wants to create an
            effective online presence. This service involves the design,
            programming and maintenance of{" "}
            <span className="text-principal font-semibold">
              websites and web applications
            </span>
            , as well as the integration of features to meet specific customer
            needs.
          </p>

          <div className="bg-principal p-1 w-48 flex flex-row justify-center mt-12 text-lg animate-pulse absolute bottom-8">
            <div onClick={() => navigateToContactEvent(4, "WEB_APP")} className="cursor-pointer ">{`That's what I need !`}</div>
          </div>

        </div>

        <div className="self-center">
          <FontAwesomeIcon
            className="text-principal mr-3 text-9xl opacity-50"
            icon={faCoffee}
          />
        </div>

        <div className="self-start pt-40 h-[600px] relative">
          <h2 className="font-bold text-principal text-2xl">
          <FontAwesomeIcon className="text-principal mr-3 origin-bottom text-5xl" icon={faMobile} />  MOBILE DEVELOPMENT
          </h2>
          <br />
          <p className="w-64">
            Mobile development is{" "}
            <span className="text-principal font-semibold">essential</span> for
            businesses looking to reach their target{" "}
            <span className="text-principal font-semibold">
              audience on mobile platforms
            </span>
            , and to deliver a consistent, high-quality user experience.
            Ideal for <span className="text-principal font-semibold">digital solutions</span> but also for <span className="text-principal font-semibold">business applications</span>.
          </p>
          <div className="bg-principal p-1 w-48 flex flex-row justify-center mt-12 text-lg animate-pulse absolute bottom-8">
            <div onClick={() => navigateToContactEvent(4, "MOBILE_APP")} className="cursor-pointer">{`That's what I need !`}</div>
          </div>
        </div>

        

      </div>

      {/* companies */}
      <div className="self-center w-full flex justify-center flex-col items-center pb-20">

        <h2 className="font-bold text-principal text-2xl">
          COMPANIES THAT TRUSTED ME
        </h2>

        <br/>

        <div className="flex justify-between align-middle w-1/2 ">
          <div>
            <Image src={ReliaLogo} alt="" className="w-auto h-8 pb-2" />
          </div>
          <div>
            <Image src={IGYLogo} alt="" className="w-auto h-24" />
          </div>
          <div>
            <Image src={GadouLogo} alt="" className="w-auto h-10 pb-2" />
          </div>
        </div>

      </div>

    </section>
  );
};

export default Services;
