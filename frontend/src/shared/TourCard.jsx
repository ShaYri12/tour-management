import React from 'react'
import './tour-card.css'
import {Link} from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating';

const TourCard = ({tour}) => {
    const {id, title, city, photo, price, featured, reviews} = tour;
    
    const {totalRating, avgRating} = calculateAvgRating(reviews);
    
  return (
    <div className="card tour-card" key={id} style={{width: "18rem"}}>
        <div className='tour-img'>
        <img src={photo} className="card-img-top" alt="tour-img"/>
        {featured && <span> Featured</span>}
        </div>
        <div className="card-body">
            <div className='card-top d-flex align-item-center justify-content-between'>
            <span className='tour-location d-flex align-item-center gap-1'>
                <i className="ri-map-pin-line"></i>{city}
            </span>
            <span className='tour-rating d-flex align-item-center gap-1'>
                <i className="ri-star-fill"></i>
                    {avgRating == 0 ? null : avgRating}
                    {totalRating == 0 ? ('Not Rated'):(
                        <span>({reviews.length})</span>
                    )}
            </span>
            </div>
            <h5 className="tour-title">
                <Link to={`/tours/${id}`}>{title}</Link>
            </h5>

            <div className="card-bottom d-flex align-item-center justify-content-between mt-3">
                <h5 className='my-auto'>
                    ${price} <span> /per person</span>
                </h5>
                <button className="btn booking-btn">
                    <Link to={`/tours/${id}`}>Book Now</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default TourCard