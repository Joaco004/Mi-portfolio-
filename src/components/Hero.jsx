import foto from '../assets/foto-perfil.png'
import '../styles/components/Hero.css'

const Hero = () => {

    return(
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1>Transformo ideas de negocio en <span className="accent">software de alto rendimiento</span></h1>
                <p className="hero-description">Desarrollador Full Stack apasionado por construir soluciones digitales completas y eficientes. Con un enfoque sólido en React para interfaces de usuario intuitivas y de alto rendimiento, y en Node.js para arquitecturas de backend robustas y escalables. Me especializo en llevar proyectos desde la conceptualización hasta la implementación y el despliegue, combinando la mejor experiencia de usuario con una sólida lógica de servidor. Mi objetivo es crear software que no solo funcione, sino que impulse el éxito del negocio.</p>

                <div className="hero-buttons">
                <button className="btn-primary"><a href="#projects">Mis proyectos</a></button>
                <a href="https://wa.me/5491122900283" target="_blank" rel="noreferrer">
                    <button className="btt-contact">Contactarme</button>
                </a>
                </div>
            </div>

            <div className="hero-img">
                <img src={foto} alt="Joaquin Garinei" />
            </div>
            
            
        </section>

    )
}

export default Hero;