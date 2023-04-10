import React from 'react'
import './new.scss'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'

const New = () => {
  return (
    <div className='new'>
      <SideBar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className='title'>Přidat nového uživatele</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
          </div>
          <div className="right">
            <form >
              <div className="formInput">
                <label>Jméno</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Příjmení</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="formInput">
                <label>Telefon</label>
                <input type="number" />
              </div>
              <div className="formInput">
                <label>Heslo</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Adresa</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label>Země</label>
                <select >
                <option >-- vybrat --</option>
                <option value="cr">Česká republika</option>
                <option value="sk">Slovensko</option>
                </select>
              </div>
              <div className="formInput">
                <label>Role</label>
                <select >
                <option >-- vybrat --</option>
                <option value="host">Host</option>
                <option value="zakaznik">Zákazník</option>
                <option value="admin">Admin</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>     
    </div>
  )
}

export default New