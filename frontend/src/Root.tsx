import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import logo from "./assets/WarnMedia.svg";
import facebookIcon from "./assets/entypo-social_facebook.svg";
import instagramIcon from "./assets/formkit_instagram.svg";
import youtubeIcon from "./assets/mdi_youtube.svg";
import telegramIcon from "./assets/mingcute_telegram-fill.svg";

function Root() {
  const navigate = useNavigate();
  const [ isOpened, setIsOpened ] = React.useState<Boolean>(false);
  return (
    <div className="relative w-full overflow-hidden pb-[50vh]">
      <nav className="bg-[rgba(0,0,0,.2)] fixed w-full z-20 top-0 start-0 border-b border-[rgba(255,255,255,.1)] backdrop-blur-[55px]">
        <div className="max-w-[1300px] flex flex-wrap items-center justify-between mx-auto px-4 py-[26px]">
          <img src={logo} className="h-[27px]" alt="Warnmedia Logo" onClick={() => navigate("/")}/>
          <div className="flex sm:order-2 space-x-3 sm:space-x-0 rtl:space-x-reverse">
              <div className="flex items-center gap-[12px] max-sm:hidden">
                <img src={youtubeIcon} className="h-[24px]" alt="" />
                <img src={instagramIcon} className="h-[24px]" alt="" />
                <img src={facebookIcon} className="h-[24px]" alt="" />
                <img src={telegramIcon} className="h-[24px]" alt="" />
              </div>
              <button onClick={() => setIsOpened(!isOpened)} data-collapse-toggle="navbar-sticky" type="button" className="bg-inherit inline-flex items-center p-0 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-inherit hover:border-none focus:border-none focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-[36px] h-[36px]" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33 6H3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M33 18H3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M33 30H3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
          </div>
          <div className={`items-center justify-between w-full sm:flex sm:w-auto sm:order-1 ${isOpened && "hidden"}`}>
            <ul className="flex flex-col p-4 sm:p-0 mt-4 border border-gray-100 rounded-lg sm:space-x-8 rtl:space-x-reverse sm:flex-row sm:mt-0 sm:border-0">
              <li className="block py-2 px-3 text-[13px] text-white rounded sm:p-0">
                Կազմը
              </li>
              <li className="block py-2 px-3 text-[13px] text-white rounded sm:p-0">
                Մեր մասին
              </li>
              <li className="block py-2 px-3 text-[13px] text-white rounded sm:p-0">
                Գործընկերներ
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Root
