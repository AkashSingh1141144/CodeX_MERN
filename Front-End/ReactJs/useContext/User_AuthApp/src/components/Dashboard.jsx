import React from 'react'
import { useContext } from 'react'
import UserAuth_Context from './UserAuth_Context'

function Dashboard() {
	const {user, login, logout} = useContext(UserAuth_Context)
  return (
	<div className='flex flex-col items-center justify-center h-screen gap-4 bg-gradient-to-tl from-green-700 to-blue-500 text-white font-bold text-xl'>
		<h1 className='text-black text-4xl font-serif'>User Authentication using Context API</h1>
	  {user ? (
		<>
			<div>
				<h1 className='text-2xl'>Welcome {user.name}</h1>
				<h2 className='my-2'>My Jaan <span className='text-2xl text-orange-500 bg-white p-1 rounded-sm '>{user.girlfriend}</span> your also welcome on React App</h2>
				<p>Role: {user.role}</p>
				<p>Email: <span>{user.email}</span></p>
			</div>
			<button className='bg-gradient-to-tr from-slate-800 to-white font-bold p-1 rounded-lg' onClick={logout}>LogOut</button>
		</>
	  ) : (
		<>
			<h1>Please LogIn...</h1>
			<button className='bg-gradient-to-tr from-slate-800 to-white font-bold p-1 rounded-lg ' onClick={login}>LogIn</button>
		</>
	  )}
	</div>
  )
}

export default Dashboard
