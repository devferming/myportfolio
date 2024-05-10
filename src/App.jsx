import { Routes, Route } from 'react-router-dom';
import MainMenu from './components/shared/MainMenu';
import './App.css'
import HomePage from './pages/HomePage';
import { useState } from 'react';
import Footer from './components/shared/Footer';


function App() {

  const [currentPhrases, setCurrentPhrases] = useState([
    'Dominio FullStack: De la Idea al Lanzamiento',
    'Web de Alto Impacto: Tu Visión, Nuestra Realidad',
    'Desarrollo Optimizado: Rendimiento y Velocidad al Máximo',
  ]);

  

  return (
    <div className='body body--dark'>
      <MainMenu
        setCurrentPhrases={setCurrentPhrases}
      />
      <Routes>
        <Route path='/' element={<HomePage currentPhrases={currentPhrases} />} />
      </Routes>
    </div>
  )
}

export default App
