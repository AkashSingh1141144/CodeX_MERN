import React from 'react'

function Panel({ title, isActive, onShow, children }) {
  return (
	<>
	  <section className='panel bg-slate-200 p-4 rounded-md shadow-md mt-3 w-1/3 mx-auto text-black'>
		<h3 className='text-2xl p-2 font-bold text-orange-600'>{title}</h3>
		{isActive ? ( 
			<p className='text-gray-600'> {children} </p>
		 ) : ( 
			<button className='bg-slate-300 text-black font-bold p-2 rounded-md' onClick={onShow}>Show</button>
		  ) }
	  </section>
	</>
  )
}

export default Panel
