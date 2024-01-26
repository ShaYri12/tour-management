import React,{useState} from 'react'
import '../styles/login.css';
import {Link, useNavigate} from 'react-router-dom';

import LoginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

const Login = () => {
  const [credentials,setCredentials] = useState({
    email:undefined,
    password:undefined
  });

  const navigate = useNavigate();
  
  const handleChange= e =>{
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = e =>{
    e.preventDefault();
    alert("Login Successful!")
    navigate("/home");
  }
  return (
    <section>
      <div className='container'>
        <div className='row'> 
          <div className='col-lg-8 m-auto'>
            <div className='login-container d-flex justify-content-between'>
              <div className='login-img'>
                <img src={LoginImg} alt=""/>
              </div>
              <div className='login-form'>
                <div className='user'>
                  <img src={userIcon} alt=""/>
                </div>
                <h2>Login</h2>

                <form onSubmit={handleClick}>
                  <div className='form-group mb-3'> 
                    <input type="email" placeholder='Email' required id="email" onChange={handleChange}/>
                  </div>
                  <div className='form-group mb-3'> 
                    <input type="password" placeholder='password' required id="password" onChange={handleChange}/>
                  </div>
                  <button className='btn btn-secondary auth-btn' type="submit" >Login</button>
                </form>
                <p>Don't have an account? <Link to="/register">Create</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login