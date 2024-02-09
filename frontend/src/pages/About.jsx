import React from 'react'
import {Link} from 'react-router-dom'
import './../styles/about.css';
import tourImg from '../assets/images/tour-img02.jpg';

const About = () => {
  return (
    <section class="about-section">
    	<div class="container">
        	<div class="row clearfix">
              
                <div class="content-column col-lg-6 col-md-12 col-sm-12 col-xs-12">
                	<div class="inner-column">
                    	<div class="sec-title">
                    		<div class="title">About Us</div>
                        	<h2>We Are The Leader In <br/> The Tour World</h2>
                        </div>
                        <div class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
                        <div class="email">Business Email: <span class="theme_color">business1@gmail.com</span></div>
                        <Link href="/about" class="theme-btn btn-style-three">Read More</Link>
                    </div>
                </div>
                
                <div class="image-column col-lg-6 col-md-12 d-none d-md-block justify-content-center mt-5 pt-3">
                	<div class="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                    	<div class="image">
                        	<img src={tourImg} alt=""/>
                            <div class="overlay-box">
                            	<div class="year-box"><span class="number">5</span>Years <br/> Experience <br/> Working</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default About