import React, {useRef, useState, useEffect} from 'react';
import '../styles/tour-details.css';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../component/Booking/Booking'
import Newsletter from '../shared/Newsletter'

const TourDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {id} = useParams();
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating]= useState(null)

  const tour = tourData.find(tour => tour.id === id);

  if (!tour) {
    return <div>Tour not found</div>;
  }

  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour;

  const {totalRating, avgRating} = calculateAvgRating(reviews);

  const options = {day: "numeric", month:'long', year:'numeric'}

  const submitHandler = e =>{
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    alert(`${reviewText}, ${tourRating}`)
  }

  return (
    <>
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 tour-content'>
            <img src={photo} alt="" />
            <div className='tour-info'>
              <h2>{title}</h2>
              <div className=' d-flex align-items-center gap-5'>
                <span className='tour-rating d-flex align-item-center gap-1'>
                <i className="ri-star-fill" style={{color: "var(--secondary-color"}}></i>
                    {avgRating == 0 ? null : avgRating}
                    {totalRating == 0 ? ('Not Rated'):(
                        <span>({reviews?.length})</span>
                    )}
                </span>
                <span>
                  <i className='ri-map-pin-user-fill'></i>{address}
                </span>
              </div>
              <div className='tour-extra-details'>
                <span><i className='ri-map-pin-2-line'></i> {city}</span>
                <span><i className='ri-money-dollar-circle-line'></i> ${price} /per person</span>
                <span><i className='ri-map-pin-time-line'></i> ${distance} k/m</span>
                <span><i className='ri-group-line'></i> {maxGroupSize} people</span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>

            {/* ============== Tour-Reviews-Section-Start ============== */}

            <div className="tour-reviews mt-4">
              <h5>Reviews ({reviews?.length} reviews)</h5>
              <form onSubmit={submitHandler}>
                <div className='rating-group d-flex align-items-center gap-3 mb-4'>
                  <span onClick={()=>setTourRating(1)}>
                        <i className='ri-star-s-fill'></i>
                  </span>
                  <span onClick={()=>setTourRating(2)}>
                        <i className='ri-star-s-fill'></i>
                  </span>
                  <span onClick={()=>setTourRating(3)}>
                        <i className='ri-star-s-fill'></i>
                  </span>
                  <span onClick={()=>setTourRating(4)}>
                        <i className='ri-star-s-fill'></i>
                  </span>
                  <span onClick={()=>setTourRating(5)}>
                        <i className='ri-star-s-fill'></i>
                  </span>
                </div>
                <div className='review-input'>
                  <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' required/>
                  <button className='btn primary-btn text-white'  type="submit">
                    Submit
                  </button>
                </div>
              </form>

              <div className='form-group-reviews'>
              {reviews?.map(review =>(
                <div className='review-item'>
                  <img src={avatar} alt="" />
                  <div className='w-100'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div>
                        <h5>shayri</h5>
                        <p>{new Date("01-10-2023").toLocaleDateString('en-US', options)}</p>
                      </div>
                      <span className='d-flex align-items-center'>
                        5<i className='ri-star-s-fill'></i>
                      </span>
                    </div>
                    <h6>Just Looking Like A WOW!</h6>
                  </div>
                </div>
              ))}
              </div>
              
            </div>

            {/* ============== Tour-Reviews-Section-End ============== */}
          </div>
          <div className="col-lg-4">
            <Booking tour={tour} avgRating={avgRating}/>
          </div>
        </div>
      </div>
    </section>
    <Newsletter/>
    </>
  )
}

export default TourDetails