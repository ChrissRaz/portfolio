import Image from "next/image";

import ImageHome from "../../../public/images/jean-christian-home.png";

import { faHand} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThreeJSTag from "./3dscene";

const Home = ({navigateToContactEvent}:any) => {


  return (
    <section className="flex justify-between content-end align-bottom ">

    {/* <div className="absolute top-0 left-0 w-full h-full">
      <ThreeJSTag />
    </div> */}

      <div className="mt-8">
        <Image src={ImageHome} alt="" className="w-auto profile-me" priority/>
      </div>

      <div className="w-1/2 flex flex-col justify-center">
        <div className=" flex flex-col ">
          <div className="font-semibold text-4xl my-1 text-principal">{`I'm `}<span className="">Christian</span> <span>
              <FontAwesomeIcon className="text-principal mr-3 animate-wave origin-bottom text-5xl" icon={faHand} />
            </span></div>

          <div className="font-semibold text-lg my-2">
            FullStack Developer and Project Manager Based on Madagascar
          </div>  

          <div className="text-sm">
            Development is an art and it is an art that I master.
            <br />
            Contrast your projects or enrich your team with an artist.
            <br />
            Welcome to my portfolio
          </div>

          <div className="flex justify-between mt-3 w-4/5 ">
            <div className="text-secondire bg-principal  p-1 text-sm opacity-70 min-[1400px]:text-[5px] max-[1400px]:bg-principal">
              #App Development
            </div>
            <div className="text-secondire bg-principal  p-1 text-sm opacity-70">
              #Team Leading
            </div>
            <div className="text-secondire bg-principal  p-1 text-sm opacity-70" >
              #Project Management
            </div>
          </div>
          <div className="bg-principal p-1 w-32 flex flex-row justify-center mt-12 text-lg animate-pulse">
            <div onClick={navigateToContactEvent} className="cursor-pointer">Get in touch</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
