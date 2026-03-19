import '../styles/Proyects.css'
import tecnostore from '../assets/tecnostore.png'
import jaypee from '../assets/jaypee.png'


const proyectos = [
    {
        id: 1,
        state: "Terminado",
        img: tecnostore,
        titulo: "",
        descripcion: "",
        techs: [],
    },
    {
        id: 2,
        state: "En curso",
        img: jaypee,
        titulo: "",
        descripcion: "",
        techs: [],
    }

]

const Projects = () => {
    return (
        <section id="projects" className="projects">
            {proyectos.map((proyecto) => (
                <div className='project-box' key={proyectos.id}>
                    <div className="project-img">
                        <img src={proyecto.img} alt={proyecto.titulo} />
                    </div>
                    <div className="prject-info">
                        <span className="project-state">{proyecto.state}</span>
                        <h3>{proyecto.titulo}</h3>
                        <p>{proyecto.descripcion}</p>
                        <div className="project-techs">
                            {proyecto.techs.map((tech, index) => (
                                <span key={index}>{techs}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section >
    )
}

export default Projects;