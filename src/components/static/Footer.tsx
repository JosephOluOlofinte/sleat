// import React from 'react'

import { Fragment } from "react/jsx-runtime"
// import { Button } from "../block"


const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-absoluteWhite w-[100%] flex justify-center mt-[70px]">
      <div className="h-[100%] w-[90%] desktop:w-[80%] rounded-[10px] pt-[50px] xltablet:pt-[80px] lglaptop:pt-[100px] pb-[30px] xltablet:p-[30px] lglaptop:p-[50px] grid grid-cols-1 xltablet:grid-cols-2">

        <div className="">
          <div><img src="" alt="" /></div>
          <ul>
            <li>Hello@sleat.com</li>
            <li>+123 456 7890</li>
            <li>Address</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 xltablet:grid-cols-3">dnn
          <div className="">
            <h3>Home</h3>
            <ul>
              <li>Benefits</li>
              <li>Our Courses</li>
              <li>Our Testimonials</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="">
            <h3>About Us</h3>
            <ul>
              <li>Company</li>
              <li>Achivements</li>
              <li>Our Goals</li>
            </ul>
          </div>
          <div className="">
            <h3>Social Profiles</h3>
          </div>
        </div>
      </div>
      </footer>
    </Fragment>
  )
}

export default Footer