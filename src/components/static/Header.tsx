import { useState } from 'react'

import { NavLink } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import MobileMenu from './MobileMenu';

const Header = () => {

  // Dropdown state: showDropdown/!showDropdown

  const [showDropdown, setDropdownState] = useState(false);

  const dropdown = () => {
    setDropdownState((prev) => !prev);
  };

  return (
    <header className="
        bg-absoluteWhite
        flex flex-col items-center
        h-[130px] w-[100%]
        pt-[10px]
        ">

          <a className="
            #promoBox
          bg-orange50 
            flex justify-center items-center gap-4 
            text-absoluteWhite 
            h-[40px] w-[100%]
            ">
              <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
          
          <div className="
          #actualHeader
          flex justify-between items-center
          h-[80px] w-[90%]
          desktop:w-[80%]
          ">
            <div className="
            #logo+nav
            flex items-center gap-[25px]
            laptop:gap-[35px]
            desktop:gap-[45px]
            ">
              <div>
                <img src={Logo} alt="" className="
                h-[45px]
                laptop:h-[55px]
                "/>
              </div>
              <nav>
                <ul className="
                #navbar
                hidden
                min-[790px]:flex 
                desktop:gap-3
                ">
                  <li>
                    <NavLink to="/" className="
                      py-[12px] px-[20px]
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
            </div>

            <div className="
            #buttons
            flex justify-between items-center gap-[15px]
            text-grey15
            h-[45px]
            xltablet:gap-[20px]
            desktop:gap-[25px]
            ">
              <NavLink to="">
                <button className="
                h-[45px]
                laptop:h-[55px]
                ">Sign Up</button>
              </NavLink>
              <NavLink to="">
                <button className="
                bg-orange50
                rounded-[5px]
                text-absoluteWhite
                h-[45px] w-[85px]
                laptop:h-[50px] laptop:w-[100px]
                ">Sign In</button>
              </NavLink>

              { showDropdown ?
              
                null :

                <div className="min-[790px]:hidden hover:cursor-pointer
                hover:scale-110 duration-400" onClick={dropdown}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[34px] w-[34px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                  </svg>
                </div>
              }

              { showDropdown ?

                  <>
                    <div className="
                      w-screen h-screen z-20
                      fixed top-0 left-0
                      backdrop-blur-sm text-[rgb(255,149,0,0.7)]
                      backdrop-saturate-[180%]
                      bg-[rgba(255,149,0,0.015)]
                      " onClick={dropdown}>
                    </div>
                    
                    <div className='rounded-[10px] top-[5px] w-[300px] h-fit bg-absoluteWhite pl-[30px] pt-[15px] pb-[30px] shadow-[5px_10px_30px_-5px_rgba(255,149,0,0.2)] z-30' 
                    style={
                      { 
                        position: 'absolute',
                        right: showDropdown ? '15px' : '-100%',
                         }}>

                      <div className="
                      hover:cursor-pointer
                      hover:scale-110 duration-300
                      flex justify-end pr-[20px] mb-[30px]
                      " onClick={dropdown}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <MobileMenu />

                    </div>
                  </>

                    
                    :
                    null
                }

            </div>

          </div>

        </header>
  )
}

export default Header