// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button } from "../../components"



const FAQs = () => {
  return (
    <Fragment>
        <section className="min-h-[40vh] w-[100%] flex justify-center mt-[70px]">
            <div className="h-[100%] w-[90%] desktop:w-[80%] bg-absoluteWhite p-[24px] xltablet:p-[30px] lglaptop:p-[50px] grid grid-cols-1 gap-[50px]">
              <div className="grid gap-[10px]">
                <h2 className="font-semibold text-grey15">Frequently Asked Questions</h2>
                <div className="grid xltablet:flex xltablet:justify-between xltablet:items-end">
                  <p className="xltablet:w-[55ch] laptop:w-[70ch] lglaptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">Still you have any questions? Contact our Team via support@skillbridge.com</p>
                  <div className="mt-5 xltablet:m-0"><Button text="See All FAQs" variant="whiteBtn" /></div>
                </div>
              </div>


            </div>
        </section>
    </Fragment>
  )
}

export default FAQs