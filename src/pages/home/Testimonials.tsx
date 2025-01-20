

import { Fragment } from 'react'
import { Button } from '../../components'


const Testimonials = () => {
    return (
        <Fragment>
            <section className="min-h-[40vh] w-[100%] flex justify-center mt-[100px]">
                <div className="h-[100%] w-[90%] desktop:w-[80%] grid grid-cols-1 gap-[60px]">
                    <div className="grid gap-[10px]">
                        <h2 className="font-semibold text-[28px] xltablet:text-[38px] desktop:text-[48px] text-grey15">Our Testimonials</h2>
                        <div className="grid xltablet:flex xltablet:justify-between xltablet:items-end ">
                        <p className="xltablet:w-[55ch] laptop:w-[70ch] lglaptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                        <div className="mt-5 xltablet:m-0"><Button text="View All" variant="whiteBtn" url="./Hero.tsx" /></div>
                        </div>
                    </div>
    
                    <div className="grid grid-cols-1 xltablet:grid-cols-2 grid-rows-4 xltablet:grid-rows-2 gap-[20px] lglaptop:gap-[25px]">
                        <div className='grid grid-cols-1 bg-absoluteWhite rounded-[10px]'>
                            <p className='text-grey35 p-[40px] '>
                                The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
                            </p>
                            <div className='bg-white99 flex justify-between items-center  px-[40px] py-[25px]'>
                                <div className='flex items-center gap-[10px]'>
                                    <div className='w-[0px] h-[50px] rounded-[7px] overflow-hidden '><img src="" alt="Sarah L" className='w-[100%] bg-grey60' /></div>
                                    <p>Sarah L</p>
                                </div>
                                <Button text="Read Full Story" variant='greyBtn' size='small'/>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 bg-absoluteWhite px-[40px]'>
                            <p className='text-grey35 py-[40px]'>
                                The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
                            </p>
                            <div className='bg-white95 border-[2px] border-white90 flex justify-between items-center py-[25px]'>
                                <div className='flex items-center gap-[10px]'>
                                    <div className='w-[0px] h-[50px] rounded-[7px] overflow-hidden '><img src="" alt="Sarah L" className='w-[100%] bg-grey60' /></div>
                                    <p>Sarah L</p>
                                </div>
                                <Button text="Read Full Story" variant='greyBtn' size='small'/>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 bg-absoluteWhite px-[40px]'>
                            <p className='text-grey35 py-[40px]'>
                                The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
                            </p>
                            <div className='bg-white95 border-[2px] border-white90 flex justify-between items-center py-[25px]'>
                                <div className='flex items-center gap-[10px]'>
                                    <div className='w-[0px] h-[50px] rounded-[7px] overflow-hidden '><img src="" alt="Sarah L" className='w-[100%] bg-grey60' /></div>
                                    <p>Sarah L</p>
                                </div>
                                <Button text="Read Full Story" variant='greyBtn' size='small'/>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 bg-absoluteWhite px-[40px]'>
                            <p className='text-grey35 py-[40px]'>
                                The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
                            </p>
                            <div className='bg-white95 border-[2px] border-white90 flex justify-between items-center py-[25px]'>
                                <div className='flex items-center gap-[10px]'>
                                    <div className='w-[0px] h-[50px] rounded-[7px] overflow-hidden '><img src="" alt="Sarah L" className='w-[100%] bg-grey60' /></div>
                                    <p>Sarah L</p>
                                </div>
                                <Button text="Read Full Story" variant='greyBtn' size='small'/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
      )
}

export default Testimonials