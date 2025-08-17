import React from 'react'
import { useContext } from 'react'
import TheameContext from './TheameContext'

function Header() {
  // Assuming you want to display the theme and a button to toggle it
  const {theme, toggleTheme} = useContext(TheameContext);
  return (
	<div className='w-1/3 h-auto mx-auto flex flex-col justify-center items-center'>
		<header className='flex justify-center items-center p-4 rounded-md mb-2 shadow-black shadow-lg bg-gray-800 text-white'>
	  <h1 className='font-bold p-2 text-xl'>Current Theme: {theme}</h1>
	  <button className='rounded-lg text-white p-3 bg-gradient-to-br from-lime-600 to-yellow-500 text-xl font-bold' onClick={toggleTheme}>Toggle theme</button>
	</header>
	</div>
  )
}

export default Header
