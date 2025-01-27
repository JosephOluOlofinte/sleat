// import React from 'react'

import { Fragment } from "react/jsx-runtime"
import { Button } from "../../components"
import Accordion from "../../components/block/Accordion"



const FAQs = () => {
  return (
    <Fragment>
        <section className="min-h-[40vh] w-[100%] flex justify-center mt-[70px]">
            <div className="
          bg-absoluteWhite  rounded-xl
            h-[100%] w-[90%] desktop:w-[80%]
            p-[24px] xltablet:p-[50px] laptop:p-[70px] lglaptop:p-[90px] desktop:p-[110px] 
            grid grid-cols-1 laptop:grid-cols-5 
            gap-[40px] laptop:gap-[70px] lglaptop:gap-[100px]
            ">
              <div className="laptop:col-span-2 grid gap-[30px] h-max">
                <div className="grid gap-[15px]">
                  <h2 className="font-semibold text-grey15 laptop:w-[15ch]">Frequently Asked Questions</h2>
                  <p className="laptop:w-[90%] text-grey35  pr-[5px] whitespace-break-spaces">
                    Still you have any questions? Contact our Team via support@skillbridge.com
                  </p>
                </div>

                  <Button text="See All FAQs" variant="whiteBtn" size="large" className="border-[1px]" />
              </div>

              <div className="rounded-2xl grid gap-[20px] h-max laptop:col-span-3">

                <Accordion
                 title="Can I enroll in multiple courses at once?"
                 description="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience." 
                 withBtn 
                 btnText="Enrollment Process for Different Courses"
                 btnUrl="#" 
                />

                <Accordion
                 title="What kind of support can I expect from instructors?"
                 description="You can expect the best support from our platform. We have livechat, email, phone, and chatbot availalble" 
                 withBtn 
                 btnText="Learn more about contacting suporrt"
                 btnUrl="#" 
                />

                <Accordion
                 title="Are the courses self-paced or do they have specific start and end dates?"
                 description="Our courses are absolutely self-paced. Every course material is available from your dashboard, and you can access them at your convenience." 
                 withBtn 
                 btnText="Learn more about the provided course materials!"
                 btnUrl="#" 
                />

                <Accordion
                 title="Are there any prerequisites for the courses?"
                 description="That depends. If you have absolutely no experience, then our Beginner courses are the best for you. Intermediate and Advanced course may require that you have some knowledge in the area you desire to pursue. However, access to a computer and the internet is essential to be able to access your courses and practice." 
                />

                <Accordion
                 title="Can I download the course materials for offline access?"
                 description="Unfortunately, you will not be able to. These courses are proprietary materials and as such, we cannot run the risk of them being pirated. We appreciate your understanding." 
                />

              </div>


            </div>
        </section>
    </Fragment>
  )
}

export default FAQs