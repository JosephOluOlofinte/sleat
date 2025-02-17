// import React, { Fragment } from 'react'

import { Fragment } from "react/jsx-runtime"

const SigninForm = () => {
  return (
    <Fragment>
        <div className="grid gap-[30px] laptop:gap-[40px] bg-absoluteWhite rounded-[10px] p-[30px] laptop:p-[40px] flex-1 max-h-fit">
            <div className="text-center grid gap-[10px]">
                <h1>Sign In</h1>
                <p className="text-grey30">Welcome back! Please log in to access your account.</p>
            </div>

            <div>
                <form action="">
                  <div className='grid gap-[25px] xltablet:gap-[30px] lglaptop:gap-[40px]'>

                    <label htmlFor="email" className="grid gap-[12px] lglaptop:gap-[16px]"><p className='pl-[10px]'>Email</p>
                      <input type="text" name="email" id="" placeholder="Enter your email" className='w-full p-[16px] lglaptop:p-[20px] bg-white99 outline outline-1 outline-white90 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' />
                    </label>

                    <div className="relative">
                      <label htmlFor="password" className="grid gap-[12px] lglaptop:gap-[16px]"><p className='pl-[10px]'>Password</p>
                        <input type="password" name="password" id="" placeholder="Enter your password" className='w-full p-[16px] lglaptop:p-[20px] bg-white99 outline outline-1 outline-white90 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' />
                        <div className="flex justify-end">
                          <a href="" className="text-grey30 hover:text-orange50 transition-colors duration-500">Forgot  password?</a>
                        </div>
                      </label>

                      <div className="absolute top-[43%] right-[5%]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 laptop:size-6 text-grey30 hover:text-orange50 transition-colors duration-500">
                          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                        </svg>


                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 laptop:size-6 text-grey30 hover:text-orange50 transition-colors duration-500 hidden">
                            <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                            <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                            <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                          </svg>
                      </div>
                    </div>

                    <label htmlFor="rememberMe" className="flex flex-row-reverse justify-end gap-2 items-center hover:cursor-pointer">
                      <input type="checkbox" name="rememberMe" id="rememberMe" className="hidden peer" />
                      <p className="text-grey40">Remember Me</p>
                      <div className="text-white95 border border-white90 peer-checked:text-grey30  transition-colors duration-500 size-6 lglaptop:size-8 rounded bg-white95 flex items-center justify-center font-bold"> ✓ </div>
                    </label>                    
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
    </Fragment>
  )
}

export default SigninForm