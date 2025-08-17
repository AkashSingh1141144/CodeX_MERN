
import React, { useState} from "react"
import ChildA from "./components/ChildA"
import ChildB from "./components/ChildB"

function App() {

  const [message, setMessage] = useState("")

  return (
    <>
     <div className="w-5/6 mx-auto my-56 h-auto bg-gradient-to-r from-green-500 to-blue-500 p-5 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold  text-white text-center my-8">State Lifting Example</h1>
        <ChildA messageOnChnange = {setMessage} />
        <ChildB message = {message} />
     </div>
    </>
  )
}

export default App
