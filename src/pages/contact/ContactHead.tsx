import { Fragment } from 'react'

const ContactHead = () => {
  return (
      <Fragment>
          <main className="
        mt-[50px] xltablet:mt-[80px] lglaptop:mt-[100px]
        flex justify-center items-center
        ">
            <div className="
            h-[100%] w-[90%] desktop:w-[80%]
            border-b-[1px] border-white90 
            pb-[30px] laptop:pb-[40px] lglaptop:pb-[50px]
            grid grid-cols-1 laptop:grid-cols-2 items-center gap-[16px] laptop:gap-[80px] lglaptop:gap-[100px]">
              <h1 className="leading-10">Contact Us</h1>
              <p className="laptop:max-w-[100%] desktop:max-w-[100%] text-grey35">Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.</p>
            </div>
        </main>
      </Fragment>
    )
}

export default ContactHead