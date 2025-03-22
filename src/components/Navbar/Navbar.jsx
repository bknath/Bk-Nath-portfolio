import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import ThemeToggle from './ThemeToggle';
import './../../assets/styles/Navbar.scss';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const [activeSection, setActiveSection] = useState("#home");

    // Handle Navbar background change on scroll
    useEffect(() => {
        const handleNavbarScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleNavbarScroll);
        return () => window.removeEventListener('scroll', handleNavbarScroll);
    }, []);

    // Scroll to section when clicking a link
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -80; // Offset for fixed navbar
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setActiveSection(`#${id}`);
        }
    };

    // Update active section based on scroll position
    useEffect(() => {
        const sections = ["hero", "about", "projects", "services", "resume"];
        
        const handleScroll = () => {
            let currentSection = "#hero"; // Default

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const sectionTop = section.getBoundingClientRect().top;
                    if (sectionTop < window.innerHeight / 2) {
                        currentSection = `#${id}`;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogoClick = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div>
            <nav className={`navbar p-4 flex justify-evenly items-center position-sticky top-0 z-50 ${scrolled ? 'setnavbg' : ''}`}>
                <h2 className='logo text-xl font-bold'>
                    <Link to="/" onClick={handleLogoClick}>BKnath</Link>
                </h2>
                <ul className='navlinks flex gap-8'>
                    <li><Link to="/#home" onClick={() => handleScroll("hero")} className={activeSection === "#hero" ? 'active' : ''}>Home</Link></li>
                    <li><Link to="/#about" onClick={() => handleScroll("about")} className={activeSection === "#about" ? 'active' : ''}>About Us</Link></li>
                    <li><Link to="/#projects" onClick={() => handleScroll("projects")} className={activeSection === "#projects" ? 'active' : ''}>Projects</Link></li>
                    <li><Link to="/#services" onClick={() => handleScroll("services")} className={activeSection === "#services" ? 'active' : ''}>Services</Link></li>
                    <li><Link to="/#resume" onClick={() => handleScroll("resume")} className={activeSection === "#resume" ? 'active' : ''}>Resume</Link></li>
                </ul>
                <div className='navlinks2 flex items-center'>
                    <Button variant="outline" className="cursor-pointer">Contact Me</Button>
                    <ThemeToggle />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
