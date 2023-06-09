import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {
  let data;

  // temporary
  const amount = 100;
  const diff = 20;

    switch(type) {
      case 'user':
        data={
          title:'uživatelé',
          isMoney: false,
          link: 'zobrazit všechny uživatele',
          icon: <PersonOutlinedIcon className='icon' style={{color:'#fff', backgroundColor:'#f8c291'}} />,          
        };
        break;
        case 'order':
          data={
            title:'objednávky',
            isMoney: false,
            link: 'zobrazit všechny objednávky',
            icon: <ShoppingCartOutlinedIcon className='icon' style={{color:'#fff', backgroundColor:'#82ccdd'}}/>,          
          };
          break;
          case 'erarning':
            data={
              title:'zisk',
              isMoney: true,
              link: 'zobrazit všechny zisky',
              icon: <MonetizationOnOutlinedIcon className='icon' style={{color:'#fff', backgroundColor:'#b8e994'}}/>,          
            };
            break;
            case 'balance':
              data={
                title:'zůstatek',
                isMoney: true,
                link: 'zobrazit všechny zůstatky',
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{color:'#fff', backgroundColor:'#6a89cc'}}/>,          
              };
              break;
        default:
          break;
    }


  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'> {data.title}</span>
            <span className='counter'> {amount} {data.isMoney && 'Kč'}   </span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget 