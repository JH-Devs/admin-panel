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

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'>Admin panel</span>
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <p className='title'>Hlavní menu</p>
                <li>
                    < DashboardIcon className='icon' />
                    <span>Nástěnka</span>
                </li>
                <p className='title'>Seznamy</p>
                <li>
                    <PeopleIcon className='icon' />
                    <span>Uživatelé</span>
                </li>
                <li>
                    <StoreIcon className='icon' />
                    <span>Produkty</span>
                </li>
                <li>
                    <CategoryIcon className='icon' />
                    <span>Kategorie</span>
                </li>
                <li>
                    <ListAltIcon className='icon' />
                    <span>Objednávky</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon' />
                    <span>Doprava</span>
                </li>
                <li>
                    <PaymentsIcon className='icon' />
                    <span>Platba</span>
                </li>
                <p className='title'>Ostatní odkazy</p>
                <li>
                    <EqualizerIcon className='icon' />
                    <span>Statistiky</span>
                </li>
                <li>
                    <NotificationsActiveIcon className='icon' />
                    <span>Upozornění</span>
                </li>
                <p className='title'>Servis</p>
                <li>
                    <HealthAndSafetyIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <LoginIcon className='icon'/>
                    <span>Přihlašování</span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Nastavení</span>
                </li>
                <p className='title'>Uživatel</p>
                <li>
                    <Person2Icon className='icon'/>
                    <span>Profil</span>
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