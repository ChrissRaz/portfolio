import Image from "next/image";

import CRM from "../../../public/images/portfolio/crm.jpg";
import yohalin from "../../../public/images/portfolio/e-commerce.png";
import enquete from "../../../public/images/portfolio/enquete.jpg";
import marketplace from "../../../public/images/portfolio/marketplace.png";
import marketplace2 from "../../../public/images/portfolio/marketplace 2.png";
import armp from "../../../public/images/portfolio/gouvernment.png";
import edbm from "../../../public/images/portfolio/edbm website.png";

// import { Carousel } from 'react-responsive-carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FlipCard from "../elements/flipCard";

const Portfolio = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="flex items-center align-bottom h-screen w-screen px-32 flex-wrap basis-3/12">
      {/* <Carousel
        className="w-full h-4/6 w-full"
        responsive={responsive}
        // arrows={true}
        showDots={false}
        dotListClass="carousel-dots"
        keyBoardControl={true}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        rewind
        // customTransition="gelatine 1s ease-in-out"
      >


        <div className="flex  text-principal w-full h-full ">
        </div>

        <div className="flex text-principal">

          <div className="bg-principal w-3/5">
            <Image src={CRM} alt="" className="w-full h-full object-scale-down" />
          </div>

          <div className=" bg-principal w-2/5 text-secondaire">

            <h3 className="text-secondaire">CRM App for banking sevice</h3>

            <h4>Technoliges</h4>
            <ul>
                <li>
                  Angular
                </li>
                <li>
                  Postresql
                </li>
                <li>
                  NodeJS/Express
                </li>
            </ul>

            <h4>Collaboration</h4>

          </div>

        </div>

        <div className="flex  text-principal ">
          <Image src={enquete} alt="" />
        </div>

        <div className="flex   text-principal ">
          <Image src={yohalin} alt="" />
        </div>

        <div className="flex  text-principal ">
          <Image src={marketplace} alt="" />
        </div>

        <div className="flex text-principal ">
          <Image src={marketplace2} alt="" />
        </div>

        <div className="flex  text-principal ">
          <Image src={armp} alt="" />
        </div>

        <div className="flex justify-between  rounded-lg p-5 text-principal ">
          <Image src={edbm} alt="" />
        </div>
      </Carousel> */}

      <Carousel
        className="w-full h-5/6 "
        responsive={responsive}
        arrows={false}
        showDots={true}
        dotListClass="carousel-dots"
        keyBoardControl={true}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        rewind
        // customTransition="gelatine 1s ease-in-out"
      >
        <div className="grid grid-cols-2 gap-4 w-full justify-center align-middle">
          <FlipCard name="test" type="Site e-commerce"/>
          <FlipCard />
          <FlipCard />
          <FlipCard />
        </div>

        <div className="flex flex-wrap">
          <FlipCard />
          <FlipCard />
          <FlipCard />
          <FlipCard />
        </div>

      </Carousel>
    </section>
  );
};

export default Portfolio;
