import logo from '../assets/logo.png'
import '../styles/Navbar.css'


const Navbar = () => {
    return(
            <nav className="navbar">
                <div className="navbar-logo">
                <img src={logo} alt="logo" />
                <h1><a href="https://www.linkedin.com/in/joaquin-garinei-892654304/">Joaquin Garinei <span className="accent">Full Stack Developer</span></a></h1>
                </div>

                <ul className="navbar-links">
                    <li><a href="#hero">Inicio</a></li>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>

                <div className="navbar-bottons">
                    <button className="btt-cv">Descargar CV</button>
                    <button className="btt-contact">Contactarme</button>
                </div>
            </nav>
    )
}

export default Navbar;