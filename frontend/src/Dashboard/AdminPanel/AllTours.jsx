import React from 'react'
import './styles/data-table.css'
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';
import calculateAvgRating from '../../utils/avgRating';


const AllTours = () => {
  
  const {data: tours, loading, error} = useFetch(`${BASE_URL}/tours`);
  
  
  return (
    <div className='data-box container pt-4 mt-5'>
      <div className='row align-item-center justify-content-center'>
        <h1>Tours</h1>
        <h5 className='ps-3 pt-2'>All Tours</h5>
        <div className='col-12 table-box '>
        <table className="table tours-table shadow-lg">
          <thead>
            <tr>
              <th scope="col" className='text-center'>#</th>
              <th scope="col">Tour</th>
              <th scope="col">Location</th>
              <th scope="col">Rating</th>
              <th scope="col">Amount</th>
              <th scope="col">Featured</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>  
          {
            loading && <h4>Loading.......</h4>
          }
          {
            error && <h4>{error}</h4>
          }
          {!loading && !error &&
              tours?.map((tour,index)=>(
            <tr key={tour._id}>
              <th scope="row" className='text-center'>{index+1}</th>
              <AllToursData tour={tour}/>
            </tr>
          ))}
          </tbody>
        </table>
 
        </div>
      </div>
    </div>
  )
}

export default AllTours;


export const AllToursData = ({tour}) => {
  
  const {title, city, photo, price, featured, reviews} = tour;
    
  const {totalRating, avgRating} = calculateAvgRating(reviews);

  return (
    <>
    
              <td><img  className='img-fluid rounded-2' src={photo} style={{width: '100px'}}/> {title}</td>
              <td>{city}</td>
              <td>
              {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Not Rated</span>:(
                        <span>({reviews.length})</span>
                    )}
              </td>
              <td>$ {price}</td>
              <td>{featured? ('Yes'):('No')}</td>
              <td className='text-center'>
                <button className='btn btn-light' type="button">
                  <i className="ri-edit-box-line action-icon edit-icon"></i>
                  </button>
                   / 
                  <button className='btn btn-light' type="button">
                    <i className="ri-delete-bin-line action-icon delete-icon"></i>
                  </button>
                </td>
    </>
  )
}

