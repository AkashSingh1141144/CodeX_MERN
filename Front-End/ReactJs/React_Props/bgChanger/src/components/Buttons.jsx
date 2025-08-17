import React, { useState } from 'react'

function Buttons() {
	const [color, setColor] = useState("#242424")

	const oranged = () => {
		setColor("orange")
	}

	const red = () => {
		setColor("red")
	}

	const green = () => {
		setColor("green")
	}

	const blue = () => {
		setColor("blue")
	}

	const yellow = () => {
		setColor("yellow")
	}

	const black = () => {
		setColor("black")
	}


	const white = () => {
		setColor("white")
	}

	 const pink = () => {
		setColor("pink")
	 }

	 const gray = () => {
		setColor("gray")
	 }
  return (
	<>
	<div className='w-full h-screen ' style={{ backgroundColor: color}}>
	  	<div className='buttons bg-white text-3xl text-black flex p-4 gap-3 text-center rounded-lg w-5/6 mx-auto justify-center font-bold my-5'>
			<button className='rounded-md bg-orange-600 p-1 font-bold border-solid border-black border-2 text-white cursor-pointer' onClick={oranged}>Oranged</button>
			<button className='rounded-md bg-red-700 text-white p-1 border-solid border-black border-2 cursor-pointer' onClick={red}>Red</button>
			<button className='rounded-md bg-green-800 text-white p-1 border-solid border-black border-2' onClick={green}>Green</button>
			<button className='rounded-md bg-blue-600 text-white p-1 border-solid border-black border-2 cursor-pointer' onClick={blue}>Blue</button>
			<button className='rounded-md bg-yellow-500 p-1 text-white border-black border-solid border-2 cursor-pointer' onClick={yellow}>Yellow</button>		
			<button className='rounded-md bg-black text-white p-1 border-white border-solid border-2 cursor-pointer' onClick={black}>Black</button>
			<button className='rounded-md bg-white text-black p-1 border-black border-solid border-2 cursor-pointer' onClick={white}> White</button>
			<button className='rounded-md bg-pink-600 p-1 border-black border-solid border-2 cursor-pointer text-white' onClick={pink}>Pink</button>
			<button className='rounded-md bg-gray-900 p-1 text-white border-solid border-black border-2 cursor-pointer' onClick={gray}>Gray</button>
		</div>
	</div>	
	</>
  )
}

export default Buttons
