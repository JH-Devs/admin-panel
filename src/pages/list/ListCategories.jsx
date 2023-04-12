import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataCategories from '../../components/datatable/DataCategories'
import { NavLink } from 'react-router-dom'

const ListDocs = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className='btn__add'>
          <button><NavLink to='/kategorie/pridat'>Přidat kategorii</NavLink></button>
        </div>
        <DataCategories />
      </div>
    </div>
  )
}

export default ListDocs
