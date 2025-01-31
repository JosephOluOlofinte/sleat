// import React from 'react'

import { Fragment } from "react/jsx-runtime"

const OurGoals = () => {
  return (
    <Fragment>
      <section className="
      my-[50px] xltablet:my-[80px] lglaptop:my-[100px]
      flex justify-center items-center">

        <div className="
        h-[100%] w-[90%] desktop:w-[80%]
        grid grid-cols-1 gap-[50px] laptop:gap-[60px]">

          <div className="grid gap-[10px]">
            <h2 className="text-grey15">Our Goals</h2>
              <p className="xltablet:w-[55ch] laptop:w-[70ch] lglaptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
              <div className="mt-5 xltablet:m-0"></div>
          </div>

          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-[20px] lglaptop:gap-[30px]">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>

        </div>

      </section>
    </Fragment>
  )
}

export default OurGoals