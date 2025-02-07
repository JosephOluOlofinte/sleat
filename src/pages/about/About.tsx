// import React from 'react'

import { Fragment } from "react/jsx-runtime"


const About = () => {
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
            grid grid-cols-1 laptop:grid-cols-2 items-center gap-[50px]">
              <h1>About Sleat</h1>
              <p className="laptop:max-w-[100%] desktop:max-w-[100%] text-grey35">Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.</p>
            </div>
        </main>
    </Fragment>
  )
}

export default About