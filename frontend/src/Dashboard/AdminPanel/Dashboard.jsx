import React from 'react';
import './styles/dashboard.css';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/config';
// import { AuthContext } from '../../context/AuthContext';
import useFetch from '../../hooks/useFetch';

const Dashboard = () => {
  // const authContext = useContext(AuthContext);
  // const { token } = authContext;

  // const useFetch = (url) => {
  //   const [data, setData] = useState([]);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoading(true);

  //       try {
  //         const res = await fetch(url, {
  //           method: "GET",
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         if (!res.ok) {
  //           throw new Error(`Failed to fetch data from ${url}. Status: ${res.status} - ${res.statusText}`);
  //         }
          
  //         const result = await res.json();
  //         setData(result.data);
  //       } catch (err) {
  //         setError(err.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, [url, token]);

  //   return { data, loading, error };


  

  // const { data: users, loading: loadingUsers, error: errorUsers } = useFetch(`${BASE_URL}/users`);
  
  const { data: admins, loading: loadingAdmins, error: errorAdmins } = useFetch(`${BASE_URL}/users/search/admins`,token);
  // const { data: bookings, loading: loadingBookings, error: errorBookings } = useFetch(`${BASE_URL}/booking`);
  // const { data: tours, loading: loadingTours, error: errorTours } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  return (
    <div className='dashboard container pt-4 mt-5'>
      <div className='row align-item-center justify-content-center'>
        <h1>Dashboard</h1>
        <h5 className='ps-3 pt-2'>General Report</h5>
        <Link to="/users" className='general-box mt-5 border border-2 align-items-center justify-content-center d-flex flex-column shadow-xl col-lg-3 col-md-4'>
          <h3>Users</h3>
          <h3 className='pt-3'>{users.length}</h3>
        </Link>
        <Link to="/all-bookings" className='general-box mt-5 border border-2 align-items-center justify-content-center d-flex flex-column shadow-xl col-lg-3 col-md-4'>
          <h3>Bookings</h3>
          <h3 className='pt-3'>{bookings.length}</h3>
        </Link>
        <Link to="/all-tours" className='general-box mt-5 border border-2 align-items-center justify-content-center d-flex flex-column shadow-xl col-lg-3 col-md-4'>
          <h3>Tours</h3>
          <h3 className='pt-3'>{tours}</h3>
        </Link>
        <Link to="/admins" className='general-box mt-5 border border-2 align-items-center justify-content-center d-flex flex-column shadow-xl col-lg-3 col-md-4'>
          <h3>Admins</h3>
          <h3 className='pt-3'>{admins.length}</h3>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;