import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const MobileMenu = () => {
  return (
    
    <Fragment>

        <nav>
            <ul className="grid gap-5">
                <li>
                <NavLink to="/" className="
                    py-[12px] px-[20px] text-[16px] font-semibold
                    animate-bounce
                    hover:bg-orange95
                    ease-in-out duration-500 rounded-[5px]
                    ">Home
                </NavLink>
                </li>
                <li>
                <NavLink to="" className="
                    py-[12px] px-[20px]
                    animate-bounce
                    hover:bg-orange95
                    ease-in-out duration-500 rounded-[5px]
                    ">
                    Courses
                </NavLink>
                </li>
                <li>
                <NavLink to="/about" className="
                    py-[12px] px-[20px]
                    animate-bounce
                    hover:bg-orange95
                    ease-in-out duration-500 rounded-[5px]
                    ">About Us 
                </NavLink>
                </li>
                <li>
                <NavLink to="" className="
                    py-[12px] px-[20px]
                    animate-bounce
                    hover:bg-orange95
                    ease-in-out duration-500 rounded-[5px]
                    ">Pricing
                </NavLink>
                </li>
                <li>
                <NavLink to="" className="
                    py-[12px] px-[20px]
                    animate-bounce
                    hover:bg-orange95
                    ease-in-out duration-500 rounded-[5px]
                    ">Contact
                </NavLink>
                </li>
            </ul>
        </nav>
    </Fragment>
  )
}

export default MobileMenu