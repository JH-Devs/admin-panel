import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataDelivery from '../../components/datatable/DataDelivery'

const ListDelivery = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataDelivery />
      </div>
    </div>
  )
}

export default ListDelivery