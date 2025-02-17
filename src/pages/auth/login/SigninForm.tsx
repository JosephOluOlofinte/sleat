// import React, { Fragment } from 'react'

import { Fragment } from "react/jsx-runtime"

const SigninForm = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default SigninForm