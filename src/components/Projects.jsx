import '../styles/components/Projects.css'
import { useNavigate } from 'react-router-dom'
import tecnostore from '../assets/tecnostore.png'
import jaypee from '../assets/jaypee.png'
import labristol from '../assets/labristol.png'
import ryze from '../assets/ryze.png'
import nbgn from '../assets/nbgn.png'


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
        techs: ["React.js", "Context API", "Tailwind CSS", "React Router", "Node.js", "Express", "Mongoose", "MongoDB", "JSON", "Cloudinary", "Postman"],
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
            "Gestión de Pedidos: Carrito de compras dinámico que permite armar el pedido y enviarlo directamente para su procesamiento.",
            "Sección Informativa: Espacio dedicado a la identidad de Jaypee, facilitando el acceso a canales de contacto y redes sociales.",
            "Panel de Administración (Menú): Interfaz para actualizar la oferta gastronómica, precios y disponibilidad de productos en tiempo real.",
            "Persistencia de Datos: Base de datos robusta para el almacenamiento de usuarios, catálogo de productos y registros de pedidos.",
            "Diseño Mobile-First: Interfaz totalmente responsiva, pensada para que el usuario pueda realizar su pedido cómodamente desde su celular mientras está en movimiento."
        ],
        techs: ["React.js", "Mobile-First Design", "Axios", "CSS Modules / Styled Components", "Node.js", "Express", "Zod", "Bcrypt", "GitHub", "Git", "Vercel", "Render", "MongoDB"],
        link: "https://github.com/Joaco004/Proyecto-Jaypee",
        deploy: "Process..."
    },
    {
        id: 3,
        state: "Terminado",
        img: ryze,
        titulo: "Ryze Agency",
        tituloLargo: "Ryze Agency – Landing Page de Agencia de Marketing Digital",
        descripcion: "Landing page profesional para una agencia de marketing digital con diseño dark mode, animaciones al scroll, integración directa con WhatsApp y secciones de servicios, precios y testimonios. Desarrollada con React.js y Vite, con foco en UX/UI moderna y conversión de clientes.",
        descripcionLarga: `Ryze Agency es una agencia de marketing digital especializada en hacer crecer marcas a través de estrategias, contenido y resultados reales. Este proyecto consistió en el desarrollo completo de su presencia web, con el objetivo de generar confianza, comunicar su propuesta de valor y convertir visitantes en clientes potenciales de forma directa a través de WhatsApp.
        La arquitectura del proyecto está basada en React.js con Vite como bundler, organizando la aplicación en componentes independientes con sus propios CSS Modules. Se implementó un custom hook useInView basado en IntersectionObserver para disparar animaciones suaves al hacer scroll, logrando una experiencia fluida y profesional sin depender de librerías externas de animación.
        El sitio incluye un hero con partículas animadas en CSS puro y título con gradiente animado, secciones de servicios en grid responsivo, planes de precios con características detalladas, métricas de resultados animadas, testimonios de clientes reales y un FAQ con acordeón interactivo. Toda la lógica de contacto está centralizada en un archivo config.js con el número de WhatsApp, permitiendo que el formulario de contacto y los botones de cada plan redirijan al usuario directamente a una conversación con mensajes pre-cargados según el contexto, sin necesidad de backend.`,
        features: [
            "Integración con WhatsApp: Todos los CTAs abren WhatsApp con mensajes pre-cargados según el plan o sección, sin backend ni servicios externos.",
            "Animaciones al Scroll: Custom hook useInView con IntersectionObserver para efectos fade-in y slide-up en cada sección.",
            "Hero Animado: Partículas en CSS puro, gradiente animado en el título y fondo con orbes de luz.",
            "Planes de Precios: Tres planes (Basic, Pro, Premium) con features detalladas, precios y CTA directo a WhatsApp por plan.",
            "FAQ Interactivo: Acordeón con animaciones CSS para preguntas frecuentes.",
            "Formulario de Contacto: Captura nombre, email y mensaje, los encodea y abre WhatsApp con los datos del usuario.",
            "Diseño Responsivo: Mobile-first con menú hamburguesa, grids adaptativos y botón flotante de WhatsApp fijo en pantalla.",
        ],
        techs: ["React.js", "Vite", "JavaScript", "CSS Modules", "React Icons", "React Scroll", "Mobile-First Design", "Git", "GitHub", "Vercel"],
        link: "https://github.com/Joaco004/ryze-web.git",
        deploy: "https://ryze-web.vercel.app/"
    },
    {
        id: 4,
        state: "Terminado",
        img: labristol,
        titulo: "La Bristol",
        tituloLargo: "La Bristol – Sitio Web Oficial de E-Sports (Proyecto Personal)",
        descripcion: "Proyecto personal desarrollado para sumar al portfolio. Sitio web oficial del equipo de e-sports La Bristol con perfiles de jugadores, panel de administración y tienda de merchandising. Desarrollado con React.js y Node.js, integrando Cloudinary para gestión de imágenes y MongoDB para persistencia de datos.",
        descripcionLarga: `La Bristol es el sitio web oficial de un equipo de e-sports argentino, desarrollado como proyecto personal para sumar al portfolio y aplicar tecnologías full stack en un caso de uso real. El proyecto abarca desde la arquitectura del servidor y la base de datos hasta una interfaz gaming de alto impacto con animaciones GSAP, deployado con frontend en Hostinger y backend en Render.
        El sitio está organizado en múltiples secciones y rutas: una landing principal con hero animado, sección "Sobre nosotros", estadísticas del equipo y previews de jugadores y merchandise. La página del equipo presenta a los 12 integrantes en un grid compacto con cards interactivas, y cada jugador cuenta con su propia página de detalle con imagen de fondo personalizada, biografía, características y estadísticas individuales.
        A nivel de funcionalidad, el administrador accede a un panel privado en una ruta secreta donde puede gestionar jugadores (agregar, editar, eliminar, subir avatar y foto de fondo) y productos de la tienda (agregar, editar, eliminar, subir imágenes con carrusel). Toda la gestión de imágenes se realiza mediante Cloudinary, lo que permite actualizar el contenido de la web en tiempo real sin necesidad de un nuevo build. La sección de merchandising está preparada como base para un e-commerce completo a futuro, con carrito de compras funcional en estado local.`,
        features: [
            "Perfiles de Jugadores: Página de detalle por jugador con foto de fondo personalizada, biografía, características y estadísticas individuales.",
            "Panel de Administración: Ruta secreta con autenticación JWT para gestión completa de jugadores y productos sin tocar el código.",
            "Gestión de Imágenes con Cloudinary: Subida de avatar y foto de fondo por jugador, y carrusel de imágenes por producto desde el panel admin.",
            "Tienda de Merchandising: Grid de productos con carrusel de imágenes, carrito de compras y drawer lateral con total, preparado para e-commerce real.",
            "Animaciones GSAP: Efectos de entrada, ScrollTrigger en cards de jugadores, contadores animados en stats y transiciones entre páginas.",
            "Diseño Gaming de Élite: Estética dark con acento cyan, tipografía agresiva y efectos de hover avanzados al nivel de equipos profesionales.",
            "API REST Completa: Backend con Express y MongoDB que gestiona jugadores y productos, con endpoints públicos y protegidos por JWT."
        ],
        techs: ["React.js", "TypeScript", "Vite", "GSAP", "Node.js", "Express", "MongoDB", "Mongoose", "Cloudinary", "JWT", "Bcrypt", "Git", "GitHub", "Hostinger", "Render"],
        link: "https://github.com/Joaco004/La-Bristol.git",
        deploy: "https://labristol.site"
    },
    {
        id: 5,
        state: "En Curso",
        img: nbgn,
        titulo: "Norberto González",
        tituloLargo: "Norberto González – Panel de Gestión Inmobiliaria",
        descripcion: "Sistema web de administración inmobiliaria con gestión de propiedades, vendedores y contactos en tiempo real. Desarrollado con React.js y Node.js, integrando autenticación JWT, almacenamiento de fotos en la nube y un diseño limpio orientado a la productividad del equipo de ventas.",
        descripcionLarga: `Este sistema es una solución digital completa diseñada para reemplazar y superar el panel de gestión anterior de la inmobiliaria Norberto González, ubicada en la zona de Tres de Febrero, Buenos Aires. El proyecto fue desarrollado con foco en seguridad, usabilidad y escalabilidad, aplicando un flujo completo de desarrollo full stack: desde la arquitectura de la API REST y la persistencia de datos en MongoDB hasta una interfaz moderna y responsive que permite gestionar el inventario de propiedades de forma eficiente.
        El sistema está organizado en módulos claramente separados que cubren todas las necesidades operativas de la inmobiliaria. Incluye un panel de administración con acceso por roles, gestión completa de propiedades con filtros avanzados, carga de fotos ilimitadas en la nube, un centro de registros de actividad y una API pública lista para conectarse a la web existente de la inmobiliaria.
        A nivel de funcionalidad, los vendedores pueden cargar nuevas propiedades con toda su información detallada, subir fotos, editar datos existentes y gestionar el estado de cada propiedad. El administrador cuenta además con un centro de registros donde puede ver en tiempo real quién realizó cada acción, cuándo y sobre qué propiedad. El sistema también recibe y gestiona las consultas que llegan desde la web pública, permitiendo hacer seguimiento de cada lead con estados personalizables.
        La API REST construida en Node.js está diseñada para ser consumida tanto por el panel interno como por la web pública de la inmobiliaria, permitiendo que cualquier cambio realizado en el panel se refleje automáticamente en la web sin intervención técnica adicional.`,
        features: [
            "Autenticación JWT: Sistema de login seguro con tokens de 30 días, protección de rutas y middleware de autorización por rol.",
            "Gestión de Propiedades: CRUD completo con campos detallados como tipo, operación, precio, superficie, ambientes, cochera y más.",
            "Filtros Avanzados: Búsqueda por zona, tipo, operación, estado y ordenamiento por fecha o precio ascendente/descendente.",
            "Gestión de Vendedores: El administrador puede crear, activar, desactivar y eliminar cuentas de vendedores desde el panel.",
            "Centro de Registros: Historial completo de acciones con nombre del vendedor, detalle del cambio y fecha/hora exacta.",
            "Gestión de Contactos: Recepción y seguimiento de consultas desde la web pública con estados personalizables (pendiente, respondido, descartado).",
            "Gestión de Zonas: Alta y baja de localidades para categorizar propiedades por barrio o partido.",
            "API REST Pública: Endpoints documentados y listos para conectar la web existente de la inmobiliaria sin modificar su código.",
            "Almacenamiento en la nube: Fotos ilimitadas por propiedad almacenadas en Amazon S3.",
            "Seguridad robusta: Rate limiting, headers de seguridad con Helmet, CORS estricto y validación de inputs con Zod."
        ],
        techs: ["React.js", "TypeScript", "Vite", "React Router DOM", "Zustand", "Axios", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Bcrypt", "Amazon S3", "Zod", "Helmet", "Git", "GitHub", "Railway"],
        link: "https://github.com/Joaco004/norberto-gonzalez-db-frontend.git",
        deploy: "Process..."

    },
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