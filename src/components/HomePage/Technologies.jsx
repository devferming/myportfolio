import React from 'react'
import './styles/Technologies.css'

const Technologies = () => {
  return (
    <section className='technologies' id='technologies'>

      <h2 className='technologies__h2'
        data-translate-en='Technologies'
        data-translate-es='Tecnologías'>
        Tecnologías
      </h2>

      <div className='technologies__div'>
        <span className="technologies__div__icon material-symbols-outlined">
          screenshot_monitor
        </span>
        <h3 className='technologies__div__h3'>Frontend</h3>
        <ul className='technologies__div__ul'>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997449/1_d52ai0.png" alt="Logo HTML" />
            <span className='technologies__div__span'>HTML</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997449/2_psiwpd.png" alt="Logo CSS" />
            <span className='technologies__div__span'>CSS</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997449/3_oelqmk.png" alt="Logo JavaScript" />
            <span className='technologies__div__span'>JavaScript</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997449/4_xtugbu.png" alt="Logo React" />
            <span className='technologies__div__span'>React</span>
          </li>
        </ul>
      </div>

      <div className='technologies__div'>
        <span className="technologies__div__icon material-symbols-outlined">
          database
        </span>
        <h3 className='technologies__div__h3'>Backend</h3>
        <ul className='technologies__div__ul'>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997449/3_oelqmk.png" alt="Logo JavaScript" />
            <span className='technologies__div__span'>JavaScript</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997449/5_hlvr2o.png" alt="Logo Node.js" />
            <span className='technologies__div__span'>Node.js</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997450/6_y3ldye.png" alt="Logo MySQL" />
            <span className='technologies__div__span'>MySQL</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997450/7_sz7z4h.png" alt="Logo SQL" />
            <span className='technologies__div__span'>SQL</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997451/8_mtkm8w.png" alt="Logo PostgreSQL" />
            <span className='technologies__div__span'>PostgreSQL</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997451/9_hkmvay.png" alt="Logo Sequelize" />
            <span className='technologies__div__span'>Sequelize</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997450/10_searf9.png" alt="Logo Express" />
            <span className='technologies__div__span'>Express</span>
          </li>
        </ul>
      </div>

      <div className='technologies__div'>
        <span className='technologies__div__icon material-symbols-outlined'>
          labs
        </span>
        <h3 className='technologies__div__h3'>
          Testing
        </h3>
        <ul className='technologies__div__ul'>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997451/11_kqphfp.png" alt="Logo Jest" />
            <span className='technologies__div__span'>Jest</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997451/12_pejqfe.png" alt="Logo Supertest" />
            <span className='technologies__div__span'>Supertest</span>
          </li>
        </ul>
      </div>

      <div className='technologies__div'>
        <span className='technologies__div__icon material-symbols-outlined'>
          home_repair_service
        </span>
        <h3 className='technologies__div__h3'
          data-translate-en='Tools'
          data-translate-es='Herramientas'>
          Herramientas
        </h3>
        <ul className='technologies__div__ul'>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997451/13_eexnpp.png" alt="Logo Git" />
            <span className='technologies__div__span'>Git</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997452/14_mxztjb.png" alt="Logo Github" />
            <span className='technologies__div__span'>Github</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997452/15_vqkf82.png" alt="Logo Postman" />
            <span className='technologies__div__span'>Postman</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997453/16_dhz1pv.png" alt="logo Dbdiagram" />
            <span className='technologies__div__span'>Dbdiagram</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997453/17_hr6jv4.png" alt="Logo Figma" />
            <span className='technologies__div__span'>Figma</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997452/18_kcaufd.png" alt="Logo Slack" />
            <span className='technologies__div__span'>Slack</span>
          </li>
          <li className='technologies__div__li'>
            <img className='technologies__div__img' src="https://res.cloudinary.com/dspgttay0/image/upload/v1713997453/19_fhyyqz.png" alt="Logo Photoshop" />
            <span className='technologies__div__span'>Photoshop</span>
          </li>
        </ul>
      </div>

      <video className='technologies__video' autoPlay muted loop>
        <source src="https://videos.pexels.com/video-files/3129576/3129576-uhd_3840_2160_30fps.mp4" type="video/mp4" />
      </video>

    </section>
  )
}

export default Technologies