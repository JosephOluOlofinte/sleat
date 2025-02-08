// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { BenefitsCard } from "../../components"
import icon1 from "../../assets/icons/about-icons/icon1.png";
import icon2 from "../../assets/icons/about-icons/icon2.png";
import icon3 from "../../assets/icons/about-icons/icon3.png";
import icon4 from "../../assets/icons/about-icons/icon4.png";


type Id = {
  id?: string;
}

const Achievements = ({id}:Id) => {
  return (
    <Fragment>
      <section id={id} className="
      my-[50px] xltablet:my-[80px] lglaptop:my-[100px]
      flex justify-center items-center">

        <div className="
        h-[100%] w-[90%] desktop:w-[80%]
        grid grid-cols-1 gap-[30px] laptop:gap-[40px]">

          <div className="grid gap-[10px]">
            <h2 className="text-grey15">Achievements</h2>
              <p className="xltablet:w-[55ch] laptop:w-[70ch] lglaptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
              <div className="mt-5 xltablet:m-0"></div>
          </div>

          <div className="grid grid-cols-1 xltablet:grid-cols-2 gap-[20px] lglaptop:gap-[30px]">

            <BenefitsCard 
              noId noArrow withIcon 
              icon={icon1} 
              title="Trusted by Thousands" 
              desc="We have successfully served thousands of students, helping them unlock their potential and achieve their career goals." 
            />

            <BenefitsCard 
              noId noArrow withIcon 
              icon={icon2} 
              title="Award-Winning Courses" 
              desc="Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies." 
            />

            <BenefitsCard 
              noId noArrow withIcon 
              icon={icon3} 
              title="Positive Student Feedback" 
              desc="We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials." 
            />

            <BenefitsCard 
              noId noArrow withIcon 
              icon={icon4} 
              title="Industry Partnerships" 
              desc="We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies." 
            />
          </div>

        </div>

      </section>
    </Fragment>
  )
}

export default Achievements