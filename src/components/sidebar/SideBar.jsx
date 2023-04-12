import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import StoreIcon from '@mui/icons-material/Store';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { NavLink } from 'react-router-dom';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';

const SideBar = () => {

   // const logout = () => {}

  return (
    <div className='sidebar'>
        <div className='top' >
            <span className='logo'>Admin panel</span>
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <p className='title'>Hlavní menu</p>
                <li>
                    < DashboardIcon className='icon' />
                    <span><NavLink to='/'className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Nástěnka</NavLink></span>
                </li>
                <p className='title'>Seznamy</p>
                <li>
                    <PeopleIcon className='icon' />
                    <span><NavLink to='/uzivatele' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Uživatelé</NavLink></span>
                </li>
                <li>
                    <StoreIcon className='icon' />
                    <span><NavLink to='/produkty' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Produkty</NavLink></span>
                </li>
                <li>
                    <CategoryIcon className='icon' />
                    <span><NavLink to='/kategorie' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Kategorie</NavLink></span>
                </li>
                <li>
                    <ListAltIcon className='icon' />
                    <span><NavLink to='/objednavky' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Objednávky</NavLink></span>
                </li>
                <li>
                    <LocalShippingIcon className='icon' />
                    <span><NavLink to='/doprava' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Doprava</NavLink></span>
                </li>
                <li>
                    <PaymentsIcon className='icon' />
                    <span><NavLink to='/platba' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Platba</NavLink></span>
                </li>
                <li>
                    <PlagiarismIcon className='icon' />
                    <span><NavLink to='/dokumenty' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Dokumenty</NavLink></span>
                </li>
                <p className='title'>Ostatní odkazy</p>
                <li>
                    <EqualizerIcon className='icon' />
                    <span><NavLink to='/statistiky' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Statistiky</NavLink></span>
                </li>
                <li>
                    <NotificationsActiveIcon className='icon' />
                    <span><NavLink to='/upozorneni' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Upozornění</NavLink></span>
                </li>
                <p className='title'>Servis</p>
                <li>
                    <HealthAndSafetyIcon className='icon'/>
                    <span><NavLink to='/system' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>System Health</NavLink></span>
                </li>
                <li>
                    <LoginIcon className='icon'/>
                    <span><NavLink to='/prihlasovani' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Přihlašování</NavLink></span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span><NavLink to='/nastaveni' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Nastavení</NavLink></span>
                </li>
                <p className='title'>Uživatel</p>
                <li>
                    <Person2Icon className='icon'/>
                    <span><NavLink to='profil' className={(navClass) => navClass.isActive ? 'nav__active' : ''}>Profil</NavLink></span>
                </li>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>odhlásit se</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className='colorOption'></div>
            <div className='colorOption'></div>
            <div className='colorOption'></div>
        </div>
    </div>
  )
}

export default SideBar