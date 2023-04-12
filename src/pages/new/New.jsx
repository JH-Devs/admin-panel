import React from 'react'
import './new.scss'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';

const New = ({inputs, title}) => {
  const [file, setFile] = useState('');
  
  
  return (
    <div className='new'>
      <SideBar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className='title'>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt="" />
          </div>
          <div className="right">
            <form >
              {
                inputs.map((input) => (
                  
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} />
              </div>
                ))
              }
              <div className="formInput">
                <label htmlFor='file'>Obrázek:<CloudUploadIcon className='icon' /> </label>
                <input type="file"
                 id='file' 
                 onChange={e=>setFile(e.target.files[0])} 
                 style={{display:'none'}} 
                 />
                 <input type="textarea" />
              </div>
              <button type='submit' className='user__btn'>vytvořit</button>
            </form>
          </div>
        </div>
      </div>     
    </div>
  )
}

export default New