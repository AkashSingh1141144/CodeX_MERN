import React from 'react'

function UserProfileCard({name, age, bio, image}) {
	
  return (
	<>
	  <div className='flex flex-col items-center justify-center h-screen'>
		<h1 className='text-6xl font-bold text-center my-16 bg-orange-600 w-5/6 mx-auto p-2 rounded-md'>Titans Profile <span>Card</span></h1>
		<div className='bg-slate-50 h-full border-orange-600 border-solid border-2 rounded-md w-80'>
		<img src={image} alt="image" className='object-contain w-auto h-44'/>
		<h2 className='text-4xl font-bold text-black text-center'>{name}</h2>
		<h2 className='text-3xl font-bold text-black p-3 text-center'>Age: {age}</h2>
		<p className='font-bold text-center text-gray-700 text-2xl'>{bio}</p>
		</div>
	  </div>
	</>
  )
}

export default UserProfileCard
