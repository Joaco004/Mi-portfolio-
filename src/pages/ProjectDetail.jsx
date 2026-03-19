import { useParams, useNavigate } from 'react-router-dom'
import { proyectos } from '../components/Projects'
import '../styles/pages/ProjectDetail.css'

const ProjectDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const proyecto = proyectos.find(p => p.id === parseInt(id))

    if (!proyecto) return <p>Proyecto no encontrado</p>

    return (
        <section className="detail">

            <button className="btn-back" onClick={() => navigate('/')}>
                ← Volver a Proyectos
            </button>

            <div className="detail-header">
                <span className="project-state">{proyecto.state}</span>
                <h1>{proyecto.tituloLargo}</h1>
                <p className="detail-desc">{proyecto.descripcion}</p>
            </div>

            <img src={proyecto.img} alt={proyecto.titulo} className="detail-img" />

            <div className="detail-body">

                <div className="detail-info">
                    <h2>Sobre el Proyecto</h2>
                    <p>{proyecto.descripcionLarga}</p>
                    {proyecto.features && (
                        <ul className="detail-features">
                            {proyecto.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="detail-sidebar">
                    <h2>Tecnologías</h2>
                    <div className="detail-techs">
                        {proyecto.techs.map((tech, index) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </div>

                    {proyecto.link && (
                        <a href={proyecto.link} target="_blank" rel="noreferrer" className="btn-repo">
                            Ver repositorio →
                        </a>
                    )}
                    {proyecto.linkFrontend && (
                        <a href={proyecto.linkFrontend} target="_blank" rel="noreferrer" className="btn-repo">
                            Repositorio Frontend →
                        </a>
                    )}
                    {proyecto.linkBackend && (
                        <a href={proyecto.linkBackend} target="_blank" rel="noreferrer" className="btn-repo">
                            Repositorio Backend →
                        </a>
                    )}
                    {proyecto.deploy && (
                        <a href={proyecto.deploy} target="_blank" rel="noreferrer" className="btn-deploy">
                            Ver proyecto en vivo →
                        </a>
                    )}
                </div>

            </div>

        </section>
    )
}

export default ProjectDetail