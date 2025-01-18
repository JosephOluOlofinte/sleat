// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import Button from "../../components/block/Button"
import BenefitsCard from "../../components/block/BenefitsCard"




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

                <BenefitsCard 
                  id="01" 
                  title="Flexible Learning Schedule" 
                  desc="Fit your coursework around your existing commitments and obligations" 
                  url="https://www.goodemailcode.com/email-code/template" />

                <BenefitsCard 
                  id="01" 
                  title="Flexible Learning Schedule" 
                  desc="Fit your coursework around your existing commitments and obligations" 
                  url="https://www.goodemailcode.com/email-code/template" />

                <BenefitsCard 
                  id="01" 
                  title="Flexible Learning Schedule" 
                  desc="Fit your coursework around your existing commitments and obligations" 
                  url="https://www.goodemailcode.com/email-code/template" />

                <BenefitsCard 
                  id="01" 
                  title="Flexible Learning Schedule" 
                  desc="Fit your coursework around your existing commitments and obligations" 
                  url="https://www.goodemailcode.com/email-code/template" />

                <BenefitsCard 
                  id="01" 
                  title="Flexible Learning Schedule" 
                  desc="Fit your coursework around your existing commitments and obligations" 
                  url="https://www.goodemailcode.com/email-code/template" />

                <BenefitsCard 
                  id="01" 
                  title="Flexible Learning Schedule" 
                  desc="Fit your coursework around your existing commitments and obligations" 
                  url="https://www.goodemailcode.com/email-code/template" />
              </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Benefits