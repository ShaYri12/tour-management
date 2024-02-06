import React from 'react'
import TourCard from '../../shared/TourCard';

import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

const FeatureTourList = () => {

  const {data: featuredTours, loading, error} = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  
  return (
    <>
    {
      loading && <h4>Loading.......</h4>
    }
    {
      error && <h4>{error}</h4>
    }
    {!loading && !error &&
        featuredTours?.map(tour=>(
            <div className="col-12 col-md-4 col-lg-3 mb-4" key={tour._id}>
                <TourCard tour={tour}  />
            </div>
        ))}
    </>
  )
}

export default FeatureTourList