import React from 'react'
import TourCard from '../../shared/TourCard';
import tourData from '../../assets/data/tours';


const FeatureTourList = () => {
  return (
    <>
    {
        tourData?.map(tour=>(
            <div className="col-12 col-md-4 col-sm-6 col-lg-3 mb-4" key={tour.id}>
                <TourCard tour={tour}/>
            </div>
        ))}
    </>
  )
}

export default FeatureTourList