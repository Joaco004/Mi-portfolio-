import '../styles/Proyects.css'
import { useNavigate } from 'react-router-dom'
import tecnostore from '../assets/tecnostore.png'
import jaypee from '../assets/jaypee.png'


 export const proyectos = [
    {
        id: 1,
        state: "Terminado",
        img: tecnostore,
        titulo: "Tecnostore",
        descripcion: "",
        descripcionLarga: "",
        techs: [],
        link: "",
        deploy: ""
    },
    {
        id: 2,
        state: "En curso",
        img: jaypee,
        titulo: "Jaypee",
        descripcion: "",
        descripcionLarga: "",
        techs: [],
        link: "",
        deploy: ""
    }

]

const Projects = () => {
    const navigate = useNavigate()

    return (
        <section id="projects" className="projects">
            <div className="titulo">
                <h1>PORTFOLIO</h1>
                <h2>Proyectos</h2>
                <p>Estas son algunos de los proyectos que ya hice o estoy haciendo</p>
            </div>
            <div className="projects-grid">
                {proyectos.map((proyecto) => (
                    <div className='project-box' key={proyecto.id} onClick={() => navigate(`/proyecto/${proyecto.id}`)}>
                        <div className="project-img">
                            <img src={proyecto.img} alt={proyecto.titulo} />
                        </div>
                        <div className="prject-info">
                            <span className="project-state">{proyecto.state}</span>
                            <h3>{proyecto.titulo}</h3>
                            <p>{proyecto.descripcion}</p>
                            <button className="btn-detalle">Ver mas detalles</button>
                            <div className="project-techs">
                                {proyecto.techs.map((tech, index) => (
                                    <span key={index}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Projects;