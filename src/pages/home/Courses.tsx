// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button } from "../../components"
import  { CourseCard } from "../../components"
import webDev from "../../assets/img/webDev.png"
import UIUX from "../../assets/img/UIUX.png"
import mobileApp from "../../assets/img/mobile-app.png"
import graphics from "../../assets/img/graphic-design.png"
import frontend from "../../assets/img/frontend-dev.png"
import advJavascript from "../../assets/img/advanced-javascript.png"



const Courses = () => {
  return (
    <Fragment>
        <section className="min-h-[100vh] w-[100%] flex justify-center mt-[100px]">
            <div className="h-[100%] w-[90%] desktop:w-[80%] grid grid-cols-1 gap-[60px] ">
              <div className="grid gap-[10px]">
                <h2 className="font-semibold text-[28px] xltablet:text-[38px] desktop:text-[48px] text-grey15">Our Courses</h2>
                <div className="grid xltablet:flex xltablet:justify-between xltablet:items-end ">
                  <p className="xltablet:w-[55ch] laptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                  <div className="mt-5 xltablet:m-0"><Button text="View All" variant="whiteBtn" /></div>
                </div>
              </div>

              <div className="grid grid-cols-1 xltablet:grid-cols-2 grid-rows-6 tablet:grid-rows-3 gap-[24px]">

                  <CourseCard
                  image={webDev}
                  imageLink=""
                  imageAlt="Web Design Fundamentals"
                  duration="4 Weeks"
                  durationLink=""
                  level="Beginner"
                  levelLink=""
                  author="John Smith"
                  authorLink=""
                  title="Web Design Fundamentals"
                  desc="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
                  courselink="" />

                  <CourseCard
                  image={UIUX}
                  imageLink=""
                  imageAlt="UI/UX Design"
                  duration="6 Weeks"
                  durationLink=""
                  level="Intermediate"
                  levelLink=""
                  author="Emily Johnson"
                  authorLink=""
                  title="UI/UX Design"
                  desc="Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
                  courselink="" />

                  <CourseCard
                  image={mobileApp}
                  imageLink=""
                  imageAlt="Mobile App Development"
                  duration="8 Weeks"
                  durationLink=""
                  level="Intermediate"
                  levelLink=""
                  author="David Brown"
                  authorLink=""
                  title="Mobile App Development"
                  desc="Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
                  courselink="" />

                  <CourseCard
                  image={graphics}
                  imageLink=""
                  imageAlt="Graphic Design for Beginners"
                  duration="10 Weeks"
                  durationLink=""
                  level="Beginner"
                  levelLink=""
                  author="Sarah Thompson"
                  authorLink=""
                  title="Graphic Design for Beginners"
                  desc="Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media."
                  courselink="" />

                  <CourseCard
                  image={frontend}
                  imageLink=""
                  imageAlt="Front-End Web Development"
                  duration="10 Weeks"
                  durationLink=""
                  level="Intermediate"
                  levelLink=""
                  author="Michael Adams"
                  authorLink=""
                  title="Front-End Web Development"
                  desc="Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."
                  courselink="" />

                  <CourseCard
                  image={advJavascript}
                  imageLink=""
                  imageAlt="Advanced JavaScript"
                  duration="6 Weeks"
                  durationLink=""
                  level="Advanced"
                  levelLink=""
                  author="Jennifer Wilson"
                  authorLink=""
                  title="Advanced JavaScript"
                  desc="Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence."
                  courselink="" />
              </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Courses