import React from 'react'
import Header from '../components/HomePage/Header'
import AboutMe from '../components/HomePage/AboutMe'
import Technologies from '../components/HomePage/Technologies'
import Projects from '../components/HomePage/Projects'
import Reviews from '../components/HomePage/Reviews'

const HomePage = ( { currentPhrases }) => {
  return (
    <>
      <Header currentPhrases={currentPhrases} />
      <AboutMe />
      <Technologies />
      <Projects />
      <Reviews />
    </>
  )
}

export default HomePage