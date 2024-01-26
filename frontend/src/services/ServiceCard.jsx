import React from 'react'
import './service-card.css'

const ServiceCard = ({item}) => {
  if (!item) {
    return null; // or handle the case when item is undefined
  }
    const {imgUrl, title, desc} = item;
    
  return (
    <div className="service-item">
        <div className="service-img">
            <img src={imgUrl} alt=''/>
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
    </div>
  )
}

export default ServiceCard