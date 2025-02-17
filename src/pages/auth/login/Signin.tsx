// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import StudentTestimonials from "./StudentTestimonials"
import SigninForm from "./SigninForm"

const Signin = () => {
  return (
    <Fragment>
        <main className="mt-[50px] xltablet:mt-[80px] lglaptop:mt-[100px] flex justify-center items-center">
            <div className="
            h-fit w-[90%] desktop:w-[80%]
            border-b-[1px] border-white95 rounded-[12px]
            grid grid-flow-row laptop:grid-flow-col laptop:grid-cols-[1fr_1fr] gap-[16px] laptop:gap-[60px] lglaptop:gap-[80px]">

                <SigninForm />
                <StudentTestimonials />
                
            </div>
        </main>
    </Fragment>
  )
}

export default Signin