import React from 'react'
import {Bar} from 'react-chartjs-2';

const BarChart = (props) => {
  const data = {
    labels: props.data.labelsAry || [],
    datasets: [{
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: props.data.yieldAry || []
    }]
  };

  return (
    <div className="col-xs-6">
        <Bar
          data={data}
          width={600}
          height={600}
          options={{
            maintainAspectRatio : false,
            title:{
              display:true,
              text:'Yield return',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    </div>
  )
}

export default BarChart
