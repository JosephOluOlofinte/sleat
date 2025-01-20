
import React from 'react'
import Button from './Button';

interface CourseCardProps {
    image: string;
    imageLink?: string;
    imageAlt: string;
    duration: string;
    durationLink?: string;
    level: string;
    levelLink?: string;
    author: string;
    authorLink?: string;
    title: string;
    desc: string;
    courselink: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
    image,
    imageLink,
    imageAlt,
    duration,
    durationLink,
    level,
    levelLink,
    author,
    authorLink,
    title,
    desc,
    courselink,
}) => {
  return (
                <div className="bg-absoluteWhite p-[24px] laptop:p-[30px] desktop:p-[40px] grid gap-[30px] xltablet:gap-[40px] desktop:gap-[35px] rounded-[10px]">

                    <div className='grid gap-[20px]'>
                        <a href={imageLink}><img src={image} alt={imageAlt} /></a>

                        <div className="w-[100%] flex items-start flex-col gap-[16px] tablet:flex-row tablet:items-center xltablet:flex-col xltablet:items-start laptop:flex-row laptop:items-center tablet:justify-between ">
                            <div className="w-[100%] tablet:w-auto flex justify-between tablet:justify-normal tablet:gap-[12px] xltablet:w-[100%] xltablet:justify-between laptop:justify-normal laptop:w-auto ">
                                <Button text={duration} variant="courseBtn" url={durationLink} />
                                <Button text={level} variant="courseBtn" url={levelLink} />
                            </div>
                            <a href={authorLink}>
                            <h4 className="pl-[5px] laptop:pl-[0] font-medium text-[16px] desktop:text-[18px]">By {author}</h4>
                            </a>
                        </div>
                    </div>

                    <div className="grid gap-[14px] xltablet:gap-[16px] desktop:gap-[20px]">
                      <h3 className="text-[20px] desktop:text-[22px] font-semibold text-[#333333]"> {title} </h3>
                      <p className="text-grey30 xlmobile:text-[15px] desktop:text-[17px] leading-[1.5] "> {desc} </p>
                    </div>

                    <div className="flex justify-end">
                      <a href={courselink} className="bg-white97 p-[14px] desktop:p-[20px] border-[2px] border-white95 rounded-[6px] w-[100%] text-center "> Get It Now </a>
                    </div>
                    
                  </div>
  )
}

export default CourseCard