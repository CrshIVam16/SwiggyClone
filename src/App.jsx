import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Body from './components/Body'
import RestaurantMenu from './components/RestaurantMenu'
import { CartContext, Visibility } from './context/contextApi'
import Cart from './components/Cart'

function App() {

  const [visible, setVisible] = useState(false);
  const [cartData, setCartData] = useState([]);

  function getDataFromLocalStorage() {
    let data = JSON.parse(localStorage.getItem("cartData")) || []
    setCartData(data)
  }

  useEffect(() => {
    getDataFromLocalStorage()
  }, [])

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      <Visibility.Provider value={{ visible, setVisible }}>
        <div className={visible ? "max-h-screen overflow-hidden" : ""}>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Body />} />
              <Route path="/menu/:id" element={<RestaurantMenu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<h1>Coming Soon...</h1>} />
            </Route>
          </Routes>
        </div>
      </Visibility.Provider>
    </CartContext.Provider>
  )
}

export default App