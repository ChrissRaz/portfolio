import Image from "next/image";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import Footer from "@/app/elements/footer";
import Header_ from "@/app/elements/header";


import "../../../../../public/css/plugins.css";
import "../../../../../public/css/style.css";
import Nav_ from "@/app/elements/nav";
import BlogImage from "../../../../../public/image/blog/1.jpg"


const SingleBlog = () => {


    return (

        <>
        
            <Nav_/>


            <Footer/>

        </>
        
    )

}

export default SingleBlog;