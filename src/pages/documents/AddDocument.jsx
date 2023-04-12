import React, {useState} from 'react'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import './addDocument.scss'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const AddDocument = () => {
    const [file, setFile] = useState('');

  return (
    <div className='document'>
    <SideBar />
    <div className="documentContainer">
      <Navbar />
      <div className="top">
        <h1 className='title'>Přidat dokument</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt="" />
        </div>
        <div className="right">
          <form >   
            <div className="formGroup" >
              <label>Název</label>
              <input type='text' />
            </div>
            <div className="formGroup" >
              <label>Text dokumentu</label>
             <Editor />
            </div>
            <div className="formGroup">
              <label htmlFor='file'>Hlavní obrázek: </label>
              <input type="file"
              style={{border:'none'}}
               id='file' 
               onChange={e=>setFile(e.target.files[0])} 
               />
            </div>
            <div className="formGroup" >
              <label>Klíčová slova</label>
              <input type='text' />
            </div>
            <button className='user__btn'>vytvořit</button>
          </form>
        </div>
      </div>
    </div> 
  
      <div className="haha">
    
    </div>   
  </div>

 
  )
}

export default AddDocument
