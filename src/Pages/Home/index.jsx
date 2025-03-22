import React from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Projects from './Projects'

const Home = () => {
    return (
        <div>
            <div id='hero'><Hero/></div>
            <div id='about'><About/></div>
            <div id='services'><Services/></div>
            <div id='projects'><Projects/></div>
        </div>
    )
}

export default Home
