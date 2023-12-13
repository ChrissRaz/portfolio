import Image, { StaticImageData } from "next/image";

import ReliaLogo from "../../../public/images/relia-logo.png";
import IGYLogo from "../../../public/images/ingenosya-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/enee-solid-svg-icons";

import edbm from"../../../public/images/portfolio/edbm-website.png";
import { ReactElement } from "react";


const FlipCard = (props_:{image: StaticImageData, imageURL_: String, name: String, type: String, content: String, partenaire?: "IGY" | "RELIA" , link?: string }) => {
  

  return (
    <div className="flip w-[40%] md:w-[400px]">

      <div className={ "front  bg-center bg-no-repeat  bg-clip-content relative rounded-md" }>


        <h1 className="absolute bg-principal top-0 left-0 p-1 z-1">{ props_.name + ' ('+ props_.type +')'} </h1>

        { props_.partenaire == "RELIA" ? <div className="p-2  absolute bottom-0 right-0 bg-secondaire" >
            <div className="text-[6px] text-principal">Made with team</div>
            <Image src={ReliaLogo} alt="" className="w-auto h-6  " priority/> 
        </div> : null } 

        { props_.partenaire == "IGY" ? <div className="p-1  absolute bottom-0 right-0 bg-principal ">
          <div className="text-[6px] ">Made with team</div>
            <Image src={IGYLogo} alt="" className="w-auto h-10 " priority/> 
        </div> : null } 

        <Image src={props_.image} alt="" className="absolute object-cover w-full h-full top-0 left-0 -z-10" />


      </div>

      <div className="back  p-4 flex flex-col justify-between">

        <h2 className=" font-bold bg-principal rounded-md p-2 w-auto">{ props_.name + ' ('+props_.type +')'} </h2>

        <p  className="my-3">
          { props_.content }
        </p>


        { props_.link ? <a href={props_.link} target="_blank" rel="noopener noreferrer " className="font-bold text-principal w-full flex justify-end">

          <span> Open </span>
          <FontAwesomeIcon
                className="text-principal text-2xl mx-2"
                icon={faExternalLink}
                size="2x"
              /> 
        </a> : ""}

      </div>

    </div>
  );


};

export default FlipCard;
