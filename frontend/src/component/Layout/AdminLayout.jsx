import React from 'react'
import AdminRouters from '../../router/AdminRouters'
import Sidebar from '../../Dashboard/AdminPanel/component/Sidebar'

const AdminLayout = () => {
  return (
    <div className='w-100'>
        <div className="d-flex w-100">
            <Sidebar />
            <AdminRouters/>
        </div>  
    </div>
  )
}

export default AdminLayout