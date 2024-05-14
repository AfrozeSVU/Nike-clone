import React from 'react'
import Menu from "./images/menu-icon.svg";
import Logo from "./images/flyamore_logo.png";
import User from "./images/user.svg";
import Globe from "./images/globe.svg";

const Header = () => {
  return (
    <>
     <div className="header_1 sticky top-0 w-full h-[10vh] bg-white z-50">
        <div className="absolute   left-[1vw] top-[-9vh]  h-[15vh] w-[15vw]">
          <img src={Logo} alt="" />
        </div>

        {/* RIGHT MENU */}
        <div className=" absolute   right-[1vw]   top-[22px]   flex gap-[20px] mx-[22px]">
          <div className="items-center ">
            <img src={Globe} alt="" />
          </div>

          <div className="gap-[3px] flex">
            <div className="item-center">
              <img src={User} alt="" />
            </div>
            <div className="item-center">
              <p className="items-center font-semibold text-black text-lg">Log in</p>
            </div>
          </div>

          <div className="items-center  ">
            <img src={Menu} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header