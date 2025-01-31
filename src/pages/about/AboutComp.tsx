// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import About from "./About"
import Achievements from "./Achievements"
import OurGoals from "./OurGoals"
import Together from "./Together"

const AboutComp = () => {
  return (
    <Fragment>
        <About />
        <Achievements />
        <OurGoals />
        <Together />
    </Fragment>
  )
}

export default AboutComp