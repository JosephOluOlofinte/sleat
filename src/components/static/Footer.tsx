// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import Logo from "../../assets/img/Logo.png"

const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-absoluteWhite w-[100%] flex justify-center mt-[70px]">
      <div className="h-[100%] w-[90%] desktop:w-[80%] rounded-[10px] pt-[50px] xltablet:pt-[80px] lglaptop:pt-[100px] pb-[30px] xltablet:p-[30px] lglaptop:p-[50px] grid grid-cols-1 xltablet:grid-cols-2 gap-6">

        <div className="w-[44px] xltablet:w-[48px] lglaptop:w-[54px]">
          <div><img src={Logo} alt="" /></div>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <p>Hello@sleat.com</p>
            </li>

            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              <p>+123 456 7890</p>
            </li>

            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              <p>Address</p>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 xltablet:grid-cols-3 gap-[24px]">
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