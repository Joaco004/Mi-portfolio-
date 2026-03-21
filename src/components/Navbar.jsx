import logo from '../assets/logo.png'
import '../styles/components/Navbar.css'
import { useState } from 'react'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
                <h1><a href="https://www.linkedin.com/in/joaquin-garinei-892654304/" target="_blank" rel="noreferrer">Joaquin Garinei <span className="accent">Full Stack Developer</span></a></h1>
            </div>
            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <li><a href="#hero" onClick={() => setMenuOpen(false)}>Inicio</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
                <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a></li>
            </ul>

            <div className="navbar-bottons">
                <a href="/cv.pdf" download="CV-Joaquin-Garinei.pdf">
                    <button className="btt-cv">Descargar CV</button>
                </a>
                <a href="https://wa.me/5491122900283" target="_blank" rel="noreferrer">
                    <button className="btt-contact">Contactarme</button>
                </a>
            </div>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    )
}

export default Navbar;