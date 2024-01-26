import React, { useRef } from 'react'
import './search-bar.css'

const SearchBar = () => {
    const locationRef= useRef('');
    const distanceRef= useRef(0);
    const maxGroupSizeRef= useRef(0);

    const searchHandler= ()=>{
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if(location =='' || distance =='' || maxGroupSize ==''){
            return alert("All fields are required!")
        }
    }

  return (
    <div className="col-12 col-lg-12">
        <div className="search-bar">
            <form className="form d-flex align-item-center gap-4">
                <div className="form-group d-flex gap-3 form-group-fast">
                    <span>
                        <i className="ri-map-pin-line"></i>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder="Where are you going?" ref={locationRef}/>            
                    </div>
                </div>
                <div className="form-group d-flex gap-3 form-group-fast">
                    <span>
                        <i className="ri-map-pin-time-line"></i>
                    </span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder="Distance k/m" ref={distanceRef}/>            
                    </div>
                </div>
                <div className="form-group d-flex gap-3 form-group-last">
                    <span>
                        <i className="ri-group-line"></i>
                    </span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder="0" ref={maxGroupSizeRef} />            
                    </div>
                </div>
                <span className="search-icon my-auto" type="submit" onClick={searchHandler}>
                <i className="ri-search-line"></i>
                </span>                
            </form>
        </div>
    </div>
  )
}

export default SearchBar