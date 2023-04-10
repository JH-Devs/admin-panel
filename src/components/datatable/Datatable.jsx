import React from 'react'
import './datatable.scss'
import { DataGrid, 	csCZ } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../datatablesource'
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';


const Datatable = () => {
    const actionColumn = [
        {
            field: 'actions',
            headerName: 'Akce',
            width: 150,
            renderCell: () => {
                return (
                    <div className='cellAction'>
                        <div className='viewButton' ><RemoveRedEyeIcon className='icon' /></div>
                        <div className='editButton' ><EditIcon className='icon' /></div>
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

export default Datatable