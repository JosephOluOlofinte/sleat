// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import Button from "../../components/block/Button"
import BenefitsCard from "../../components/block/BenefitsCard"
import UIUX from "../../assets/img/UIUXCourse.png"



const OurCourses = () => {
  return (
    <Fragment>
        <section className="min-h-[100vh] w-[100%] flex justify-center mt-[100px]">
            <div className="h-[100%] w-[90%] desktop:w-[80%] grid">
              <div className="grid gap-[10px]">
                <h2 className="font-semibold text-[28px] xltablet:text-[38px] desktop:text-[48px] text-grey15">Our Courses</h2>
                <div className="grid xltablet:flex xltablet:justify-between xltablet:items-end ">
                  <p className="xltablet:w-[55ch] laptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                  <div className="mt-5 xltablet:m-0"><Button text="View All" variant="whiteBtn" /></div>
                </div>
              </div>

              <div className="grid grid-cols-1 xltablet:grid-cols-2 grid-rows-6 tablet:grid-rows-3 gap-[24px] mt-[60px]">

                  <div className="bg-absoluteWhite p-[24px] xltablet:p-[35px] desktop:p-[45px] grid gap-[30px] xltablet:gap-[40px] desktop:gap-[50px] rounded-[10px]">

                    <a href=""><img src={UIUX} alt="UI/UX course" /></a>

                    <div className="w-[100%] flex flex-col gap-[16px] tablet:flex-row tablet:items-center tablet:justify-between ">
                      <div className="flex gap-[12px]">
                        <a href=""><Button text="4 Weeks" variant="courseBtn" /></a>
                        <a href=""><Button text="Beginner" variant="courseBtn" /></a>
                      </div>
                      <a href="">
                      <h4 className="pl-[5px] tablet:pl-[0] font-medium text-[16px] desktop:text-[20px]">By John Smith</h4>
                      </a>
                    </div>

                    <div className="grid gap-[14px] xltablet:gap-[16px] desktop:gap-[20px]">
                      <h3 className="text-[20px] desktop:text-[22px] font-semibold text-[#333333]"> Web Design Fundamentals </h3>
                      <p className="text-grey30 xlmobile:text-[15px] desktop:text-[17px] leading-[1.5] "> Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites. </p>
                    </div>

                    <div className="flex justify-end">
                      <a href="" className="bg-white97 p-[14px] desktop:p-[20px] border-[2px] border-white95 rounded-[6px] w-[100%] text-center "> Get It Now </a>
                    </div>
                    
                  </div>

                <BenefitsCard 
                  id="02" 
                  title="Expert Instruction" 
                  desc="Learn from industry experts who have hands-on experience in design and development." 
                  url="https://www.goodemailcode.com/email-code/template" />

                <BenefitsCard 
                  id="03" 
                  title="Diverse Course Offerings" 
                  desc="Explore a wide range of design and development courses covering various topics." 
                  url="https://www.goodemailcode.com/email-code/template" />

                <BenefitsCard 
                  id="04" 
                  title="Updated Curriculum" 
                  desc="Access courses with up-to-date content reflecting the latest trends and industry practices." 
                  url="https://www.goodemailcode.com/email-code/template" />

                <BenefitsCard 
                  id="05" 
                  title="Practical Projects and Assignments" 
                  desc="Develop a portfolio showcasing your skills and abilities to potential employers." 
                  url="https://www.goodemailcode.com/email-code/template" />

                <BenefitsCard 
                  id="06" 
                  title="Interactive Learning Environment" 
                  desc="Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding." 
                  url="https://www.goodemailcode.com/email-code/template" />
              </div>
            </div>
        </section>
    </Fragment>
  )
}

export default OurCourses