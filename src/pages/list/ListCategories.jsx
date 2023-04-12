import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataCategories from '../../components/datatable/DataCategories'
import { NavLink } from 'react-router-dom'
import Helmet from '../../components/helmet/Helmet'

const ListCategory = () => {
  return (
    <Helmet title='Kategorie'>
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
    </Helmet>
  )
}

export default ListCategory
