import React from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Contactus from './Contactus'

const Home = () => {
    return (
        <div>
            <div id='hero'><Hero/></div>
            <div id='about'><About/></div>
            <div id='services'><Services/></div>
            <div id='projects'><Projects/></div>
            <div id='contact-us'><Contactus/></div>
        </div>
    )
}

export default Home
