import React from 'react'
import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Leden', Celkem: 12000},
  { name: 'Únor', Celkem: 21000},
  { name: 'Březen', Celkem: 8000},
  { name: 'Duben', Celkem: 16000},
  { name: 'Květen', Celkem: 17000},
  { name: 'Červen', Celkem: 0},
  { name: 'Červenec', Celkem: 0},
  { name: 'Srpen', Celkem: 0},
  { name: 'Září', Celkem: 0},
  { name: 'Říjen', Celkem: 0},
  { name: 'Listopad', Celkem: 0},
  { name: 'Prosinec', Celkem: 0},
];

const Chart = () => {
  return (
    <div className='chart'>
       <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#b8e994" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="greenyellow" stopOpacity={0}/>
              </linearGradient>
              
        </defs>
          <XAxis dataKey="name" stroke='#0c2461' />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
          <Tooltip />
          <Area type="monotone" dataKey="Celkem" stroke="#b8e994" fillOpacity={1} fill="url(#total)" />
         
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart