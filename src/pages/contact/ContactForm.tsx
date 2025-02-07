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
              grid grid-flow-row laptop:grid-flow-col  items-center gap-[16px] laptop:gap-[60px] lglaptop:gap-[80px]">
                
                <div className='p-[30px] xltablet:p-[60px] lglaptop:p-[80px]'>
                  <form action="" className='grid gap-[20px] xltablet:gap-[24px] lglaptop:gap-[30px]'>

                    <div className='grid grid-rows-4 tablet:grid-rows-2 tablet:grid-cols-2 gap-[20px] xltablet:gap-[25px] lglaptop:gap-[30px]'>
                      <label htmlFor="first-name" className="grid gap-[12px] lglaptop:gap-[16px]"><p>First name</p>
                      <input type="text" name="first-name" id="" placeholder="Enter first name" className='w-full p-[20px] lglaptop:p-[24px] bg-white99 outline outline-1 outline-white90 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' /></label>

                      <label htmlFor="last-name" className="grid gap-[12px] lglaptop:gap-[16px]"><p>Last name</p>
                      <input type="text" name="last-name" id="" placeholder="Enter last name" className='w-full p-[20px] lglaptop:p-[24px] bg-white99 outline outline-1 outline-white90 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' /></label>

                      <label htmlFor="email" className="grid gap-[12px] lglaptop:gap-[16px]"><p>Email </p>
                      <input type="email" name="email" id="" placeholder="Enter your email" className='w-full p-[20px] lglaptop:p-[24px] bg-white99 outline outline-1 outline-white90 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' /></label>

                      <label htmlFor="phone" className="grid gap-[12px] lglaptop:gap-[16px]"><p>Phone Number</p>
                      <input type="text" name="phone" id="" placeholder="Enter your phone number" className='w-full p-[20px] lglaptop:p-[24px] bg-white99 outline outline-1 outline-white90 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' /></label>
                    </div>

                    <div className='grid gap-[20px] xltablet:gap-[24px] lglaptop:gap-[30px]'>
                      <label htmlFor="email-subject" className="grid gap-[12px] lglaptop:gap-[16px]"><p>Subject</p>
                      <input type="text" name="email-subject" id="" placeholder="Enter message subject" className='w-full p-[20px] lglaptop:p-[24px] bg-white99 outline outline-1 outline-white90 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' /></label>
                      
                      <label htmlFor="email-message" className="grid gap-[12px] lglaptop:gap-[16px]"><p>Message</p>
                      <textarea name="email-message" id="" placeholder="Enter your message" rows={5} className='resize-none w-full p-[20px] lglaptop:p-[24px] bg-white99 outline outline-1 outline-white90 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' /></label>
                    </div>
                    <Button type="submit" text="Send your Message" className='self-center'/>
                  </form>
                </div>

                {/* <div className="border-t-[1.5px] xltablet:border-l-[1.5px] border-white90 w-[100%] h-[1px] xltablet:w-0 xltablet:h-[100%]"></div> */}

                <div className="bg-white90 h-[1px] laptop:h-[100%] laptop:w-[1px]"></div>

                <div className='p-[30px] xltablet:p-[60px] lglaptop:p-[80px]'>
                  kjsdvkjsfkj
                  ksfjkfkj <br />khsfhjfskh <br />mhydaihck
                </div>
              </div>
          </section>
        </Fragment>
      )
}

export default ContactForm