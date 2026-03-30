import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import ThemeToggle from './ThemeToggle';
import './../../assets/styles/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    // const location = useLocation();
    const [activeSection, setActiveSection] = useState("#home");

    // Handle Navbar background change on scroll
    useEffect(() => {
        const handleNavbarScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleNavbarScroll);
        return () => window.removeEventListener('scroll', handleNavbarScroll);
    }, []);

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -80; // Offset for fixed navbar
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
    
            // Manually set active section
            setActiveSection(`#${id}`);
        }
    };
    
    const detectActiveSectionOnScroll = () => {
        const sections = ["hero", "about", "services", "projects", "contact"];
        let active = null;
    
        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                const { top, bottom } = section.getBoundingClientRect();
                
                // Check if section is in viewport
                if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
                    active = `#${id}`;
                }
            }
        });
    
        // Only update if a section is found
        if (active && active !== activeSection) {
            setActiveSection(active);
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", detectActiveSectionOnScroll);
        return () => window.removeEventListener("scroll", detectActiveSectionOnScroll);
    }, [activeSection]);
    

    const handleLogoClick = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const handleResumeClick = () => {
        window.open("/resume.pdf", "_blank");
    }

    return (
        <div>
            <nav className={`navbar p-4 flex justify-evenly items-center position-sticky top-0 z-50 ${scrolled ? 'setnavbg' : ''}`}>
                <h2 className='logo text-xl font-bold'>
                    <Link to="/" onClick={handleLogoClick}>BKnath</Link>
                </h2>
                <ul className='navlinks flex gap-8'>
                    <li><Link to="/#home" onClick={() => handleScrollToSection("hero")} className={activeSection === "#hero" ? 'active' : ''}>Home</Link></li>
                    <li><Link to="/#about" onClick={() => handleScrollToSection("about")} className={activeSection === "#about" ? 'active' : ''}>About Us</Link></li>
                    <li><Link to="/#services" onClick={() => handleScrollToSection("services")} className={activeSection === "#services" ? 'active' : ''}>Services</Link></li>
                    <li><Link to="/#projects" onClick={() => handleScrollToSection("projects")} className={activeSection === "#projects" ? 'active' : ''}>Projects</Link></li>
                    <li><Link to="/#contact" onClick={() => handleScrollToSection("contact")} className={activeSection === "#contact" ? 'active' : ''}>Contact-Me</Link></li>
                </ul>
                <div className='navlinks2 flex items-center'>
                    <Button variant="outline" className="cursor-pointer" onClick={handleResumeClick}>
                        Resume
                    </Button>
                    <ThemeToggle />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
