// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button } from "../../components"
import webDesign1 from "../../assets/img/web-design-1.png";
import webDesign2 from "../../assets/img/web-design-2.png";
import webDesign3 from "../../assets/img/web-design-3.png";
// import uiDesign1 from "../../assets/img/ui-design-1.png";
// import uiDesign2 from "../../assets/img/ui-design-2.png";
// import uiDesign3 from "../../assets/img/ui-design-3.png";
// import mobileApp1 from "../../assets/img/mobile-app-1.png";
// import mobileApp2 from "../../assets/img/mobile-app-2.png";
// import mobileApp3 from "../../assets/img/mobile-app-3.png";
// import graphicDesign1 from "../../assets/img/graphic-design-1.png";
// import graphicDesign2 from "../../assets/img/graphic-design-2.png";
// import graphicDesign3 from "../../assets/img/graphic-design-3.png";
// import frontendDev1 from "../../assets/img/fronted-dev-1.png";
// import frontendDev2 from "../../assets/img/fronted-dev-2.png";
// import frontendDev3 from "../../assets/img/fronted-dev-3.png";



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

              {/* TITLE AND DESCRIPTION */}
              <div className="grid gap-[10px]">
                <h2 className="font-semibold text-grey15 text-[18px] xltablet:text-[20px] lglaptop:text-[24px]">Web Design Fundamentals</h2>
                <div className="grid xltablet:flex xltablet:justify-between xltablet:items-end">
                  <p className="xltablet:w-[55ch] laptop:w-[70ch] lglaptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                  <div className="mt-5 xltablet:m-0"><Button text="View Course" variant="courseBtn" size="small" /></div>
                </div>
              </div>

              {/* IMAGES, DURATION, LEVEL, AND AUTHOR */}
              <div className='grid gap-[20px]'>
                <div className="flex gap-[10px] xltablet:gap-[20px] lglaptop:gap-[30px]">
                  <a href="">
                    <div><img src={webDesign1} alt=""  className=""/></div>
                  </a>
                  <a href="">
                    <div><img src={webDesign2} alt="" className=""/></div>
                  </a>
                  <a href="">
                    <div><img src={webDesign3} alt=""  className=""/></div>
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
              <div className="border border-white95 rounded-[10px]">
                <h3 className="text-[18px] xltablet:text-[20px] lglaptop:text-[22px] 
                border-b border-white95
                py-[14px] xltablet:py-[20px] lglaptop:py-[24px]
                px-[20px] xltablet:px-[24px] lglaptop:px-[30px]
                ">Curiculum</h3>
                <div className="grid grid-flow-row xltablet:grid-flow-col
                gap-[20px] xltablet:gap-[40px] lglaptop:gap-[50px]
                py-[20px] xltablet:py-[24px] lglaptop:py-[30px]
                px-[30px] xltablet:px-[40px] lglaptop:px-[50px]
                ">

                  <div className="grid gap-[12px] xltablet:gap-[16px] lglaptop:gap-[20px]">
                    <h4 className="text-[30px] xltablet:text-[40px] lglaptop:text-[50px] font-extrabold">01</h4>
                    <p>Introduction</p> 
                  </div>
                  <div className="border border-white95 w-[100%] h-[1px] xltablet:w-[1px] xltablet:h-[100%]"></div>

                  <div className="grid gap-[12px] xltablet:gap-[16px] lglaptop:gap-[20px]">
                    <h4 className="text-[30px] xltablet:text-[40px] lglaptop:text-[50px] font-extrabold">02</h4>
                    <p>Introduction</p>
                  </div>
                  <div className="border w-[100%] h-[1px] xltablet:w-[1px] xltablet:h-[100%]"></div>

                  <div className="grid gap-[12px] xltablet:gap-[16px] lglaptop:gap-[20px]">
                    <h4 className="text-[30px] xltablet:text-[40px] lglaptop:text-[50px] font-extrabold">03</h4>
                    <p>Introduction</p>
                  </div>
                  <div className="border w-[100%] h-[1px] xltablet:w-[1px] xltablet:h-[100%]"></div>

                  <div className="grid gap-[12px] xltablet:gap-[16px] lglaptop:gap-[20px]">
                    <h4 className="text-[30px] xltablet:text-[40px] lglaptop:text-[50px] font-extrabold">04</h4>
                    <p>Introduction</p>
                  </div>
                  <div className="border w-[100%] h-[1px] xltablet:w-[1px] xltablet:h-[100%]"></div>

                  <div className="grid gap-[12px] xltablet:gap-[16px] lglaptop:gap-[20px]">
                    <h4 className="text-[30px] xltablet:text-[40px] lglaptop:text-[50px] font-extrabold">05</h4>
                    <p>Introduction</p>
                  </div>

                </div>
              </div>
            </div>
        </section>
    </Fragment>
  )
}

export default WebDesign