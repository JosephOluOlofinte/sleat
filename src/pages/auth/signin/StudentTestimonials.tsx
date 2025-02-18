// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { TestimonialsCard } from "../../../components"
import sarahL from '../../../assets/img/sarah-L.png'

const StudentTestimonials = () => {
  return (
    <Fragment>
        <div className="grid gap-[40px] flex-1 max-h-fit">
            <div className="grid gap-[15px]">
                <h2>Students Testimonials</h2>
                <p className="font-normal text-grey30">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
            </div>
            <div className="grid gap-[20px]">
                <TestimonialsCard 
                para='The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!' 
                name='Sarah L' 
                img={sarahL} 
                url='#' />
                <div className="flex justify-end">
                    <div className="flex gap-[10px] laptop:gap-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="bg-absoluteWhite size-[50px] rounded-[8px] p-[12px] lglaptop:p-[14px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="bg-absoluteWhite size-[50px] rounded-[8px] p-[12px] lglaptop:p-[14px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default StudentTestimonials