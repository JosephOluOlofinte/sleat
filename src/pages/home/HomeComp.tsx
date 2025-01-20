// import React from 'react'


import Hero from "./Hero"
import Image from "./Image"
import Benefits from "./Benefits"
import Courses from "./Courses"
import Testimonials from "./Testimonials"
import { Fragment } from "react/jsx-runtime"



const HomeComp = () => {
  return (
    <Fragment>
        <Hero />
        <Image />
        <Benefits />
        <Courses />
        <Testimonials />
    </Fragment>
  )
}

export default HomeComp