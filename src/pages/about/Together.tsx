import { Fragment } from 'react'
import { Button } from '../../components'

const Together = () => {
    return (
      <Fragment>
          <section className="min-h-[10vh] w-[100%] flex justify-center mt-[70px]">
              <div className="h-[100%] w-[90%] desktop:w-[80%] grid grid-cols-1 gap-[50px] bg-absoluteWhite laptop:p-[50px] lglaptop:p-[60px] p-[30px]">

                    <div className="max-laptop:grid max-laptop:gap-8 laptop:flex laptop:justify-between laptop:items-center laptop:gap-[200px]">
                        <div className='grid gap-[10px]'>
                            <h2 className="font-semibold text-grey15 laptop:text-[34px] lglaptop:text-[38px] laptop:max-w-[25ch] leading-[1.3] h-fit"><span className='text-orange50'>Together</span>, let's shape the future of digital innovation</h2>
                            <p className="xltablet:w-[55ch] laptop:w-[70ch] lglaptop:w-[85ch] text-grey35 mt-[5px] pr-[5px] whitespace-break-spaces h-fit">Join us on this exciting learning journey and unlock your potential in design and development.</p>
                        </div>

                        <Button text="Join Now" variant="primary" className='w-max' />
                    </div>

                </div>
            </section>
        </Fragment>
  )
}

export default Together