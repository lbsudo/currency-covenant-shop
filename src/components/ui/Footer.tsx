"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Footer = () => {
  const { theme } = useTheme();
  // const isDarkMode = theme === "dark";
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <footer
      className={` border-t ${
        isDarkMode
          ? "bg-dark-primary text-primary border-primary"
          : "bg-primary text-dark-primary border-dark-primary"
      } py-12 mt-16`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
        <div className="w-full sm:w-auto mb-8 sm:mb-0">
          <h3 className="text-lg font-medium mb-2">Support</h3>
          <ul className="list-none">
            <li className="">
              <a href="/support/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            {/* <li className=""> */}
            {/*   <a href="/support/faq" className="hover:text-gray-300">FAQ</a> */}
            {/* </li> */}
            <li>
              <a href="/support/return-policy" className="hover:text-gray-300">
                Return Policy
              </a>
            </li>
            <li>
              <a href="/support/shipping" className="hover:text-gray-300">
                Shipping
              </a>
            </li>
            <li>
              <a href="/support/terms-&-conditions" className="hover:text-gray-300">
                Terms & Conditions
              </a>
            </li>
            {/* <li> */}
            {/*   <a href="#" className="hover:text-gray-300">Privacy Policy</a> */}
            {/* </li> */}
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-8 sm:mb-0">
          <h3 className="text-lg font-medium mb-4">Socials</h3>
          <ul className="list-none">
            {/* <li className="mb-2"> */}
            {/*   <a href="#" className="hover:text-gray-300">Link 1</a> */}
            {/* </li> */}
            {/* <li className="mb-2"> */}
            {/*   <a href="#" className="hover:text-gray-300">Link 2</a> */}
            {/* </li> */}
            {/* <li> */}
            {/*   <a href="#" className="hover:text-gray-300">Link 3</a> */}
            {/* </li> */}
          </ul>
        </div>
        <div className="w-full sm:w-auto">
          <h3 className="text-lg font-medium mb-2">Mobile</h3>
          <ul className="list-none">
            Coming Soon...
            {/* <li className="mb-2"> */}
            {/*   <a href="#" className="hover:text-gray-300">Coming Soon...</a> */}
            {/* </li> */}
            {/* <li className="mb-2"> */}
            {/*   <a href="#" className="hover:text-gray-300">Link 2</a> */}
            {/* </li> */}
            {/* <li> */}
            {/*   <a href="#" className="hover:text-gray-300">Link 3</a> */}
            {/* </li> */}
          </ul>
        </div>
        <div
          className={`${
            isDarkMode ? "bg-primary text-dark-primary" : "bg-dark-primary text-primary"
          }w-full sm:w-auto mt-8 sm:mt-0`}
        >
          {/* <h3 className="text-lg font-medium mb-4">Newsletter Signup</h3> */}
          {/* <form className="flex flex-col sm:flex-row"> */}
          {/*   <input */}
          {/*     type="email" */}
          {/*     placeholder="Enter your email address" */}
          {/*     className={`${isDarkMode ? 'bg-primary text-dark-primary' : 'bg-dark-primary text-primary'} w-full sm:w-auto py-2 px-4 mb-2 sm:mr-2 rounded-md border-gray-700 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500`} */}
          {/*   /> */}
          {/*   <button */}
          {/*     type="submit" */}
          {/*     className={`w-full h-10 sm:w-auto py-2 px-4 rounded-md ${isDarkMode ? 'bg-primary text-dark-primary' : 'bg-dark-primary text-primary'}  hover:bg-accent focus:outline-none focus:ring-2 focus:ring-gray-500`} */}
          {/*   > */}
          {/*     Subscribe */}
          {/*   </button> */}
          {/* </form> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
