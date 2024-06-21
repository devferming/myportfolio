import React, { useState } from 'react'
import './style/MainMenu.css'

const MainMenu = ({ setCurrentPhrases, setcontacFormStatus, setCurrentReviews, littleMenu, setLittleMenu }) => {

  const [crrLanguage, setCrrLanguage] = useState('es')
  const [crrMode, setCrrMode] = useState('darkMode')

  const handleLanguage = () => {
    const elementsToTranslate = document.querySelectorAll('[data-translate-en]');

    if (crrLanguage === 'es') {

      for (const phrase of elementsToTranslate) {
        const translation = phrase.getAttribute('data-translate-en');
        phrase.textContent = translation;

      }
      document.getElementById('downloadCV').href = '/CV_EN.pdf';
      setCrrLanguage('en')

      setCurrentPhrases([
        'FullStack Domain: From Idea to Launch',
        'High Impact Web: Your Vision, Our Reality',
        'Optimized Development: Maximum Performance and Speed',
      ])

      setcontacFormStatus([
        'Sending message...',
        'Send message successfully!',
        'Something is bad, please try again',
      ])

      setCurrentReviews([
        {
          imgSrc: "/reviews_img1.jpg",
          name: "María Joaquina",
          position: "Rector of La Inmaculada Pedagogical Center",
          comment: "Fermin is a highly committed and trained professional. Thanks to the school web system he developed for us, we managed to automate a large part of our administrative processes, and reduce the workload of all our staff."
        },
        {
          imgSrc: "/reviews_img2.jpg",
          name: "Harol Cervantes",
          position: "Rector of La Inmaculada Pedagogical Center",
          comment: "Fermín gave us a beautiful website, which far exceeded our initial expectations and ideas. We were pleased with his patience and willingness to explain every detail to us, about the pros and cons of each idea. It was an excellent job."
        },
        {
          imgSrc: "/reviews_img3.jpg",
          name: "Luiggi Parra",
          position: "CEO AlumiWork",
          comment: "Fermín gave us a website that receives the potential customer, and gives them all the information necessary to purchase, what we liked the most was the automated chat with A.I. Now everything works on autopilot."
        },
        {
          imgSrc: "/reviews_img4.jpg",
          name: "Andréa Jímenez",
          position: "Fullstack Developer",
          comment: "Fermín has leadership and empathy skills that transmit security to the rest of the team, he is an excellent developer who is always willing to collaborate and help."
        }
      ])

    } else {
      for (const phrase of elementsToTranslate) {
        const translation = phrase.getAttribute('data-translate-es');
        phrase.textContent = translation;

      }
      document.getElementById('downloadCV').href = '/CV_ES.pdf';
      setCrrLanguage('es')

      setCurrentPhrases([
        'Dominio Full-Stack: De la Idea al Lanzamiento',
        'Web de Alto Impacto: Tu Visión, Nuestra Realidad',
        'Desarrollo Optimizado: Rendimiento y Velocidad al Máximo',
      ])

      setcontacFormStatus([
        'Enviando mensaje...',
        '¡Mensaje enviado exitosamente!',
        'Algo salió mal, por favor intente de nuevo',
      ])

      setCurrentReviews([
        {
          imgSrc: "/reviews_img1.jpg",
          name: "María Joaquina",
          position: "Rectora Centro Pedagógico La Inmaculada",
          comment: "Fermin es un profesional altamente comprometido y capacitado. Gracias al sistema web escolar que desarrolló para nosotros, logramos automatizar una gran parte de nuestros procesos administrativos, y reducir las cargas laborales de todo nuestro personal."
        },
        {
          imgSrc: "/reviews_img2.jpg",
          name: "Harol Cervantes",
          position: "Rectora Centro Pedagógico La Inmaculada",
          comment: "Fermín nos entrego una hermosa pagina web, que supero por mucho nuestras espectativas e ideas iniciales, nos agradó su paciencia y disposición de explicarnos cada detalle, sobre los pros y contras de cada idea, fue un excelente trabajo."
        },
        {
          imgSrc: "/reviews_img3.jpg",
          name: "Luiggi Parra",
          position: "CEO AlumiWork",
          comment: "Fermín nos entregó una web que recibe al potencial cliente, y le entrega toda la información necesaria para comprar, lo que más nos gustó fue el chat automatizado con I.A. Ahora todo funciona en piloto automático."
        },
        {
          imgSrc: "/reviews_img4.jpg",
          name: "Andréa Jímenez",
          position: "Desarrollador Fullstack",
          comment: "Fermín posee unas habilidades de liderazgo y empatía que transmite seguridad al resto del equipo, es un excelente desarrollador que siemprte está dispuesto a colaborar y ayudar.",
        }
      ])

    }

  }

  const handleMode = () => {
    const headerImg = document.querySelector('#headerImg')
    const body = document.querySelector('.body')

    if (crrMode === 'darkMode') {
      body.classList.remove('body--dark')
      body.classList.add('body--ligth')
      headerImg.setAttribute('src', './avatar2.png')
      setCrrMode('ligthMode')
    } else {
      body.classList.remove('body--ligth')
      body.classList.add('body--dark')
      headerImg.setAttribute('src', './avatar.png')
      setCrrMode('darkMode')
    }

  }

  const scrollToSection = (sectionId) => {
    const littleMenuDiv = document.querySelector('.littleMenu')
    setLittleMenu('menu')
    littleMenuDiv.classList.remove('showMenu')
    littleMenuDiv.classList.add('hiddenMenu')

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLitteMenu = () => {
    const littleMenuDiv = document.querySelector('.littleMenu')
    if (littleMenu === 'menu') {
      setLittleMenu('x')
      littleMenuDiv.classList.remove('hiddenMenu')
      littleMenuDiv.classList.add('showMenu')
    } else {
      setLittleMenu('menu')
      littleMenuDiv.classList.remove('showMenu')
      littleMenuDiv.classList.add('hiddenMenu')
    }

  }


  return (
    <>
      <nav>

        <button className='littleMenu__btn' onClick={handleLitteMenu}>
          <i className={`littleMenu__btn--icon bx bx-${littleMenu}`}></i>
        </button>

        <div className='littleMenu hiddenMenu'>

          <div className='littleMenu__logo_container'>
            <h2 className='littleMenu__logo'>Fermín Gutiérrez</h2>
          </div>

          <ul className='littleMenu__control_ul'>
            <li className='littleMenu__control_li' onClick={handleLanguage}>
              <span className='littleMenu__control_span material-symbols-outlined'>translate</span>
            </li>
            <li className='littleMenu__control_li' onClick={handleMode}>
              <span id='modeText' className='littleMenu__control_span material-symbols-outlined'>light_mode</span>
            </li>
          </ul>

          <ul className='littleMenu__ul'>
            <li onClick={() => scrollToSection('header')}
              className='littleMenu__li'
              data-translate-en='Home'
              data-translate-es='Inicio'>
              Inicio
            </li>
            <li onClick={() => scrollToSection('aboutMe')}
              className='littleMenu__li'
              data-translate-en='About me'
              data-translate-es='Sobre mí'>
              Sobre mí
            </li>
            <li onClick={() => scrollToSection('technologies')}
              className='littleMenu__li'
              data-translate-en='Technologies'
              data-translate-es='Tecnologías'>
              Tecnologías
            </li>
            <li onClick={() => scrollToSection('projects')}
              className='littleMenu__li'
              data-translate-en='Projects'
              data-translate-es='Proyectos'>
              Proyectos
            </li>
            <li onClick={() => scrollToSection('reviews')}
              className='littleMenu__li'
              data-translate-en='Reviews'
              data-translate-es='Reseñas'>
              Reseñas
            </li>
            <li onClick={() => scrollToSection('contact')}
              className='littleMenu__li'
              data-translate-en='Contact Me'
              data-translate-es='Contáctame'
            >Contáctame</li>
          </ul>

        </div>

        <div className='mainMenu'>
          <div className='mainMenu__logo_container'>
            <h2 className='mainMenu__logo'>Fermín Gutiérrez</h2>
          </div>
          <ul className='mainMenu__control_ul'>
            <li className='mainMenu__control_li' onClick={handleLanguage}>
              <span className='mainMenu__control_span material-symbols-outlined'>translate</span>
            </li>
            <li className='mainMenu__control_li' onClick={handleMode}>
              <span id='modeText' className='mainMenu__control_span material-symbols-outlined'>light_mode</span>
            </li>
          </ul>
          <ul className='mainMenu__ul'>
            <li onClick={() => scrollToSection('header')}
              className='mainMenu__li'
              data-translate-en='Home'
              data-translate-es='Inicio'>
              Inicio
            </li>
            <li onClick={() => scrollToSection('aboutMe')}
              className='mainMenu__li'
              data-translate-en='About me'
              data-translate-es='Sobre mí'>
              Sobre mí
            </li>
            <li onClick={() => scrollToSection('technologies')}
              className='mainMenu__li'
              data-translate-en='Technologies'
              data-translate-es='Tecnologías'>
              Tecnologías
            </li>
            <li onClick={() => scrollToSection('projects')}
              className='mainMenu__li'
              data-translate-en='Projects'
              data-translate-es='Proyectos'>
              Proyectos
            </li>
            <li onClick={() => scrollToSection('reviews')}
              className='mainMenu__li'
              data-translate-en='Reviews'
              data-translate-es='Reseñas'>
              Reseñas
            </li>
            <li onClick={() => scrollToSection('contact')}
              className='mainMenu__li'
              data-translate-en='Contact Me'
              data-translate-es='Contáctame'
            >Contáctame</li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default MainMenu