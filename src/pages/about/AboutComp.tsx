// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import About from "./About"
import Achievements from "./Achievements"
import OurGoals from "./OurGoals"
import Together from "./Together"
import { Helmet } from "react-helmet-async"

const AboutComp = () => {
  return (
    <Fragment>
      <Helmet>
        <title>All you need to know about Sleat. The unified LMS platform | Sleat </title>
        <meta name="description" content="Everything there is to know about Sleat: our people, mission, vision, core values, and processes." />
      </Helmet>
      <About />
      <Achievements />
      <OurGoals />
      <Together />
    </Fragment>
  )
}

export default AboutComp