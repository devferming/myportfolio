import React, { useEffect, useState } from 'react'
import './styles/Reviews.css'

const Reviews = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const reviewsData = [
    {
      imgSrc: "/reviews_img1.jpg",
      name: "María Joaquina",
      position: [
        "Rectora Centro Pedagógico La Inmaculada",
        "Rector of La Inmaculada Pedagogical Center"],
      comment: [
        "Fermin es un profesional altamente comprometido y capacitado. Gracias al sistema web escolar que desarrolló para nosotros, logramos automatizar una gran parte de nuestros procesos administrativos, y reducir las cargas laborales de todo nuestro personal.",
        "Fermin is a highly committed and trained professional. Thanks to the school web system he developed for us, we managed to automate a large part of our administrative processes, and reduce the workload of all our staff."
      ]
    },
    {
      imgSrc: "/reviews_img2.jpg",
      name: "Harol Cervantes",
      position: [
        "Rectora Centro Pedagógico La Inmaculada",
        "Rector of La Inmaculada Pedagogical Center"],
      comment: [
        "Fermín nos entrego una hermosa pagina web, que supero por mucho nuestras espectativas e ideas iniciales, nos agradó su paciencia y disposición de explicarnos cada detalle, sobre los pros y contras de cada idea, fue un excelente trabajo.",
        "Fermín gave us a beautiful website, which far exceeded our initial expectations and ideas. We were pleased with his patience and willingness to explain every detail to us, about the pros and cons of each idea. It was an excellent job."
      ]
    },
    {
      imgSrc: "/reviews_img3.jpg",
      name: "Luiggi Parra",
      position: [
        "CEO AlumiWork",
        "CEO AlumiWork"],
      comment: [
        "Fermín nos entregó una web que recibe al potencial cliente, y le entrega toda la información necesaria para comprar, lo que más nos gustó fue el chat automatizado con I.A. Ahora todo funciona en piloto automático.",
        "Fermín gave us a website that receives the potential customer, and gives them all the information necessary to purchase, what we liked the most was the automated chat with A.I. Now everything works on autopilot."
      ]
    },
    {
      imgSrc: "/reviews_img4.jpg",
      name: "Andréa Jímenez",
      position: [
        "Desarrollador Fullstack",
        "Fullstack Developer"],
      comment: [
        "Fermín posee unas habilidades de liderazgo y empatía que transmite seguridad al resto del equipo, es un excelente desarrollador que siemprte está dispuesto a colaborar y ayudar.",
        "Fermín has leadership and empathy skills that transmit security to the rest of the team, he is an excellent developer who is always willing to collaborate and help."
      ]
    }
  ];

  useEffect(() => {

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length)
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const review = reviewsData[currentIndex];

  return (
    <section className='reviews' id='reviews'>
      <h2 className='reviews__h2'
        data-translate-en='Reviews'
        data-translate-es='Reseñas'>
        Reseñas
      </h2>

      <div className='reviews__container'>
        <article
          className='reviews__container__card' key={review.imgSrc}
          style={{
            animation: 'reviewFadeIn 0.7s ease-in forwards'
          }}
        >
          <span className='reviews__container__icon material-symbols-outlined'>
            format_quote
          </span>
          <div className='reviews__container__card__person'>
            <img className='reviews__container__card__person__img' src={review.imgSrc} alt="avatar img" />
            <div>
              <h3 className='reviews__container__card__person__h3'>
                {review.name}
              </h3>
              <span className='reviews__container__card__person__span'
                data-translate-en={review.position[1]}
                data-translate-es={review.position[0]}>
                {review.position[0]}
              </span>
            </div>
          </div>
          <p className='reviews__container__card__p'
            data-translate-en={review.comment[1]}
            data-translate-es={review.comment[0]}>
            {review.comment[0]}
          </p>
        </article>
      </div>
    </section>
  )
}

export default Reviews