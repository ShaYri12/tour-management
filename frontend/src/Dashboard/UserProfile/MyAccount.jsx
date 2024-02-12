import React, { useContext, useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import Avatar from '../../assets/images/avatar.jpg';
import './my-account.css';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../utils/config';
import { AuthContext } from '../../context/AuthContext';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  const [editMode, setEditMode] = useState(false);

  const [errorMsg, setErrorMsg] = useState();
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  const handleEditModeToggle = () => {
    setEditMode(!editMode);
    setErrorMsg('')
  };
  
  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setPassword(password);
      setEditMode(false);
      setErrorMsg('');
    } else {
      setErrorMsg("Passwords do not match.");
    }
  };

  const navigate = useNavigate();

  const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);

        try {
          const res = await fetch(url, {
            method: "GET",
            credentials:'include',
          });
          if (!res.ok) {
            throw new Error(`Failed to fetch data from ${url}. Status: ${res.status} - ${res.statusText}`);
          }
          
          const result = await res.json();
          setData(result.data);


        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [url]);

    return { data, loading, error };

  }

  const {dispatch} = useContext(AuthContext)
  const {id} = useParams();
  const {data: userinfo, loading: loading, error: error} = useFetch(`${BASE_URL}/users/${id}`);

  const {data: userBooking, loading: LoadingBooking, errorBooking} = useFetch(`${BASE_URL}/booking/${id}`);
  const [password, setPassword] = useState(userinfo.password);
  const [confirmPassword, setConfirmPassword] = useState(password);
  
  const deleteAccount = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
      });
      const { message } = await response.json();

      if (!response.ok) {
        toast.error(message);
      } else {
        dispatch({ type: "LOGOUT" });
        toast.info(message);
        navigate("/register");
      }
    } catch (err) {
      toast.error("Server not responding");
    }
  };

 
  
  return (
    <div className='container  my-5 pt-5'>
      <div className='row shadow-lg'>
        <div className='col-md-3 col-12 align-items-center justify-content-start d-flex flex-column mt-5 pt-5 profile '>
          <img src={Avatar} className='profile-pic img-fluid rounded-circle border border-2' />
          <h2 className='mt-3'>{
            loading && 'loading...'
          }
          {
            error && <span>{error}</span>
          } 
          {
            !loading && !error && userinfo.username
          }</h2>
          <p>
          {
            loading && 'loading.......'
          }
          {
            error && <span>{error}</span>
          } 
          {
            !loading && !error && userinfo.email
          }
          </p>
        </div>
        <div className='col-md-9 col-12 mt-3'>
          <div className='profile-navigation p-3 border border-2'>
            <button
              className={`my-booking-btn btn btn-light border border-3 ${activeTab === 'bookings' ? 'active' : ''}`}
              onClick={() => handleTabChange('bookings')}
            >
              My Bookings
            </button>
            <button
              className={`account-setting-btn btn btn-light border border-3 ${activeTab === 'accountSettings' ? 'active' : ''}`}
              onClick={() => handleTabChange('accountSettings')}
            >
              Account Setting
            </button>
          </div>
          <div>
          <div className='border border-2 p-3 mb-3'>
            {activeTab === 'bookings' && (
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col" className='text-center'>#</th>
                        <th scope="col">Tour</th>
                        <th scope="col">Person</th>
                        <th scope="col">Price</th>
                        <th scope="col">Booked At</th>
                        <th scope="col" className='text-center'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row" className='text-center'>1</th>
                        <td>{userBooking?.tourName}</td>
                        <td>{userBooking?.fullName}</td>
                        <td>{userBooking?.price}</td>
                        <td>{userBooking?.bookAt}</td>
                        <td className='text-center'>
                            <button type="button" className='cancel-btn btn btn-danger'>Cancel booking</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            )}
            {activeTab === 'accountSettings' && (
            <form className='account-setting mt-3' onSubmit={handleSaveProfile}>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Username</span>
                  <input
                    type="text"
                    className={`form-control ${editMode ? '' : 'readonly'}`}
                    placeholder="Username"
                    value={loading ? ('loading.......') : error ? {error}: (userinfo.username)}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    readOnly={!editMode}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Email</span>
                  <input
                    type="email"
                    className={`form-control ${editMode ? '' : 'readonly'}`}
                    placeholder="Email"
                    value={loading ? ('loading.......') : error ? {error}: (userinfo.email)}
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    readOnly={!editMode}
                  />
                </div>
                 {/* Button trigger modal*/}
                 <div className="input-group mb-3">
                 <span className="input-group-text" id="basic-addon1">Password</span>
                <button type="button" className="edit-profile btn btn-light " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  Change Password
                </button>
                </div>
                
                {/* Modal*/}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label for="old-password" className="col-form-label">Old Password</label>
                          <input type="password" className="form-control" id="oldPassword"/>
                        </div>
                        <div className="mb-3">
                          <label for="new-password-text" className="col-form-label">New Password</label>
                          <input type="password" className="form-control" id="newPassword"/>
                        </div>
                        <div className="mb-3">
                          <label for="confirm-password" className="col-form-label">Confirm Password</label>
                          <input type="password" className="form-control" id="confirmPassword"/>
                        </div>
                      </form>
                    </div>
              
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="edit-profile btn btn-light">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="inputGroupFile01">Profile Picture</label>
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                    disabled={!editMode}
                  />
                </div>
                  <div>
                  {editMode ?(
                    <button
                        type="button"
                        className='edit-profile btn btn-light'
                        onClick={handleEditModeToggle}
                        disabled={password !== confirmPassword}
                    >
                        <i className="ri-edit-2-line"></i> Save Profile
                    </button>
                    ):(
                    <button
                        type="submit"
                        className='edit-profile btn btn-light'
                        onClick={handleEditModeToggle}
                        
                    >
                        <i className="ri-edit-2-line"></i> Edit Profile
                    </button>
                    )}
                  </div>
                  <button type="button" className='btn btn-danger mt-5' onClick={deleteAccount}>Delete Account</button>
            </form>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MyAccount;

                