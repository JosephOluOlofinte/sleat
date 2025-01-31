// import React from 'react'

import { Fragment } from "react/jsx-runtime";
import { BenefitsCard } from "../../components";
import icon5 from "../../assets/icons/about-icons/icon5.png";
import icon6 from "../../assets/icons/about-icons/icon6.png";
import icon7 from "../../assets/icons/about-icons/icon7.png";
import icon8 from "../../assets/icons/about-icons/icon8.png";

const OurGoals = () => {
  return (
    <Fragment>
      <section className="
      my-[50px] xltablet:my-[80px] lglaptop:my-[100px]
      flex justify-center items-center">

        <div className="
        h-[100%] w-[90%] desktop:w-[80%]
        grid grid-cols-1 gap-[30px] laptop:gap-[40px]">

          <div className="grid gap-[10px]">
            <h2 className="text-grey15">Our Goals</h2>
              <p className="xltablet:w-[55ch] laptop:w-[70ch] lglaptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
              <div className="mt-5 xltablet:m-0"></div>
          </div>

          <div className="grid grid-cols-1 xltablet:grid-cols-2 gap-[20px] lglaptop:gap-[30px]">
           <BenefitsCard 
              noId noArrow withIcon 
              icon={icon5} 
              title="Provide Practical Skills" 
              desc="We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field." 
            />

            <BenefitsCard 
              noId noArrow withIcon 
              icon={icon6} 
              title="Foster Creative Problem-Solving" 
              desc="We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation." 
            />

            <BenefitsCard 
              noId noArrow withIcon 
              icon={icon7} 
              title="Promote Collaboration and Community" 
              desc="We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together." 
            />

            <BenefitsCard 
              noId noArrow withIcon 
              icon={icon8} 
              title="Stay Ahead of the Curve" 
              desc="The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills." 
            />
          </div>

        </div>

      </section>
    </Fragment>
  )
}

export default OurGoals