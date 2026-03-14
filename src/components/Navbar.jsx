import logo from '../assets/logo.png'
import '../styles/Navbar.css'


const Navbar = () => {
    return(
        <div className="navbar-logo">
            <img src={logo} alt="logo" />
            <h1> Joaquin Garinei <span className="accent">Full Stack Developer</span></h1>
        </div>
    )
}

export default Navbar;