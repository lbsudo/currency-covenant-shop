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
      {isDarkMode ? <SunIcon className='h-8 w-8 text-primary' /> : <MoonIcon className=' h-8 w-8 text-dark-primary' />}
    </button>
  );
}

export default DarkModeSwitch;

