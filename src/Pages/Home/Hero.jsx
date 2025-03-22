import { assets } from '@/assets/assets'
import React from 'react'
import './../../assets/styles/Hero.scss'
import "./../../assets/styles/Animation.scss";
import { Button } from '@/components/ui/button'

const Hero = () => {
    return (
        <div className="wrapper-home-section">
            <div className="content flex flex-col items-center justify-center text-center">
                <img src={assets.heroImg} alt="Profile" className="w-40 h-40 rounded-full border-4 border-white shadow-lg animation-fadeindown" />
                <h1 className="namehead text-4xl font-bold mt-4 animation-fadeindown">Bishal Kumar Nath</h1>
                <h3 className='designation'>Web Developer</h3>
                <p className='intropara font-medium mt-2 w-1/2 animation-fadeinup'>As a passionate data scientist, with expertise in machine learning, AI, and data analytics, I thrive on the challenges of exploring complex data landscapes and uncovering meaningful patterns that drive innovation</p>
                <Button variant="outline" size="secondary" className="mt-8 cursor-pointer animation-fadeinup">Contact Me</Button>
            </div>
        </div>
    )
}

export default Hero
