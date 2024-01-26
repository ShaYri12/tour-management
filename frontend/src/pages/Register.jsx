import React,{useState} from 'react'
import '../styles/login.css';
import {Link, useNavigate} from 'react-router-dom';

import RegisterImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'

const Register = () => {

  const [credentials, setCredentials] = useState({
    userName:undefined,
    email:undefined,
    password:undefined
  });

  const navigate = useNavigate();
  
  const handleChange= e =>{
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = e =>{
    e.preventDefault();
    alert("Register Successful!");
    navigate("/login");
  }
  return (
    <section>
      <div className='container'>
        <div className='row'> 
          <div className='col-lg-8 m-auto'>
            <div className='login-container d-flex justify-content-between'>
              <div className='login-img'>
                <img src={RegisterImg} alt=""/>
              </div>
              <div className='login-form'>
                <div className='user'>
                  <img src={userIcon} alt=""/>
                </div>
                <h2>Register</h2>

                <form onSubmit={handleClick}>
                  <div className='form-group mb-3'> 
                    <input type="text" placeholder='Username' required id="userName" onChange={handleChange}/>
                  </div>
                  <div className='form-group mb-3'> 
                    <input type="email" placeholder='Email' required id="email" onChange={handleChange}/>
                  </div>
                  <div className='form-group mb-3'> 
                    <input type="password" placeholder='Password' required id="password" onChange={handleChange}/>
                  </div>
                  <button className='btn btn-secondary auth-btn' type="submit" >Create Account</button>
                </form>
                <p>Already have an account? <Link to="/Login">Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register