import React from 'react'

function ChildA({onMessageChange}) {
  return (
	<div className='flex flex-col items-center justify-center mt-4 text-black'>
	  <input type="text"
	  placeholder='type message here'
	   className='p-2 border border-gray-300 rounded-md w-1/2 text-center text-black font-bold'
	  onChange={(e) => onMessageChange(e.target.value)}
	   />
	</div>
  )
}

export default ChildA
