import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import SearchResultList from '../pages/SearchResultList'
import ThankYou from '../pages/ThankYou.jsx'
import Login from '../pages/Login'
import Register from '../pages/Register.jsx'


const Routers = () => {
  return (
    <Routes>
        <Route path="/home" element={<Navigate to='/'/>}/>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/tours" element={<Tours />}/>
        <Route path="/tours/:id" element={<TourDetails />}/>
        <Route path="/tours/search" element={<SearchResultList />}/>
        <Route path="/thank-you" element={<ThankYou />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
    </Routes>

  )
}

export default Routers