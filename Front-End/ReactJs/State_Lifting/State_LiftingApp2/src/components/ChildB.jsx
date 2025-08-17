import React from 'react'

function ChildB({ message}) {
  return (
	<div className='flex flex-col items-center justify-center my-8'>
	  <p className='text-3xl font-bold text-orange-600 '>Message:  <span className='text-white'>{message}</span></p>
	</div>
  )
}

export default ChildB
