import React from 'react'

function ChidB({message}) {
  return (
	<div className='flex flex-col items-center justify-center mt-4'>
	  <p className='text-black font-bold text-2xl'>Message: <span className='text-orange-600 overflow-hidden'>{message}</span>  </p>
	</div>
  )
}

export default ChidB
