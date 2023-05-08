import Image from "next/image";

import CRM from "../../../public/images/portfolio/crm.jpg";
import yohalin from "../../../public/images/portfolio/e-commerce-yhalinart.png";
import enquete from "../../../public/images/portfolio/enquete.jpg";
import lm from "../../../public/images/portfolio/marketplace-livemontessori.png";
import proxi from "../../../public/images/portfolio/marketplace-proxizone.png";
import armp from "../../../public/images/portfolio/gouvernment.png";
import edbm from "../../../public/images/portfolio/edbm-website.png";

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

  const realisations: [
    {
      name: String;
      type: String;
      details: String;
      imagePath: String;
      partenaire?: "IGY" | "RELIA";
      link?: String;
    }[]
  ] = [
    [
      {
        name: "E-Toolia",
        type: "Website",
        details:
          "Website for Economic Development Board of Madagascar (EDBM). We used Wordpress, I developpement features with Ingenosya Team.",
        imagePath: "/images/portfolio/edbm-website.png",
        partenaire: "IGY",
        link: "",
        
      },
      {
        name: "CRM For Financial entity",
        type: "Web app",
        details:
          "I developped and app as frontend developper to help a Team to finish the project",
        imagePath: "/images/portfolio/crm.jpg",
      },
      {
        name: "E-Gouvernement Procurment",
        type: "Web App",
        imagePath: "/images/portfolio/gouvernment.png",
        details:
          "I was the team lead of and large module of the App. There was technicall challenge and architecture Challenge. We used Angular, CodeIgniter and PostreSQL as Tech stack.",
        link: "https://app.armp.mg/",
      },
      {
        name: "Survey Data collection Managment App",
        type: "web app",
        imagePath: "/images/portfolio/enquete.jpg",
        details:
          "With freelance team where I was team lead, we developpement and app to manage all survey data of Agro Search. We used React and NodeJS and MySQL as Tech Stack",
      },
    ],
  ];

  return (
    <section className="flex items-center align-bottom h-screen w-screen px-32 flex-wrap basis-3/12">
      <Carousel
        className="w-full h-5/6  "
        responsive={responsive}
        arrows={false}
        showDots={true}
        dotListClass="carousel-dots"
        keyBoardControl={true}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        rewind
        // customTransition="gelatine 1s ease-in-out"
      >
        <div className="grid grid-cols-2 gap-4 w-full justify-center content-center">
          <FlipCard
            name="E-TooLia"
            type="E-commerce website"
            content="Website for Economic Development Board of Madagascar (EDBM). We used Wordpress, I developpement features with Ingenosya Team."
            imageURL_="/images/portfolio/edbm-website.png"
            partenaire="IGY"
            link="https://etoolia.edbm.mg"
            image={edbm}
          />

          <FlipCard
            name="CRM For Financial entity"
            type="Web App"
            content="I developped the app as frontend developper to help a Team to finish the project. We used Angular, NodeJS and PostgreSQL as Tech Stack."
            imageURL_="/images/portfolio/crm.jpg"
            image={CRM}
          />

          <FlipCard
            name="E-Gouvernement Procurment"
            type="Web App"
            content="I was the team lead of a large module of the App. There was technicall challenge and architecture Challenge. We used Angular, CodeIgniter and PostreSQL as Tech stack."
            imageURL_="/images/portfolio/gouvernment.png"
            link="https://app.armp.mg/"
            partenaire="IGY"
            image={armp}
          />

          <FlipCard
            name="Survey App"
            type="Web app"
            content="With freelance team where I was team lead, we developpement and app to manage all survey data of Agro Search. We used React and NodeJS and MySQL as Tech Stack"
            imageURL_="/images/portfolio/enquete.jpg"
            image={enquete}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 w-full justify-center content-center">

          <FlipCard
            name="Proxizone"
            type="Marketplace"
            content="Marketplace spécialized with food. I was lead developer of the project. We had Angular, Laravel, MySQL and MeiliSearch as Tech Stack."
            imageURL_="/images/portfolio/marketplace-proxizone.png"
            partenaire="IGY"
            link="https://proxizone.fr"
            image={proxi}
          />

          <FlipCard
            name="Yohalin Art"
            type="E-Commerce Website"
            content="A website for an artist to sell his products. It used Wordpress and woocommerce for this one"
            imageURL_="/images/portfolio/e-commerce-yharlinart.jpg"
            link="https://yohalin-art.com/"
            image={yohalin}
          />

          <FlipCard
            name="Live Montessori"
            type="LMS Website"
            content="I was the team lead of the project. We used Angular, NodeJS and MySql as tech stack"
            imageURL_="/images/portfolio/marketplace-livemontessori.png"
            link="https://livemontessori.fr/"
            partenaire="IGY"
            image={lm}
          />

        </div>
      </Carousel>
    </section>
  );
};

export default Portfolio;
