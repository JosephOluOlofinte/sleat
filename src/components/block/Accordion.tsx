import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  description: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
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
        <div className='border-t-[1px] border-white95 mt-[24px]'>
          {description}
        </div> : null
      }
    </div>
  );
};

export default Accordion;
