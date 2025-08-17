import React, { useContext } from 'react'
import ChildC from './ChildC'
import { UserContext } from '../App'

function ChildB() {
	const user = useContext(UserContext);
  return (
	<div>
		<h1>Her BoyFriend Name is: {user.boyfriend} </h1>
	  <ChildC />
	</div>
  )
}

export default ChildB
