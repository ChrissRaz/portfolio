"use client";

import "../../../public/css/plugins.css";
import "../../../public/css/style.css";
// import "../../../public/css/cstm.css";

import LogoLight from "../../../public/image/logo-light.png";
import Hero from "../../../public/image/hero.png";

import Portfolio1 from "../../../public/image/portfolio/1.webp";
import Portfolio2 from "../../../public/image/portfolio/2.webp";
import Portfolio3 from "../../../public/image/portfolio/3.png";
import Portfolio4 from "../../../public/image/portfolio/4.jpg";
import Portfolio5 from "../../../public/image/portfolio/5.png";
import Portfolio6 from "../../../public/image/portfolio/6.png";
import Portfolio7 from "../../../public/image/portfolio/7.png";
import Portfolio8 from "../../../public/image/portfolio/8.jpg";

import commingSoon from "../../../public/image/comming-soon.jpg";

import Image from "next/image";
import { useState } from "react";
import { T_INTREST } from "../types";
import axios from "axios";

const Contact = () => {
  const [formData, SetFormData] = useState<{
    fullName: string;
    email: string;
    companyName: string;
    companyRole: string;
    object: string;
    message: string;
  }>({
    fullName: "",
    email: "",
    companyName: "",
    companyRole: "",
    object: "",
    message: "",
  });

  const [emailValid, setEmailValidation] = useState<undefined | boolean>(
    undefined
  );

  const [isSubmitted, setSubmsion] = useState<boolean>(false);

  const [formStatus, setFormStatus] = useState<
    "SENDING" | "SENT" | "FAILED" | undefined
  >(undefined);

  const handleSentEvent = (e: any) => {
    // console.log("send");
    setSubmsion(true);

    if (
      formData.fullName.trim().length != 0 &&
      formData.email.trim().length != 0 &&
      formData.object.trim().length != 0 &&
      formData.message.trim().length != 0
    ) {
      setFormStatus("SENDING");
      axios
        .post("/api/mail", { ...formData, message: formData.message })
        .then(function (response) {
          // console.log(response);
          setFormStatus("SENT");
        })
        .catch(function (error) {
          // console.log(error);
          setFormStatus("FAILED");
        });
    }
  };

  const handleInputChange = (e: any) => {
    let value = e.target.value;

    SetFormData({
      ...formData,
      [e.target.name]: value,
    });

    if (e.target.name == "email") {
      if (/\S+@\S+\.\S+/.test(value)) {
        setEmailValidation(true);
      } else {
        setEmailValidation(false);
      }
    }
  };

  return (
    <section
      className="contact section-padding position-re"
      data-scroll-index="5"
    >
      <div className="container">
        <div className="row">
          <div className="section-head text-center col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <h4>Contact Me</h4>
          </div>

          <div className="col-lg-5">
            <div
              className="info bg-img mb-md50"
              data-background="/image/map.png"
              style={{ backgroundImage: "url(/image/map.png)" }}
            >
              <div className="item">
                <div className="cont">
                  <h6>Phone : </h6>
                  <p>+261 32 50 034 43</p>
                </div>
              </div>
              <div className="item">
                <div className="cont">
                  <h6>Address : </h6>
                  <p>
                    Antananarivo,
                    <br /> Madagascar
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="cont">
                  <h6>Email : </h6>
                  <p>chrissraz22@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form
              className="form"
              id="contact-form"
              method="post"
              action="contact.php"
              noValidate
            >
              <div className="messages"></div>

              <div className="controls">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="form_name"
                        type="text"
                        name="fullName"
                        placeholder="Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                
                        required
                      />
                      { formData.fullName.length == 0  && isSubmitted? 
                        <div className="absolute -bottom-4 ">
                          <small className="text-[10px] text-[#F70000]">Champs Requis</small>
                        </div> : ""
                      }
                      </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />

                      { emailValid == true || emailValid  == undefined || formData.email.length ==0 ? (
                        ""
                      ) : (
                        <div className="absolute -bottom-4 ">
                          <small className="text-[10px] text-[#F70000]">
                            Invalide ex: identifiant@domain.com
                          </small>
                        </div>
                      )}

                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        id="form_subject"
                        type="text"
                        name="object"
                        placeholder="Subject"
                        value={formData.object}
                        onChange={handleInputChange}
                        required
                      />
                      { formData.object.length == 0  && isSubmitted? 
                        <div className="absolute -bottom-4 ">
                          <small className="text-[10px] text-[#F70000]">Champs Requis</small>
                        </div> : ""
                      }
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>

                        { formData.message.length == 0  && isSubmitted? 
                          <div className="absolute bottom-2 ">
                            <small className="text-[10px] text-[#F70000]">Champs Requis</small>
                          </div> : ""
                        }
                    </div>
                  </div>

                  <div className="col-md-12 text-center">
                    <button onClick={handleSentEvent} type="button" className="butn butn-bg disabled">
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>{" "}
      <svg
        className="wave dark"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1920 81.717"
        enableBackground="new 0 0 1920 81.717"
        xmlSpace="preserve"
      >
        <path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path>
      </svg>
    </section>
  );
};

