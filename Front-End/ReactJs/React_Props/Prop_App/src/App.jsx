import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Sandhya",
    age: 22, 
    city: "Mirzapur"
  }
  return (
    <>
      <div>
        <h1 className='text-7xl bg-orange-600 text-white font-bold p-4'>React Prop Practice </h1>
      </div>
      <Card username = "Sandhya"/>
      <Card username = "Sakshi"/>
      <Card age = {22}/>
      <Card username = {myObj.username} age = {myObj.age} city = {myObj.city}/>
    </>
  )
}

export default App
