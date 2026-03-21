import logo from '../assets/logo.png'
import '../styles/components/Navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
                <h1><a href="https://www.linkedin.com/in/joaquin-garinei-892654304/" target="_blank" rel="noreferrer">Joaquin Garinei <span className="accent">Full Stack Developer</span></a></h1>
            </div>

            <ul className="navbar-links">
                <li><a href="#hero">Inicio</a></li>
                <li><a href="#about">Sobre mí</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>

            <div className="navbar-bottons">
                <a href="/cv.pdf" download="CV-Joaquin-Garinei.pdf">
                    <button className="btt-cv">Descargar CV</button>
                </a>
                <a href="https://wa.me/5491122900283" target="_blank" rel="noreferrer">
                    <button className="btt-contact">Contactarme</button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;