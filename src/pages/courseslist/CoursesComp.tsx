// import React from 'react'

import { Helmet } from "react-helmet-async"
import { Fragment } from "react/jsx-runtime"
import CoursesDesc from "./CoursesDesc"
import CourseList from "./CourseList"

const CoursesComp = () => {
  return (
    
    <Fragment>
        <Helmet>
            <title>Our Courses | Sleat</title>
            <meta name="description" content="See a full list of all the courses offered on Sleat." />
        </Helmet>

        <CoursesDesc />
        <CourseList />
    </Fragment>
  )
}

export default CoursesComp