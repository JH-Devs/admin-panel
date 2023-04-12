import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import DataDelivery from '../../components/datatable/DataDelivery'
import { NavLink } from 'react-router-dom'
import Helmet from '../../components/helmet/Helmet'

const ListDelivery = () => {
  return (
    <Helmet title='Dopravci'>
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className='btn__add'>
          <button><NavLink to='/doprava/pridat'>Přidat dopravce</NavLink></button>
        </div>
        <DataDelivery />
      </div>
    </div>
    </Helmet>
  )
}

export default ListDelivery