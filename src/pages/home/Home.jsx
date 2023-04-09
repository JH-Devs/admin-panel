import React from 'react'
import './home.scss'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

const Home = () => {
  return (
    <div className='home'>
        <SideBar />
        <div className='home__container'>
            <Navbar />
            <div className='widgets'>
              <Widget type='user' />
              <Widget type='order' />
              <Widget type='erarning' />
              <Widget type='balance'  />
            </div>
            <div className="charts">
              <Featured />
              <Chart />
            </div>
            <div className="listContainer">
              <div className="listTitle">Nejnovější transakce</div>
              <Table />
              
            </div>
        </div>
    </div>
  )
}

export default Home