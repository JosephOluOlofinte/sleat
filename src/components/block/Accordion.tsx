import React, { useState } from 'react';
import Button from './Button';

interface AccordionProps {
  title: string;
  description: string;
  btnText: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, description, btnText = "", }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='h-max border-[1px] border-white95 rounded-[10px] px-[24px] xltablet:px-[40px] lglaptop:px-[50px] min-w-[100%]' style={{ paddingBlock: isOpen ? '40px' : '24px',
    }}>
      <button
        onClick={toggleAccordion}
        style={{
          width: '100%',
          textAlign: 'left',
          cursor: 'pointer',
          outline: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h3 className='text-[16px] laptop:text-[18px] desktop:text-[20px] font-medium'>{title}</h3> 
        { isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 p-[9px] bg-orange95 rounded-md">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-10 p-[9px] bg-orange95 rounded-md">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>)}

      </button>
      {isOpen ?
      <>
        <div className='border-t-[1px] border-white95 py-[20px] laptop:py-[40px] desktop:py-[50px] mt-[24px]'>
          {description}

        </div>

        <Button variant="greyBtn" size="medium" className='flex justify-between items-center'> 
          <p className='font-medium'>{btnText}</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 laptop:size-12 desktop:size-14 bg-absoluteWhite">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
        </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 laptop:size-12 desktop:size-14 bg-absoluteWhite m-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </Button>
        </>
        : null
      }
    </div>
  );
};

export default Accordion;
