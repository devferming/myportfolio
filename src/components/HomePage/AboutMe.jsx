import React from 'react'
import './styles/AboutMe.css'

const AboutMe = () => {
  return (
    <section className='aboutMe' id='aboutMe'>

      <h2 className='aboutMe__h2' data-translate-en='About me' data-translate-es='Sobre mí'>Sobre mí</h2>
      <p className='aboutMe__p'
        data-translate-en='I bring a strong technical foundation and a creative mindset to every web project I participate in. My experience in diverse projects has allowed me to develop a wide range of skills, from frontend design and development to backend database architecture and management.'
        data-translate-es='Aporto una sólida base técnica y una mentalidad creativa a cada proyecto web en el que participo. Mi experiencia en diversos proyectos me ha permitido desarrollar una amplia gama de habilidades, desde el diseño y desarrollo frontend hasta la arquitectura y gestión de bases de datos backend'>
        Aporto una sólida base técnica y una mentalidad creativa a cada proyecto web en el que participo. Mi experiencia en diversos proyectos me ha permitido desarrollar una amplia gama de habilidades, desde el diseño y desarrollo frontend hasta la arquitectura y gestión de bases de datos backend
      </p>

      <article className='aboutMe__skills'>

        <div className='aboutMe__skills__div'>
          <span className='aboutMe__skills__div__icon material-symbols-outlined'>cycle</span>
          <h3 className='aboutMe__skills__div__h3'
            data-translate-en='Adaptability'
            data-translate-es='Adaptabilidad'>
            Adaptabilidad
          </h3>
          <p className='aboutMe__skills__div__p'
            data-translate-en='I take on new challenges with agility, learning quickly and adjusting my strategies to achieve success.'
            data-translate-es='Asumo nuevos retos con agilidad, aprendiendo rápidamente y ajustando mis estrategias para alcanzar el éxito.'>
            Asumo nuevos retos con agilidad, aprendiendo rápidamente y ajustando mis estrategias para alcanzar el éxito.
          </p>
        </div>

        <div className='aboutMe__skills__div'>
          <span className='aboutMe__skills__div__icon material-symbols-outlined'>cardiology</span>
          <h3 className='aboutMe__skills__div__h3'
            data-translate-en='Passion'
            data-translate-es='Pasión'>
            Pasión
          </h3>
          <p className='aboutMe__skills__div__p'
            data-translate-en='Exceed expectations motivate me, delivering exceptional results that exceed initial visions.'
            data-translate-es='Me motiva superar las expectativas, entregando resultados excepcionales que exceden las visiones iniciales.'>
            Me motiva superar las expectativas, entregando resultados excepcionales que exceden las visiones iniciales.
          </p>
        </div>

        <div className='aboutMe__skills__div'>
          <span className='aboutMe__skills__div__icon material-symbols-outlined'>handshake</span>
          <h3 className='aboutMe__skills__div__h3'
            data-translate-en='Commitment'
            data-translate-es='Compromiso'>
            Compromiso
          </h3>
          <p className='aboutMe__skills__div__p'
            data-translate-en='Prioritize project objectives pleases me, taking responsibility for meeting established deadlines.'
            data-translate-es='Me complace priorizar los objetivos del proyecto, asumiendo la responsabilidad de cumplir con los plazos establecidos.'>
            Me complace priorizar los objetivos del proyecto, asumiendo la responsabilidad de cumplir con los plazos establecidos.
          </p>
        </div>

        <div className='aboutMe__skills__div'>
          <span className='aboutMe__skills__div__icon material-symbols-outlined'>cognition</span>
          <h3 className='aboutMe__skills__div__h3'
            data-translate-en='Innovative vision'
            data-translate-es='Visión innovadora'>
            Visión innovadora
          </h3>
          <p className='aboutMe__skills__div__p'
            data-translate-en='My creative approach allows me to generate disruptive solutions that drive differentiation in a competitive environment.'
            data-translate-es='Mi enfoque creativo me permite generar soluciones disruptivas que impulsen la diferenciación en un entorno competitivo.'>
            Mi enfoque creativo me permite generar soluciones disruptivas que impulsen la diferenciación en un entorno competitivo.
          </p>
        </div>

      </article>

    </section>
  )
}

export default AboutMe