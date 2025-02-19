// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import StudentTestimonials from "../StudentTestimonials"
import SignupForm from "./SignupForm"

const SignUp = () => {
  return (
    <Fragment>
        <main className="mt-[50px] xltablet:mt-[80px] lglaptop:mt-[100px] flex justify-center items-center">
            <div className="
            h-fit w-[90%] desktop:w-[80%]
            border-b-[1px] border-white95 rounded-[12px]
            flex flex-col gap-[50px] xltablet:gap-[20px] xltablet:flex-row-reverse laptop:gap-[40px] lglaptop:gap-[80px]">

                <SignupForm />
                <div className="flex-1 xltablet:mt-[7vh] ">
                  <StudentTestimonials />
                </div>
                
                
            </div>
        </main>
    </Fragment>
  )
}

export default SignUp