import '../styles/components/Projects.css'
import { useNavigate } from 'react-router-dom'
import tecnostore from '../assets/tecnostore.png'
import jaypee from '../assets/jaypee.png'


export const proyectos = [
    {
        id: 1,
        state: "Terminado",
        img: tecnostore,
        titulo: "Tecnostore",
        tituloLargo: "Tecno Store – Plataforma de E-Commerce para Proyecto Final",
        descripcion: "E-Commerce de hardware y componentes de PC con catálogo dinámico, sistema de filtrado avanzado y gestión de usuarios. Desarrollado con el stack MERN (React, Node, Express y MongoDB), incorporando una interfaz moderna en Dark Mode optimizada para la conversión y una arquitectura de datos escalable.",
        descripcionLarga: `Esta aplicación es una plataforma integral de comercio electrónico diseñada para el mercado de componentes de PC y hardware de alto rendimiento. El proyecto fue creado con el objetivo de aplicar un flujo de desarrollo Full Stack moderno: desde el modelado de datos en bases de datos NoSQL y la arquitectura de una API escalable, hasta una interfaz de usuario de alto impacto visual. El sistema permite a los usuarios explorar un catálogo técnico, gestionar su carrito de compras y administrar su perfil de cliente de forma segura.
        La aplicación está organizada bajo la arquitectura MERN (MongoDB, Express, React y Node.js), lo que permite una separación clara entre el servidor de datos y la lógica de cliente. Incluye navegación fluida entre categorías, sistemas de filtrado avanzados por precio y marca, y una experiencia de usuario optimizada mediante un diseño Dark Mode que resalta la estética de los productos tecnológicos. Se implementó un robusto sistema de autenticación y autorización mediante JWT para proteger los datos de los usuarios y controlar el acceso a las funciones de compra.
        A nivel de funcionalidad, el usuario puede navegar por el catálogo de productos, acceder a vistas de detalle con especificaciones técnicas y gestionar su carrito de compras en tiempo real. Por otro lado, el sistema cuenta con un panel de administración para el control de contenido: alta, baja y modificación de productos (CRUD), gestión de categorías y actualización de precios, asegurando que la tienda refleje siempre el stock y las ofertas vigentes.`,
        features: [
            "Autenticación Completa: Sistema de registro, login y persistencia de sesión segura para usuarios.",
            "Catálogo Dinámico: Listado de productos con filtros avanzados y búsqueda en tiempo real.",
            "Gestión de Carrito: Flujo de selección de productos con cálculo automático de totales y gestión de cantidades.",
            "Panel de Administración: Pantallas dedicadas para la gestión del catálogo, categorías y control de usuarios.",
            "Interfaz de Alto Impacto: Diseño responsivo desarrollado con Tailwind CSS, priorizando la estética gamer y profesional.",
            "Arquitectura de Datos: Uso de Mongoose para el modelado de productos con relaciones complejas y validaciones estrictas.",
            "Persistencia en la Nube: Integración con bases de datos en la nube y servicios de hosting para asegurar la disponibilidad 24/7.",
            "Interacción Dinámica: Uso de Hooks avanzados y manejo de estado global para una navegación rápida sin recargas de página."
        ],
        techs: ["React.js", "Context API", "Tailwind CSS", "React Router", "Node.js", "Express", "Mongoose", "MongoDB", "JSON", "Cloudinary", "Postman" ],
        linkFrontend: "https://github.com/Joaco004/Proyecto-final-frontend",
        linkBackend: "https://github.com/Joaco004/Proyecto-final-backend",
        deploy: ""
    },
    {
        id: 2,
        state: "En curso",
        img: jaypee,
        titulo: "Jaypee",
        tituloLargo: "Jaypee – Plataforma Web de Pedidos Gastronómicos",
        descripcion: "Plataforma web de pedidos gastronómicos con catálogo interactivo, gestión de perfiles de usuario y administración de menú en tiempo real. Desarrollada con React.js y Node.js, integrando persistencia de datos y un diseño Mobile-First para optimizar la experiencia de compra del cliente.",
        descripcionLarga: `Esta aplicación es una solución digital diseñada para transformar la interacción entre Jaypee y su comunidad de clientes. El proyecto fue creado con el objetivo de ofrecer un canal de venta directo y una fuente oficial de información, aplicando un flujo completo de desarrollo web: desde la arquitectura del servidor y la persistencia de datos hasta una interfaz de usuario atractiva y optimizada para dispositivos móviles. El sistema permite a los usuarios explorar nuestra propuesta gastronómica, conocer nuestra historia y realizar pedidos de manera ágil y sencilla.
        La aplicación está organizada en módulos y pantallas para separar claramente las responsabilidades.Incluye navegación por secciones(Inicio, Menú, Nosotros, Contacto), listados con filtros por categorías, vistas de detalle de cada producto y un flujo de checkout intuitivo.Se implementó un sistema de autenticación y autorización para permitir que los clientes frecuentes guarden sus preferencias y accedan a un historial de sus compras, diferenciando estas funciones del panel de administración básico.
        A nivel de funcionalidad, el usuario puede explorar el menú completo de hamburguesas, ingresar a la vista de detalle para ver ingredientes y sumar productos a su pedido personal.Además, la plataforma sirve como el centro de información oficial del emprendimiento, integrando datos de contacto, ubicación y redes sociales.Por otro lado, el administrador cuenta con pantallas para gestionar el contenido público: alta, baja y modificación de los productos del menú, precios y categorías para mantener la carta siempre actualizada.`,
        features: [
            "Autenticación de Clientes: Registro, inicio de sesión y manejo de perfil de usuario para una experiencia personalizada.",
            "Menú Digital Interactivo: Catálogo completo de productos con filtros por categorías (Burgers, Bebidas, Combos).",
            "Gestión de Pedidos: Carrito de compras dinámico que permite armar el pedido y enviarlo directamente para su procesamiento." ,
            "Sección Informativa: Espacio dedicado a la identidad de Jaypee, facilitando el acceso a canales de contacto y redes sociales.",
            "Panel de Administración (Menú): Interfaz para actualizar la oferta gastronómica, precios y disponibilidad de productos en tiempo real.",
            "Persistencia de Datos: Base de datos robusta para el almacenamiento de usuarios, catálogo de productos y registros de pedidos.",
            "Diseño Mobile-First: Interfaz totalmente responsiva, pensada para que el usuario pueda realizar su pedido cómodamente desde su celular mientras está en movimiento."
        ],
        techs: ["React.js", "Mobile-First Design", "Axios", "CSS Modules / Styled Components", "Node.js", "Express", "Zod", "Bcrypt", "GitHub", "Git", "Vercel", "Render", "MongoDB"],
        link: "https://github.com/Joaco004/Proyecto-Jaypee",
        deploy: "Process..."
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