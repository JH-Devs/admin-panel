import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DatatableUsers from '../../components/datatable/DatatableUsers'
import { NavLink } from 'react-router-dom'
import Helmet from '../../components/helmet/Helmet'

const ListUsers = () => {
  return (
    <Helmet title='Uživatelé'>
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className='btn__add'>
          <button><NavLink to='/uzivatele/pridat'>Přidat uživatele</NavLink></button>
        </div>
        <DatatableUsers />
      </div>
    </div>
    </Helmet>
  )
}

export default ListUsers