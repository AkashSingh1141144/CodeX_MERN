import { createContext , useState} from "react"
import ChildA from './components/ChildA'
import ChildB from './components/ChildB'
import ChildC from './components/ChildC'
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({name: "Sandhya", age: 23, boyfriend: "Akash Singh"});

  return (
    <>
    <div className="font-bold text-center my-40 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 text-white p-10 rounded-lg shadow-lg w-5/6">
      <UserContext.Provider value={user}>
        <h1 className="text-4xl">useContext Hook</h1>
        <p className="text-2xl pt-3 text-gray-700">Context API is used to pass data through the component tree without passing props down manually at every level.</p>
        <p className="text-2xl pt-1 text-gray-700">It is useful for global data that many components need access to, such as user authentication, themes, or language settings.</p>
        
        {/* Components that will consume the context */}
        <div className="text-xl text-green-500 font-bold my-3 ">
        <ChildA />
        <ChildB />
        <ChildC />  
        </div>
      </UserContext.Provider>
      </div>
    </>
  )
}

export { UserContext };
export default App
