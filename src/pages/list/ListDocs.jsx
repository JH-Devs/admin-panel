import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataDocs from '../../components/datatable/DataDocs'
import { NavLink } from 'react-router-dom'

const ListDocs = () => {
  return (
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
  )
}

export default ListDocs