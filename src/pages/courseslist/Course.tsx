// import React from 'react'

import { CourseDataCard } from "../../components";
import { courseData } from "../../data";


import { Fragment } from "react/jsx-runtime"

const Course = () => {
  return (
    <Fragment>
      {courseData.map((course) => (
        <CourseDataCard key={course.id} {...course} />
      ))}
    </Fragment>
  )
}

export default Course