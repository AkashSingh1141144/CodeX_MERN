import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Sill from "./components/Sill"
import Project from "./components/Project"


function App() {


  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/skill" element = {<Sill />} />
          <Route path="/project" element = {<Project />} />
        </Routes>
      </div>
    </>
  )
}

export default App
