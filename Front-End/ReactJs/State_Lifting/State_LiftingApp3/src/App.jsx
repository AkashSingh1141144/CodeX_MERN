import React, {  useState } from 'react'
import Panel from './components/Panel'

function App() {

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <div className='container mx-auto p-4 w-full h-screen content-center bg-gradient-to-tr from-slate-500 to-slate-300 font-bold'>
        <h1 className='bg-gradient-to-r from-lime-500 to-green-500 w-1/2  text-center p-4 mb-8 mx-auto rounded-md text-4xl font-bold text-white'>About Section </h1>
        <Panel 
          title = "About , Sandhya Singh"
          isActive = {activeIndex === 0}
          onShow = {() => setActiveIndex(0)}
        > Sandhya is from state Ramanagar Uttrakhand and she is my only Girlfriend with no demand and he has fully possesive for me and i am also about her. she is student of BA and preparing for UPSC  </Panel>

        <Panel 
        title= "Madhuri Singh, Chunar"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
        >
          Madhuri is from Chunar and she is my best friend. She is very supportive and always encourages me to do my best. She is currently studying in college and has a keen interest in literature.
        </Panel>
      </div>
    </>
  )
}

export default App
