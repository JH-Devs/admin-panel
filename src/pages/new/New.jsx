import React from 'react'
import './new.scss'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/Navbar'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { addDoc, doc, setDoc,collection,serverTimestamp, Timestamp } from "firebase/firestore"; 
import { useState } from 'react';
import { auth,db, storage } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { motion } from 'framer-motion';
import { ref, uploadBytesResumable,getDownloadURL } from 'firebase/storage';
import { useEffect } from 'react';

const New = ({inputs, title}) => {
  const [file, setFile] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value});
  };
 
  const handleAdd =async(e) => {
    e.preventDefault();
    try{
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, 'users', res.user.uid), {
      ...data,
      timestamp:serverTimestamp()
    });
  } catch(err){
    console.log(err)
    }
  };

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
            <form onSubmit={handleAdd}>
              {
                inputs.map((input) => (
                  
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input id={input.id} type={input.type} onChange={handleInput} />
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
              <motion.button whileTap={{scale:1.2}} type='submit' className='user__btn'>vytvořit</motion.button>
            </form>
          </div>
        </div>
      </div>     
    </div>
  )
}

export default New