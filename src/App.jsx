import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './components/Footer/Footer'


const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}

export default App
