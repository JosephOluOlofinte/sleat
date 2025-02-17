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
                      </label>

                      <div className="absolute top-[60%] right-[20px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hidden">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      </div>
                    </div>
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