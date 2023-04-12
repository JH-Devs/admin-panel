import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataPayments from '../../components/datatable/DataPayments'

const ListPayments = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataPayments />
      </div>
    </div>
  )
}

export default ListPayments