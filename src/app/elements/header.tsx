

const Header_ = () => {

    return (
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
                  <b className="is-hidden">Digital Marketer</b>
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
    );


}


export default Header_;