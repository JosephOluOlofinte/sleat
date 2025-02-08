// import React from 'react'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime"
import Hero from "./Hero"
import Image from "./Image"
import Benefits from "./Benefits"
import Courses from "./Courses"
import Testimonials from "./Testimonials"
import Pricing from "./Pricing"
import FAQs from "./FAQs"
import { Helmet } from "react-helmet-async"



const HomeComp = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure sections are rendered
    }
  }, [location]);

  return (
    <Fragment>
      <Helmet>
        <title>Unlock Your Creative Potential with online design and development courses. | Sleat </title>
        <meta name="description" content="A unified LMS platform that helps you hone new skills with hands-on experience and offers certification that lets you compete on global level." />
      </Helmet>
      <Hero />
      <Image />
      <Benefits id="benefits" />
      <Courses id="courses" />
      <Testimonials id="testimonials" />
      <Pricing />
      <FAQs id="faqs" />
    </Fragment>
  )
}

export default HomeComp