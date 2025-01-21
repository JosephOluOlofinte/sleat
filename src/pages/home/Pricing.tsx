// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button, PricingComponent } from "../../components"

const Pricing = () => {
  return (
    <Fragment>
    <section className="min-h-[40vh] w-[100%] flex justify-center mt-[100px]">
        <div className="h-[100%] w-[90%] desktop:w-[80%] grid grid-cols-1 gap-[60px]">
            <div className="grid gap-[10px]">
                <h2 className="font-semibold text-grey15">Our Pricing</h2>
                <div className="grid xltablet:flex xltablet:justify-between xltablet:items-end ">
                <p className="xltablet:w-[45ch] laptop:w-[55ch] lglaptop:w-[75ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                <div className="mt-5 xltablet:m-0 bg-absoluteWhite p-[10px]">
                  <Button text="Monthly" className="mr-[15px]"/>
                  <Button text="View All" variant="whiteBtn" url="#" /></div>
                </div>
            </div>

            <PricingComponent />
        </div>
    </section>
</Fragment>
  )
}

export default Pricing