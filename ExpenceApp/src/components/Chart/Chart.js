import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';
const Chart = props =>{
return(
    <div className='chart'>
        {props.dataPoints.map((dataPoints)=>(
            <ChartBar 
            value={dataPoints.id}
            maxvalue={null}
            label={dataPoints.label} />
        ))}
    </div>
)
}

export default Chart;