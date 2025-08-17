import React from 'react'

function Contact() {
  return (
	<div>
	  <h1 className='text-9xl text-black font-bold text-center bg-gradient-to-br from-green-600 to-blue-500  w-5/6 mx-auto my-24 rounded-md'>Welcome to my Contact section</h1>
	  <p className='text-4xl text-gray-800 font-bold text-center'>Feel free to reach out to me via email or phone.</p>
	  <ul className='list-disc list-inside text-3xl font-bold text-gray-800 flex mx-96 my-4'>
	    <li>Email: </li>
		<li>Phone: </li>
		<li>LinkedIn: </li>
		<li>GitHub: </li>
	  </ul>
	  <p className='text-2xl text-gray-600 text-center font-bold'>I look forward to hearing from you!</p>
	</div>
  )
}

export default Contact
