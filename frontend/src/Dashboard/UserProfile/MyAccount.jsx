import React, { useContext, useState } from 'react';
import Avatar from '../../assets/images/avatar.jpg';
import './my-account.css';
import { toast } from 'react-toastify';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';
import { AuthContext } from '../../context/AuthContext';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  const [editMode, setEditMode] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
      
      setEditMode(false);
      setErrorMsg('');
    } else {
      setErrorMsg("Passwords do not match.");
    }
  };

  const { user, dispatch, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const deleteAccount = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
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

  const {id} = params;
  const {data: userinfo, loading, error} = useFetch(`${BASE_URL}/users/${id}`);
  
  return (
    <div className='container  my-5 pt-5'>
      <div className='row shadow-lg'>
        <div className='col-md-3 col-12 align-items-center justify-content-start d-flex flex-column mt-5 pt-5 profile '>
          <img src={Avatar} className='profile-pic img-fluid rounded-circle border border-2' />
          <h2 className='mt-3'>User</h2>
          <p>xyz@gmail.com</p>
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
                        <th scope="col">Booked For</th>
                        <th scope="col" className='text-center'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row" className='text-center'>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Atto</td>
                        <td>@mdo</td>
                        <td className='text-center'>
                            <button type="button" className='cancel-btn btn btn-danger'>Cancel booking</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className='text-center'>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td className='text-center'>
                            <button type="button" className='cancel-btn btn btn-danger'>Cancel booking</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className='text-center'>3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>   
                        <td>@twitter</td>   
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
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    readOnly={!editMode}
                  />
                </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Password</span>
                    <input
                      type="password"
                      className={`form-control ${editMode ? '' : 'readonly'}`}
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      readOnly={!editMode}
                    />
                  </div>
                  {editMode && (
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">Confirm Password</span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        aria-label="Confirm Password"
                        aria-describedby="basic-addon1"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    
                  )}
                  {password !== confirmPassword && !editMode && (
                    <div className="alert alert-danger mt-3" role="alert">
                      Passwords do not match.
                    </div>
                  )}
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="inputGroupFile01">Profile Picture</label>
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                    disabled={!editMode}
                  />
                </div>
                {editMode && errorMsg && (
                    <div className="alert alert-danger mt-3" role="alert">
                      {errorMsg}
                    </div>
                  )}
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
                  <button type="submit" onClick={deleteAccount}>Delete Account</button>
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

                