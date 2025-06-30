import React from 'react';
import './../../assets/styles/Footer.scss';
import { Github , Linkedin} from 'lucide-react';
const Footer = () => {
    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -90;
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className='wrapper-footer-section'>
            <footer>
                <div className="footer-content text-center">
                    <h1 className="footer-heading">
                        Bishal Nath
                    </h1>
                    <p>Web Developer</p>
                    <div className="flex justify-center gap-6 mt-4 mb-6">
                        <a href="https://github.com/bknath" target="_blank" rel="noopener noreferrer">
                            <Github size={24} className="GithubIcon hover:text-blue-400 transition-all duration-300" />
                        </a>
                        <a href="https://linkedin.com/in/bishalnath" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={24} className="LinkedinIcon" />
                        </a>
                    </div>
                    
                    <ul className='flex gap-8 justify-center mt-4 mb-4'>
                        <li><button onClick={() => handleScrollToSection("hero")} className='cursor-pointer'>Home</button></li>
                        <li><button onClick={() => handleScrollToSection("about")} className='cursor-pointer'>About</button></li>
                        <li><button onClick={() => handleScrollToSection("projects")} className='cursor-pointer'>Projects</button></li>
                    </ul>

                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Bishal Nath. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
