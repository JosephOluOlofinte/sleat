import React from 'react'
import Button from './Button';

interface TestimonialProps {

  para: string;
  img: string;
  name: string;
  url: string;
}

const TestimonialsCard: React.FC<TestimonialProps> = ({
  para,
  img,
  name,
  url,
}) => {
  return (
    <div className='grid grid-cols-1 bg-absoluteWhite rounded-[10px] border-t-2 border-white95 overflow-hidden'>
        <p className='text-grey35 p-[30px] lglaptop:p-[40px] desktop:p-[50px] '>
            {para}
        </p>
        <div className='bg-white99 border-t-2 border-white95 flex justify-between items-center  px-[30px] xltablet:px-[40px] lglaptop:px-[50px] desktop:px-[60px] py-[20px]'>
            <div className='flex items-center gap-[10px]'>
                <div className='w-[50px] h-[50px] rounded-[7px] overflow-hidden '><img src={img} alt={name} className='w-[100%] bg-grey60' /></div>
                <p>{name}</p>
            </div>
            <Button text="Read Full Story" variant='greyBtn' size='medium' url={url} />
        </div>
    </div>
  )
}

export default TestimonialsCard