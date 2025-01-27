// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button } from "../../components"
import Accordion from "../../components/block/Accordion"



const FAQs = () => {
  return (
    <Fragment>
        <section className="min-h-[40vh] w-[100%] flex justify-center mt-[70px]">
            <div className="
          bg-absoluteWhite  rounded-xl
            h-[100%] w-[90%] desktop:w-[80%]
            p-[24px] xltablet:p-[50px] laptop:p-[70px] lglaptop:p-[90px] desktop:p-[110px] 
            grid grid-cols-1 laptop:grid-cols-5 
            gap-[40px] laptop:gap-[70px] lglaptop:gap-[100px]
            ">
              <div className="col-span-2 grid gap-[30px] h-max">
                <div className="grid gap-[15px]">
                  <h2 className="font-semibold text-grey15 laptop:w-[15ch]">Frequently Asked Questions</h2>
                  <p className="laptop:w-[90%] text-grey35  pr-[5px] whitespace-break-spaces">
                    Still you have any questions? Contact our Team via support@skillbridge.com
                  </p>
                </div>

                  <Button text="See All FAQs" variant="whiteBtn" size="large" className="border-[1px]" />
              </div>

              <div className="rounded-2xl grid gap-[20px] h-max xltablet:min-w-[70%] laptop:col-span-3">
                <Accordion title="Accordion 1" description="Accordion 1" btnText="Enrollment Process for Different Courses" />

              </div>


            </div>
        </section>
    </Fragment>
  )
}

export default FAQs