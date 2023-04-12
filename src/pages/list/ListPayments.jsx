import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataPayments from '../../components/datatable/DataPayments'
import { NavLink } from 'react-router-dom'

const ListPayments = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className='btn__add'>
          <button><NavLink to='/platba/pridat'>Přidat platební metodu</NavLink></button>
        </div>
        <DataPayments />
      </div>
    </div>
  )
}

export default ListPayments