import React, {useRef, useState, useEffect, useContext} from 'react';
import '../styles/tour-details.css';
import { useParams } from 'react-router-dom';
import {BASE_URL} from './../utils/config'
import useFetch from '../hooks/useFetch';
import {AuthContext} from './../context/AuthContext'
import { toast } from "react-toastify";
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../component/Booking/Booking'
import Newsletter from '../shared/Newsletter'

const TourDetails = () => {
  const {id} = useParams();
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating]= useState(null)
  const {user} = useContext(AuthContext)
  
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // Delay scroll to ensure that the component has rendered
    const timeoutId = setTimeout(scrollToTop, 100);
    return () => clearTimeout(timeoutId);
  }, [id]);

  //fetch data from database
  const {data: tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`)
  

  if (!tour) {
    return <div>Tour not found</div>;
  }

  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour;

  const {totalRating, avgRating} = calculateAvgRating(reviews);

  const options = {day: "numeric", month:'long', year:'numeric'}

  const submitHandler = async e =>{
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    
    try{
      if(!user || user===undefined || user ===null){
        toast.error('Please Sign-In')
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating
      }

      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body: JSON.stringify(reviewObj)
      })
      
      const result = await res.json()
      if(!res.ok){
        return toast.error(result.message)
      }

      toast.success(result.message)
      setTimeout(()=>{
        window.location.reload();
      },1000)
    }catch(err){
      toast.error(err.message)
    }
  }

  return (
    <>
    <section>
      <div className='container'>
      {loading && <h4 className='text-center pt-5'>Loading.......</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {
            !loading && !error &&
        <div className='row'>
          <div className='col-lg-8 col-12 tour-content'>
            <img src={photo} alt="" />
            <div className='tour-info'>
              <h2 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</h2>
              <div className=' d-flex flex-column flex-sm-row gap-2 gap-sm-5'>
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
              <div className='tour-extra-details d-flex flex-column flex-md-row text-end gap-auto gap-md-5 mt-2 mb-'>
                <div className="d-flex flex-column flex-sm-row gap-2 gap-md-5 gap-2">
                  <span><i className='ri-map-pin-2-line'></i> {city}</span>
                  <span className="mx-0 mx-sm-5 mx-md-0" ><i className='ri-money-dollar-circle-line'></i>${price}/per person</span>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-2 gap-md-5 gap-2">
                  <span><i className='ri-map-pin-time-line flex-column'></i> {distance} k/m</span>
                  <span  className="mx-0 mx-sm-5 mx-md-0" ><i className='ri-group-line flex-column'></i> {maxGroupSize} people</span>
                </div>      
              </div>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>

            
          </div>
          {/* ============== Tour-Reviews-Section-Start ============== */}

          <div className="tour-reviews mt-4 col-lg-8 col-12 order-5">
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
          {reviews?.map((review,index) =>(
            <div className='review-item mt-4' key={index}>
              <img src={avatar} alt="" />
              <div className='w-100'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div>
                    <h5>{review.username}</h5>
                    <p className="mb-1">{new Date(review.createdAt).toLocaleDateString('en-US', options)}</p>
                  </div>
                  <span className='d-flex align-items-center'>
                    {review.rating}<i className='ri-star-s-fill'></i>
                  </span>
                </div>
                <h6>{review.reviewText}</h6>
              </div>
            </div>
          ))}
          </div>
          
        </div>
        

        {/* ============== Tour-Reviews-Section-End ============== */}
          <div className="col-lg-4">
            <Booking tour={tour} avgRating={avgRating} title={title}/>
          </div>
        </div>
      }
      </div>
      
    </section>
    <Newsletter/>
    </>
  )
}

export default TourDetails