import React from 'react'
import Home from '../Components/LandingPage/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
      <div className='relative'>
      <Header  />
      <Routes>
        <Route path='/' element= { <ContactPage/>}  />
        {/* <Route path='/' element= { <AboutPage/>}  /> */}




      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
