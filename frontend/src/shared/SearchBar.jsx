import React, { useRef } from 'react'
import './search-bar.css'
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SearchBar = () => {
    const locationRef= useRef('');
    const distanceRef= useRef(0);
    const maxGroupSizeRef= useRef(0);
    const navigate = useNavigate();

    const searchHandler = async () => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;
        if(location === '' && distance ==='' && maxGroupSize ===''){
            toast.error("All Fields Are Empty")
        }
        
        // Build the query parameters based on non-empty values
        const queryParams = {};
        if (location !== '') queryParams.city = location;
        if (distance !== '') queryParams.distance = distance;
        if (maxGroupSize !== '') queryParams.maxGroupSize = maxGroupSize;
      
        const queryString = new URLSearchParams(queryParams).toString();
      
        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?${queryString}`);
      
        if (!res.ok) toast.error('Something went wrong');
      
        const result = await res.json();
      
        navigate(
          `/tours/search?${queryString}`,
          { state: result.data }
        );
      };

  return (
    
    <div className="col-12 col-lg-6">
        <div className="search-bar ">
            <form className="d-flex align-item-center gap-4 flex-wrap">
                <div className="form-group d-flex gap-3 form-group-fast">
                    <span>
                        <i className="ri-map-pin-line"></i>
                    </span>
                    <div className='w-100'>
                        <h6>Location</h6>
                        <input type="text" placeholder="Where are you going?" ref={locationRef}/>            
                    </div>
                </div>
                <div className="form-group d-flex gap-3 form-group-fast">
                    <span>
                        <i className="ri-map-pin-time-line"></i>
                    </span>
                    <div className='w-100'>
                        <h6>Distance</h6>
                        <input type="number" placeholder="Distance k/m" ref={distanceRef}/>            
                    </div>
                </div>
                <div className="form-group d-flex gap-3 form-group-last">
                    <span>
                        <i className="ri-group-line"></i>
                    </span>
                    <div className='w-100'>
                        <h6>Max People</h6>
                        <input type="number" placeholder="0" ref={maxGroupSizeRef} />            
                    </div>
                </div>
                
                <span className="search-icon my-auto flex-grow-1"type="submit" onClick={searchHandler}>
                <i className="ri-search-line align-items-center justify-content-center d-flex flex-grow-1"></i>
                </span>
                
            </form>
        </div>
    </div>
  )
}

export default SearchBar