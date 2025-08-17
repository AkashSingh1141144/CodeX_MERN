import React from 'react'

function Skill() {
  return (
	<div className='mx-auto my-36'>
	  <h1 className='text-9xl text-black font-bold text-center bg-gradient-to-br from-green-600 to-blue-500  w-5/6 mx-auto pb-5'>Welcome to my Sills Section</h1>
	  <p className='text-2xl text-gray-800 font-bold text-center my-3'>Here you can find my skills and expertise in various technologies.</p>
	  <ul className='list-disc list-inside text-3xl font-bold text-gray-800 flex mx-auto justify-center my-4'>
	    <li>JavaScript</li>	
		<li>React</li>
		<li>Node.js</li>
		<li>Express</li>
		<li>MongoDB</li>
		</ul>
	</div>
  )
}

export default Skill
