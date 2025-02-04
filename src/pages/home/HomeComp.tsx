// import React from 'react'


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
  return (
    <Fragment>
      <Helmet>
        <title>Unlock Your Creative Potential with online design and development courses. | Sleat </title>
        <meta name="description" content="A unified LMS platform that helps you hone new skills with hands-on experience and offers certification that lets you compete on global level." />
      </Helmet>
      <Hero />
      <Image />
      <Benefits />
      <Courses />
      <Testimonials />
      <Pricing />
      <FAQs />
    </Fragment>
  )
}

export default HomeComp