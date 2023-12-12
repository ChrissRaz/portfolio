import Link from "next/link";
import LogoLight from "../../../public/image/logo-light.png";
import Image from "next/image";


const Nav_ = () => {

    return (
       
        <nav className="navbar navbar-expand-lg nav-scroll">
            
        <div className="container">
          {/* <!-- Logo --> */}
          <Link  className="logo" href="/fr/home#hero_">
            <Image src={LogoLight} alt="logo" />
          </Link>

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
                <a className="nav-link" href="/fr/home#hero_" data-scroll-nav="0">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fr/home#about_" data-scroll-nav="1">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fr/home#services_" data-scroll-nav="2">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fr/home#portfolio_" data-scroll-nav="3">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fr/blog#hero_" data-scroll-nav="4">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fr/home" data-scroll-nav="5">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>

    );


}


export default Nav_;