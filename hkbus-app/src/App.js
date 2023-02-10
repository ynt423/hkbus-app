import React from 'react'
import index from './index'
import map from './map'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link><br />
      <Link to="/map">Map</Link>
    <Routes>
      <Route path="/" element={<index />} />
      <Route path="/map" element={<map />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>    
    </BrowserRouter>
  )
}
