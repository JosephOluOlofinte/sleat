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

            <div className="xltablet:bg-absoluteWhite grid grid-cols-1 laptop:grid-cols-2 gap-[30px] rounded-[8px] xltablet:p-[30px] lglaptop:p-[50px]">

              <div className="bg-white99 border-[1px] border-white95 pt-[30px] px-[15px] pb-[20px] rounded-[8px] grid gap-[30px]">

                <p className="bg-orange97 border-[1px] border-orange80 text-center font-semibold p-[10px] rounded-[5px] h-fit">Free Plan</p>

                <div className="flex justify-center items-baseline h-fit">
                  <h4 className="text-[38px] xltablet:text-[55px] font-semibold">$0</h4>
                  <p>/month</p>
                </div>

                <div className="bg-absoluteWhite border-white95 border-[1px] rounded-[8px] grid gap-[20px] h-fit">

                  <div className="py-[24px] grid gap-[24px] h-fit">
                    <h4 className="text-center text-[18px] font-medium p-[5px]">Available Features</h4>

                    <div className="grid gap-[20px] px-[20px]">
                      <Feature text="Access to selected free courses."/>
                      <Feature text="Limited course materials and resources."/>
                      <Feature text="Basic community support."/>
                      <Feature text="No certification upon completion."/>
                      <Feature text="Ad-supported platform."/>
                      <NoFeature text="Access to exclusive Pro Plan community forums."/>
                      <NoFeature text="Early access to new courses and updates."/>
                    </div>
                  </div>

                  <Button text="Get Started" size="large" className="w-[100%] rounded-t-none" />
                </div>
              </div>


              <div className="bg-white99 border-[1px] border-white95 pt-[30px] px-[15px] pb-[20px] rounded-[8px] grid gap-[30px]">

                <p className="bg-orange97 border-[1px] border-orange80 text-center font-semibold p-[10px] rounded-[5px] h-fit">Pro Plan</p>

                <div className="flex justify-center items-baseline h-fit">
                  <h4 className="text-[38px] xltablet:text-[55px] font-semibold">$79</h4>
                  <p>/month</p>
                </div>

                <div className="bg-absoluteWhite border-white95 border-[1px] rounded-[8px] grid gap-[20px] h-fit">

                  <div className="py-[20px] grid gap-[24px] h-fit">
                    <h4 className="text-center text-[18px] font-medium p-[5px]">Available Features</h4>

                    <div className="grid gap-[20px] px-[30px]">
                      <Feature text="Unlimited access to all courses."/>
                      <Feature text="Unlimited course materials and resources."/>
                      <Feature text="Priority support from instructors."/>
                      <Feature text="Course completion certificates."/>
                      <Feature text="Ad-free experience."/>
                      <Feature text="Access to exclusive Pro Plan community forums."/>
                      <Feature text="Access to exclusive Pro Plan community forums."/>
                    </div>
                  </div>

                  <Button text="Get Started" size="large" className="w-[100%] rounded-t-none" />
                </div>
              </div>

              
            </div>
        </div>
    </section>
</Fragment>
  )
}

export default Pricing