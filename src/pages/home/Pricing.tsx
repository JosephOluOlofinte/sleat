// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button } from "../../components"

const Pricing = () => {
  return (
    <Fragment>
    <section className="min-h-[40vh] w-[100%] flex justify-center mt-[100px]">
        <div className="h-[100%] w-[90%] desktop:w-[80%] grid grid-cols-1 gap-[60px]">
            <div className="grid gap-[10px]">
                <h2 className="font-semibold text-grey15">Our Testimonials</h2>
                <div className="grid xltablet:flex xltablet:justify-between xltablet:items-end ">
                <p className="xltablet:w-[55ch] laptop:w-[70ch] lglaptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                <div className="mt-5 xltablet:m-0"><Button text="View All" variant="whiteBtn" url="#" /></div>
                </div>
            </div>

            <div className="grid grid-cols-1 xltablet:grid-cols-2 grid-rows-4 xltablet:grid-rows-2 gap-[20px] lglaptop:gap-[25px]">

            </div>
        </div>
    </section>
</Fragment>
  )
}

export default Pricing