import React from 'react'
import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Celkové příjmy</h1>
                <MoreVertOutlinedIcon fontSize='small' />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={'60%'}  strokeWidth={5} />
            </div>
            <p className="title">celkové dnešní prodeje</p>
            <p className="amount">42 852 Kč</p>
            <p className="desc">Zpracování předchozích transakcí, poslední platby nemusí být započítány.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Cíle</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">450 000 Kč</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">za týden</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">150 350 Kč</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">za měsíc</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">350 350 Kč</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured