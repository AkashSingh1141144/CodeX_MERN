// import About from './components/About'
import { lazy, Suspense } from 'react'

const About = lazy.(() => import(./components/About))

function App() {

  return (
    <>
      <h1 className='text-3xl text-orange-600 font-bold'> Weclom To My Web-App</h1>
      <br />
      <Suspense fallback = {<h2>Loading...</h2>}>
        <About />
      </Suspense>
    </>
  )
}

export default App
