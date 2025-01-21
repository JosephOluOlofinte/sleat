// import React from 'react'


import { Fragment } from "react/jsx-runtime"
import Hero from "./Hero"
import Image from "./Image"
import Benefits from "./Benefits"
import Courses from "./Courses"
import Testimonials from "./Testimonials"
import Pricing from "./Pricing"
import FAQs from "./FAQs"



const HomeComp = () => {
  return (
    <Fragment>
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