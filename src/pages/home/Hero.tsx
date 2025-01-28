// import React from 'react'

import zapier from '../../assets/img/zapier.png'
import spotify from '../../assets/img/spotify.png'
import zoom from '../../assets/img/zoom.png'
import amazon from '../../assets/img/amazon.png'
import adobe from '../../assets/img/adobe.png'
import notion from '../../assets/img/notion.png'
import netflix from '../../assets/img/netflix.png'
import fiverr from '../../assets/img/fiverr.png'
import trello from '../../assets/img/trello.png'
import andela from '../../assets/img/andela.png'
import Button from '../../components/block/Button'


const Hero = () => {
  return (
    <main className="
    #heroSection
    grid justify-center h-[calc(100vh-130px)] max-h-[720px] xltablet:max-h-[900px] w-[100%]
    ">
      <div className="
        // Hero section
        flex justify-center items-end pb-[50px]
        ">
          <div className="
          #hero-container
          bg-absoluteWhite
          rounded-lg
          flex flex-col items-center gap-[60px]
          text-center
          w-[90%] desktop:w-[80%] h-max
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
                  <span className='text-orange50 mobile:text-[18px]
                xlmobile:text-[22px]
                tablet:text-[28px]
                xltablet:text-[32px]
                laptop:text-[36px]
                desktop:text-[40px]'>Unlock</span> Your Creative Potential
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
              flex flex-col tablet:flex-row tablet:gap-[20px] justify-center items-center gap-[30px] flex-wrap
              '>
                <a href="">
                  <Button text="Explore Courses" size="large" />       
                </a>
                <a href="">
                  <Button text="View Pricing" variant="secondary"  size="large" />
                </a>
              </div>
            </div>
          </div>  
      </div>

      <div className="#scrolling-bar flex justify-center items-center overflow-hidden">

        <div className="slider-box whitespace-nowrap bg-absoluteWhite overflow-hidden relative w-[90%] desktop:w-[80%] rounded-[10px]">
          <span className='bg-gradient-to-r from-absoluteWhite block absolute top-0 left-0 h-[100%] w-[100px] tablet:w-[150px] laptop:w-[200px] z-10'></span>
          
          <div id='slider' className='inline-block whitespace-nowrap animate-hero-slide py-[30px] px-[50px]'>
            <div className='inline'>
            <img src={zapier} alt="" className='inline-block h-[30px] xltablet:h-[35px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={spotify} alt="" className='inline-block h-[25px] xltablet:h-[30px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={zoom} alt="" className='inline-block h-[20px] xltablet:h-[25px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={amazon} alt="" className='inline-block h-[22px] xltablet:h-[27px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={adobe} alt="" className='inline-block h-[23px] xltablet:h-[28px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={notion} alt="" className='inline-block h-[25px] xltablet:h-[30px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={netflix} alt="" className='inline-block h-[20px] xltablet:h-[25px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={fiverr} alt="" className='inline-block h-[20px] xltablet:h-[25px] pr-[75px] tablet:pr-[95px] opacity-70'/>
            <img src={trello} alt="" className='inline-block h-[25px] xltablet:h-[30px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={andela} alt="" className='inline-block h-[25px] xltablet:h-[30px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            </div>
            <div className='inline'>
            <img src={zapier} alt="" className='inline-block h-[35px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={spotify} alt="" className='inline-block h-[30px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={zoom} alt="" className='inline-block h-[25px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={amazon} alt="" className='inline-block h-[27px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={adobe} alt="" className='inline-block h-[28px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={notion} alt="" className='inline-block h-[30px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={netflix} alt="" className='inline-block h-[25px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={fiverr} alt="" className='inline-block h-[25px] pr-[75px] tablet:pr-[95px] opacity-70'/>
            <img src={trello} alt="" className='inline-block h-[30px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            <img src={andela} alt="" className='inline-block h-[30px] pr-[75px] tablet:pr-[95px] opacity-75'/>
            </div>
          </div>

          <span className='bg-gradient-to-l from-absoluteWhite  block absolute top-0 right-0 h-[100%] w-[100px] tablet:w-[150px] laptop:w-[200px]'></span>
        </div>
      </div>

    </main>
  )
}

export default Hero