import React, { useState } from 'react'
import './style/MainMenu.css'

const MainMenu = ( { setCurrentPhrases } ) => {

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
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className='mainMenu'>
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
      </nav>
    </>
  )
}

export default MainMenu