"use client";

import ReactPageScroller from "react-page-scroller";
import { useState, useCallback, Suspense } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Home from "./sections/home";
import About from "./sections/about";
import Services from "./sections/services";
import Portfolio from "./sections/portfolio";
import Contact from "./sections/contact";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import {faMailReply} from "@fortawesome/free-solid-svg-icons";
import { T_INTREST } from "@/app/types";
import ImageLogo from "../../public/images/logo.png";

import { redirect } from 'next/navigation'




const Page = () => {

  redirect("/home");
  
};

export default Page;
