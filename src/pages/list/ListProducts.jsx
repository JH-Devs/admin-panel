import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataProducts from '../../components/datatable/DataProducts'

const ListProducts = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataProducts />
      </div>
    </div>
  )
}

export default ListProducts
