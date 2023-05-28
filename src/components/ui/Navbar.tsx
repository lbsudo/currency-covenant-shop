"use client";

import React from "react";
import Link from "next/link";
// import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import LogoBlack from "../../../public/ui/currencyBlack.svg";
import LogoWhite from "../../../public/ui/currencyWhite.svg";
import DarkModeSwitch from "./DarkModeSwitch";
import NavSearch from "./NavSearch";
import { ShoppingBagIcon, UserIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import MensDropdown from "./MensDropdown";
// import WomensDropdown from './WomensDropdown';
import CollectionsDropdown from "./CollectionsDropdown";
import { useState } from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Navigation  */}
      <div className={`flex justify-between lg:hidden border ${
            isDarkMode ? "bg-dark-primary" : " bg-primary"
          }`} >
        <button className="flex items-center h-12 w-12 " onClick={handleToggle}>
          {isOpen ? <XMarkIcon className={`${isDarkMode ? "text-primary" : "text-dark-primary"} h-12 w-12`}/> : "" }
          {isOpen ? "" : <Bars3Icon className={`${isDarkMode ? "text-primary" : "text-dark-primary"} h-12 w-12`} />}
          {/* <Bars3Icon className={`${isDarkMode ? "text-primary" : "text-dark-primary"} h-12 w-12`} /> */}
        </button>
        <div className="flex justify-center items-center py-1 w-12 h-12">
          <Link href={"/"}>
            {isDarkMode ? (
              <Image src={LogoWhite} alt="store" width={40} height={40} priority />
            ) : (
              <Image src={LogoBlack} alt="store" width={40} height={40} priority />
            )}
          </Link>
        </div>
        <DarkModeSwitch />
      </div>
      {isOpen && (
        <nav
          className={`lg:hidden flex flex-col  items-center top-0 left-0 z-50 h-full w-full text-2xl pt-3 border-t ${
            isDarkMode ? "border-primary bg-dark-primary" : "border-dark-primary bg-primary"
          }`}
        >
          <div className="flex flex-row items-center justify-center pb-6 w-full">
            <button className="snipcart-checkout">
              <ShoppingBagIcon className="w-8 h-8" />
            </button>
            <NavSearch />
          </div>
          {/* Start section */}
          <div className="flex w-full pb-4 text-center justify-center items-center">
            <ul className="flex flex-col h-full">
              <MensDropdown />
              {/* <WomensDropdown /> */}
              <CollectionsDropdown />
              <li className="mx-3 pb-3 hover:underline hover:underline-offset-2">
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
        </nav>
      )}
      {/* Tablet and up Navigation  */}
      <nav
        className={`hidden lg:flex relative top-0 left-0 right-0 z-50  justify-between flex-wrap pt-3 border-b ${
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
              <Image src={LogoWhite} alt="store" width={40} height={40} priority />
            ) : (
              <Image src={LogoBlack} alt="store" width={40} height={40} priority />
            )}
          </Link>
        </div>

        {/* End section */}
        <div className="flex items-center w-1/3 justify-end pb-3 pr-2">
          <DarkModeSwitch />
          <NavSearch />
          <button className="snipcart-checkout">
            <ShoppingBagIcon className="w-6 h-6 ml-3" />
          </button>
          {/* <UserIcon className="w-6 h-6 ml-3" /> */}
          {/* <UserButton afterSignOutUrl="/" /> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
