// import React from 'react'


import { Fragment } from "react/jsx-runtime"
import Hero from "./Hero"
import Image from "./Image"
import Benefits from "./Benefits"
import Courses from "./Courses"
import Testimonials from "./Testimonials"
import Pricing from "./Pricing"



const HomeComp = () => {
  return (
    <Fragment>
        <Hero />
        <Image />
        <Benefits />
        <Courses />
        <Testimonials />
        <Pricing />
    </Fragment>
  )
}

export default HomeComp