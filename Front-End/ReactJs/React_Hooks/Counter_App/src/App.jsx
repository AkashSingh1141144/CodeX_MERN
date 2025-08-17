import React from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    if (count < 10 ) {
      setCount(count + 1);
    }
  }

  const decrease = () => {
    if (count > 0) {
      
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className='container bg-slate-800 text-white h-screen w-full flex flex-col justify-center items-center '>
        <h1 className='text-7xl pb-10 font-bold'>Counter App <span className='bg-orange-600 p-5 border-r-4 border-l-4 rounded-2xl'>Made By <span className='text-black'>ASsu.Dev</span></span></h1>
        <div className='flex flex-col'>
          <h2 className='text-4xl font-bold '>Counted Value : <span>{count}</span></h2>
          <br />
          <button className='cursor-pointer bg-slate-600 p-2 rounded-md mb-2' onClick={increase}>Increase</button>
          <button className='cursor-pointer bg-slate-600 p-2 rounded-md' onClick={decrease}>Decrease</button>
        </div>
      </div>
    </>
  )
}

export default App
