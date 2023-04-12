import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataOrders from '../../components/datatable/DataOrders'

const ListOrders = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataOrders />
      </div>
    </div>
  )
}

export default ListOrders
