import React from 'react'
import './styles/dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='dashboard container pt-4 mt-5'>
      <div className='row align-item-center justify-content-center'>
        <h1>Dashboard</h1>
        <h5 className='ps-3 pt-2'>General Report</h5>
        <Link to="/users" className='general-box mt-5 border border-2 align-items-center justify-content-center d-flex flex-column shadow-xl  col-lg-3 col-md-4' >
          <h3>Users</h3>
          <h3 className='pt-3'>7</h3>
        </Link>
        <Link to="/all-bookings" className='general-box mt-5 border border-2 align-items-center justify-content-center d-flex flex-column shadow-xl  col-lg-3 col-md-4' >
          <h3>Bookings</h3>
          <h3 className='pt-3'>3</h3>
        </Link>
        <Link to="/all-tours" className='general-box mt-5 border border-2 align-items-center justify-content-center d-flex flex-column shadow-xl  col-lg-3 col-md-4' >
          <h3>Tours</h3>
          <h3 className='pt-3'>17</h3>
        </Link>
        <Link to="/admins" className='general-box mt-5 border border-2 align-items-center justify-content-center d-flex flex-column shadow-xl  col-lg-3 col-md-4' >
          <h3>Admins</h3>
          <h3 className='pt-3'>1</h3>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard