import React, { useContext } from 'react';
import { Routes, Route, Navigate   } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.jsx';
import Home from '../pages/Home.jsx'
import About from '../pages/About'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import SearchResultList from '../pages/SearchResultList'
import ThankYou from '../pages/ThankYou.jsx'
import Login from '../pages/Login'
import Register from '../pages/Register.jsx'
import MyAccount from '../Dashboard/UserProfile/MyAccount.jsx'



const Routers = () => {
  const { user } = useContext(AuthContext);

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
        
        { /*User Logged In?*/ }
        {user ? (
          <Route path="/my-account/:id" element={<MyAccount />} />
        ) : (
          <Route path="/my-account/:id" element={<Navigate to="/login" />} />
        )}
        <Route path="*" element={<Navigate to='/'/>} />
    </Routes>

  )
}

export default Routers