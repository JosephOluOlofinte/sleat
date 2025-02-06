


// THIS IS THE CORUSE CARD USED ON THE COURSE LIST PAGE


import React, { Fragment } from 'react'
import Button from './Button';


type CurriculumItem = {
  id: number;
  stage: string;
  desc: string;
}

type iCourseDataCard = {
  title: string;
  desc: string;
  courseUrl: string;
  images: string[];
  duration: string;
  durationUrl: string;
  level: string;
  levelUrl: string;
  instructor: string;
  instructorUrl: string;
  curriculum: CurriculumItem[];
}



const CourseDataCard: React.FC<iCourseDataCard> = ({ 
  title, 
  desc, 
  courseUrl,
  images, 
  duration, 
  durationUrl, 
  level, 
  levelUrl, 
  instructor, 
  instructorUrl, 
  curriculum, 
}) => {
  return (

    <Fragment>
      <section className="flex justify-center mt-[50px] xltablet:mt-[80px] lglaptop:mt-[100px]">
        <div className="
        bg-absoluteWhite 
        min-h-[10vh] w-[90%] desktop:w-[80%]
        p-[24px] laptop:p-[40px] desktop:p-[50px] 
        grid gap-[30px] xltablet:gap-[40px] desktop:gap-[35px] rounded-[10px]
        ">

          {/* TITLE AND DESCRIPTION */}
          <div className="grid gap-[10px]">
            <h2 className="font-semibold text-grey15 text-[18px] xltablet:text-[20px] lglaptop:text-[24px]">{title}</h2>
            <div className="grid xltablet:flex xltablet:justify-between xltablet:items-end">
              <p className="xltablet:w-[55ch] laptop:w-[70ch] lglaptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces">{desc}</p>
              <div className="mt-5 xltablet:m-0"><Button text="View Course" variant="courseBtn" size="small" url={courseUrl} /></div>
            </div>
          </div>

          {/* IMAGES, DURATION, LEVEL, AND AUTHOR */}
          <div className='grid gap-[20px]'>

            <div className="grid grid-cols-3 gap-[10px] xltablet:gap-[20px] lglaptop:gap-[30px]">

              {images.map((img, index) => (

                  <div key={index} className="">
                    <img src={img} alt={`${title} image ${index + 1}`}  className="object-contain" loading="lazy"/>
                  </div>
              ))}

              
                
            </div>

            <div className="w-[100%] flex items-start flex-col gap-[16px] tablet:flex-row tablet:items-center xltablet:flex-col xltablet:items-start laptop:flex-row laptop:items-center tablet:justify-between ">
                <div className="w-[100%] tablet:w-auto flex justify-between tablet:justify-normal tablet:gap-[12px] xltablet:w-[100%] xltablet:justify-between laptop:justify-normal laptop:w-auto ">
                    <Button text={duration} variant="courseBtn" size="small" url={durationUrl} />
                    <Button text={level} variant="courseBtn" size="small" url={levelUrl} />
                </div>
                <a href={instructorUrl}>
                <p className="pl-[5px] laptop:pl-[0] font-medium text-[16px] desktop:text-[18px]">By {instructor}</p>
                </a>
            </div>
          </div>

          {/* CURRICULUM */}
          <div className="border border-white95 rounded-[10px]">
            <h3 className="text-[18px] xltablet:text-[20px] lglaptop:text-[22px] 
            border-b border-white95
            py-[14px] xltablet:py-[20px] lglaptop:py-[24px]
            px-[20px] xltablet:px-[24px] lglaptop:px-[30px]
            ">Curiculum</h3>
            <div className="grid grid-flow-row xltablet:grid-flow-col
            gap-[20px] laptop:gap-[40px] lglaptop:gap-[50px]
            py-[20px] xltablet:py-[24px] lglaptop:py-[30px]
            px-[30px] xltablet:px-[40px] lglaptop:px-[50px]
            ">

              {curriculum.map((item, index) => (

                <>
                  <div key={item.id} className="grid gap-[12px] xltablet:gap-[16px] lglaptop:gap-[20px]">
                    <h4 className="text-[30px] xltablet:text-[40px] lglaptop:text-[50px] font-extrabold">{item.stage}</h4>
                    <p>{item.desc} </p> 
                  </div>

                  {/* Render thin line ONLY if it's NOT the last item */}
                  {index < curriculum.length - 1 && (
                    <div className="border-t-[1.5px] xltablet:border-l-[1.5px] border-white90 w-[100%] h-[1px] xltablet:w-0 xltablet:h-[100%]"></div>
                  )}
                </>
                
              ))}

            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default CourseDataCard