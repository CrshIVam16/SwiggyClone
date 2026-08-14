import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Body from './components/Body'
import RestaurantMenu from './components/RestaurantMenu'
import { Cart } from '@boxicons/react'
import { Visibility } from './context/contextApi'

function App() {

  const [visible, setVisible] = useState(true);

  return (
    <Visibility.Provider value={{ visible, setVisible }}>
      <div className={visible ? "max-h-screen " : ""}>
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
  )
}

export default App