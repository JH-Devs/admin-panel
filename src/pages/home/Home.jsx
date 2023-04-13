import React from 'react'
import './home.scss'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
import Helmet from '../../components/helmet/Helmet'

const Home = () => {
  return (
    <Helmet title='Nástěnka'>
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
              <Chart title='Prodeje' aspect={ 2 / 1 }/>
            </div>
            <div className="listContainer">
              <div className="listTitle">Nejnovější objednávky</div>
              <Table />
              
            </div>
        </div>
    </div>
    </Helmet>
  )
}

export default Home