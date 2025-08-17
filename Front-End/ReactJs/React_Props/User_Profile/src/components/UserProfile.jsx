import React from "react";

function UserProfile({username = "Sandhya Singh", age = 21 , image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FM7O-olnsLB2ow665tw7ego5zoq7XpwkhZVN6yqMr1ZGMSL99K7L6l6Z1ku_nMrc2qw&usqp=CAU"}) {
	return (
		<>
			<div className="flex items-center justify-center h-screen bg-gradient-to-tr from-blue-500 to-purple-500">
				<div className="bg-slate-100 h-auto w-96 flex flex-col items-center justify-center p-4 rounded-lg shadow-md">
					<div>
						<img src= {image} alt="image" className="w-auto rounded-md shadow-md h-auto object-contain" />
						<h1 className="text-orange-600 font-bold pt-4 text-center">Name <span className="bg-orange-600 text-white text-center rounded-md p-2">{username}</span></h1>
						<p className="text-orange-600 font-bold text-center pt-2">Age: <span className="text-black font-serif">{age}</span></p>
					</div>
				<h1 className="text-black text-center">User Profile</h1>
				<p className="text-gray-600 text-center">
					This is a simple user profile component that displays user information.</p>
			</div>
			</div>
		</>
	)
}

export default UserProfile;