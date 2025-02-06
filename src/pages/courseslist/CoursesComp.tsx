// import React from 'react'

import { Helmet } from "react-helmet-async"
import { Fragment } from "react/jsx-runtime"
import WebDesign from "./WebDesign"

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
    </Fragment>
  )
}

export default CoursesComp