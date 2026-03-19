import '../styles/Skills.css'
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiPostgresql, SiMysql } from 'react-icons/si'
import { SiVite, SiPostman, SiVercel } from 'react-icons/si'

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="titulo">
                <h2>Habilidades técnicas</h2>
                <p>Estas son las tecnlogías y herramientas con las que trabajo habitualmente</p>
            </div>

            <div className="front">
                <div className="tech-item"><FaHtml5 /><span>HTML5</span></div>
                <div className="tech-item"><FaCss3Alt /><span>CSS3</span></div>
                <div className="tech-item"><SiJavascript /><span>JavaScript</span></div>
                <div className="tech-item"><SiTypescript /><span>TypeScript</span></div>
                <div className="tech-item"><FaReact /><span>React</span></div>
                <div className="tech-item"><SiTailwindcss /><span>Tailwind</span></div>
            </div>

            <div className="back">
                <div className="tech-item"><FaNodeJs /><span>Node.js</span></div>
                <div className="tech-item"><SiExpress /><span>Express</span></div>
            </div>

            <div className="tools">
                <div className="tech-item"><FaGitAlt /><span>Git</span></div>
                <div className="tech-item"><FaGithub /><span>GitHub</span></div>
                <div className="tech-item"><SiPostman /><span>Postman</span></div>
                <div className="tech-item"><SiVite /><span>Vite</span></div>
                <div className="tech-item"><SiVercel /><span>Vercel</span></div>
            </div>

            <div className="database">
                <div className="tech-item"><SiMongodb /><span>MongoDB</span></div>
                <div className="tech-item"><SiPostgresql /><span>PostgreSQL</span></div>
                <div className="tech-item"><SiMysql /><span>MySQL</span></div>
            </div>
            
        </section>
    )
}

export default Skills;