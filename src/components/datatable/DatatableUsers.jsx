import React from 'react'
import './datatable.scss'
import { DataGrid, 	csCZ } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../datatablesource'
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';


const DatatableUsers = () => {

    const actionColumn = [
        {
            field: 'actions',
            headerName: 'Akce',
            width: 150,
            renderCell: () => {
                return (
                    <div className='cellAction'>
                        <div className='viewButton' ><NavLink to='/uzivatele/test'><RemoveRedEyeIcon className='icon' /></NavLink></div>
                        <div className='editButton' ><NavLink to='/uzivatele/:id/upravit'><EditIcon className='icon' /></NavLink></div>
                        <div className='deleteButton'><DeleteIcon className='icon'/></div>
                    </div>
                )
            }
        }
    ];
  return (
    <div className='datatable'>
        <DataGrid localeText={csCZ.components.MuiDataGrid.defaultProps.localeText}
            rows={userRows}
            columns={userColumns.concat(actionColumn)} 
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
      />
    </div>
  )
}

export default DatatableUsers