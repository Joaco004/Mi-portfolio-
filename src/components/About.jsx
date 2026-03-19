import '../styles/About.css'
import { FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="descrp">
                <h1>SOBRE MÍ</h1>
                <h2>Mi camino en el desarrollo de software</h2>
                <p>Soy Desarrollador Web Full Stack y actualmente curso las carreras de Ingeniería en Sistemas de Información y la Tecnicatura Universitaria en Programación, ambas en la UTN. Mi formación técnica se especializa en el ecosistema de React y Node.js, lo que me permite construir soluciones digitales completas y modernas.
                    Cuento con una sólida base técnica que incluye la certificación como instalador y soporte de sistemas de información obtenida en ITUOM. Esto me brinda una visión integral de la tecnología, desde el hardware y el mantenimiento técnico hasta el diseño y despliegue de aplicaciones web complejas. Durante mi aprendizaje, me he enfocado en la creación de interfaces dinámicas y arquitecturas de backend eficientes, aplicando metodologías que garantizan la escalabilidad del software.
                    Actualmente me encuentro enfocado en el desarrollo Full Stack, creando aplicaciones robustas y trabajando con bases de datos y arquitecturas de capas. Todo lo que desarrollo lo aplico tanto en proyectos personales como en prácticas reales, buscando seguir creciendo profesionalmente y aportar soluciones innovadoras en equipos de desarrollo de alto impacto.
                </p>
                <div className="info-row">
                    <div className="ubi">
                        <h2>Ubicación</h2>
                        <p>Argentina</p>

                    </div>
                    <div className="edu">
                        <h2>Educación</h2>
                        <p>UTN</p>
                    </div>

                </div>

            </div>

            <div className="tech-stack">
                <h1>Tecnologias que utilizo</h1>
                <div className="tech-item"><FaReact /><span>React</span></div>
                <div className="tech-item"><FaNodeJs /><span>Node.js</span></div>
                <div className="tech-item"><SiJavascript /><span>JavaScript</span></div>
                <div className="tech-item"><SiMongodb /><span>MongoDB</span></div>
            </div>

        </section>

    )

}

export default About;