// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import Button from "../../components/block/Button"




const Benefits = () => {
  return (
    <Fragment>
        <section className="min-h-[100vh] w-[100%] flex justify-center mt-[70px]">
            <div className="h-[100%] w-[90%] desktop:w-[80%] grid">
              <div className="grid gap-[10px]">
                <h2 className="font-semibold text-[28px] xltablet:text-[38px] desktop:text-[48px] text-grey15">Benefits</h2>
                <div className="grid xltablet:flex xltablet:justify-between xltablet:items-end ">
                  <p className="xltablet:w-[55ch] laptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                  <div className="mt-5 xltablet:m-0"><Button text="View All" variant="whiteBtn" /></div>
                </div>
              </div>

              <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 grid-rows-1 tablet:grid-rows-2 gap-[20px] mt-[60px]">
                <div className="bg-absoluteWhite p-[30px] xltablet:p-[40px] desktop:p-[50px] grid gap-[30px] xltablet:gap-[40px] desktop:gap-[50px] rounded-[10px]">

                  <h2 className="text-right font-bold text-[50px] xltablet:text-[60px] desktop:text-[80px] ">01</h2>

                  <div className="grid gap-[14px] xltablet:gap-[16px] desktop:gap-[20px]">
                    <h3 className="text-[20px] desktop:text-[24px] font-semibold text-[#333333]">Flexible Learning Schedule</h3>
                    <p className="text-grey30 xlmobile:text-[16px] desktop:text-[18px] leading-[1.5] ">Fit your coursework around your existing commitments and obligations</p>
                  </div>
                  
                  <div className="flex justify-end">
                    <a href="" className="bg-white99 p-[14px] desktop:p-[20px] border-[2px] rounded-[6px] h-fit">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-orange50">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="bg-absoluteWhite h-[370px]">
                  <h1>02</h1>
                  <div></div>
                  <div></div>
                </div>
                <div className="bg-absoluteWhite h-[370px]">
                  <h1>03</h1>
                  <div></div>
                  <div></div>
                </div>
                <div className="bg-absoluteWhite h-[370px]">
                  <h1>04</h1>
                  <div></div>
                  <div></div>
                </div>
                <div className="bg-absoluteWhite h-[370px] hidden tablet:block ">
                  <h1>05</h1>
                  <div></div>
                  <div></div>
                </div>
                <div className="bg-absoluteWhite h-[370px] hidden tablet:block ">
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

export default Benefits