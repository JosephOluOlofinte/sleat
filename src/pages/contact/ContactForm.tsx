import { Fragment } from 'react'
import { Button } from '../../components'
import email from "../../assets/icons/email.png"
import phone from "../../assets/icons/phone.png"
import location from "../../assets/icons/location.png"
import Facebook from "../../assets/icons/facebook.png";
import X from "../../assets/icons/x.png";
import LinkedIn from "../../assets/icons/linkedin.png";

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
              border-b-[1px] border-white95 rounded-[12px]
              grid grid-flow-row laptop:grid-flow-col laptop:grid-cols-[2fr_1px_1fr] gap-[16px] laptop:gap-[60px] lglaptop:gap-[80px]">
                
                <div className='
                py-[30px] xltablet:py-[60px] lglaptop:py-[80px]
                px-[30px] xltablet:pl-[60px] lglaptop:pl-[80px]
                laptop:pr-0
                '>
                  <form action="" className='grid gap-[20px] xltablet:gap-[24px] lglaptop:gap-[30px]'>

                    <div className='grid grid-rows-4 tablet:grid-rows-2 tablet:grid-cols-2 gap-[20px] xltablet:gap-[25px] lglaptop:gap-[30px]'>
                      <label htmlFor="first-name" className="grid gap-[12px] lglaptop:gap-[16px]"><p className='pl-[10px]'>First name</p>
                      <input type="text" name="first-name" id="" placeholder="Enter first name" className='w-full p-[20px] lglaptop:p-[24px] bg-white99 outline outline-1 outline-white95 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' /></label>

                      <label htmlFor="last-name" className="grid gap-[12px] lglaptop:gap-[16px]"><p className='pl-[10px]'>Last name</p>
                      <input type="text" name="last-name" id="" placeholder="Enter last name" className='w-full p-[20px] lglaptop:p-[24px] bg-white99 outline outline-1 outline-white95 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' /></label>

                      <label htmlFor="email" className="grid gap-[12px] lglaptop:gap-[16px]"><p className='pl-[10px]'>Email </p>
                      <input type="email" name="email" id="" placeholder="Enter your email" className='w-full p-[20px] lglaptop:p-[24px] bg-white99 outline outline-1 outline-white95 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' /></label>

                      <label htmlFor="phone" className="grid gap-[12px] lglaptop:gap-[16px]"><p className='pl-[10px]'>Phone Number</p>
                      <input type="text" name="phone" id="" placeholder="Enter your phone number" className='w-full p-[20px] lglaptop:p-[24px] bg-white99 outline outline-1 outline-white95 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' /></label>
                    </div>

                    <div className='grid gap-[20px] xltablet:gap-[24px] lglaptop:gap-[30px]'>
                      <label htmlFor="email-subject" className="grid gap-[12px] lglaptop:gap-[16px]"><p className='pl-[10px]'>Subject</p>
                      <input type="text" name="email-subject" id="" placeholder="Enter message subject" className='w-full p-[20px] lglaptop:p-[24px] bg-white99 outline outline-1 outline-white95 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' /></label>
                      
                      <label htmlFor="email-message" className="grid gap-[12px] lglaptop:gap-[16px]"><p className='pl-[10px]'>Message</p>
                      <textarea name="email-message" id="" placeholder="Enter your message" rows={5} className='resize-none w-full p-[20px] lglaptop:p-[24px] bg-white99 outline outline-1 outline-white95 rounded-lg laptop:rounded-lg text-grey40 placeholder-grey40 focus:outline-orange70' /></label>
                    </div>
                    <Button type="submit" text="Send your Message" className='self-center'/>
                  </form>
                </div>

                <div className="bg-white95 h-[1px] laptop:h-[100%] laptop:w-[1px]"></div>

                <div className='grid grid-rows-4 grid-cols-1 gap-[20px] xltablet:gap-[24px] lglaptop:gap-[50px]
                py-[30px] xltablet:py-[60px] lglaptop:py-[80px]
                px-[30px] xltablet:pr-[60px] lglaptop:pr-[80px]
                laptop:pl-0
                '>

                  <div className='bg-white99 border border-white95 p-[30px] grid grid-cols-1 gap-[20px] rounded-[8px] laptop:rounded-[10px]'>
                    <div className='flex justify-center'>
                      <div className='w-[44px] laptop:w-[52px]'><img src={email} alt="" /></div>
                    </div>
                    <p className='text-center w-full'>support@sleat.com</p>
                  </div>

                  <div className='bg-white99 border border-white95 p-[30px] grid grid-cols-1 gap-[20px] rounded-[8px] laptop:rounded-[10px]'>
                    <div className='flex justify-center'>
                      <div className='w-[44px] laptop:w-[52px]'><img src={phone} alt="" /></div>
                    </div>
                    <p className='text-center w-full'>+91 91813 23 2309</p>
                  </div>

                  <div className='bg-white99 border border-white95 p-[30px] grid grid-cols-1 gap-[20px] rounded-[8px] laptop:rounded-[10px]'>
                    <div className='flex justify-center'>
                      <div className='w-[44px] laptop:w-[52px]'><img src={location} alt="" /></div>
                    </div>
                    <p className='text-center w-full'>Address, Address Address, Address</p>
                  </div>

                  <div className='bg-white99 border border-white95 p-[30px] grid grid-cols-1 gap-[20px] rounded-[8px] laptop:rounded-[10px]'>
                    <div className='flex gap-[10px] lglaptop:gap-[14px] justify-center'>
                      <div className='w-[44px] laptop:w-[52px]'><img src={Facebook} alt="" /></div>
                      <div className='w-[44px] laptop:w-[52px]'><img src={X} alt="" /></div>
                      <div className='w-[44px] laptop:w-[52px]'><img src={LinkedIn} alt="" /></div>
                    </div>
                    <p className='text-center w-full'>Social Profiles</p>
                  </div>

                </div>

              </div>
          </section>
        </Fragment>
      )
}

export default ContactForm