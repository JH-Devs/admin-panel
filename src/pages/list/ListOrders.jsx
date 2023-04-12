import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataOrders from '../../components/datatable/DataOrders'
import Helmet from '../../components/helmet/Helmet'

const ListOrders = () => {
  return (
    <Helmet title='Objednávky'>
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataOrders />
      </div>
    </div>
    </Helmet>
  )
}

export default ListOrders
