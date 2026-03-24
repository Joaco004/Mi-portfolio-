import '../styles/components/Contact.css'
import { MdEmail } from 'react-icons/md'
import { FaWhatsapp, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

const contactos = [
    {
        id: 1,
        icon: <MdEmail />,
        label: "EMAIL",
        valor: "jgarinei@gmail.com",
        link: "mailto:jgarinei@gmail.com"
    },
    {
        id: 2,
        icon: <FaWhatsapp />,
        label: "WHATSAPP / TELÉFONO",
        valor: "+54 9 11 22900283",
        link: "https://wa.me/5491122900283"
    },
    {
        id: 3,
        icon: <FaLinkedin />,
        label: "LINKEDIN",
        valor: "https://www.linkedin.com/in/joaquin-garinei-892654304/",
        link: "https://www.linkedin.com/in/joaquin-garinei-892654304/"
    },
    {
        id: 4,
        icon: <FaGithub />,
        label: "GITHUB",
        valor: "https://github.com/Joaco004",
        link: "https://github.com/Joaco004"
    },
    {
        id: 5,
        icon: <FaMapMarkerAlt />,
        label: "UBICACIÓN",
        valor: "Argentina",
        link: null
    }
]
const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h1>CONTACTAME</h1>

            <div className="container-box">
                <div className="contact-box">
                    <div className="info">
                        <h2>Contactame</h2>
                        <p>Estoy abierto a nuevas oportunidades y desafíos técnicos donde pueda aportar mis conocimientos. Si buscás un desarrollador comprometido con la escalabilidad y la calidad del software, no dudes en contactarme.</p>
                        <div className="disponible">
                            <span className="dot"></span>
                            Disponible
                        </div>

                    </div>
                    <div className="info-grid">
                        {contactos.map((item) => (
                            item.link ? (
                                <a href={item.link} target="_blank" rel="noreferrer" className="contact-card" key={item.id}>
                                    <div className="contact-icon">{item.icon}</div>
                                    <div className="contact-info">
                                        <span className="contact-label">{item.label}</span>
                                        <p>{item.valor}</p>
                                    </div>
                                </a>
                            ) : (
                                <div className="contact-card" key={item.id}>
                                    <div className="contact-icon">{item.icon}</div>
                                    <div className="contact-info">
                                        <span className="contact-label">{item.label}</span>
                                        <p>{item.valor}</p>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contact;