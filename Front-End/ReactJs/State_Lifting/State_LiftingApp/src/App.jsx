import React, { useState } from 'react';
import ChildA from './components/ChildA';
import ChidB from './components/ChidB';

function App() {
const [message, setMessage] = useState('');

  return (
    <>
      <div className='bg-slate-300 h-auto w-5/6 mx-auto my-10 p-5 rounded-lg shadow-lg'>
        <h1 className='text-center font-bold text-6xl text-white bg-gradient-to-r from-indigo-500 to-blue-500 p-4 w-3/4 rounded-md mx-auto '>State Lifting Example</h1>
        <ChildA onMessageChange = {setMessage} />
         <ChidB message = {message} />
      </div>
    </>
  )
}

export default App
