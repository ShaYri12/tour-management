import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import SearchBar from '../shared/SearchBar.jsx';
import Newsletter from "../shared/Newsletter";
import TourCard from '../shared/TourCard';
import '../styles/tour.css';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const Tours = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  
  const {data: tours, loading, error} = useFetch(`${BASE_URL}/tours?page=${currentPage-1}`)
  const {data: tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`)
  const totalPages = Math.ceil(tourCount / 8);

  useEffect(() => {
    window.scrollTo(0,0)
  });

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <CommonSection title={"All Tours"}/>

      <section>
        <div className='container'>
          <div className='row'>
            <SearchBar />
          </div>
        </div>
      </section>

      <section className='pt-0'>
        <div className='container'>
          {loading && <h4 className='text-center pt-5'>Loading.......</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {
            !loading && !error &&
            <div className='row'>
            {
              tours?.map(tour=> <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-0' key={tour._id}> <TourCard tour={tour}/> </div> )
            }
            <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? 'active-page' : ''}
                >
                  {index + 1}
                </button>
              ))}
            </div>            
          </div>
        }
        </div>
      </section>
      

      <Newsletter />
    </>
  )
}

export default Tours