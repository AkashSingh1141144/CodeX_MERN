import { useState } from "react"
import Card_Context from "./assets/components/Card_Context";
import Card_Icon from "./assets/components/Card_Icon";
import ProductList from "./assets/components/ProductList";


function App() {
 const [cart, setCart] = useState([]);

 const addToCart = product => setCart([...cart, product])
  return (
    <>
      <div className="bg-gradient-to-tl from-gray-900 to-gray-500 h-auto w-1/3 mx-auto flex flex-col items-center justify-center my-52 rounded-lg p-5 shadow-lg font-bold">
        <Card_Context.Provider value={{ cart, addToCart}}>
          <h1 className="text-4xl">E-commerce Card System</h1>
          <Card_Icon />
          <ProductList />

        </Card_Context.Provider>
      </div>
    </>
  )
}

export default App
