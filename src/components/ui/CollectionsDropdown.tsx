import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

function CollectionsDropdown() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const [showCollectionsDropdown, setShowCollectionsDropdown] = useState(false);
  let timeout: NodeJS.Timeout | null = null;

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

  return (
    <li className="mx-3 pb-3 h-full cursor-pointer hover:underline hover:underline-offset-2"
      onMouseEnter={toggleCollectionsDropdown} onMouseLeave={hideCollectionsDropdown}>
      COLLECTIONS
      {showCollectionsDropdown && (
        <div className={` absolute top-[60px] left-0 w-full h-screen lg:flex lg:items-center lg:h-12 mt-2 ${isDarkMode ? 'border-primary bg-dark-primary ' : 'border-dark-primary bg-primary'} border-t border-b`}
          onMouseEnter={cancelHideCollectionsDropdown}
          onMouseLeave={hideCollectionsDropdown}
        >
          <ul className='flex flex-col lg:flex-row lg:pb-5 pt-6 justify-start items-center'>
            <button onClick={hideCollectionsDropdown} className="hover:underline lg:hidden px-3">
                [BACK]
            </button>
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
