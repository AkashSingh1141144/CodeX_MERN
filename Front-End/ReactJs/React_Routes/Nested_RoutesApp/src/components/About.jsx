import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function About() {
	const isActiveNestedNav =  ({ isActive }) =>
    `px-4 py-2 rounded-md font-bold transition-colors duration-300 ${
      isActive
        ? 'bg-gradient-to-tr from-blue-500 to-green-600 text-white'
        : 'text-gray-700 hover:bg-gray-200'
    }`;
  return (
	<>
	<div className='text-9xl font-bold w-5/6 mx-auto text-center p-4 my-40'>
	  <h1>About Page</h1>
	
	</div>
	  {/* Creating Nested Page */}
	  <nav>
		<NavLink to='team' className={isActiveNestedNav}>Our Team</NavLink>
		<NavLink to='companey' className={isActiveNestedNav}>Our Companey</NavLink>
		{/* Render Nested Routes */}
		<Outlet />
	  </nav>
	  </>
  )
}

export default About
