// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button } from "../../components"
import Accordion from "../../components/block/Accordion"



const FAQs = () => {
  return (
    <Fragment>
        <section className="min-h-[40vh] w-[100%] flex justify-center mt-[70px]">
            <div className="h-[100%] w-[90%] desktop:w-[80%] bg-absoluteWhite p-[24px] xltablet:p-[30px] lglaptop:p-[50px] grid grid-cols-1 xltablet:grid-cols-3 gap-[50px]">
              <div className="grid gap-[30px] xl-tablet:w-fit bg-red-300">
                <div className="grid gap-[15px]">
                  <h2 className="font-semibold text-grey15 laptop:w-[15ch]">Frequently Asked Questions</h2>
                  <p className="laptop:w-[45ch] text-grey35  pr-[5px] whitespace-break-spaces">
                    Still you have any questions? Contact our Team via support@skillbridge.com
                  </p>
                </div>

                  <Button text="See All FAQs" variant="whiteBtn" size="large" className="border-[1px]" />
              </div>


              <div className="rounded-2xl grid gap-[20px] h-max xltablet:min-w-[70%] col-span-2 bg-blue-300">
                <Accordion title="Accordion 1" description="Accordion 1" />

              </div>


            </div>
        </section>
    </Fragment>
  )
}

export default FAQs