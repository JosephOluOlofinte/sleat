// import React from 'react'

const Hero = () => {
  return (
    <section className="
      #heroSection
      max-h[100vh] w-[100%]
      ">
        <header className="
        flex flex-col items-center
        h-[130px] w-[100%]
        pt-5
        ">

          <a className="
            #promoBox
          bg-orange50 
            rounded-md
            flex justify-center items-center gap-4 
            text-absoluteWhite 
            h-[40px] w-[90%]
            ">
              <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
          
          <div className="
          #actualHeader
          flex justify-between items-center
          h-[70px] w-[90%]
          ">
            <div></div>
            <div className="
            #buttons
            flex justify-between items-center gap-[15px]
            text-grey15
            h-[45px]
            ">
              <a href="">
                <button className="
                h-[45px]
                ">Sign Up</button>
              </a>
              <a href="">
                <button className="
                bg-orange50
                rounded-[5px]
                text-absoluteWhite
                h-[45px] w-[80px]
                ">Sign In</button>
              </a>
              <a href="" className="text-right">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[34px] w-[34px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
              </a>
            </div>
          </div>

        </header>

        <main></main>

    </section>
  )
}

export default Hero