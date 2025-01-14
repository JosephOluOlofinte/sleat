// import React from 'react'

import { Fragment } from "react/jsx-runtime"




const OurCourses = () => {
  return (
    <Fragment>
        <section className="w-[100%] flex justify-center mt-[70px]">
            <div className="h-[100%] w-[90%] grid">
              <div className="grid">
                <h2 className="font-semibold text-[32px] text-grey15">Our Courses</h2>
                <div className="grid xltablet:flex xltablet:justify-between xltablet:items-end ">
                  <p className="xltablet:w-[55ch] laptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces leading-6 ">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                  <div className="mt-5 xltablet:m-0"><a href="" className="bg-absoluteWhite text-absoluteBlack text-[14px] font-medium inline-block py-[12px] px-[20px] whitespace-nowrap ">View all</a></div>
                </div>
              </div>

              <div className="grid grid-cols-1 tablet:grid-cols-2 xltablet:grid-cols-2 grid-rows-1 tablet:grid-rows-3 gap-[20px] mt-[60px]">
                <div className="bg-absoluteWhite h-[550px]">
                  <h1>01</h1>
                  <div></div>
                  <div></div>
                </div>

                <div className="bg-absoluteWhite h-[550px]">
                  <h1>02</h1>
                  <div></div>
                  <div></div>
                </div>

                <div className="bg-absoluteWhite h-[550px]">
                  <h1>03</h1>
                  <div></div>
                  <div></div>
                </div>

                <div className="bg-absoluteWhite h-[550px]">
                  <h1>04</h1>
                  <div></div>
                  <div></div>
                </div>

                <div className="bg-absoluteWhite h-[550px]">
                  <h1>05</h1>
                  <div></div>
                  <div></div>
                </div>

                <div className="bg-absoluteWhite h-[550px]">
                  <h1>06</h1>
                  <div></div>
                  <div></div>
                </div>


              </div>
            </div>
        </section>
    </Fragment>
  )
}

export default OurCourses