import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataDocs from '../../components/datatable/DataDocs'

const ListDocs = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataDocs />
      </div>
    </div>
  )
}

export default ListDocs