import { Routes, Route } from 'react-router-dom';
import MainMenu from './components/shared/MainMenu';
import './App.css'
import HomePage from './pages/HomePage';
import { useState } from 'react';
import Footer from './components/shared/Footer';
import ContactForm from './components/shared/ContactForm';


function App() {

  const [contactFormClose, setContactFormClose] = useState(true)

  const [littleMenu, setLittleMenu] = useState('menu')

  const [contacFormStatus, setcontacFormStatus] = useState([
    'Enviando mensaje...',
    '¡Mensaje enviado exitosamente!',
    'Algo salió mal, por favor intente de nuevo',
  ]);

  const [currentPhrases, setCurrentPhrases] = useState([
    'Dominio FullStack: De la Idea al Lanzamiento',
    'Web de Alto Impacto: Tu Visión, Nuestra Realidad',
    'Desarrollo Optimizado: Rendimiento y Velocidad al Máximo',
  ]);

  const [currentReviews, setCurrentReviews] = useState([
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
      comment:"Fermín posee unas habilidades de liderazgo y empatía que transmite seguridad al resto del equipo, es un excelente desarrollador que siemprte está dispuesto a colaborar y ayudar.",
    }
  ])



  return (
    <div className='body body--dark'>
      <div className={`contactForm__container ${contactFormClose && 'form__close'}`}>
        <ContactForm
          setContactFormClose={setContactFormClose}
          contacFormStatus={contacFormStatus}
        />
      </div>
      <MainMenu
        setCurrentPhrases={setCurrentPhrases}
        setcontacFormStatus={setcontacFormStatus}
        setCurrentReviews={setCurrentReviews}
        littleMenu={littleMenu}
        setLittleMenu={setLittleMenu}
      />
      <Routes>
        <Route path='/' element={
          <HomePage
            currentPhrases={currentPhrases}
            setContactFormClose={setContactFormClose}
            currentReviews={currentReviews}
          />
        }
        />
      </Routes>
    </div>
  )
}

export default App
