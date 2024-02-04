import React from 'react'
import './newsletter.css'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 px-3 px-md-auto  newsletter-content my-auto pb-lg-5 pb-md-0 pb-5'>
                    <h2>Subscribe now to get useful traveling information.</h2>
                    <div className='newsletter-input'>
                        <input type='email' placeholder='Enter you email'/>
                        <button className='btn newsletter-btn'>Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolar sit amet consectetur adipisicing elit.
                    Obcaecati adipisci sunt in, provident facere ipsam.</p>
                </div>
                <div className='col-lg-6 d-md-block d-none  newsletter-img '>
                    <img className='me-auto' src={maleTourist} alt=""/> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter