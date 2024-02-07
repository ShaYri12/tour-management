import React ,{useEffect} from 'react'
import '../styles/home.css'
import Subtitle from '../shared/Subtitle';

import heroImg01 from '../assets/images/hero-img01.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import heroImg02 from '../assets/images/hero-img02.jpg';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import SearchBar from '../shared/SearchBar';
import  ServiceList from '../services/ServiceList'
import FeatureTourList from '../component/Featured_tours/FeatureTourList'
import MasonryImagesGallery from '../component/image-gallery/MasonryImageGallery'
import Testimonials from "../component/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";



const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    {/* ================ Hero-Section-Start ================ */}
    <section>
      <div className="container ">
        <div className="row d-flex align-item-center justify-content-center justify-content-lg-start">
          <div className="col-12 col-md-12 col-lg-6 hero-content  my-auto d-flex flex-column align-item-center justify-content-center">
            <div className="subtitle-content d-flex align-item-center">
              <Subtitle subtitle="Know Before You Go!" />
              <img src={worldImg} alt=""/>
            </div> 
            <h1 className='text-md-start  text-center'>
              Traveling opens the door to creating
              <span className="highlight"> memories</span>
            </h1>
            <p className="hero-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
          </div>
          <div className="col-12 col-lg-2 col-md-4 d-md-block d-none">
            <div className="hero-img-box">
              <img src={heroImg01} alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-2 col-md-4">
            <div className="hero-img-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </div>
          <div className="col-12 col-lg-2 col-md-4 d-md-block d-none">
            <div className="hero-img-box mt-md-5 mt-4">
              <img src={heroImg02} alt="" />
            </div>
          </div>
          
          <SearchBar/>
          
        </div>
      </div>
    </section>
    {/* ================ Hero-Section-End ================ */}

    {/* ================ Services-Section-Start ================ */}
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <h5 className="services-subtitle">What we serve</h5>
            <h2 className="services-title">We offer our best services</h2>
          </div>
          <ServiceList/>
        </div>
      </div>
    </section>
    {/* ================ Services-Section-End ================ */}

    {/* ================ Featured-Section-Start ================ */}
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <Subtitle subtitle={"Explore"}/>
            <h2 className="featured-tour-title">Our featured tours</h2>
          </div>
          <FeatureTourList/>
        </div>
      </div>
    </section>
    {/* ================ Featured-Section-End ================ */}

    {/* ================ Experience-Section-Start ================ */}
    <section>
      <div className='container'>
        <div className='row '>
          <div className='col-lg-6 col-12'>
            <div className='experience-content '>
              <Subtitle subtitle={"Experience"}/>
              <h2>With our all experience we will serve you</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quas aliquam, hic tompora inventore suscipit unde.
              </p>
            </div>
            <div className='counter-wrapper  d-flex flex-column flex-sm-row px-2 text-center justify-content-around align-items-center gap-5'>
              <div className='counter-box '>
                <span>2k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className='counter-box '>
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className='counter-box '>
                <span>15+</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-12 my-auto'>
            <div className='experience-img '>
              <img className='' src={experienceImg} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ================ Experience-Section-End ================ */}

    {/* ================ Gallery-Section-Start ================ */}
    <section id="gallery-section">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <Subtitle subtitle={"Gallery"}/>
            <h2 className='gallery-title'>Visit our customers tour gallery</h2>
          </div>
          <div className='col-lg-12'>
            <MasonryImagesGallery/>
          </div>
        </div>
      </div>
    </section>
    {/* ================ Gallery-Section-End ================ */}

    {/* ================ Testimonial-Section-Start ================ */}
    <section >
      <div className='container' >
        <div className='row'>
          <div className='col-lg-12'>
            <Subtitle subtitle={"Fans Love"}/>
            <h2 className='testimonial-title'>What our fans say about us</h2>
          </div>
          <div className='col-lg-12'>
            <Testimonials/>
          </div>
        </div>
      </div>
    </section>
    {/* ================ Testimonial-Section-End ================ */}
    
    {/* ================ Newsletter-Section-Start ================ */}
    <Newsletter/>
    {/* ================ Newsletter-Section-End ================ */}

  </>
  );
}

export default Home