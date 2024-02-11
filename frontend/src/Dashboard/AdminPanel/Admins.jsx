import React from 'react'
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

const Admins = () => {
  const {data: admins, loading, error} = useFetch(`${BASE_URL}/users/admins`);

  return (
    <div className='data-box container pt-4 mt-5'>
      <div className='row align-item-center justify-content-center'>
        <h1>Users</h1>
        <h5 className='ps-3 pt-2'>All Users</h5>
        <div className='col-12 table-box'>
        <table className="table tours-table shadow-lg">
          <thead>
            <tr>
              <th scope="col" className='text-center'>#</th>
              <th scope="col">Profile Pic</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
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
              admins?.map((admin,index)=>(
            <tr key={admin._id}>
              <th scope="row" className='text-center'>{index+1}</th>
              <td>{admin.photo}</td>
              <td>{admin.username}</td>
              <td>{admin.email}</td>
              <td className='text-center'>
                <button className='btn btn-light' type="button">
                  <i className="ri-edit-box-line action-icon edit-icon"></i>
                  </button>
                  /
                  <button className='btn btn-light' type="button">
                    <i className="ri-delete-bin-line action-icon delete-icon"></i>
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

export default Admins