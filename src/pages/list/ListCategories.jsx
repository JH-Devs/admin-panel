import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataCategories from '../../components/datatable/DataCategories'

const ListDocs = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataCategories />
      </div>
    </div>
  )
}

export default ListDocs
