import React from 'react'
import { NavLink } from 'react-router-dom';
function Navbar() {
	const isActiveClass = ({ isActive }) =>
    `px-4 py-2 rounded-md font-bold transition-colors duration-300 ${
      isActive
        ? 'bg-gradient-to-tr from-blue-500 to-green-600 text-white'
        : 'text-gray-700 hover:bg-gray-200'
    }`;
  return (
	<>
	  <div className='w-5/6 bg-gradient-to-br from-green-700 to-white h-auto mx-auto p-3 flex justify-between text-xl my-4 rounded-md font-bold'>
		<h1>ASsu.Dev</h1>
		<nav>
			<NavLink to = '/' className = {isActiveClass} >Home</NavLink>
			<NavLink to = '/about' className = {isActiveClass} >About</NavLink>
			<NavLink to = '/contact' className = {isActiveClass} >Contact</NavLink>
			<NavLink to = '/skill' className = {isActiveClass} >Skills</NavLink>
			<NavLink to = '/project' className = {isActiveClass} >Projects</NavLink>
		</nav>
	  </div>
	</>
  )
}

export default Navbar
