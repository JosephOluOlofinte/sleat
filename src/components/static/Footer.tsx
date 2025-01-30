// import React from 'react'

import { Fragment } from "react/jsx-runtime";
import Logo from "../../assets/img/Logo.png";
import Facebook from "../../assets/icons/facebook.png";
import X from "../../assets/icons/x.png";
import LinkedIn from "../../assets/icons/linkedin.png";

const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-absoluteWhite w-[100%] flex justify-center mt-[70px]">
        <div className="h-[100%] w-[90%] desktop:w-[80%]">
          <div className="
          h-[100%] w-[100%] rounded-[10px] border-b-[1px]
          pt-[50px] xltablet:pt-[80px] lglaptop:pt-[100px] pb-[30px]  
          grid grid-cols-1 xltablet:grid-cols-3 lglaptop:grid-cols-2 gap-6">

            <div className="grid h-max gap-7 justify-between">
              <div className="w-[44px] xltablet:w-[48px] lglaptop:w-[54px]">
                <img src={Logo} alt="" />
              </div>
              <ul className="grid h-max gap-2">
                <li className="flex gap-2 items-center w-max">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <p>Hello@sleat.com</p>
                </li>

                <li className="flex gap-2 items-center w-max">
                  <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg></div>
                  <p>+91 91813 23 2309</p>
                </li>

                <li className="flex gap-2 items-center w-max">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  <p>Address</p>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 xltablet:col-span-2 lglaptop:col-span-1 tablet:grid-cols-3 gap-[24px]">
              
              <div className="grid gap-[10px] lglaptop:gap-[14px] h-fit">
                <h3 className="text-[18px] lglaptop:text-[20px] font-semibold">Home</h3>
                <ul className="grid gap-[4px]">
                  <li>Benefits</li>
                  <li>Our Courses</li>
                  <li>Our Testimonials</li>
                  <li>FAQs</li>
                </ul>
              </div>

              <div className="grid gap-[10px] lglaptop:gap-[14px] h-fit">
                <h3 className="text-[18px] lglaptop:text-[20px] font-semibold">About Us</h3>
                <ul className="grid gap-[4px]">
                  <li>Company</li>
                  <li>Achivements</li>
                  <li>Our Goals</li>
                </ul>
              </div>

              <div className="grid gap-[10px] lglaptop:gap-[14px] h-fit">
                <h3 className="text-[18px] lglaptop:text-[20px] font-semibold">Social Profiles</h3>
                <div className="grid grid-flow-col">

                  <div className="w-[44px] xltablet:w-[48px] lglaptop:w-[54px]">
                    <img src={Facebook} alt="" />
                  </div>

                  <div className="w-[44px] xltablet:w-[48px] lglaptop:w-[54px]">
                    <img src={LinkedIn} alt="" />
                  </div>

                  <div className="w-[44px] xltablet:w-[48px] lglaptop:w-[54px]">
                    <img src={X} alt="" />
                  </div>

                </div>
              </div>
            </div>
            
          </div>

          <div className="w-[100%] h-[80px] rounded-[10px] flex justify-center items-center">
            <p>© 2025 Sleat. All rights reserved.</p>
          </div>

        </div>

      </footer>
    </Fragment>
  )
}

export default Footer