import Image from "next/image";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import Footer from "@/app/elements/footer";
import Header_ from "@/app/elements/header";


import "../../../../public/css/plugins.css";
import "../../../../public/css/style.css";
import Nav_ from "@/app/elements/nav";
import BlogImage from "../../../../public/image/blog/1.jpg"


const Blog = () => {


    return (

        <>
        
            <Nav_/>



            <header className="header half-header valign bg-img" data-overlay-dark="7" data-background="/image/bgx.jpg" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url(/image/bgx.jpg)", backgroundPosition: "0px 0px"}}>

                <div className="container">
                    <div className="row">
                        <div className="full-width text-center caption mt-50">
                            <h2>My Blog</h2>
                            <a href="/fr/home">Home</a>/<a href="#">Blog</a>
                        </div>
                    </div>
                </div>
            </header>



            {/* <!-- =====================================
            ==== Start Blog --> */}

            <section className="posts section-padding">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-6">
                            <div className="post mb-80">
                                <div className="post-img">
                                    <div className="img">
                                        <a href="#0"><Image src={BlogImage} alt=""/></a>
                                    </div>
                                    <div className="date">
                                        <a href="#0">06 Augu, 2018</a>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <h5><a href="#0">How Ubiquity Became a Liability for Burberry.</a></h5>
                                    <div className="tags">
                                        <a href="#0">WordPress , </a>
                                        <a href="#0">Portfolio</a>
                                    </div>
                                    <a href="#0" className="more">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="post mb-80">
                                <div className="post-img">
                                    <div className="img">
                                        <a href="#0"><Image src={BlogImage} alt=""/></a>
                                    </div>
                                    <div className="date">
                                        <a href="#0">06 Augu, 2018</a>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <h5><a href="#0">How Ubiquity Became a Liability for Burberry.</a></h5>
                                    <div className="tags">
                                        <a href="#0">WordPress , </a>
                                        <a href="#0">Portfolio</a>
                                    </div>
                                    <a href="#0" className="more">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="post mb-80">
                                <div className="post-img">
                                    <div className="img">
                                        <a href="#0"><Image src={BlogImage} alt=""/></a>
                                    </div>
                                    <div className="date">
                                        <a href="#0">06 Augu, 2018</a>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <h5><a href="#0">How Ubiquity Became a Liability for Burberry.</a></h5>
                                    <div className="tags">
                                        <a href="#0">WordPress , </a>
                                        <a href="#0">Portfolio</a>
                                    </div>
                                    <a href="#0" className="more">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="post mb-80">
                                <div className="post-img">
                                    <div className="img">
                                        <a href="#0"><Image src={BlogImage} alt=""/></a>
                                    </div>
                                    <div className="date">
                                        <a href="#0">06 Augu, 2018</a>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <h5><a href="#0">How Ubiquity Became a Liability for Burberry.</a></h5>
                                    <div className="tags">
                                        <a href="#0">WordPress , </a>
                                        <a href="#0">Portfolio</a>
                                    </div>
                                    <a href="#0" className="more">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="post mb-sm80">
                                <div className="post-img">
                                    <div className="img">
                                        <a href="#0"><Image src={BlogImage} alt=""/></a>
                                    </div>
                                    <div className="date">
                                        <a href="#0">06 Augu, 2018</a>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <h5><a href="#0">How Ubiquity Became a Liability for Burberry.</a></h5>
                                    <div className="tags">
                                        <a href="#0">WordPress , </a>
                                        <a href="#0">Portfolio</a>
                                    </div>
                                    <a href="#0" className="more">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="post">
                                <div className="post-img">
                                    <div className="img">
                                        <a href="#0"><Image src={BlogImage} alt=""/></a>
                                    </div>
                                    <div className="date">
                                        <a href="#0">06 Augu, 2018</a>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <h5><a href="#0">How Ubiquity Became a Liability for Burberry.</a></h5>
                                    <div className="tags">
                                        <a href="#0">WordPress , </a>
                                        <a href="#0">Portfolio</a>
                                    </div>
                                    <a href="#0" className="more">Read More</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- End Blog ====
            ======================================= --> */}

            <Footer/>

        </>
        
    )

}

export default Blog;