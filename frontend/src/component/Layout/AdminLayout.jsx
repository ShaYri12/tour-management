import React from 'react'
import AdminRouters from '../../router/AdminRouters'
import Sidebar from '../../Dashboard/AdminPanel/component/Sidebar'

const AdminLayout = () => {
  return (
    <div className='admin-layout w-100'>
        <div className="d-flex w-100">
            <Sidebar />
            <main className="main-content flex-grow-1">
                <AdminRouters/>
            </main>
        </div>  
    </div>
  )
}

export default AdminLayout