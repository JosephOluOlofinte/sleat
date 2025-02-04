// import React from 'react'

import { Helmet } from "react-helmet-async"
import { Fragment } from "react/jsx-runtime"
import WebDesign from "./WebDesign"
import UiUx from "./UiUx"
import MobileApp from "./MobileApp"
import Graphics from "./Graphics"
import Frontend from "./Frontend"
import AdvJavascript from "./AdvJavascript"
import CoursesDesc from "./CoursesDesc"

const CoursesComp = () => {
  return (
    
    <Fragment>
        <Helmet>
            <title>Our Courses | Sleat</title>
            <meta name="description" content="See a full list of all the courses offered on Sleat." />
        </Helmet>

        <CoursesDesc />
        <WebDesign />
        <UiUx />
        <MobileApp />
        <Graphics />
        <Frontend />
        <AdvJavascript />
    </Fragment>
  )
}

export default CoursesComp