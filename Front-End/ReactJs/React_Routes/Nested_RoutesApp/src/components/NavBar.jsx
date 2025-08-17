import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
	const isActive_Nav =  ({ isActive }) =>
    `px-4 py-2 rounded-md font-bold transition-colors duration-300 ${
      isActive
        ? 'bg-gradient-to-tr from-blue-500 to-green-600 text-white'
        : 'text-gray-700 hover:bg-gray-200'
    }`;
  return (
	<>
	  <div className='w-5/6 bg-gradient-to-br from-green-700 to-white h-auto mx-auto p-3 flex justify-between text-xl my-4 rounded-md font-bold'>
		<h1>ASsu.<span className='text-orange-500'>Dev</span></h1>
		<nav>
			<NavLink to='/' className={isActive_Nav}>Home</NavLink>
			<NavLink to='/about' className={isActive_Nav}>About</NavLink>
			<NavLink to='/project' className={isActive_Nav}>Project</NavLink>
			<NavLink to='/contact' className={isActive_Nav}>Contact</NavLink>
		</nav>
	  </div>
	</>
  )
}

export default NavBar
