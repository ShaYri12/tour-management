import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext.jsx';
import Layout from './component/Layout/Layout';
import './app.css';
import AdminLayout from './component/Layout/AdminLayout';

function App() {
  const { role } = useContext(AuthContext)
  return (
    <div>
    {role && role  === 'admin' ? (
        <AdminLayout />
      ) : (
        <Layout />
      )}
    </div>
  );
}

export default App;
