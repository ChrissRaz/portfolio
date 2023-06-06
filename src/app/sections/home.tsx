import Image from "next/image";

import ImageHome from "../../../public/images/jean-christian-home.png";

const Home = () => {
  return (
    <section className="flex justify-between content-end align-bottom ">
      <div className="">
        <Image src={ImageHome} alt="" className="w-auto profile-me" priority/>
      </div>

      <div className="w-1/2 flex flex-col justify-center">
        <div className=" flex flex-col ">
          <div className="font-semibold text-4xl my-1 text-principal">I'm <span className="">Christian</span></div>

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
            <div className="text-secondire bg-principal  p-1 text-sm opacity-70">
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
            <a href="">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
