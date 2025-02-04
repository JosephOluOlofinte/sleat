import { Fragment } from 'react'
import { Button, PricingComponent } from '../../components'
import FAQs from '../home/FAQs'
import { Helmet } from 'react-helmet-async'

const Pricing = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Pricing | Sleat</title>
        <meta name="description" content="How much does it cost to start learning on Sleat? Find out available options on this page." />
      </Helmet>
      <main className="
      my-[50px] xltablet:my-[80px] lglaptop:my-[100px]
      flex justify-center items-center
      ">
          <div className="
          h-[100%] w-[90%] desktop:w-[80%]
          border-b-[1px] border-white90 
          pb-[30px] laptop:pb-[40px] lglaptop:pb-[50px]
          grid grid-cols-1 laptop:grid-cols-2 items-center gap-[50px]">
            <h2>Our Pricings</h2>
            <p className="laptop:max-w-[100%] desktop:max-w-[100%] text-grey35">Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.</p>
          </div>
      </main>

      <div className="h-[100%] w-[90%] desktop:w-[80%] my-0 mx-auto grid gap-10 laptop:gap-12">
        <div className='flex justify-center'>
          <div className="bg-absoluteWhite rounded-lg p-[12px] w-fit ">
            <Button text="Monthly" className="mr-[15px]"/>
            <Button text="View All" variant="whiteBtn" url="#"/>
          </div>
        </div>
        <PricingComponent />
      </div>

      {/* BRING IN FAQs from the Homepage */}

      <FAQs />
    </Fragment>
  )
}

export default Pricing