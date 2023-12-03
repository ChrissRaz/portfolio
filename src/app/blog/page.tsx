"use client";

import Image  from "next/image";

import UnderHeading from "../../../public/images/blog/under-heading.png";
import Blogpost1 from "../../../public/images/blog/blogpost1.jpg";
import Blogpost2 from "../../../public/images/blog/blogpost2.jpg";

import "../../../public/css/bootstrap.css";
import "../../../public/css/font-awesome.css";
import "../../../public/css/templatemo_style.css";
import "../../../public/css/templatemo_misc.css";
import "../../../public/css/flexslider.css";
import "../../../public/css/testimonails-slider.css";



const Blog = () => {

  
  return (
    <main className="max-h-screen relative selection:text-principal">


            <div id="latest-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section">
                                <h2>Latest blog posts</h2>
                                <Image className="w-auto" src={UnderHeading} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post">
                                <div className="blog-thumb">
                                    <Image className="w-auto" src={Blogpost1} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="content-show">
                                        <h4><a href="single-post.html">Summer Sandwich</a></h4>
                                        <span>29 Sep 2084</span>
                                    </div>
                                    <div className="content-hide">
                                        <p>Sed egestas tincidunt mollis. Suspendisse rhoncus vitae enim et faucibus. Ut dignissim nec arcu nec hendrerit. Sed arcu odio, sagittis vel diam in, malesuada malesuada risus. Aenean a sem leo. Nam ultricies dolor et mi tempor, non pulvinar felis sollicitudin.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post">
                                <div className="blog-thumb">
                                    <Image className="w-auto" src={Blogpost2} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="content-show">
                                        <h4><a href="single-post.html">New Great Taste</a></h4>
                                        <span>23 Sep 2084</span>
                                    </div>
                                    <div className="content-hide">
                                        <p>Sed egestas tincidunt mollis. Suspendisse rhoncus vitae enim et faucibus. Ut dignissim nec arcu nec hendrerit. Sed arcu odio, sagittis vel diam in, malesuada malesuada risus. Aenean a sem leo. Nam ultricies dolor et mi tempor, non pulvinar felis sollicitudin.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post">
                                <div className="blog-thumb">
                                    <Image className="w-auto" src={Blogpost2} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="content-show">
                                        <h4><a href="single-post.html">Spicy Pizza</a></h4>
                                        <span>14 Sep 2084</span>
                                    </div>
                                    <div className="content-hide">
                                        <p>Sed egestas tincidunt mollis. Suspendisse rhoncus vitae enim et faucibus. Ut dignissim nec arcu nec hendrerit. Sed arcu odio, sagittis vel diam in, malesuada malesuada risus. Aenean a sem leo. Nam ultricies dolor et mi tempor, non pulvinar felis sollicitudin.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post">
                                <div className="blog-thumb">
                                    <Image className="w-auto" src={Blogpost2} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="content-show">
                                        <h4><a href="single-post.html">Healthy Food</a></h4>
                                        <span>25 Aug 2084</span>
                                    </div>
                                    <div className="content-hide">
                                        <p>Sed egestas tincidunt mollis. Suspendisse rhoncus vitae enim et faucibus. Ut dignissim nec arcu nec hendrerit. Sed arcu odio, sagittis vel diam in, malesuada malesuada risus. Aenean a sem leo. Nam ultricies dolor et mi tempor, non pulvinar felis sollicitudin.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post">
                                <div className="blog-thumb">
                                    <Image className="w-auto" src={Blogpost2} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="content-show">
                                        <h4><a href="single-post.html">Great Breakfast</a></h4>
                                        <span>17 Aug 2084</span>
                                    </div>
                                    <div className="content-hide">
                                        <p>Sed egestas tincidunt mollis. Suspendisse rhoncus vitae enim et faucibus. Ut dignissim nec arcu nec hendrerit. Sed arcu odio, sagittis vel diam in, malesuada malesuada risus. Aenean a sem leo. Nam ultricies dolor et mi tempor, non pulvinar felis sollicitudin.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="blog-post">
                                <div className="blog-thumb">
                                    <Image className="w-auto" src={Blogpost2} alt="" />
                                </div>
                                <div className="blog-content">
                                    <div className="content-show">
                                        <h4><a href="single-post.html">Fresh Fruit Juice</a></h4>
                                        <span>12 Aug 2084</span>
                                    </div>
                                    <div className="content-hide">
                                        <p>Sed egestas tincidunt mollis. Suspendisse rhoncus vitae enim et faucibus. Ut dignissim nec arcu nec hendrerit. Sed arcu odio, sagittis vel diam in, malesuada malesuada risus. Aenean a sem leo. Nam ultricies dolor et mi tempor, non pulvinar felis sollicitudin.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            

    </main>
  );

};

export default Blog;
