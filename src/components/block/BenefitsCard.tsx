

// import React from 'react'

interface BenefitsProps {
  id: string;
  title: string;
  desc: string;
  url: string;
  };


const BenefitsCard: React.FC<BenefitsProps> = ({id, title, desc, url ="",}) => {
  return (
                <div className="bg-absoluteWhite p-[30px] xltablet:p-[40px] desktop:p-[50px] grid gap-[30px] xltablet:gap-[40px] desktop:gap-[50px] rounded-[10px]">

                  <h2 className="text-right font-bold text-[30px] xltablet:text-[40px] desktop:text-[50px] "> {id} </h2>

                  <div className="grid gap-[14px] xltablet:gap-[16px] desktop:gap-[20px]">
                    <h3 className="text-[20px] desktop:text-[22px] font-semibold text-[#333333]"> {title} </h3>
                    <p className="text-grey30 xlmobile:text-[15px] desktop:text-[17px] leading-[1.5] "> {desc} </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <a href={url} className="bg-white99 p-[14px] desktop:p-[20px] border-[2px] rounded-[6px] h-fit">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-orange50">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>
                </div>
  )
}

export default BenefitsCard