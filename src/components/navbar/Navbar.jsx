import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListIcon from '@mui/icons-material/List';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Hledat...' />
          <SearchIcon className='icon' />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon className='icon__top'/>
            <p>CZ</p>
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon className='icon__top' />
          </div>
          <div className='item'>
            <FullscreenExitOutlinedIcon className='icon__top' />
          </div>
          <div className='item'>
            <NotificationsNoneOutlinedIcon className='icon__top' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className='icon__top' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListIcon className='icon__top' />
          </div>
          <div className='item'>
          <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/FAB005/external-user-interface-kiranshastry-lineal-kiranshastry.png" className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar