import React from 'react'
import Header from '../components/HomePage/Header'
import AboutMe from '../components/HomePage/AboutMe'
import Technologies from '../components/HomePage/Technologies'
import Projects from '../components/HomePage/Projects'
import Reviews from '../components/HomePage/Reviews'
import Contact from '../components/HomePage/Contact'

const HomePage = ( { currentPhrases, setContactFormClose } ) => {

  return (
    <>
      <Header
        currentPhrases={currentPhrases}
        setContactFormClose={setContactFormClose}
      />
      <AboutMe />
      <Technologies />
      <Projects />
      <Reviews />
      <Contact
        setContactFormClose={setContactFormClose}
      />
    </>
  )

}

export default HomePage