import React, { useContext } from 'react'
import { UserContext } from '../App'

function ChildC() {
  const user = useContext(UserContext);
  return (
	<div>
	  <h1>Hello ji: {user.name}</h1>
	  <h2>Age: {user.age}</h2>
	</div>
  )
}

export default ChildC
