import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

function CollectionsDropdown() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

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

  return (
    <li className="mx-3 pb-3 h-full cursor-pointer hover:underline hover:underline-offset-2"
      onMouseEnter={toggleMensDropdown} onMouseLeave={hideMensDropdown}>
      COLLECTIONS
      {showMensDropdown && (
        <div className={` absolute top-[68px] left-0 w-full h-14 ${isDarkMode ? 'bg-dark-primary border-primary ' : 'bg-primary border-dark-primary'} border-t border-b z-10`}
          onMouseEnter={cancelHideMensDropdown}
          onMouseLeave={hideMensDropdown}
        >
          <ul className='flex flex-row pt-3 justify-start items-center'>
            <li>
              <Link className="hover:underline px-3" href="/category/essentials">
                CVN✦ESSENTIALS
              </Link>
            </li>
            <li>
              <Link className="hover:underline px-3" href="/category/classics">
                CVN✦CLASSICS
              </Link>
            </li>
            <li>
              <Link className="hover:underline px-3" href="/category/garment-dye">
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
  )
}

export default CollectionsDropdown;
