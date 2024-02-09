import React from 'react'

const Bookings = () => {
  return (
    <div className='all-tours container pt-4 mt-5'>
      <div className='row align-item-center justify-content-center'>
        <h1>Bookings</h1>
        <h5 className='ps-3 pt-2'>All Bookings</h5>
        <div className='col-12'>
        <table className="table tours-table">
          <thead>
            <tr>
              <th scope="col" className='text-center'>#</th>
              <th scope="col">Tour</th>
              <th scope="col">Person Name</th>
              <th scope="col">Persons</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col" className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className='text-center'>1</th>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>Otto</td>
              <td>Pending...</td>
              <td className='text-center'>
                <button className='btn btn-light' type="button">
                  <i class="ri-check-line action-icon"></i>
                  </button>
                  /
                  <button className='btn btn-light' type="button">
                    <i class="ri-close-line action-icon"></i>
                  </button>
                </td>
            </tr>
            <tr>
              <th scope="row" className='text-center'>2</th>
              <td>Jacob</td>
              <td>Jacob</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Pending...</td>
              <td className='text-center'>
                <button className='btn btn-light' type="button">
                  <i class="ri-check-line action-icon"></i>
                  </button>
                  /
                  <button className='btn btn-light' type="button">
                    <i class="ri-close-line action-icon"></i>
                  </button>
                </td> 
            </tr>
            <tr>
              <th scope="row" className='text-center'>3</th>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>Pending...</td>
              <td className='text-center'> 
                <button className='btn btn-light' type="button">
                  <i class="ri-check-line action-icon"></i>
                  </button>
                  /
                  <button className='btn btn-light' type="button">
                    <i class="ri-close-line action-icon"></i>
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

export default Bookings