import React from 'react'
import './styles/data-table.css'

const AllTours = () => {
  return (
    <div className='all-tours container pt-4 mt-5'>
      <div className='row align-item-center justify-content-center'>
        <h1>Tours</h1>
        <h5 className='ps-3 pt-2'>All Tours</h5>
        <div className='col-12'>
        <table className="table tours-table">
          <thead>
            <tr>
              <th scope="col" className='text-center'>#</th>
              <th scope="col">Tour</th>
              <th scope="col">Location</th>
              <th scope="col">Rating</th>
              <th scope="col">Amount</th>
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

export default AllTours