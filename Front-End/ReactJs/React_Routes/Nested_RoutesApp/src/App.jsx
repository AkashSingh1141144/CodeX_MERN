import { Route,  Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Project from "./components/Project"
import Team from "./components/Team"
import Companey from "./components/Companey"

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="companey" element={<Companey />} />
          </Route>
          <Route path="/contact" element = {<Contact />} />
          <Route path="/project" element = {<Project />} />
        </Routes>
      </div>
    </>
  )
}

export default App
