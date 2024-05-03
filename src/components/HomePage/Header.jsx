import React, { useEffect, useState } from 'react'
import './styles/Header.css'

const Header = ({ currentPhrases }) => {

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % currentPhrases.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentPhrases]);

  return (
    <header className='header' id='header'>

      <div className='header__div'>
        <h1 className='header__h1'>Fullstack</h1>
        <h2 className='header__h2' data-translate-en='Web developer' data-translate-es='Desarrollador Web'>Desarrollador Web</h2>
        <div className='header__buttons'>
          <button className='header__button header__button--firts' data-translate-en='Contac Me' data-translate-es='Contáctame'>Contáctame</button>
          <button className='header__button' data-translate-en='Download CV' data-translate-es='Descargar CV'>Descargar CV</button>
        </div>
      </div>

      <div className='header__img_div'>
        <img className='header__logo header__logo--css'
          src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997449/2_psiwpd.png"
          alt="Logo CSS"
        />
        <img className='header__logo header__logo--html'
          src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997449/1_d52ai0.png"
          alt="Logo HTML"
        />
        <img className='header__logo header__logo--js'
          src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997449/3_oelqmk.png"
          alt="Logo JS"
        />
        <img className='header__logo header__logo--react'
          src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997449/4_xtugbu.png"
          alt="Logo React"
        />
        <img className='header__logo header__logo--node'
          src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997449/5_hlvr2o.png"
          alt="Logo Node"
        />
        <img className='header__logo header__logo--mysql'
          src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997450/6_y3ldye.png"
          alt="Logo MySql"
        />
        <img className='header__logo header__logo--sequelize'
          src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997451/9_hkmvay.png"
          alt="Logo Sequelize"
        />
        <img className='header__logo header__logo--postgre'
          src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997451/8_mtkm8w.png"
          alt="Logo PostgreSQL"
        />
        <img className='header__logo header__logo--jest'
          src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997451/11_kqphfp.png"
          alt="Logo Jest"
        />
        <img className='header__logo header__logo--github'
          src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997452/14_mxztjb.png"
          alt="Logo Github"
        />
        <img className='header__logo header__logo--figma'
          src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997453/17_hr6jv4.png"
          alt="Logo Figma"
        />
        <img className='header__img'
          src='/avatar.png'
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