import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataDocs from '../../components/datatable/DataDocs'
import { NavLink } from 'react-router-dom'
import Helmet from '../../components/helmet/Helmet'

const ListDocs = () => {
  return (
    <Helmet title='Dokumenty'>
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className='btn__add'>
          <button><NavLink to='/dokumenty/pridat'>Přidat dokument</NavLink></button>
        </div>
        <DataDocs />
      </div>
    </div>
    </Helmet>
  )
}

export default ListDocs