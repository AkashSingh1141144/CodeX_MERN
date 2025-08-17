import { Route, Routes, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Skill from "./components/Skill"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"



function App() {


  return (
    <>
    <div className="text-black">
        <nav className="flex font-bold bg-gradient-to-tr from-green-600 to-white w-5/6 mx-auto  rounded-md shadow-gray-400 shadow-md">
  <ul className="flex flex-row justify-between w-96 mx-auto">
    <li className="p-4">
      <Link to="/">Home</Link>
    </li>
    <li className="p-4">
      <Link to="/about">About</Link>
    </li>
    <li className="p-4">
      <Link to="/skill">Skills</Link>
    </li>
    <li className="p-4">
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
</nav>
        <Routes>
          <Route path="/" 
           element ={<Home />}
          />
          <Route path="/about"
          element={<About />}
          />
          <Route path="/skill"
          element = {<Skill />}
          
          />
          <Route path="/contact"
          element = {<Contact />}
          />
          <Route path="*"
          element = {<NotFound />}
          />
        </Routes>
        </div>
    </>
  )
}

export default App
