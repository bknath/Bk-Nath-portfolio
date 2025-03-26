import React, { useState, useRef, useEffect } from 'react'
import './../../assets/styles/About.scss'
import "./../../assets/styles/Animation.scss";
import { Button } from '@/components/ui/button'
const About = () => {
    const paraRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stops observing after the first trigger
                }
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        if (paraRef.current) {
            observer.observe(paraRef.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <div id='about'>
            <div className='wrapper-about-section'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h2 className='about-heading text-3xl font-bold'>About Me</h2>
                    <p className='get-to-know mt-2 mb-4 bg-gradient-to-r from-sky-400 to-slate-50 bg-clip-text text-transparent'>Get to know me</p>
                    <p ref={paraRef} className={`about-para w-1/2 ${isVisible ? "animation-fadein-up-slow" : "opacity-0"}`}>
                        Hi there! I'm Bishal, a web developer specializing in front-end and back-end development, UI/UX design, and modern web technologies. With a passion for crafting responsive, user-friendly, and high-performing websites, I help businesses build seamless digital experiences that engage users and drive results.
                        <br /> <br />
                        From designing visually stunning interfaces to developing robust web applications, I bring a mix of technical expertise, creativity, and problem-solving skills to every project. Whether it's optimizing performance, enhancing functionality, or integrating cutting-edge technologies, I'm here to transform your ideas into reality.
                        <br /> <br />
                        Let’s collaborate to build web solutions that stand out in today’s digital landscape. Get in touch, and let’s create something amazing!</p>
                    <Button variant="outline" size="secondary" className="mt-6 cursor-pointer">Download Resume</Button>
                </div>
            </div>
        </div>
    )
}

export default About
