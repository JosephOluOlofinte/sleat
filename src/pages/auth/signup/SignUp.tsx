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
            flex flex-col gap-[50px] xltablet:flex-row-reverse xltablet:items-center laptop:gap-[60px] lglaptop:gap-[80px]">

                <SignupForm />
                <StudentTestimonials />
                
            </div>
        </main>
    </Fragment>
  )
}

export default SignUp