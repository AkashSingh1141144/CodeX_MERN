import { useState } from "react"
import TheameContext from "./components/TheameContext";
import Header from "./components/Header";
import Page from "./components/Page";


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev => prev === "light" ? "dark" : "light"));
  }

   const backgroundClass = theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white';
  return (
    <>
      <TheameContext.Provider value={{theme, toggleTheme}} >
        <div className={`min-h-screen p-4 transition-all duration-500  ${backgroundClass}`}>
        <Header />
        <Page />
      </div>
      </TheameContext.Provider>
    </>
  )
}

export default App
