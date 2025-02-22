import React, { useState } from 'react';
import Button from './Button';

// DOCUMENTATION
// This is the accordion prop and it can be of two types: 
// with a button and without button
// Using a button is optional, 
// so if a button is needed, simply don't add it
// if a button is needed, in order to link to a page or more info,
// use withBtn as in <Accordion text="" description="" witBtn />
// Then proceed to add btnText and btnUrl
// Those without button are just <Accordion text="" description="" />
// values related to Btn are also optional

// This accordion uses the <Button /> prop which has its own properties
// such as text, url, and others
// btnUrl and btnUrl in <Accordion />
// are mapped to url and text in <Button />


interface AccordionProps {
  title: string;
  description: string;
  withBtn?: boolean; //optional. use withBtn in the Accordion to enable the button
  btnText?: string;
  btnUrl?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, description, withBtn, btnText = "", btnUrl, }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`h-max border border-white90 rounded-[10px] px-[24px] xltablet:px-[40px] lglaptop:px-[50px] w-[100%] transition-all duration-1000 ${
          isOpen ? "py-[40px]" : "py-[24px]"
        }`}>
      <button
        onClick={toggleAccordion}
        className='w-[100%] text-left cursor-pointer outline-0 flex justify-between items-center
      '>
        <h3 className='text-[16px] laptop:text-[18px] desktop:text-[20px] font-medium max-w-[80%] leading-[1.4]'>{title}</h3> 
        { isOpen ? (<div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-10 laptop:size-11 desktop:size-12 p-[9px] bg-orange95 rounded-md">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg></div>) 
        : 
        (<div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10 laptop:size-11 desktop:size-12 p-[9px] bg-orange95 rounded-md">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg></div>)}

      </button>


        <div className={`overflow-hidden transition-all  duration-1000 ${
          isOpen ? "max-h-[450px]" : "max-h-0"
        }`}>

            <p className='border-t border-white90 pt-[20px] laptop:pt-[40px] desktop:pt-[50px] mt-[24px] h-fit '>
              {description}
            </p>

          { withBtn ? 

          <Button variant="greyBtn" size="medium" className='flex justify-between items-center mt-[20px] laptop:mt-[40px] desktop:mt-[50px] ' url={btnUrl}> 

            <p className='font-medium text-grey30 max-w-[80%]'>{btnText}</p>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="stroke-grey30 size-10 laptop:size-12 desktop:size-14 bg-absoluteWhite rounded-full m-0 leading-none">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7" />
            </svg>
          </Button> : null }
        
        </div>

    </div>
  );
};

export default Accordion;
