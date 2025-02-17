// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { TestimonialsCard } from "../../components"
import sarahL from '../../assets/img/sarah-L.png'

const Login = () => {
  return (
          <Fragment>
            <section className="
            mt-[50px] xltablet:mt-[80px] lglaptop:mt-[100px]
            flex justify-center items-center
            ">
                <div className="
                h-fit w-[90%] desktop:w-[80%]
                border-b-[1px] border-white95 rounded-[12px]
                grid grid-flow-row laptop:grid-flow-col laptop:grid-cols-[1fr_1fr] gap-[16px] laptop:gap-[60px] lglaptop:gap-[80px]">

                  <div className="grid gap-[40px]">
                    <div className="grid gap-[15px]">
                      <h2>Students Testimonials</h2>
                      <p className="font-normal text-grey30">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                    </div>
                    <div className="grid gap-[20px]">
                    <TestimonialsCard 
                      para='The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!' 
                      name='Sarah L' 
                      img={sarahL} 
                      url='#' />
                      <div className="flex justify-end">
                        <div className="flex gap-[10px] laptop:gap-[15px]">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="bg-absoluteWhite size-[50px] rounded-[8px] p-[12px] lglaptop:p-[14px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="bg-absoluteWhite size-[50px] rounded-[8px] p-[12px] lglaptop:p-[14px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-[30px] laptop:gap-[40px] bg-absoluteWhite rounded-[10px] p-[30px] laptop:p-[40px]">
                    <div className="text-center grid gap-[10px]">
                      <h1>Sign In</h1>
                      <p className="text-grey30">Welcome back! Please log in to access your account.</p>
                    </div>

                    <div>
                      <form action="">
                      <div className='grid gap-[25px] xltablet:gap-[30px] lglaptop:gap-[40px]'>
                        <label htmlFor="first-name" className="grid gap-[12px] lglaptop:gap-[16px]"><p className='pl-[10px]'>First name</p>
                        <input type="text" name="first-name" id="" placeholder="Enter first name" className='w-full p-[16px] lglaptop:p-[20px] bg-white99 outline outline-1 outline-white90 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' /></label>

                        <label htmlFor="last-name" className="grid gap-[12px] lglaptop:gap-[16px]"><p className='pl-[10px]'>Last name</p>
                        <input type="text" name="last-name" id="" placeholder="Enter last name" className='w-full p-[16px] lglaptop:p-[20px] bg-white99 outline outline-1 outline-white90 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' /></label>
                      </div>
                      </form>
                      <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center">
                        <div className="h-[1px] bg-white90"></div>
                        <p>OR</p>
                        <div className="h-[1px] bg-white90"></div>
                      </div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </section>
            </Fragment>
  )
}

export default Login