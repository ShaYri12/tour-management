import React, {useState} from 'react'
import './booking.css';
import {useNavigate} from 'react-router-dom';

const Booking = ({tour, avgRating}) => {
  const {price, reviews} = tour;
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId:'01',
    userEmail:'example@gmail.com',
    fullName:'',
    phone:'',
    guestSize:1,
    bookAt: ''
  })

  const handleChange = e =>{
    setCredentials(prev=> ({...prev, [e.target.id]:e.target.value}))
  }

  const serviceFee = 10;
  const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  const handleClick = e =>{
    e.preventDefault();
    navigate('/thank-you');
  }

  return (
    <div className='booking'>
      <div className='booking-top d-flex align-items-center justify-content-between'>
        <h3>${price} <span>/per person</span></h3>
        <span className='tour-rating d-flex align-item-center gap-1'>
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
          <div className='list-group-item border-0 px-0'>
            <h5>${price} <i className='ri-close-line'></i> 1 person</h5>
            <span> ${price}</span>
          </div>
          <div className='list-group-item border-0 px-0'>
            <h5>Service charge <i className='ri-close-line'></i> 1 person</h5>
            <span> ${serviceFee}</span>
          </div>
          <div className='list-group-item border-0 px-0'>
            <h5>Total <i className='ri-close-line'></i> 1 person</h5>
            <span> ${totalAmount}</span>
          </div>
        </div>
        <button className="btn primary-btn w-100 mt-4" onClick={handleClick}>Book Now</button>
      </div>
    </div>
  )
}

export default Booking