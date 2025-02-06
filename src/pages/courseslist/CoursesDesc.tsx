// import React from 'react'

import { Fragment } from "react/jsx-runtime"

const CoursesDesc = () => {
  return (
    <Fragment>
        <main className="
      my-[50px] xltablet:my-[80px] lglaptop:my-[100px]
      flex justify-center items-center
      ">
          <div className="
          h-[100%] w-[90%] desktop:w-[80%]
          border-b-[1px] border-white90 
          pb-[30px] laptop:pb-[40px] lglaptop:pb-[50px]
          grid grid-cols-1 laptop:grid-cols-2 items-center gap-[16px] laptop:gap-[80px] lglaptop:gap-[100px]">
            <h1 className="leading-10">Online Courses on Design and Development</h1>
            <p className="laptop:max-w-[100%] desktop:max-w-[100%] text-grey35">Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.</p>
          </div>
      </main>
    </Fragment>
  )
}

export default CoursesDesc