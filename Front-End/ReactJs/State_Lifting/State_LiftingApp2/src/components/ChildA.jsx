import React from 'react'

function ChildA({ messageOnChnange}) {
  return (
	<div className='flex flex-col items-center justify-center my-8'>
		<input type="text"
		placeholder='Type Message Here'
		className='w-1/3 p-2 rounded-lg shadow-md text-center font-bold'
		onChange={(e) => messageOnChnange(e.target.value) } />
	</div>
  )
}

export default ChildA
