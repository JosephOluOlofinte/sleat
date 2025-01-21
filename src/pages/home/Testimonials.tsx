

import { Fragment } from 'react';
import { Button, TestimonialsCard } from '../../components';
import sarahL from '../../assets/img/sarah-L.png'
import jasonM from '../../assets/img/jason-M.png'
import emilyR from '../../assets/img/emily-R.png'
import michealK from '../../assets/img/michael-k.png'


const Testimonials = () => {
    return (
        <Fragment>
            <section className="min-h-[40vh] w-[100%] flex justify-center mt-[100px]">
                <div className="h-[100%] w-[90%] desktop:w-[80%] grid grid-cols-1 gap-[60px]">
                    <div className="grid gap-[10px]">
                        <h2 className="font-semibold text-grey15">Our Testimonials</h2>
                        <div className="grid xltablet:flex xltablet:justify-between xltablet:items-end ">
                        <p className="xltablet:w-[55ch] laptop:w-[70ch] lglaptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                        <div className="mt-5 xltablet:m-0"><Button text="View All" variant="whiteBtn" url="./Hero.tsx" /></div>
                        </div>
                    </div>
    
                    <div className="grid grid-cols-1 xltablet:grid-cols-2 grid-rows-4 xltablet:grid-rows-2 gap-[20px] lglaptop:gap-[25px]">

                        <TestimonialsCard 
                        para='The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!' 
                        name='Sarah L' 
                        img={sarahL} 
                        url='#' />

                        <TestimonialsCard 
                        para="The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!" 
                        name='Jason M' 
                        img={jasonM} 
                        url='#' />

                        <TestimonialsCard 
                        para="The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!" 
                        name='Emily R' 
                        img={emilyR} 
                        url='#' />

                        <TestimonialsCard 
                        para="I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!" 
                        name='Emily R' 
                        img={michealK} 
                        url='#' />


                    </div>
                </div>
            </section>
        </Fragment>
      )
}

export default Testimonials