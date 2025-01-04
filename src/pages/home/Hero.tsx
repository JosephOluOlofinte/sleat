// import React from 'react'

const Hero = () => {
  return (
    <main className="
    #heroSection
    max-h[100vh] w-[100%]
    ">
      <div className="
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
      </div>

    </main>
  )
}

export default Hero