import React from 'react'
import './common-section.css'

const CommonSection = ({title}) => {
  return (
    <section className='common-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CommonSection