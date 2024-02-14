import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/thank-you.css'

const ThankYou = () => {
  return (
    <div className="container">
        <div className='row'>
            <div className="col-lg-12 col-12 pt-5 text-center">
                <div className='thank-you'>
                    <span><i className='ri-checkbox-circle-line'></i></span>
                    <h1 className='mb-3 fw-semibold'>Thank You</h1>
                    <h3 className='mb-4'>your tour is booked.</h3>
                    <Link to="/home"><button className='btn primary-btn back-btn w-25'>Back to Home</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThankYou;