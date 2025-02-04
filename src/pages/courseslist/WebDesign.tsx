// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button } from "../../components"

const WebDesign = () => {
  return (

    <Fragment>
        <section className="flex justify-center">
            <div className="
            bg-absoluteWhite 
            min-h-[10vh] w-[90%] desktop:w-[80%]">
              <div className="grid gap-[10px]">
                <h2 className="font-semibold text-grey15">Our Courses</h2>
                <div className="grid xltablet:flex xltablet:justify-between xltablet:items-end">
                  <p className="xltablet:w-[55ch] laptop:w-[70ch] lglaptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                  <div className="mt-5 xltablet:m-0"><Button text="View All" variant="whiteBtn" /></div>
                </div>
              </div>
            </div>
        </section>
    </Fragment>
  )
}

export default WebDesign