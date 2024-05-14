import { Routes, Route } from 'react-router-dom';
import MainMenu from './components/shared/MainMenu';
import './App.css'
import HomePage from './pages/HomePage';
import { useState } from 'react';
import Footer from './components/shared/Footer';
import ContactForm from './components/shared/ContactForm';


function App() {

  const [contactFormClose, setContactFormClose] = useState(true)
  const [currentPhrases, setCurrentPhrases] = useState([
    'Dominio FullStack: De la Idea al Lanzamiento',
    'Web de Alto Impacto: Tu Visión, Nuestra Realidad',
    'Desarrollo Optimizado: Rendimiento y Velocidad al Máximo',
  ]);
  

  return (
    <div className='body body--dark'>
      <div className={`contactForm__container ${contactFormClose && 'form__close'}`}>
        <ContactForm
          setContactFormClose={setContactFormClose}
        />
      </div>
      <MainMenu
        setCurrentPhrases={setCurrentPhrases}
      />
      <Routes>
        <Route path='/' element={
            <HomePage
              currentPhrases={currentPhrases}
              setContactFormClose={setContactFormClose}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
