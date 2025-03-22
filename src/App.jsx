import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'


const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
        </div>
    )
}

export default App
