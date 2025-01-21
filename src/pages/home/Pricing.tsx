// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button, Feature, NoFeature } from "../../components"

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

            <div className="bg-absoluteWhite grid grid-cols-1 xltablet:grid-cols-2 grid-rows-4 xltablet:grid-rows-2 gap-[20px] rounded-[8px] lglaptop:gap-[25px] p-[30px]">

              <div className="bg-white99 border-[1px] border-white95 py-[30px] px-[20px] rounded-[8px]">

                <p className="bg-orange97 border-[1px] border-orange80 text-center p-[6px] rounded-[5px]">Free Plan</p>

                <div className="flex justify-center items-baseline py-[30px]">
                  <h4 className="text-[48px] font-semibold">$0</h4>
                  <p>/month</p>
                </div>

                <div className="bg-absoluteWhite border-white95 border-[1px] rounded-[8px] grid gap-[20px] p-[30px]">

                  <h4 className="text-center text-[18px] font-bold p-[5px] mb-[15px]">Available Features</h4>
                  <div className="grid gap-[20px] px-[30px]">
                    <Feature text="Access to selected free courses."/>
                    <Feature text="Limited course materials and resources."/>
                    <Feature text="Basic community support."/>
                    <Feature text="No certification upon completion."/>
                    <Feature text="Ad-supported platform."/>
                    <NoFeature text="Access to exclusive Pro Plan community forums."/>
                    <NoFeature text="Early access to new courses and updates."/>
                  </div>
                </div>
              </div>

              
            </div>
        </div>
    </section>
</Fragment>
  )
}

export default Pricing