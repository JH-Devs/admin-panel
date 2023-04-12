import React from 'react'
import './dataProducts.scss'
import { DataGrid, 	csCZ } from '@mui/x-data-grid';
import {paymentColumns, paymentRows} from '../../datatablesource'
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';

const DataPayments = () => {
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
    <div className='datatableProduct'>
        <DataGrid localeText={csCZ.components.MuiDataGrid.defaultProps.localeText}
            rows={paymentRows}
            columns={paymentColumns.concat(actionColumn)} 
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
      />
    </div>
  )
}

export default DataPayments

