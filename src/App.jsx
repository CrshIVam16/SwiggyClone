import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Body from './components/Body'

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Navbar />}>
    //     {/* <Route path="/" element={<Body />} /> */}
    //   </Route>
    // </Routes>
    <>
      <Navbar />
      <Body />
    </>
  )
}

export default App