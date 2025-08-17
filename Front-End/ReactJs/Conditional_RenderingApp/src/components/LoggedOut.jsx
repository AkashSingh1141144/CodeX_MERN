import React from 'react'

function LoggedOut({userName}) {
  return (
	<div className='text-center my-4'>
			<h1 className='text-white'>Welcome: <span className='text-orange-500  font-bold'>{userName}</span> you are successfully Logged In.</h1>
			<button className='bg-gradient-to-tr from-slate-500 to-gray-200 rounded-md p-2 my-4 text-gray-800 text-2xl'>LoggOut</button>
	</div>
  )
}

export default LoggedOut
