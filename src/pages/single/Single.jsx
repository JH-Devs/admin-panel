import React from 'react'
import './single.scss'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

const Single = () => {
  return (
    <div className='single'>
      <SideBar />
      <div className='singleContainer'>
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">upravit</div>
            <h1 className="title">Informace</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/4862429/pexels-photo-4862429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jana Nová</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">email@email.cz</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Telefon:</span>
                  <span className="itemValue">123 456 789</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adresa:</span>
                  <span className="itemValue">adresa 1, 111 11 Město</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">Host</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Země:</span>
                  <span className="itemValue">ČR</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1 } title='Objednávky uživatele' />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Objednávky</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single