import { useState } from "react";

function UserInfo() {
	const [name, setName] = useState(' Sandhya Singh')
	const [age, setAge] = useState(21)

	let nameChange = () => {
		setName('Akash Singh')
	}
	let incrementAge = () => {
		setAge(age + 1)
	}
	return (
		<>
			<h2 className="text-5xl text-green-500 font-mono">User Information</h2>
			<p>Name: <span className="text-orange-600">{name}</span></p>
			<p>Age: {age} </p>
			<p>Location: </p>
			<button onClick={nameChange} className="bg-slate-800 rounded-sm p-2 cursor-pointer hover:bg-slate-400">Change Name</button>
			<button onClick={incrementAge} className="bg-slate-800 rounded-sm p-2 cursor-pointer mt-2 hover:bg-slate-400">Increament Age</button>
		</>
	)
}

export default UserInfo;