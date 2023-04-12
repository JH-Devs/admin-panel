import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataPayments from '../../components/datatable/DataPayments'
import { NavLink } from 'react-router-dom'
import Helmet from '../../components/helmet/Helmet'

const ListPayments = () => {
  return (
    <Helmet title='Platby'>
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
    </Helmet>
  )
}

export default ListPayments