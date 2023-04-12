import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataProducts from '../../components/datatable/DataProducts'
import { NavLink } from 'react-router-dom'
import Helmet from '../../components/helmet/Helmet'

const ListProducts = () => {
  return (
    <Helmet title='Produkty'>
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className='btn__add'>
          <button><NavLink to='/produkty/pridat'>Přidat produkt</NavLink></button>
        </div>
        <DataProducts />
      </div>
    </div>
    </Helmet>
  )
}

export default ListProducts
