import React, { useState } from 'react'
import CommonSection from '../shared/CommonSection'
import SearchBar from '../shared/SearchBar';
import Newsletter from "../shared/Newsletter";
import TourCard from '../shared/TourCard';
import tourData from '../assets/data/tours'
import '../styles/tour.css';

const Tours = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastTour = currentPage * itemsPerPage;
  const indexOfFirstTour = indexOfLastTour - itemsPerPage;
  const currentTours = tourData.slice(indexOfFirstTour, indexOfLastTour);

  const totalPages = Math.ceil(tourData.length / itemsPerPage);

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
          <div className='row'>
            {
              currentTours?.map(tour=> <div className='col-lg-3 mb-0' key={tour.id}> <TourCard tour={tour}/> </div> )
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
        </div>
      </section>
      

      <Newsletter />
    </>
  )
}

export default Tours