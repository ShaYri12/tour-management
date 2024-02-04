import React from 'react'
import ServiceCard from './ServiceCard'
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const ServiceList = () => {
  
  const servicesData =[
    {
      imgUrl: weatherImg,
      title:"Calculate Weather",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      imgUrl: guideImg,
      title:"Best Tour Guide",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      imgUrl: customizationImg,
      title:"Customization",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    }
  ];

  return (
    <>
    {
      servicesData.map((item,index)=>(
      <div className='col-lg-3 col-md-6 col-12' key={index}>
        <ServiceCard item={item}/>
      </div>
      ))}
  </>
  )
}

export default ServiceList