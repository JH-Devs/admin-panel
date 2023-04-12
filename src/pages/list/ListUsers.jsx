import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DatatableUsers from '../../components/datatable/DatatableUsers'

const ListUsers = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableUsers />
      </div>
    </div>
  )
}

export default ListUsers