import React from 'react'

const Users = () => {
  return (
    <div className='data-box container pt-4 mt-5'>
      <div className='row align-item-center justify-content-center'>
        <h1>Users</h1>
        <h5 className='ps-3 pt-2'>All Users</h5>
        <div className='col-12'>
        <table className="table tours-table">
          <thead>
            <tr>
              <th scope="col" className='text-center'>#</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Bookings</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className='text-center'>1</th>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
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
            <tr>
              <th scope="row" className='text-center'>2</th>
              <td>Jacob</td>
              <td>Jacob</td>
              <td>Thornton</td>
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
            <tr>
              <th scope="row" className='text-center'>3</th>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
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
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Users