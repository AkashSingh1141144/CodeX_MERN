import { useState } from 'react'
import LoggedOut from './components/LoggedOut'
import LoggedIn from './components/LoggedIn'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  // if (isLoggedIn) {
  //            return (
  //             <LoggedOut userName= "Akash Singh" />
  //            )
  //         } else {
  //           return (
  //             <LoggedIn />
  //           )
  //         }


return (
  <div className='w-1/3 h-auto bg-gradient-to-bl from-green-800 to-blue-800 p-5 text-6xl font-bold text-white rounded-lg shadow-lg shadow-black mx-auto my-48'>
      {isLoggedIn ? <LoggedOut userName= "Akash Singh" /> : <LoggedIn />}
  </div>
) 
}

export default App
