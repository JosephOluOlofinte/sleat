import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../block'

const MobileMenu = () => {
  return (
    
    <Fragment>

        <nav className='grid gap-[30px]'>
            <ul className="grid gap-7">
                <li>
                <NavLink to="/" className="
                    text-[18px] font-medium
                    hover:transition-all
                    hover:text-orange50
                    focus:text-orange50 focus:pl-3
                    hover:translate-x-1 
                    ease-in-out duration-500 rounded-[5px]
                    ">Home
                </NavLink>
                </li>
                <li>
                <NavLink to="" className="
                    text-[18px] font-medium
                    hover:text-orange50
                    focus:text-orange50 focus:pl-3
                    ease-in-out duration-500 rounded-[5px]
                    ">
                    Courses
                </NavLink>
                </li>
                <li>
                <NavLink to="/about" className="
                    text-[18px] font-medium
                    hover:text-orange50
                    focus:text-orange50 focus:pl-3
                    ease-in-out duration-500 rounded-[5px]
                    ">About Us 
                </NavLink>
                </li>
                <li>
                <NavLink to="" className="
                    text-[18px] font-medium
                    hover:text-orange50
                    focus:text-orange50 focus:pl-3
                    ease-in-out duration-500 rounded-[5px]
                    ">Pricing
                </NavLink>
                </li>
                <li>
                <NavLink to="" className="
                    text-[18px] font-medium
                    hover:text-orange50
                    focus:text-orange50 focus:pl-3
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
            pt-[40px] pb-[25px]
            ">
                <NavLink to="">
                <Button text='Sign Up' size='large' variant="whiteBtn" className='border-[1px] border-orange50 hover:bg-orange90' />
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