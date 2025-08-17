import { useState } from "react"
import UserAuth_Context from "./components/UserAuth_Context";
import Dashboard from "./components/Dashboard";


function App() {
 const [user, setUser] = useState(null);

 const login = () => setUser({ name: 'Akash Singh', role: 'Admin', email: 'akashakash@gmail.com', girlfriend: 'Madhuri'});
 const logout = () => setUser(null);

  return (
    <>
      <div>
        <UserAuth_Context.Provider value={{ user, login, logout}}>
  
          <Dashboard />
        </UserAuth_Context.Provider>
      </div>
    </>
  )
}

export default App
