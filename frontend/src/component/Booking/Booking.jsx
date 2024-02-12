import React, {useState, useContext} from 'react'
import './booking.css';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import {BASE_URL} from '../../utils/config'
import {AuthContext} from '../../context/AuthContext'

const Booking = ({tour, avgRating}) => {
  const {price, reviews, title} = tour;
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName:'',
    phone:'',
    guestSize:1,
    bookAt: ''
  })

  const handleChange = e =>{
    setBooking(prev=> ({...prev, [e.target.id]:e.target.value}))
  }

  const serviceFee = 10;
  const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handleClick = async e =>{
    e.preventDefault();
    try {
      if(!user || user == undefined || user == null){
        return alert('Please Sign-In')
      }

      
      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(booking),
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        return alert(result.message || 'Booking failed');
      }
      navigate('/thank-you');

    } catch (error) {
      console.error(error);
      alert(error.message)
    }
    
  }

  return (
    <div className='booking'>
      <div className='booking-top d-flex flex-column flex-sm-row align-item-xs-center align-items-left justify-content-between'>
        <h3>${price} <span>/per person</span></h3>
        <span className='tour-rating my-auto d-flex align-item-center gap-1'>
          <i className="ri-star-fill"></i>
            {avgRating == 0 ? null : avgRating}( {reviews?.length} )
        </span>
      </div>
      {/* ==================== Booking Form Start ==================== */}
      <div className='booking-form'>
        <h5>Information</h5>
        <form className='booking-info-form' onSubmit={handleClick}>
          <div className='form-group'>
            <input type='text' placeholder='Full Name' id="fullName" required onChange={handleChange}/>
          </div>
          <div className='form-group'>
            <input type='number' placeholder='Phone' id="phone" required onChange={handleChange}/>
          </div>
          <div className='form-group d-flex align-items-center gap-3'>
            <input type='date' placeholder='' id="bookAt" required onChange={handleChange}/>
            <input type='number' placeholder='Guest' id="guestSize" required onChange={handleChange}/>
          </div>
        </form>
      </div>
      {/* ==================== Booking Form ==================== */}

      {/* ==================== Booking Form Bottom ==================== */}
      <div className='booking-bottom'>
        <div className='list-group'>
          <div className='list-group-item d-flex justify-content-between border-0 px-0'>
            <h5>Price per person</h5>
            <span> ${price}</span>
          </div>
          <div className='list-group-item d-flex justify-content-between border-0 px-0'>
            <h5>Service charge </h5>
            <span> ${serviceFee}</span>
          </div>
          <div className='list-group-item d-flex justify-content-between border-0 px-0'>
            <h5>Total Amount</h5>
            <span> ${totalAmount}</span>
          </div>
        </div>
        <button className="btn primary-btn w-100 mt-4" onClick={handleClick}>Book Now</button>
      </div>
    </div>
  )
}

export default Booking