import Image from "next/image";

import ImageHome from "../../../public/images/jean-christian-home.png";

import { faHand} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThreeJSTag from "./3dscene";

const Home = ({navigateToContactEvent}:any) => {


  return (
    <section className="flex flex-col md:flex-row mt-10 md:mt-0 justify-between content-end align-bottom ">

    {/* <div className="absolute top-0 left-0 w-full h-full">
      <ThreeJSTag />
    </div> */}

      <div className="mt-[5%] ">
        <Image src={ImageHome} alt="" className="w-auto profile-me" priority/>
      </div>

      <div className=" w-full md:w-1/2 flex flex-col justify-center mt-[5%] ml-12 md:ml-0">

        <div className=" flex flex-col  ">

          <div className="font-semibold text-xl md:text-4xl my-1 text-principal">{`I'm `}<span className="">Christian</span> <span>
              <FontAwesomeIcon className="text-principal mr-3 animate-wave origin-bottom text-2xl md:text-5xl" icon={faHand} />
            </span></div>

          <div className="font-semibold text-sm md:text-lg my-2">
            FullStack Developer and Project Manager
          </div>  

          <div className="text-sm w-[300px] md:w-[450px]">
            With a strong background in development, I am ready to bring my passion and expertise to your project. Contact me now to discuss your ideas and turn your vision into reality.
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-3 w-4/5">
            <div className="text-secondire text-principal bg-opacity-0 md:bg-principal md:text-secondaire  p-1 text-sm opacity-70 ">
              #App Development
            </div>
            <div className="text-secondire text-principal bg-opacity-0 md:bg-principal md:text-secondaire  p-1 text-sm opacity-70">
              #Team Leading
            </div>
            <div className="text-secondire text-principal bg-opacity-0 md:bg-principal md:text-secondaire  p-1 text-sm opacity-70" >
              #Project Management
            </div>
          </div>
          <div className="bg-principal p-1 w-32 flex flex-row justify-center mt-12 text-lg animate-gelatine">
            <div onClick={navigateToContactEvent} className="cursor-pointer ">Get in touch</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;
