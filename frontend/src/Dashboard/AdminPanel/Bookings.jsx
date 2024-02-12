import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utils/config';


const Bookings = () => {
  
  const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);

        try {
          const res = await fetch(url, {
            method: "GET",
            credentials:'include',
          });
          if (!res.ok) {
            throw new Error(`Failed to fetch data from ${url}. Status: ${res.status} - ${res.statusText}`);
          }
          
          const result = await res.json();
          setData(result.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [url]);

    return { data, loading, error };

  }

const {data: bookings, loading, error} = useFetch(`${BASE_URL}/booking`);

  return (
    <div className='data-box container pt-4 mt-5'>
      <div className='row align-item-center justify-content-center'>
        <h1>Bookings</h1>
        <h5 className='ps-3 pt-2'>All Bookings</h5>
        <div className='col-12 table-box'>
        <table className="table tours-table shadow-lg">
          <thead>
            <tr>
              <th scope="col" className='text-center'>#</th>
              <th scope="col">Tour</th>
              <th scope="col">Full Name</th>
              <th scope="col">Email</th>
              <th scope="col">Guest Size</th>
              <th scope="col">Phone</th>
              <th scope="col">Book At</th>
              <th scope="col">Status</th>
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
              bookings?.map((booking,index)=>(
            <tr key={booking._id}>
              <th scope="row" className='text-center'>{index+1}</th>
              <td>{booking.tourName}</td>
              <td>{booking.fullName}</td>
              <td>{booking.userEmail}</td>
              <td>{booking.guestSize}</td>
              <td>{booking.phone}</td>
              <td>{booking.bookAt}</td>
              <td>Pending...</td>
              <td className='text-center'>
                <button className='btn btn-light' type="button">
                  <i className="ri-check-line action-icon"></i>
                  </button>
                   / 
                  <button className='btn btn-light' type="button">
                    <i className="ri-close-line action-icon"></i>
                  </button>
                </td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Bookings