const Home = () => {
  return (
    <>
      {/* nav */}
      <nav className="navbar navbar-expand-lg nav-scroll">
        <div className="container">
          {/* <!-- Logo --> */}
          <a className="logo" href="#">
            <Image src={LogoLight} alt="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          {/* <!-- navbar links --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="0">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="1">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="2">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="3">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="4">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" data-scroll-nav="5">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* banner */}
      <header
        className="header valign bg-img position-re"
        data-scroll-index="0"
        data-stellar-background-ratio="0.5"
        data-overlay-dark="4"
        data-background="/image/bg.png"
        style={{
          backgroundImage: "url('/image/bg.png')",
          backgroundPosition: "-25px 0px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="full-width text-center caption mt-50">
              <h2>Welcome!</h2>
              <h1 className="cd-headline push">
                <span className="blc">I am</span>
                <span className="cd-words-wrapper" style={{ width: "157px" }}>
                  <b className="is-hidden">R. Jean Christian</b>
                  <b className="is-visible">Project Manager</b>
                  <b className="is-hidden">FullStack Developer</b>
                  <b className="is-hidden">Digital Marketing</b>
                </span>
              </h1>

              <div className="social mt-30">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/chrissraz/"
                >
                  <i className="icofont icofont-brand-linkedin"></i>
                </a>

                <a href="https://web.facebook.com/jchrissraz/">
                  <i className="icofont icofont-social-facebook"></i>
                </a>

                <a
                  target="_blank"
                  href="https://www.instagram.com/razanamihoatra/"
                >
                  <i className="icofont icofont-social-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* hero */}
      <section
        className="hero section-padding position-re"
        data-scroll-index="1"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="hero-img">
                <Image src={Hero} alt="" />
              </div>
            </div>

            <div className="offset-lg-1 col-lg-6">
              <div className="content">
                <h6>Who am i</h6>
                <h4>R. Jean Christian.</h4>
                <h5>Professional Developer and Project Manager</h5>
                <p className="mb-10">
                  With a strong background in development, I am ready to bring
                  my passion and expertise to your project. Contact me now to
                  discuss your ideas and turn your vision into reality.
                </p>
                <p className="mb-40">
                  {`I am passionate about everything that is digital creation and specifically ITdevelopment, that's why I can help a company or an entrepreneur to counter their projects.I specialized in web development but that does not limit my interests for other platforms. In terms of technology, I'm more on the Javascript/Typescript/NodeJS environment.`}
                </p>

                <a href="CV.pdf" className="butn butn-bord" target="_blank">
                  <span>Download CV</span>
                </a>
                <a href="#0" className="butn butn-light" data-scroll-nav="5">
                  <span>Contact Me!</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <svg
          className="wave"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 81.717"
          enableBackground="new 0 0 1920 81.717"
          xmlSpace="preserve"
        >
          <path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path>
        </svg>
      </section>

      {/* services */}
      <section
        className="services section-padding bg-dark position-re"
        data-scroll-index="2"
      >
        <div className="container">
          <div className="row">
            <div className="section-head text-center col-md-12">
              <h4>SERVICES</h4>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item mb-md50">
                <i className="icon icofont icofont-dashboard-web"></i>
                <h6>Web App Development</h6>
                <p>
                  I help you carry out your web solution project from idea to
                  realization.
                </p>
                <br />
                <a href="#0" className="butn butn-light" data-scroll-nav="5">
                  <span>I Need It !</span>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item mb-sm50">
                <i className="icon icofont icofont-iphone"></i>
                <h6>Mobile App Development</h6>
                <p>
                  I help you realize your mobile application solution for
                  thousands of users.
                </p>
                <br />
                <a href="#0" className="butn butn-light" data-scroll-nav="5">
                  <span>I Need It !</span>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item mb-md50">
                <i className="icon icofont icofont-web"></i>
                <h6> Website Development </h6>
                <p>
                  I help you boost your online presence with a powerful and
                  modern website.
                </p>
                <br />
                <a href="#0" className="butn butn-light" data-scroll-nav="5">
                  <span>I Need It !</span>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item">
                <i className="icon icofont icofont-chart-histogram-alt"></i>
                <h6>Marketing Digital</h6>
                <p>
                  I help you launch or promote your digital solutions with
                  digital marketing.
                </p>
                <br />
                <a href="#0" className="butn butn-light" data-scroll-nav="5">
                  <span>I Need It !</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <svg
          className="wave"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 81.717"
          enableBackground="new 0 0 1920 81.717"
          xmlSpace="preserve"
        >
          <path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path>
        </svg>
      </section>

      {/* portfolio */}
      <section
        className="portfolio section-padding position-re"
        data-scroll-index="3"
      >
        <div className="container">
          <div className="row">
            <div className="section-head text-center col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <h4>Portfolio</h4>
            </div>

            {/* <!-- filter links --> */}
            <div className="filtering text-center col-sm-12">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".website">Website</span>
              <span data-filter=".webapp">Web App</span>
              <span data-filter=".graphic">Mobile App</span>
            </div>

            <div className="clearfix"></div>

            {/* <!-- gallery --> */}
            <div
              className="gallery text-center full-width"
              style={{ position: "relative", height: "1188.16px" }}
            >
              {/* <!-- gallery item --> */}
              <div
                className="items website"
                style={{ position: "absolute", left: "0%", top: "0px" }}
              >
                <div className="item-img">
                  <Image src={Portfolio1} alt="image" />
                  <div className="item-img-overlay valign">
                    <div className="overlay-info full-width vertical-center">
                      <h6>Innoventis Group</h6>
                      <p>Project Management</p>
                    </div>
                    <a href="/image/portfolio/1.webp" className="popimg">
                      <i className="icofont icofont-image"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div
                className="items website"
                style={{ position: "absolute", left: "50%", top: "0px" }}
              >
                <div className="item-img">
                  <Image src={Portfolio2} alt="image" />
                  <div className="item-img-overlay valign">
                    <div className="overlay-info full-width vertical-center">
                      <h6>Proxizone</h6>
                      <p>Project Management</p>
                    </div>
                    <a href="/image/portfolio/2.webp" className="popimg">
                      <i className="icofont icofont-image"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div
                className="items width2 website"
                style={{ position: "absolute", left: "50%", top: "394.362px" }}
              >
                <div className="item-img">
                  <Image src={Portfolio3} alt="image" />
                  <div className="item-img-overlay valign">
                    <div className="overlay-info full-width vertical-center">
                      <h6>E-Commerce</h6>
                      <p>FullStack Developer</p>
                    </div>
                    <a href="/image/portfolio/3.png" className="popimg">
                      <i className="icofont icofont-image"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div
                className="items width2 webapp"
                style={{ position: "absolute", left: "75%", top: "394.362px" }}
              >
                <div className="item-img">
                  <Image src={Portfolio4} alt="image" />
                  <div className="item-img-overlay valign">
                    <div className="overlay-info full-width vertical-center">
                      <h6>CRM</h6>
                      <p>FullStack Developer</p>
                    </div>
                    <a href="/image/portfolio/4.jpg" className="popimg">
                      <i className="icofont icofont-image"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div
                className="items webapp"
                style={{ position: "absolute", left: "0%", top: "443.987px" }}
              >
                <div className="item-img">
                  <Image src={Portfolio5} alt="image" />
                  <div className="item-img-overlay valign">
                    <div className="overlay-info full-width vertical-center">
                      <h6>Public Market Digitalisation</h6>
                      <p>Team Lead</p>
                    </div>
                    <a href="/image/portfolio/5.png" className="popimg">
                      <i className="icofont icofont-image"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div
                className="items webapp"
                style={{ position: "absolute", left: "50%", top: "666.3px" }}
              >
                <div className="item-img">
                  <Image src={Portfolio6} alt="image" />
                  <div className="item-img-overlay valign">
                    <div className="overlay-info full-width vertical-center">
                      <h6>LMS</h6>
                      <p>Lead Dev</p>
                    </div>
                    <a href="/image/portfolio/6.png" className="popimg">
                      <i className="icofont icofont-image"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div
                className="items brand"
                style={{ position: "absolute", left: "0%", top: "843.987px" }}
              >
                <div className="item-img">
                  <Image src={Portfolio7} alt="image" />
                  <div className="item-img-overlay valign">
                    <div className="overlay-info full-width vertical-center">
                      <h6>Food Marketplace</h6>
                      <p>Lead Developer</p>
                    </div>
                    <a href="/image/portfolio/7.png" className="popimg">
                      <i className="icofont icofont-image"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div
                className="items webapp"
                style={{ position: "absolute", left: "0%", top: "843.987px" }}
              >
                <div className="item-img">
                  <Image src={Portfolio8} alt="image" />
                  <div className="item-img-overlay valign">
                    <div className="overlay-info full-width vertical-center">
                      <h6>Data Collection</h6>
                      <p>Team Lead</p>
                    </div>
                    <a href="/image/portfolio/8.jpg" className="popimg">
                      <i className="icofont icofont-image"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg
          className="wave dark"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 81.717"
          enableBackground="new 0 0 1920 81.717"
          xmlSpace="preserve"
        >
          <path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path>
        </svg>
      </section>

      {/* blog */}
      <section
        className="blog section-padding bg-dark position-re"
        data-scroll-index="4"
      >
        <div className="container">
          <div className="row">
            <div className="section-head text-center col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <h4>Blog</h4>
            </div>
            <div className="clearfix full-width"></div>

            <div className="col-lg-4">
              <div className="item mb-md50">
                <div className="post-img position-re o-hidden">
                  <Image src={commingSoon} alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item mb-md50">
                <div className="post-img position-re o-hidden">
                  <Image src={commingSoon} alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item mb-md50">
                <div className="post-img position-re o-hidden">
                  <Image src={commingSoon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg
          className="wave"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 81.717"
          enableBackground="new 0 0 1920 81.717"
          xmlSpace="preserve"
        >
          <path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path>
        </svg>
      </section>

      {/* contact */}
      <Contact />

      {/* footer */}
      <footer className="text-center bg-dark position-re">
        <div className="container">
          <a className="logo" href="#">
            <Image src={LogoLight} alt="logo" />
          </a>

          <div className="social">
            <a target="_blank" href="https://www.linkedin.com/in/chrissraz/">
              <i className="icofont icofont-brand-linkedin"></i>
            </a>

            <a target="_blank" href="https://web.facebook.com/jchrissraz/">
              <i className="icofont icofont-social-facebook"></i>
            </a>

            <a target="_blank" href="https://www.instagram.com/razanamihoatra/">
              <i className="icofont icofont-social-instagram"></i>
            </a>
          </div>

          <p>© 2023 R. Jean Christian. All Rights Reserved.</p>
        </div>

        <svg
          className="wave"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 81.717"
          enableBackground="new 0 0 1920 81.717"
          xmlSpace="preserve"
        >
          <path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path>
        </svg>
      </footer>
    </>
  );
};

export default Home;
