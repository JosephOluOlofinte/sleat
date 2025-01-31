

// This card prop was created for the benefits section on the homepage
// Further in the project, it was extended for use on the About page

// The following were added during the adaptation:
// The optional image prop which is used on the About page
// The arrow button was made optional so it can activated at will
// "noArrow" was added to the interface to control the arrow's appearance
// "icon" was added to the interface for use on the about page
// noIcon was added to remove all traces of icon's div if icon is not in use
// every property aside title and description were made optional
// noArrow is false by default because it is constant in the original
// version of this prop and has to be deactivated when not needed
// withIcon is false by default because it is not part of the original code
// and has to be activated when needed
// The main logic, however, is in the ternary, not the interface/params
// USAGE: when used on the About page, noArrow and withIcon must be declared

interface BenefitsProps {
  id?: string;
  title: string;
  desc: string;
  url?: string;
  noArrow?: boolean;
  icon?: string;
  withIcon?: boolean
  };


const BenefitsCard: React.FC<BenefitsProps> = ({
  id, 
  title, 
  desc, 
  url ="",
  noArrow = false,
  icon,
  withIcon = false,
}) => {
  return (
                <div className="bg-absoluteWhite p-[30px] xltablet:p-[40px] desktop:p-[50px] grid gap-[30px] xltablet:gap-[40px] desktop:gap-[50px] rounded-[10px]">

                  <h2 className="text-right font-bold"> {id} </h2>

                  { withIcon ? <div className="w-[56px] h-[56px] lglaptop:w-[66px] lglaptop:h-[66px]">
                      <img src={icon} alt="" />
                    </div> :
                  
                    null
                  
                  }
                  

                  <div className="grid gap-[14px] xltablet:gap-[16px] desktop:gap-[20px]">
                    <h3 className="text-[20px] desktop:text-[22px] font-semibold text-[#333333]"> {title} </h3>
                    <p className="text-grey30 "> {desc} </p>
                  </div>
                  
                  {noArrow ? null :
                    <div className="flex justify-end">
                      <a href={url} className="bg-white99 p-[14px] desktop:p-[20px] border-[1px] rounded-[6px] h-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-orange50">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </a>
                    </div>
                  }
                </div>
  )
}

export default BenefitsCard