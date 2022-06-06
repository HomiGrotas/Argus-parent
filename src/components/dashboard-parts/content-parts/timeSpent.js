import '../../../css/dashboard/content-parts/timeSpent.css'
import ParentContext from '../../utils/parentHook';

import Chart from 'react-apexcharts'
import React, { useContext } from "react";


const GraphBar = () => 
{
      const [parent, ] = useContext(ParentContext);
      const categories = parent ? parent.children.map(child=> child.nickname) : ["Children not loaded"];
      const hours = parent ? parent.children.map(child=> child.time_spent) : [-1];
      console.log("hours", hours);

      const state = {
        options: {
          title: {
            text: "Usage Hours",
            align: "center",
          },
          chart: {
            id: "basic-bar",
            toolbar: {
              show: false,

            }
          },
          sparkline: {
            enabled: true
          },
          xaxis: {
            categories: categories
          },
          yaxis:{
            tooltip: {
              enabled: false
            }
          }
        },
        series: [
          {
            name: "hours spent",
            data: hours
          }
        ]
      };
    
  
      return (
        <div id="HoursGraph">
              <Chart
                id="chart"
                options={state.options}
                series={state.series}
                type="bar"
                width="400"
                height="100%"
                background-color="green"
                color="black"
              />
        </div>
      );
}
  

const TimeSpent = () => {


    return (
        <div id='timeSpent'>
          <GraphBar/>
        </div>
    );
}

export default TimeSpent;