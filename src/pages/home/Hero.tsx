// import React from 'react'

import Logo from '../../assets/img/Logo.png'

const Hero = () => {
  return (
    <section className="
      #heroSection
      max-h[100vh] w-[100%]
      ">
        <header className="
        bg-absoluteWhite
        flex flex-col items-center
        h-[130px] w-[100%]
        pt-[10px]
        ">

          <a className="
            #promoBox
          bg-orange50 
            flex justify-center items-center gap-4 
            text-absoluteWhite 
            h-[40px] w-[100%]
            ">
              <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
          
          <div className="
          #actualHeader
          flex justify-between items-center
          h-[80px] w-[90%]
          desktop:w-[80%]
          ">
            <div className="
            #logo+nav
            flex items-center gap-[25px]
            laptop:gap-[35px]
            desktop:gap-[45px]
            ">
              <div>
                <img src={Logo} alt="" className="
                h-[45px]
                laptop:h-[55px]
                "/>
              </div>
              <nav>
                <ul className="
                #navbar
                hidden
                xltablet:flex 
                desktop:gap-3
                ">
                  <li><a href="" className="
                  py-[12px] px-[20px]
                  animate-bounce
                  hover:bg-orange95
                  ease-in-out duration-500 rounded-[5px]
                  ">Home</a></li>
                  <li><a href="" className="
                  py-[12px] px-[20px]
                  animate-bounce
                  hover:bg-orange95
                  ease-in-out duration-500 rounded-[5px]
                  ">Courses</a></li>
                  <li><a href="" className="
                  py-[12px] px-[20px]
                  animate-bounce
                  hover:bg-orange95
                  ease-in-out duration-500 rounded-[5px]
                  ">About Us</a></li>
                  <li><a href="" className="
                  py-[12px] px-[20px]
                  animate-bounce
                  hover:bg-orange95
                  ease-in-out duration-500 rounded-[5px]
                  ">Pricing</a></li>
                  <li><a href="" className="
                  py-[12px] px-[20px]
                  animate-bounce
                  hover:bg-orange95
                  ease-in-out duration-500 rounded-[5px]
                  ">Contact</a></li>
                </ul>
              </nav>
            </div>

            <div className="
            #buttons
            flex justify-between items-center gap-[15px]
            text-grey15
            h-[45px]
            xltablet:gap-[20px]
            desktop:gap-[25px]
            ">
              <a href="">
                <button className="
                h-[45px]
                laptop:h-[55px]
                ">Sign Up</button>
              </a>
              <a href="">
                <button className="
                bg-orange50
                rounded-[5px]
                text-absoluteWhite
                h-[45px] w-[85px]
                laptop:h-[50px] laptop:w-[100px]
                ">Sign In</button>
              </a>
              <a href="" className="xltablet:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[34px] w-[34px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
              </a>
            </div>
          </div>

        </header>

        <main className="
        // Hero section
        flex justify-center
        h-[calc(100vh-130px)]
        pt-[80px]
        ">
          <div className="
          #hero-container
          bg-absoluteWhite
          rounded-lg
          flex flex-col items-center gap-[60px]
          text-center
          w-[90%] h-max
          py-[5px]
          ">

            <div className='
            flex flex-col gap-[18px]
            items-center
            '>
              <div className="
              #unlock-potential
              bg-white99
              border border-white95 rounded-lg
              flex justify-center items-center 
              gap-[15px]
              xltablet:gap-[20px]
              desktop:gap-[25px]
              py-[14px]
              pl-[7px] pr-[20px]
              xltablet:px-[20px]
              desktop:px-[25px]
              ">
                <div className='
                bg-orange95
                flex justify-center items-center
                h-[45px] w-[45px]
                xltablet:h-[55px] xltablet:w-[55px]
                desktop:h-[65px] desktop:w-[65px] 
                '>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 xltablet:size-7 desktop:size-[35px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                </div>
                <h1 className='
                text-grey10 text-[16px] 
                mobile:text-[18px]
                xlmobile:text-[22px]
                tablet:text-[28px]
                xltablet:text-[32px]
                laptop:text-[36px]
                desktop:text-[40px]
                font-semibold 
                '>
                  <span className='text-orange50'>Unlock</span> Your Creative Potential
                </h1>
              </div>
              <div className='
              flex flex-col gap-[8px]
              items-center
              '>
                <p className='
                text-grey15 text-[18px] 
                mobile:text-[20px]
                xlmobile:text-[22px]
                tablet:text-[24px]
                xltablet:text-[26px]
                laptop:text-[30px]
                desktop:text-[34px]
                font-bold
                max-w-[30ch]
                '>with online design and development courses.</p>
                <small className='
                  text-grey35 text-[12px] 
                  xlmobile:text-[16px]
                  tablet:text-[18px]
                  xltablet:w-auto
                  '>...learn from industry experts and enhance your skills.
                </small>
              </div>
            </div>

            <div>
              <div className='
              #hero-buttons
              flex items-center gap-[10px]
              '>
                <a href="">
                  <button className="
                bg-orange50
                  rounded-[5px]
                  text-[14px]
                text-absoluteWhite
                  font-semibold
                  py-[14px] px-[20px]
                  ">Explore Courses</button>        
                </a>
                <a href="">
                  <button className="
                  rounded-[5px]
                  text-[15px]
                  font-semibold
                  py-[14px] px-[20px]
                  hover:border-[1px] hover:border-orange50
                  ease-in-out duration-500
                  ">View Pricing</button>
                </a>
              </div>
            </div>
          </div>  
        </main>

    </section>
  )
}

export default Hero