import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {

    const rows = [
        {
            id: 5230,
            product: 'Popglory Smartwatch ',
            img:'https://m.media-amazon.com/images/I/810P3fOO81L._AC_SX679_.jpg',
            customer: 'Jana Nová',
            date: '1 Bře',
            amount: 1500,
            method: 'platba dobírkou',
            status: 'vyřízeno',
        },
        {
            id: 5248,
            product:'Garmin Lily „Sport“',
            img:'https://m.media-amazon.com/images/I/818KaM6FO7L._AC_SX679_.jpg',
            customer: 'Michaela Nová',
            date: '7 Bře',
            amount: 3800,
            method: 'online platba',
            status: 'vyřízeno',
        },
        {
            id: 5203,
            product: 'Smartwatch Herren',
            img:'https://m.media-amazon.com/images/I/71tmjJq+TYL._AC_SY300_SX300_.jpg',
            customer: 'Jan Nový',
            date: '15 Bře',
            amount: 800,
            method: 'bankovní převod',
            status: 'vyřizuje se',
        },
        {
            id: 5568,
            product: 'Garmin EPIX',
            img:'https://m.media-amazon.com/images/I/61smEsMxoBL._AC_SX679_.jpg',
            customer: 'Michal Nový',
            date: '20 Bře',
            amount: 2500,
            method: 'online platba',
            status: 'vyřizuje se',
        },
        {
            id: 5598,
            product: 'Invicta Pro Diver',
            img:'https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UL1500_.jpg',
            customer: 'Petr Nový',
            date: '25 Bře',
            amount: 2500,
            method: 'bankovní převod',
            status: 'storno',
        },

    ];

  return (
    <TableContainer component={Paper} className='table'>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow >
          <TableCell className='tableCell head'>ID</TableCell>
          <TableCell className='tableCell head'>Produkt</TableCell>
          <TableCell className='tableCell head'>Zákazník</TableCell>
          <TableCell className='tableCell head'>Datum</TableCell>
          <TableCell className='tableCell head'>Cena</TableCell>
          <TableCell className='tableCell head'>Platební metoda</TableCell>
          <TableCell className='tableCell head'>Stav</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell className='tableCell'>{row.id}</TableCell>
            <TableCell className='tableCell'>
             <div className="cellWrapper">
                <img src={row.img} alt="" className='image'/>
                {row.product}
            </div>   
            </TableCell>
            <TableCell className='tableCell'>{row.customer}</TableCell>
            <TableCell className='tableCell'>{row.date}</TableCell>
            <TableCell className='tableCell'>{row.amount}</TableCell>
            <TableCell className='tableCell'>{row.method}</TableCell>
            <TableCell className='tableCell'><span className={`status ${row.status}`}>{row.status}</span></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List