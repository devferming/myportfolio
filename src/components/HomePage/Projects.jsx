import React, { useState } from 'react'
import './styles/Project.css'

const Projects = () => {

  const [cardSelected, setCardSelected] = useState(0)

  const totalCards = 4

  const objStyle = {
    transform: `translateX(calc(-${cardSelected}/${totalCards} * 100%))`,
    width: `calc(${totalCards} * 100%)`
  }

  const handleNext = () => {
    if (cardSelected + 1 <= totalCards - 1) {
      setCardSelected(cardSelected + 1)
    }
  }

  const handlePrev = () => {
    if (cardSelected - 1 >= 0) {
      setCardSelected(cv => cv - 1)
    }
  }

  return (
    <section className='projects' id='projects'>

      <h2 className='projects__h2'
        data-translate-en='Projects'
        data-translate-es='Proyectos'>
        Proyectos
      </h2>

      <div className='projects__slider'>

        <button onClick={handlePrev} className='projects__slider__btLeft'>
          <span
            className="projects__slider__btLeft--icon material-symbols-outlined">
            keyboard_double_arrow_left
          </span>
        </button>

        <div className='projects__slider__articles__container'>
          <div className='projects__slider__articles' style={objStyle}>

            <article
              className='projects__card'>

              <div className="projects__card__images">
                <span className="projects__card__images__front">
                  <img
                    className="projects__card__img"
                    src="/project_1_img1.png"
                    alt="project screen shot"
                  />
                </span>
                <span className="projects__card__images__back">
                  <img
                    className="projects__card__img"
                    src="/project_1_img2.png"
                    alt="project screen shot"
                  />
                </span>
              </div>

              <div className="projects__card__info">
                <h3 className='projects__card__h3'>
                  Booking App
                  <span className='projects__card__icons'>
                    <img className='projects__icon'
                      src="/technologies_5_node.png"
                      alt="Logo Node"
                    />
                    <img className='projects__icon'
                      src="/technologies_10_sequalize.png"
                      alt="Logo Sequelize"
                    />
                    <img className='projects__icon'
                      src="/technologies_11_express.png"
                      alt="Logo Express"
                    />
                    <img className='projects__icon'
                      src="/technologies_4_react.png"
                      alt="Logo React"
                    />
                    <img className='projects__icon'
                      src="/technologies_3_js.png"
                      alt="Logo JS"
                    />
                    <img className='projects__icon'
                      src="/technologies_2_css.png"
                      alt="Logo CSS"
                    />
                  </span>

                </h3>

                <p className='projects__card__p'
                  data-translate-en='A fullstack project with a functional frontend offering login, user registration, hotel reviews and a proprietary API integration. It uses technologies like Node.js, Sequelize and Express for a secure and dynamic experience.'
                  data-translate-es='Un proyecto fullstack con un frontend funcional que ofrece inicio de sesión, registro de usuarios, reseñas de hoteles y una integración API propia. Utiliza tecnologías como Node.js, Sequelize y Express para una experiencia segura y dinámica.'>
                  Un proyecto fullstack con un frontend funcional que ofrece inicio de sesión, registro de usuarios, reseñas de hoteles y una integración API propia. Utiliza tecnologías como Node.js, Sequelize y Express para una experiencia segura y dinámica.
                </p>

                <div className='projects__card__buttons'>
                  <button
                    onClick={() => window.open("https://github.com/gfermin360/booking-frontend", "_blank")}
                    className='projects__card__button'>
                    Frontend
                  </button>
                  <button
                    onClick={() => window.open("https://github.com/gfermin360/booking-backend", "_blank")}
                    className='projects__card__button'>
                    Backend
                  </button>
                  <button
                    onClick={() => window.open("https://booking-by-gfermin.netlify.app", "_blank")}
                    className='projects__card__button'
                    data-translate-en='Deployment'
                    data-translate-es='Despliegue'>
                    Despliegue
                  </button>
                </div>

              </div>

            </article>


            <article
              className='projects__card'>

              <div className="projects__card__images">
                <span className="projects__card__images__front">
                  <img
                    className="projects__card__img"
                    src="/project_4_img1.png"
                    alt="project screen shot"
                  />
                </span>
                <span className="projects__card__images__back">
                  <img
                    className="projects__card__img"
                    src="/project_4_img2.png"
                    alt="project screen shot"
                  />
                </span>
              </div>

              <div className="projects__card__info">
                <h3 className='projects__card__h3'>
                  Pokédex
                  <span className='projects__card__icons'>
                    <img className='projects__icon'
                      src="/public/technologies_4_react.png"
                      alt="Logo React"
                    />
                    <img className='projects__icon'
                      src="/public/technologies_3_js.png"
                      alt="Logo JS"
                    />
                    <img className='projects__icon'
                      src="/public/technologies_2_css.png"
                      alt="Logo CSS"
                    />
                  </span>

                </h3>

                <p className='projects__card__p'
                  data-translate-en='A website that provides detailed information about each Pokémon. Through a colorful and friendly interface with search, filter, and pagination controls.'
                  data-translate-es='Una web, que proporciona información detallada de cada Pokémon. Mediante una interfaz vistosa y amigable con controles para búsqueda, filtro,  y paginación.'>
                  Una web, que proporciona información detallada de cada Pokémon. Mediante una interfaz vistosa y amigable con controles para búsqueda, filtro,  y paginación.
                </p>

                <div className='projects__card__buttons'>
                  <button
                    onClick={() => window.open("https://github.com/gfermin360/pokedex", "_blank")}
                    className='projects__card__button'>
                    Frontend
                  </button>
                  {/* <button className='projects__card__button'>Backend</button> */}
                  <button
                    onClick={() => window.open("https://pokedex-by-gfermin.netlify.app", "_blank")}
                    className='projects__card__button'
                    data-translate-en='Deployment'
                    data-translate-es='Despliegue'>
                    Despliegue
                  </button>
                </div>

              </div>

            </article>

            <article
              className='projects__card'>

              <div className="projects__card__images">
                <span className="projects__card__images__front">
                  <img
                    className="projects__card__img"
                    src="/project_5_img1.png"
                    alt="project screen shot"
                  />
                </span>
                <span className="projects__card__images__back">
                  <img
                    className="projects__card__img"
                    src="/project_5_img2.png"
                    alt="project screen shot"
                  />
                </span>
              </div>

              <div className="projects__card__info">
                <h3 className='projects__card__h3'>
                  Rick and Morty
                  <span className='projects__card__icons'>
                    <img className='projects__icon'
                      src="/public/technologies_4_react.png"
                      alt="Logo React"
                    />
                    <img className='projects__icon'
                      src="/public/technologies_3_js.png"
                      alt="Logo JS"
                    />
                    <img className='projects__icon'
                      src="/public/technologies_2_css.png"
                      alt="Logo CSS"
                    />
                  </span>

                </h3>

                <p className='projects__card__p'
                  data-translate-en='A web application that immerses users in the fascinating universe of Rick and Morty, providing detailed information about the characters, episodes, locations and other key elements of the series.'
                  data-translate-es='Una aplicación web que sumerge a los usuarios en el fascinante universo de Rick and Morty, proporcionando información detallada sobre los personajes, episodios, ubicaciones y otros elementos clave de la serie.'>
                  Una aplicación web que sumerge a los usuarios en el fascinante universo de Rick and Morty, proporcionando información detallada sobre los personajes, episodios, ubicaciones y otros elementos clave de la serie.
                </p>

                <div className='projects__card__buttons'>
                  <button
                    onClick={() => window.open("https://github.com/gfermin360/rickandmorty", "_blank")}
                    className='projects__card__button'>
                    Frontend
                  </button>
                  {/* <button className='projects__card__button'>Backend</button> */}
                  <button
                    onClick={() => window.open("https://rickandmorty-by-gfermin.netlify.app", "_blank")}
                    className='projects__card__button'
                    data-translate-en='Deployment'
                    data-translate-es='Despliegue'>
                    Despliegue
                  </button>
                </div>

              </div>

            </article>

            <article
              className='projects__card'>

              <div className="projects__card__images">
                <span className="projects__card__images__front">
                  <img
                    className="projects__card__img"
                    src="/project_6_img1.png"
                    alt="project screen shot"
                  />
                </span>
                <span className="projects__card__images__back">
                  <img
                    className="projects__card__img"
                    src="/project_6_img2.png"
                    alt="project screen shot"
                  />
                </span>
              </div>

              <div className="projects__card__info">
                <h3 className='projects__card__h3'
                  data-translate-en='Fortune Cookies'
                  data-translate-es='Galletas de la Fortuna'
                >
                  Galletas de la Fortuna
                  <span className='projects__card__icons'>
                    <img className='projects__icon'
                      src="/public/technologies_4_react.png"
                      alt="Logo React"
                    />
                    <img className='projects__icon'
                      src="/public/technologies_3_js.png"
                      alt="Logo JS"
                    />
                    <img className='projects__icon'
                      src="/public/technologies_2_css.png"
                      alt="Logo CSS"
                    />
                  </span>

                </h3>

                <p className='projects__card__p'
                  data-translate-en='A digital fortune cookie app that offers inspirational quotes and reflections, which change randomly with a single click.'
                  data-translate-es='Una aplicación de galletas de la fortuna digital que ofrece frases inspiradoras y reflexiones, cambiando aleatoriamente con solo un clic.'>
                  Una aplicación de galletas de la fortuna digital que ofrece frases inspiradoras y reflexiones, cambiando aleatoriamente con solo un clic.
                </p>

                <div className='projects__card__buttons'>
                  <button
                    onClick={() => window.open("https://github.com/gfermin360/fortunecookie", "_blank")}
                    className='projects__card__button'>
                    Frontend
                  </button>
                  {/* <button className='projects__card__button'>Backend</button> */}
                  <button
                    onClick={() => window.open("https://fortunecookie-by-gfermin.netlify.app", "_blank")}
                    className='projects__card__button'
                    data-translate-en='Deployment'
                    data-translate-es='Despliegue'>
                    Despliegue
                  </button>
                </div>

              </div>

            </article>

          </div>
        </div>

        <button onClick={handleNext} className='projects__slider__btnRight'>
          <span
            className="projects__slider__btRight--icon material-symbols-outlined">
            keyboard_double_arrow_right
          </span>
        </button>

      </div>

    </section>
  )
}

export default Projects