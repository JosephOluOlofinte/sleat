// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button } from "../../components"
import image from "../../assets/img/webDevCourse.png"

const WebDesign = () => {
  return (

    <Fragment>
        <section className="flex justify-center">
            <div className="
            bg-absoluteWhite 
            min-h-[10vh] w-[90%] desktop:w-[80%]
            p-[24px] laptop:p-[30px] desktop:p-[40px] 
            grid gap-[30px] xltablet:gap-[40px] desktop:gap-[35px] rounded-[10px]
            ">

              <div className="grid gap-[10px]">
                <h2 className="font-semibold text-grey15 text-[18px] xltablet:text-[20px] lglaptop:text-[24px]">Web Design Fundamentals</h2>
                <div className="grid xltablet:flex xltablet:justify-between xltablet:items-end">
                  <p className="xltablet:w-[55ch] laptop:w-[70ch] lglaptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                  <div className="mt-5 xltablet:m-0"><Button text="View Course" variant="courseBtn" size="small" /></div>
                </div>
              </div>

              {/* IMAGES, DURATION, LEVEL, AND AUTHOR */}
              <div className='grid gap-[20px]'>
                <div className="flex gap-5">
                  <a href="">
                    <div><img src={image} alt=""  className="h-[clamp(97px,330px,425px)] w-[clamp(100px,390px,480px)]"/></div>
                  </a>
                  <a href="">
                    <div><img src={image} alt="" className="h-[clamp(97px,330px,425px)] w-[clamp(100px,390px,480px)]"/></div>
                  </a>
                  <a href="">
                    <div><img src={image} alt=""  className="h-[clamp(97px,330px,425px)] w-[clamp(100px,390px,480px)]"/></div>
                  </a>
                </div>

                <div className="w-[100%] flex items-start flex-col gap-[16px] tablet:flex-row tablet:items-center xltablet:flex-col xltablet:items-start laptop:flex-row laptop:items-center tablet:justify-between ">
                    <div className="w-[100%] tablet:w-auto flex justify-between tablet:justify-normal tablet:gap-[12px] xltablet:w-[100%] xltablet:justify-between laptop:justify-normal laptop:w-auto ">
                        <Button text="4 Weeks" variant="courseBtn" size="small" />
                        <Button text="Beginner" variant="courseBtn" size="small" url="" />
                    </div>
                    <a href="">
                    <p className="pl-[5px] laptop:pl-[0] font-medium text-[16px] desktop:text-[18px]">By John Smith</p>
                    </a>
                </div>
              </div>

              {/* CURRICULUM */}
              <div>Curriculum</div>
            </div>
        </section>
    </Fragment>
  )
}

export default WebDesign