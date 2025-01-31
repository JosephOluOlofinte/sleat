import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../block'

const MobileMenu = () => {
  return (
    
    <Fragment>

        <nav className='grid gap-[30px]'>
            <ul className="grid gap-6">
                <li>
                <NavLink to="/" className="
                    py-[12px] px-[20px] text-[18px] font-medium
                    animate-bounce
                    hover:bg-orange95
                    ease-in-out duration-500 rounded-[5px]
                    ">Home
                </NavLink>
                </li>
                <li>
                <NavLink to="" className="
                    py-[12px] px-[20px] text-[18px] font-medium
                    animate-bounce
                    hover:bg-orange95
                    ease-in-out duration-500 rounded-[5px]
                    ">
                    Courses
                </NavLink>
                </li>
                <li>
                <NavLink to="/about" className="
                    py-[12px] px-[20px] text-[18px] font-medium
                    animate-bounce
                    hover:bg-orange95
                    ease-in-out duration-500 rounded-[5px]
                    ">About Us 
                </NavLink>
                </li>
                <li>
                <NavLink to="" className="
                    py-[12px] px-[20px] text-[18px] font-medium
                    animate-bounce
                    hover:bg-orange95
                    ease-in-out duration-500 rounded-[5px]
                    ">Pricing
                </NavLink>
                </li>
                <li>
                <NavLink to="" className="
                    py-[12px] px-[20px] text-[18px] font-medium
                    animate-bounce
                    hover:bg-orange95
                    ease-in-out duration-500 rounded-[5px]
                    ">Contact
                </NavLink>
                </li>
            </ul>

            <div className="
            #buttons
            flex items-center gap-[10px]
            text-grey15
            h-[45px]
            py-[12px] px-[20px]
            ">
                <NavLink to="">
                <Button text='Sign Up' size='large' variant="whiteBtn" className='border-[1px] border-orange50' />
                </NavLink>
                <NavLink to="">
                <Button text="Sign In" size="large" className='border-[1px] border-orange50' />
                </NavLink>
            </div>
        </nav>
    </Fragment>
  )
}

export default MobileMenu