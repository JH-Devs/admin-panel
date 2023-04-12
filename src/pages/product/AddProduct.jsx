import React, {useState, Component} from 'react'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import './addProduct.scss'
import { Editor } from 'react-draft-wysiwyg';



const Addproduct = () => {
    const [file, setFile] = useState('');

    const [file1, setFile1] = useState('');
    const [file2, setFile2] = useState('');
    const [file3, setFile3] = useState('');
    const [file4, setFile4] = useState('');

    const EditorComoponent = () => <Editor />
  return (
    <div className='product'>
    <SideBar />
    <div className="productContainer">
      <Navbar />
      <div className="top">
        <h1 className='title'>Přidat produkt</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt="" />
         <div className="subImg">
         <img src={file1 ? URL.createObjectURL(file1) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt="" />
         <img src={file2 ? URL.createObjectURL(file2) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt="" />
         <img src={file3 ? URL.createObjectURL(file3) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt="" />
         <img src={file4 ? URL.createObjectURL(file4) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt="" />
         </div>
        </div>
        <div className="right">
          <form >   
            <div className="formGroup" >
              <label>Název</label>
              <input type='text' />
            </div>
            <div className="formGroup">
                <label >Kategorie</label>
                <select >
                    <option value="">-- vybrat kategorii --</option>
                    <option value="">Kategorie 1</option>
                    <option value="">Kategorie 2</option>
                    <option value="">Kategorie 3</option>
                </select>
            </div>
            <div className="formGroup">
                <label >Skladem</label>
                <select >
                    <option value="">-- vybrat dostupnost --</option>
                    <option value="">skladem</option>
                    <option value="">vyprodáno</option>
                    <option value="">u dodavatele</option>
                </select>
            </div>
            <div className="formGroup" >
              <label>Krátký popis</label>
              <Editor  wrapperClassName="wrapper"
     editorClassName="editor"
     toolbarClassName="toolbar"/>
            </div>
            <div className="formGroup" >
              <label>Podrobný popis</label>
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
            <div className="formGroup">
              <label htmlFor='file1'>další obrázek: </label>
              <input style={{border:'none'}} type="file" id='file1' onChange={e=>setFile1(e.target.files[0])} 
               />
                <input style={{border:'none'}} type="file" id='file2' onChange={e=>setFile2(e.target.files[0])} 
               />
               <input style={{border:'none'}} type="file" id='file3' onChange={e=>setFile3(e.target.files[0])} 
               />
                <input style={{border:'none'}} type="file" id='file4' onChange={e=>setFile4(e.target.files[0])} 
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
  </div>

  )
}

export default Addproduct
