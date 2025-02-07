import { Fragment } from 'react'
import { Button } from '../../components'

const ContactForm = () => {
  return (
        <Fragment>
            <section className="
          mt-[50px] xltablet:mt-[80px] lglaptop:mt-[100px]
          flex justify-center items-center
          ">
              <div className="
              bg-absoluteWhite
              h-fit w-[90%] desktop:w-[80%]
              border-b-[1px] border-white90 rounded-[12px]
              grid grid-flow-col laptop:grid-flow items-center gap-[16px] laptop:gap-[80px] lglaptop:gap-[100px]">
                
                <div className='p-[30px] xltablet:p-[60px] lglaptop:p-[80px]'>
                  <form action="" className='grid gap-[20px] xltablet:gap-[24px] lglaptop:gap-[30px]'>
                    <div className='grid grid-rows-4 xltablet:grid-rows-2 xltablet:grid-cols-2 gap-[20px] xltablet:gap-[24px] lglaptop:gap-[30px]'>
                      <label htmlFor="first-name"><p>First name</p>
                      <input type="text" name="first-name" id="" placeholder="Enter first name" className='w-full' /></label>

                      <label htmlFor="last-name"><p>Last name</p>
                      <input type="text" name="last-name" id="" placeholder="Enter last name" className='w-full' /></label>

                      <label htmlFor="email"><p>Email </p>
                      <input type="email" name="email" id="" placeholder="Enter your email" className='w-full' /></label>

                      <label htmlFor="phone"><p>First name</p>
                      <input type="text" name="phone" id="" placeholder="Enter your phone number" className='w-full' /></label>
                    </div>

                    <div className='grid gap-[20px] xltablet:gap-[24px] lglaptop:gap-[30px]'>
                      <label htmlFor="email-subject"><p>Subject</p>
                      <input type="text" name="email-subject" id="" placeholder="Enter message subject" className='w-full' /></label>
                      
                      <label htmlFor="email-message"><p>Message</p>
                      <textarea name="email-message" id="" placeholder="Enter your message" rows={4} className='resize-none w-full' /></label>
                    </div>
                    <Button type="submit" text="Send your Message" className='self-center'/>
                  </form>
                </div>

                <div className="border-t-[1.5px] xltablet:border-l-[1.5px] border-white90 w-[100%] h-[1px] xltablet:w-0 xltablet:h-[100%]"></div>

                <div className='p-[30px] xltablet:p-[60px] lglaptop:p-[80px]'></div>
              </div>
          </section>
        </Fragment>
      )
}

export default ContactForm