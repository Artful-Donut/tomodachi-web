import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddWeez from './pages/AddWeez';

function App() {


  return (
    <>

      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/addweez" element={<AddWeez />} />
          </Routes>
        
        </BrowserRouter>
      </div>
      

      
    </>
  )
}

export default App
