import LogoLight from "../../../public/image/logo-light.png";
import Image from "next/image";



const Footer = () => {


    return (
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
    )

}

export default Footer;