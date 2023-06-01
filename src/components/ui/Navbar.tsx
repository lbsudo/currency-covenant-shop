"use client";

import React from "react";
import Link from "next/link";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
// import { UserButton } from "@clerk/nextjs";
// import DarkModeSwitch from "./DarkModeSwitch";
import NavSearch from "./NavSearch";
import { ShoppingBagIcon, UserIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import MensDropdown from "./MensDropdown";
// import WomensDropdown from './WomensDropdown';
import CollectionsDropdown from "./CollectionsDropdown";
import { useState } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "auto",
});



interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  // const { theme } = useTheme();
  const { theme, setTheme } = useTheme();
  // const isDarkMode = theme === "dark";
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  const [showMensDropdown, setShowMensDropdown] = useState(false);
  let timeout: NodeJS.Timeout | null = null;

  const toggleMensDropdown = () => {
    setShowMensDropdown(!showMensDropdown);
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  const hideMensDropdown = () => {
    timeout = setTimeout(() => {
      setShowMensDropdown(false);
    }, 200);
  };

  const cancelHideMensDropdown = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  const [showCollectionsDropdown, setShowCollectionsDropdown] = useState(false);

  const toggleCollectionsDropdown = () => {
    setShowCollectionsDropdown(!showCollectionsDropdown);
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  const hideCollectionsDropdown = () => {
    timeout = setTimeout(() => {
      setShowCollectionsDropdown(false);
    }, 200);
  };

  const cancelHideCollectionsDropdown = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Navigation  */}
      <div
        className={`${roboto.className}flex justify-between xl:hidden border ${
          isDarkMode ? "bg-dark-primary" : " bg-primary"
        }`}
      >
        <button className="flex items-center h-12 w-12 " onClick={handleToggle}>
          {isOpen ? (
            <XMarkIcon
              className={`${isDarkMode ? "text-primary" : "text-dark-primary"} h-12 w-12`}
            />
          ) : (
            ""
          )}
          {isOpen ? (
            ""
          ) : (
            <Bars3Icon
              className={`${isDarkMode ? "text-primary" : "text-dark-primary"} h-12 w-12`}
            />
          )}
          {/* <Bars3Icon className={`${isDarkMode ? "text-primary" : "text-dark-primary"} h-12 w-12`} /> */}
        </button>
        <div className="flex justify-center items-center py-1 w-12 h-12">
          <Link href={"/"}>
            {isDarkMode ? (
              <svg
                width="10mm"
                height="10mm"
                version="1.1"
                viewBox="0 0 500 500"
                id="svg12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs id="defs16" />
                <g id="g10">
                  <text
                    x="-10.525219"
                    y="482.90366"
                    fill="#ffffff"
                    font-family="Cardo"
                    font-size="669.46px"
                    stroke-width="106.9"
                    id="text4"
                  >
                    <tspan
                      x="-10.525219"
                      y="482.90366"
                      fill="#ffffff"
                      stroke-width="106.9"
                      id="tspan2"
                    >
                      C
                    </tspan>
                  </text>
                  <path
                    d="m471.87 364.26-198.9-344.5"
                    fill="none"
                    stroke="#fff"
                    stroke-width="10.012"
                    id="path6"
                  />
                  <path
                    d="m250 287.99a53.572 53.572 45 0 0-37.994-37.994 53.572 53.572 135 0 0 37.994-37.994 53.572 53.572 45 0 0 37.994 37.994 53.572 53.572 135 0 0-37.994 37.994z"
                    fill="#fff"
                    stroke="#fff"
                    stroke-width="6.1535"
                    id="path8"
                  />
                </g>
              </svg>
            ) : (
              <svg
                width="10mm"
                height="10mm"
                version="1.1"
                viewBox="0 0 500 500"
                id="svg12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs id="defs16" />
                <g id="g10">
                  <text
                    x="-10.525219"
                    y="482.90366"
                    fill="#292929"
                    font-family="Cardo"
                    font-size="669.46px"
                    stroke-width="106.9"
                    id="text4"
                  >
                    <tspan
                      x="-10.525219"
                      y="482.90366"
                      fill="#292929"
                      stroke-width="106.9"
                      id="tspan2"
                    >
                      C
                    </tspan>
                  </text>
                  <path
                    d="m471.87 364.26-198.9-344.5"
                    fill="none"
                    stroke="#292929"
                    stroke-width="10.012"
                    id="path6"
                  />
                  <path
                    d="m250 287.99a53.572 53.572 45 0 0-37.994-37.994 53.572 53.572 135 0 0 37.994-37.994 53.572 53.572 45 0 0 37.994 37.994 53.572 53.572 135 0 0-37.994 37.994z"
                    fill="#292929"
                    stroke="#292929"
                    stroke-width="6.1535"
                    id="path8"
                  />
                </g>
              </svg>
            )}
          </Link>
        </div>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? (
            <SunIcon className="h-8 w-8 text-primary" />
          ) : (
            <MoonIcon className=" h-8 w-8 text-dark-primary" />
          )}
        </button>
      </div>
      {isOpen && (
        <nav
          className={`xl:hidden flex flex-col items-center top-0 left-0 z-50 h-full w-full text-4xl pl-3 pt-3 ${
            isDarkMode ? "border-primary bg-dark-primary" : "border-dark-primary bg-primary"
          }`}
        >
          <div className="flex flex-row items-center justify-center pb-6 w-full">
            <button onClick={handleToggle} className="snipcart-checkout">
              <ShoppingBagIcon className="w-8 h-8" />
            </button>
            {/* <NavSearch /> */}
          </div>
          {/* Start section */}
          <div className="flex w-full pb-4 text-center justify-center items-center">
            <ul className="flex flex-col h-full">
              <li
                className="mx-3 pb-3 h-full cursor-pointer hover:underline hover:underline-offset-2"
                onClick={toggleMensDropdown}
              >
                MENS
                {showMensDropdown && (
                  <div
                    className={` absolute top-[60px] left-0 w-full h-screen ${
                      isDarkMode ? "bg-dark-primary border-primary " : "border-dark-primary bg-primary"
                    } border-t border-b z-10`}
                    onMouseEnter={cancelHideMensDropdown}
                    onMouseLeave={hideMensDropdown}
                  >
                    <ul className="flex flex-col pt-6 justify-start items-center">
                      <button onClick={hideMensDropdown} className="hover:underline px-3">
                        [BACK]
                      </button>
                      <li>
                        <Link
                          onClick={handleToggle}
                          className="hover:underline px-3"
                          href="/category/new-arrivals"
                        >
                          NEW ARRIVALS
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleToggle}
                          className="hover:underline px-3"
                          href="/category/mens-all"
                        >
                          ALL
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleToggle}
                          className="hover:underline px-3"
                          href="/category/t-shirts"
                        >
                          T-SHIRTS
                        </Link>
                      </li>
                      {/* <li> */}
                      {/* Category id:108(polo) */}
                      {/*   <Link className="hover:underline px-3" href="/category/polo-shirts"> */}
                      {/*     TOPS */}
                      {/*   </Link> */}
                      {/* </li> */}
                      <li>
                        <Link
                          onClick={handleToggle}
                          className="hover:underline px-3"
                          href="/category/sweatshirts"
                        >
                          SWEATSHIRTS
                        </Link>
                      </li>
                      {/* <li> */}
                      {/*   <Link className="hover:underline px-3" href="/category/outerwear"> */}
                      {/*     OUTERWEAR */}
                      {/*   </Link> */}
                      {/* </li> */}
                      <li>
                        <Link
                          onClick={handleToggle}
                          className="hover:underline px-3"
                          href="/category/bottoms"
                        >
                          BOTTOMS
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleToggle}
                          className="hover:underline px-3"
                          href="/category/headwear"
                        >
                          HEADWEAR
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleToggle}
                          className="hover:underline px-3"
                          href="/category/accessories"
                        >
                          ACCESSORIES
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleToggle}
                          className="hover:underline px-3"
                          href="/category/footwear"
                        >
                          FOOTWEAR
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              {/* <WomensDropdown /> */}
              <li
                className="mx-3 pb-3 h-full cursor-pointer hover:underline hover:underline-offset-2"
                onClick={toggleCollectionsDropdown}
              >
                COLLECTIONS
                {showCollectionsDropdown && (
                  <div
                    className={` absolute top-[60px] left-0 w-full h-screen ${
                      isDarkMode ? "bg-dark-primary border-primary" : "bg-primary border-dark-primary"
                    } border-t`}
                    onMouseEnter={cancelHideCollectionsDropdown}
                    onMouseLeave={hideCollectionsDropdown}
                  >
                    <ul className="flex flex-col pt-6 justify-start items-center">
                      <button onClick={hideCollectionsDropdown} className="hover:underline px-3">
                        [BACK]
                      </button>
                      <li>
                        <Link
                          onClick={handleToggle}
                          className="hover:underline px-3"
                          href="/category/essentials"
                        >
                          CVN✦ESSENTIALS
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleToggle}
                          className="hover:underline px-3"
                          href="/category/classics"
                        >
                          CVN✦CLASSICS
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleToggle}
                          className="hover:underline px-3"
                          href="/category/garment-dye"
                        >
                          GARMENT DYE
                        </Link>
                      </li>
                      {/* <li> */}
                      {/*   <Link className="hover:underline px-3" href="/category/polo-shirts"> */}
                      {/*     COLLECTION 4 */}
                      {/*   </Link> */}
                      {/* </li> */}
                      {/* <li> */}
                      {/*   <Link className="hover:underline px-3" href="/category/all-hoodies-&-sweatshirts"> */}
                      {/*     COLLECTION 5 */}
                      {/*   </Link> */}
                      {/* </li> */}
                    </ul>
                  </div>
                )}
              </li>

              {/* <CollectionsDropdown /> */}
              <li className="mx-3 pb-3 hover:underline hover:underline-offset-2">
                <Link onClick={handleToggle} href="/category/essentials">
                  CVN✦ESSENTIALS
                </Link>
              </li>
              {/* <li className='mx-3 whitespace-nowrap hover:underline hover:underline-offset-2 '> */}
              {/*   <Link href="/about"> */}
              {/*     BASE COLLECTIONS */}
              {/*   </Link> */}
              {/* </li> */}
              <li className="mx-3 hover:underline hover:underline-offset-2">
                <Link onClick={handleToggle} href="/category/collaborations">
                  COLLABORATIONS
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
      {/* Tablet and up Navigation  */}
      <nav
        className={`hidden xl:flex relative top-0 left-0 right-0 z-20  justify-between flex-wrap pt-3 border-b ${
          isDarkMode ? "border-primary bg-dark-primary" : "border-dark-primary bg-primary"
        } 
`}
      >
        {/* Start section */}
        <div className="flex w-1/3 h-full flex-grow pt-3 items-center">
          <ul className="flex justify-between text-md h-full">
            <MensDropdown />
            {/* <WomensDropdown /> */}
            <CollectionsDropdown />
            <li className="mx-3 hover:underline hover:underline-offset-2">
              <Link href="/category/essentials">CVN✦ESSENTIALS</Link>
            </li>
            {/* <li className='mx-3 whitespace-nowrap hover:underline hover:underline-offset-2 '> */}
            {/*   <Link href="/about"> */}
            {/*     BASE COLLECTIONS */}
            {/*   </Link> */}
            {/* </li> */}
            <li className="mx-3 hover:underline hover:underline-offset-2">
              <Link href="/category/collaborations">COLLABORATIONS</Link>
            </li>
          </ul>
        </div>

        {/* Center section */}
        <div className="flex items-center justify-center w-1/3 pb-2 flex-grow">
          <Link href={"/"}>
            {isDarkMode ? (
              <svg
                width="10mm"
                height="10mm"
                version="1.1"
                viewBox="0 0 500 500"
                id="svg12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs id="defs16" />
                <g id="g10">
                  <text
                    x="-10.525219"
                    y="482.90366"
                    fill="#ffffff"
                    font-family="Cardo"
                    font-size="669.46px"
                    stroke-width="106.9"
                    id="text4"
                  >
                    <tspan
                      x="-10.525219"
                      y="482.90366"
                      fill="#ffffff"
                      stroke-width="106.9"
                      id="tspan2"
                    >
                      C
                    </tspan>
                  </text>
                  <path
                    d="m471.87 364.26-198.9-344.5"
                    fill="none"
                    stroke="#fff"
                    stroke-width="10.012"
                    id="path6"
                  />
                  <path
                    d="m250 287.99a53.572 53.572 45 0 0-37.994-37.994 53.572 53.572 135 0 0 37.994-37.994 53.572 53.572 45 0 0 37.994 37.994 53.572 53.572 135 0 0-37.994 37.994z"
                    fill="#fff"
                    stroke="#fff"
                    stroke-width="6.1535"
                    id="path8"
                  />
                </g>
              </svg>
            ) : (
              <svg
                width="10mm"
                height="10mm"
                version="1.1"
                viewBox="0 0 500 500"
                id="svg12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs id="defs16" />
                <g id="g10">
                  <text
                    x="-10.525219"
                    y="482.90366"
                    fill="#292929"
                    font-family="Cardo"
                    font-size="669.46px"
                    stroke-width="106.9"
                    id="text4"
                  >
                    <tspan
                      x="-10.525219"
                      y="482.90366"
                      fill="#292929"
                      stroke-width="106.9"
                      id="tspan2"
                    >
                      C
                    </tspan>
                  </text>
                  <path
                    d="m471.87 364.26-198.9-344.5"
                    fill="none"
                    stroke="#292929"
                    stroke-width="10.012"
                    id="path6"
                  />
                  <path
                    d="m250 287.99a53.572 53.572 45 0 0-37.994-37.994 53.572 53.572 135 0 0 37.994-37.994 53.572 53.572 45 0 0 37.994 37.994 53.572 53.572 135 0 0-37.994 37.994z"
                    fill="#292929"
                    stroke="#292929"
                    stroke-width="6.1535"
                    id="path8"
                  />
                </g>
              </svg>
            )}
          </Link>
        </div>

        {/* End section */}
        <div className="flex items-center w-1/3 justify-end pb-3 pr-2">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? (
              <SunIcon className="h-7 w-7 text-primary" />
            ) : (
              <MoonIcon className=" h-7 w-7 text-dark-primary" />
            )}
          </button>

          {/* <NavSearch /> */}
          <button className="snipcart-checkout">
            <ShoppingBagIcon className="w-7 h-7 ml-1" />
          </button>
          {/* <UserIcon className="w-6 h-6 ml-3" /> */}
          {/* <UserButton afterSignOutUrl="/" /> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
