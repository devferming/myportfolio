import React, { useEffect, useState } from 'react'
import './styles/Header.css'

const Header = ( { currentPhrases, setContactFormClose } ) => {

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % currentPhrases.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentPhrases]);

  const handleOpenForm = () => {
    setContactFormClose(false)
  }

  return (
    <header className='header' id='header'>

      <div className='header__div'>
        <h1 className='header__h1'>Fullstack</h1>
        <h2 className='header__h2' data-translate-en='Web developer' data-translate-es='Desarrollador Web'>Desarrollador Web</h2>
        <div className='header__buttons'>
          <button
            onClick={handleOpenForm}
            className='header__button header__button--firts'
            data-translate-en='Contac Me'
            data-translate-es='Contáctame'>
            Contáctame
          </button>
          <a
            id='downloadCV'
            href='/CV_ES.pdf' download
            className='header__button'
            data-translate-en='Download CV'
            data-translate-es='Descargar CV'>
            Descargar CV
          </a>
        </div>
      </div>

      <div className='header__img_div'>
        <img className='header__logo header__logo--css'
          src="/technologies_2_css.webp"
          alt="Logo CSS"
        />
        <img className='header__logo header__logo--html'
          src="/technologies_1_html.webp"
          alt="Logo HTML"
        />
        <img className='header__logo header__logo--js'
          src="/technologies_3_js.webp"
          alt="Logo JS"
        />
        <img className='header__logo header__logo--react'
          src="/technologies_4_react.webp"
          alt="Logo React"
        />
        <img className='header__logo header__logo--node'
          src="/technologies_5_node.webp"
          alt="Logo Node"
        />
        <img className='header__logo header__logo--mysql'
          src="/technologies_7_mysql.webp"
          alt="Logo MySql"
        />
        <img className='header__logo header__logo--sequelize'
          src="/technologies_10_sequalize.webp"
          alt="Logo Sequelize"
        />
        <img className='header__logo header__logo--postgre'
          src="/technologies_9_postgre.webp"
          alt="Logo PostgreSQL"
        />
        <img className='header__logo header__logo--jest'
          src="/technologies_12_jest.webp"
          alt="Logo Jest"
        />
        <img className='header__logo header__logo--github'
          src="/technologies_15_github.webp"
          alt="Logo Github"
        />
        <img className='header__logo header__logo--figma'
          src="/technologies_18_figma.webp"
          alt="Logo Figma"
        />
        <img
          id='headerImg'
          className='header__img'
          src='/avatar.webp'
          alt='img'
        />
      </div>

      <div className='header__msg__container'>
        <h3 className='header__msg'
          style={{
            animation: 'messageFadeIn 0.5s ease-in forwards, messageFadeOut 0.5s ease-in-out forwards',
            animationDelay: '0s, 3.5s'
          }}
          key={currentPhrase}>
          {currentPhrases[currentPhrase]}
        </h3>
      </div>
    </header>
  )
}

export default Header