import {SunIcon, MoonIcon}  from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <button className='' onClick={toggleDarkMode}>
      {isDarkMode ? <SunIcon className='h-6 w-6 text-primary' /> : <MoonIcon className=' h-6 w-6 text-dark-primary' />}
    </button>
  );
}

export default DarkModeSwitch;

