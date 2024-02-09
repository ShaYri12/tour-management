import React, { useState, useEffect } from 'react';
import CommonSection from './../shared/CommonSection';
import { useLocation } from 'react-router-dom';
import TourCard from '../shared/TourCard';
import Newsletter from '../shared/Newsletter';
import SearchBar from '../shared/SearchBar';


const SearchResultList = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (location.state) {
      setData(location.state);
    }
  }, [location.state]);

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <div className='container'>
          <div className='row'>
            <SearchBar />
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row'>
            {data.length === 0 ? (
              <h4 className='text-center'>No Tour Found</h4>
            ) : (
              data?.map(tour => (
                <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
}

export default SearchResultList;
