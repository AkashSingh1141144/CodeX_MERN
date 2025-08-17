import UserInfo from "./components/UserInfo"

function App() {
 

  return (
    <>
      <h1 className="text-9xl font-serif font-bold text-center mt-16">ASsu.<span className="bg-orange-600 p-2 rounded-md text-white">Dev</span></h1>
      <div className="flex flex-col items-center justify-center mt-10 bg-slate-700 p-10 rounded-lg shadow-lg w-3/4 mx-auto text-white font-serif font-bold">
        <UserInfo />
        <p className="text-center text-2xl font-serif font-bold mt-10">Welcome to my React App</p>
      </div>
    </>
  )
}

export default App
